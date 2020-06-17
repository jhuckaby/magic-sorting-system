#!/usr/bin/env node

// Magic Sorting System
// (c) 2018 - 2020 Joseph Huckaby, MIT License
// Minecraft Data Pack Function Generator
// Reads item sorting info from config.json and generates all .mcfunction files
// Usage: node generate.js

var fs = require('fs');
var Path = require('path');
var config = require( Path.join( __dirname, 'config.json') );

process.chdir( __dirname );
var func_dir = Path.resolve( "../data/mss/functions" );
var sort_func_file = Path.join( func_dir, "sort.mcfunction" );
var group_names = config.groups.map( function(group) { return group.group_name; } );

// start generating main sort.mcfunction code
var sort_lines = [
	"# Magic Sorting System v2.0 -- Sort Single Item",
	"# Expects input @s from previous execute / run",
	"# " + group_names.length + " Groups: " + group_names.join(', '),
	""
];

// add optional sound/particle effects on teleport
if (config.effects) {
	config.effects.forEach( function(effect) {
		sort_lines.push( "execute at @s unless score #mss_cooldown mss_cooldown matches 1 run " + effect );
	} );
}

// set cooldown flag
sort_lines.push(
	"scoreboard players set #mss_cooldown mss_cooldown 1",
	""
);

console.log("Magic Sorting System -- Code Generator v2.0");
console.log("");

var total_items = 0;
var all_item_ids = {};
var all_group_ids = {};
var all_item_frame_ids = {};

config.groups.forEach( function(group) {
	var group_id = group.group_name.replace(/\W+/g, '');
	var items = group.items;
	var target = group.item_frame;
	
	if (group_id in all_group_ids) {
		console.error("ERROR: Duplicate Group ID: " + group_id);
		return;
	}
	all_group_ids[group_id] = 1;
	
	if (target in all_item_frame_ids) {
		console.error("ERROR: Duplicate Item Frame ID: " + target);
		return;
	}
	all_item_frame_ids[target] = 1;
	
	if (items && items.length && target) {
		var group_func_file = Path.join( func_dir, "sort_" + group_id + ".mcfunction" );
		var fallback_action = group.fallback ? ('function mss:sort_' + group.fallback) : config.final_fallback;
		var name_selector = "";
		if (config.named) {
			name_selector = ',tag:{display:{Name:\'{"text":"' + config.named + '"}\'}}'
		}
		var entity_match_selector = '@e[type=minecraft:item_frame,nbt={Item:{id:"' + target + '"' + name_selector + '}},distance=0..' + config.max_teleport_distance + ']'
		var entity_dest_selector = '@e[limit=1,sort=random,type=minecraft:item_frame,nbt={Item:{id:"' + target + '"' + name_selector + '}},distance=0..' + config.max_teleport_distance + ']'
		
		// create special sort mcfunction for group
		fs.writeFileSync( group_func_file, 
			'execute as @s if entity ' + entity_match_selector + ' run teleport @s ' + entity_dest_selector + "\n" +
			'execute as @s unless entity ' + entity_match_selector + ' run ' + fallback_action + "\n"
		);
		console.log("Wrote file: " + Path.relative(__dirname, group_func_file));
		
		// add group's items to main sort routine
		items.forEach( function(item_id, idx) {
			
			if (item_id in all_item_ids) {
				console.error("ERROR: Duplicate Item ID: " + item_id);
			}
			all_item_ids[item_id] = 1;
			
			sort_lines.push(
				'execute as @s if entity @s[type=item,nbt={Item:{id:"' + item_id + '"}}] run function mss:sort_' + group_id
			);
			total_items++;
		} );
	}
	else console.error("ERROR: Invalid group, skipping: " + group_id);
} );

fs.writeFileSync( sort_func_file, sort_lines.join("\n") + "\n" );

console.log("Wrote file: " + Path.relative(__dirname, sort_func_file));

console.log("");
console.log( total_items + " total items sorted." );
console.log( group_names.length + " sort groups created: " + group_names.join(', ') );

console.log("");
console.log("Complete!");
