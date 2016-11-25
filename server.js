var Promise = require("bluebird");
var express = require('express');
var apicache = require('apicache');
var app = express();
var bodyParser = require('body-parser');

var dblite = require('dblite'),
    db = dblite('./database/mhgen.db'),
    dbmeta = require("./database/db_metadata.js");

var query = Promise.promisify(db.query);

var cache = apicache.middleware;
const onlyStatus200 = req => req.statusCode === 200

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cache('5 minutes'), onlyStatus200);

var router = express.Router();

router.use(function(req, res, next) {

    console.log('New incoming request');
    res.header("Content-Type", "application/json; charset=utf-8");
    next();
});

router.route('/search/:searchTerm')

.get(function(req, res) {
    var searches = [];
    var nameLike =  "%" + req.params.searchTerm + "%";
    var langName = 'name';
    if (req.query.lang && ["es","it","ja","de"].indexOf(req.query.lang) >= 0)
        langName = 'name_'+req.query.lang;
    
    searches.push(query("SELECT _id, " + langName + ", type FROM items WHERE " + langName + " LIKE :name", { name: nameLike  }, { id: Number, name: String, type: String }));
    searches.push(query("SELECT _id, " + langName + " FROM monsters WHERE " + langName + " LIKE :name", { name: nameLike }, { id: Number, name: String }));
    searches.push(query("SELECT _id, " + langName + ", hub, type, rank FROM quests WHERE " + langName + " LIKE :name", { name: nameLike }, { id: Number, name: String, hub: String, type: String, rank: String }));
    
    Promise.all(searches).then(function(results) {
        var response = {
            "items" : results[0],
            "monsters" : results[1],
            "quests" : results[2]
        };
        res.json(response);
    }, function(error) {
        res.error();
    });
});



router.route('/:type/:item_id')

.get(function(req, res) {
    if (Object.keys(dbmeta).indexOf(req.params.type) >= 0) {
        query('SELECT * FROM ' + req.params.type + ' WHERE _id = :id', { id: req.params.item_id  }, dbmeta[req.params.type])
        .then(
            function(rows) {
                res.json(rows[0]);
            });
    } else {
        res.error();
    }
});

app.use('/api', router);

// START THE SERVER
app.listen(process.env.PORT, process.env.IP);
console.log('Server started on port ' + process.env.PORT);
