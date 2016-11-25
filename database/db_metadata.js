module.exports = {
    "armor": {
        "id": Number,
        "slot": String,
        "defense": Number,
        "max_defense": Number,
        "fire_res": Number,
        "thunder_res": Number,
        "dragon_res": Number,
        "water_res": Number,
        "ice_res": Number,
        "gender": Number,
        "hunter_type": Number,
        "num_slots": Number,
        "family": Number
    },
    "arena_quests": {
        "id": Number,
        "name": String,
        "goal": String,
        "location_id": Number,
        "reward": Number,
        "num_participants": Number,
        "time_s": String,
        "time_a": String,
        "time_b": String
    },
    "arena_rewards": {
        "id": Number,
        "arena_id": Number,
        "item_id": Number,
        "percentage": Number,
        "stack_size": Number
    },
    "charms": {
        "id": Number,
        "num_slots": Number,
        "skill_tree_1_id": Number,
        "skill_tree_1_amount": Number,
        "skill_tree_2_id": Number,
        "skill_tree_2_amount": Number
    },
    "combining": {
        "id": Number,
        "created_item_id": Number,
        "item_1_id": Number,
        "item_2_id": Number,
        "amount_made_min": Number,
        "amount_made_max": Number,
        "percentage": Number
    },
    "components": {
        "id": Number,
        "created_item_id": Number,
        "component_item_id": Number,
        "quantity": Number,
        "type": String
    },
    "decorations": {
        "id": Number,
        "num_slots": Number
    },
    "felyne_skills": {
        "id": Number,
        "skill_name": String,
        "description": String
    },
    "food_combos": {
        "id": Number,
        "ingredient1": String,
        "ingredient2": String,
        "cooked": String,
        "bonus": String,
        "skill1_id": Number,
        "skill2_id": Number,
        "skill3_id": Number
    },
    "gathering": {
        "id": Number,
        "item_id": Number,
        "location_id": Number,
        "area": String,
        "site": String,
        "rank": String,
        "fixed": Number,
        "rare": Number,
        "group_num": Number,
        "quantity": Number,
        "percentage": Number
    },
    "hunting_rewards": {
        "id": Number,
        "item_id": Number,
        "condition": String,
        "monster_id": Number,
        "rank": String,
        "stack_size": Number,
        "percentage": Number
    },
    "horn_melodies": {
        "id": Number,
        "notes": String,
        "song": String,
        "name": String,
        "name_de": String,
        "name_fr": String,
        "name_es": String,
        "name_it": String,
        "name_ja": String,
        "effect1": String,
        "effect1_de": String,
        "effect1_fr": String,
        "effect1_es": String,
        "effect1_it": String,
        "effect1_ja": String,
        "effect2": String,
        "effect2_de": String,
        "effect2_fr": String,
        "effect2_es": String,
        "effect2_it": String,
        "effect2_ja": String,
        "duration": String,
        "extension": String
    },
    "ingredients": {
        "id": Number,
        "ingredient": String,
        "name": String,
        "level": Number,
        "quest_id": Number
    },
    "items": {
        "id": Number,
        "name": String,
        "name_de": String,
        "name_fr": String,
        "name_es": String,
        "name_it": String,
        "name_ja": String,
        "type": String,
        "sub_type": String,
        "rarity": Number,
        "carry_capacity": Number,
        "buy": Number,
        "sell": Number,
        "description": String,
        "description_de": String,
        "description_fr": String,
        "description_es": String,
        "description_it": String,
        "description_ja": String,
        "icon_name": String,
        "armor_dupe_name_fix": String
    },
    "item_to_skill_tree": {
        "id": Number,
        "item_id": Number,
        "skill_tree_id": Number,
        "point_value": Number
    },
    "locations": {
        "id": Number,
        "name": String,
        "name_de": String,
        "name_fr": String,
        "name_es": String,
        "name_it": String,
        "name_ja": String,
        "map": String
    },
    "item_to_material": {
        "id": Number,
        "item_id": Number,
        "material_item_id": Number,
        "amount": Number
    },
    "monsters": {
        "id": Number,
        "class": String,
        "name": String,
        "name_de": String,
        "name_fr": String,
        "name_es": String,
        "name_it": String,
        "name_ja": String,
        "base_hp": Number,
        "signature_move": String,
        "trait": String,
        "icon_name": String,
        "sort_name": String
    },
    "monster_ailment": {
        "id": Number,
        "monster_id": Number,
        "ailment": String
    },
    "monster_damage": {
        "id": Number,
        "monster_id": Number,
        "body_part": String,
        "cut": Number,
        "impact": Number,
        "shot": Number,
        "fire": Number,
        "water": Number,
        "ice": Number,
        "thunder": Number,
        "dragon": Number,
        "ko": Number
    },
    "monster_to_arena": {
        "id": Number,
        "monster_id": Number,
        "arena_id": Number
    },
    "monster_to_quest": {
        "id": Number,
        "monster_id": Number,
        "quest_id": Number,
        "unstable": String
    },
    "monster_weakness": {
        "id": Number,
        "monster_id": Number,
        "state": String,
        "fire": Number,
        "water": Number,
        "thunder": Number,
        "ice": Number,
        "dragon": Number,
        "poison": Number,
        "paralysis": Number,
        "sleep": Number,
        "pitfall_trap": Number,
        "shock_trap": Number,
        "flash_bomb": Number,
        "sonic_bomb": Number,
        "dung_bomb": Number,
        "meat": Number
    },
    "quests": {
        "id": Number,
        "name": String,
        "name_de": String,
        "name_fr": String,
        "name_es": String,
        "name_it": String,
        "name_ja": String,
        "goal": String,
        "goal_de": String,
        "goal_fr": String,
        "goal_es": String,
        "goal_it": String,
        "goal_ja": String,
        "hub": String,
        "type": String,
        "rank": String,
        "goal_type": Number,
        "hunter_type": Number,
        "stars": Number,
        "location_id": Number,
        "time_limit": Number,
        "fee": Number,
        "reward": Number,
        "hrp": Number,
        "sub_goal": String,
        "sub_goal_de": String,
        "sub_goal_fr": String,
        "sub_goal_es": String,
        "sub_goal_it": String,
        "sub_goal_ja": String,
        "flavor": String,
        "flavor_de": String,
        "flavor_fr": String,
        "flavor_es": String,
        "flavor_it": String,
        "flavor_ja": String,
        "sub_reward": Number,
        "sub_hrp": Number
    },
    "quest_rewards": {
        "id": Number,
        "quest_id": Number,
        "item_id": Number,
        "reward_slot": String,
        "percentage": Number,
        "stack_size": Number
    },
    "skills": {
        "id": Number,
        "skill_tree_id": Number,
        "required_skill_tree_points": Number,
        "name": String,
        "name_de": String,
        "name_fr": String,
        "name_es": String,
        "name_it": String,
        "name_ja": String,
        "description": String,
        "description_de": String,
        "description_fr": String,
        "description_es": String,
        "description_it": String,
        "description_ja": String
    },
    "skill_trees": {
        "id": Number,
        "name": String,
        "name_de": String,
        "name_fr": String,
        "name_es": String,
        "name_it": String,
        "name_ja": String
    },
    "trading": {
        "id": Number,
        "location_id": Number,
        "offer_item_id": Number,
        "receive_item_id": Number,
        "percentage": Number
    },
    "weapons": {
        "id": Number,
        "parent_id": Number,
        "wtype": String,
        "creation_cost": Number,
        "upgrade_cost": Number,
        "attack": Number,
        "max_attack": Number,
        "element": String,
        "element_attack": Number,
        "element_2": String,
        "element_2_attack": Number,
        "awaken": String,
        "awaken_attack": Number,
        "defense": Number,
        "sharpness": String,
        "affinity": String,
        "horn_notes": String,
        "shelling_type": String,
        "phial": String,
        "charges": String,
        "coatings": String,
        "recoil": String,
        "reload_speed": String,
        "rapid_fire": String,
        "deviation": String,
        "ammo": String,
        "special_ammo": String,
        "num_slots": Number,
        "tree_depth": Number,
        "final": Number
    },
    "palico_weapons": {
        "id": Number,
        "creation_cost": Number,
        "attack_melee": Number,
        "attack_ranged": Number,
        "element": String,
        "element_melee": Number,
        "element_ranged": Number,
        "defense": Number,
        "sharpness": Number,
        "affinity_melee": Number,
        "affinity_ranged": Number,
        "blunt": Number,
        "balance": Number
    },
    "quest_prereqs": {
        "id": Number,
        "quest_id": Number,
        "prereq_id": Number
    },
    "monster_habitat": {
        "id": Number,
        "monster_id": Number,
        "location_id": Number,
        "start_area": Number,
        "move_area": String,
        "rest_area": Number
    },
    "monster_status": {
        "id": Number,
        "monster_id": Number,
        "status": String,
        "initial": Number,
        "increase": Number,
        "max": Number,
        "duration": Number,
        "damage": Number
    },
    "veggie_elder": {
        "id": Number,
        "location_id": Number,
        "offer_item_id": Number,
        "receive_item_id": Number,
        "quantity": Number
    }
}
