# Overview

![Main Screenshot](https://pixlcore.com/software/mss/screenshots/v2/main-v2.png)

The **Magic Sorting System** is a free [Data Pack](https://minecraft.gamepedia.com/Data_pack) available for [Minecraft](https://minecraft.net/) v1.13, v1.14, v1.15 and v1.16 (Java edition).  It provides an easy way to craft an automatic, extensible item sorting system, which does not require redstone, nor console commands, nor command blocks.  Items are teleported to matching item frames, where they can be routed via hoppers into chests or furnaces (so it still requires considerable resources and building).  The whole system can be entirely built in survival mode, and supports both single and multiplayer (local or server install).

The sorting system works by providing a special magic drop off area, where you can dump any number of unsorted items (for e.g. when you come back from a mining trip), and they will be automatically sorted into [39 different categories](#groups), each with its own item frame.  Note that you do not need all 39 categories to start out -- you can progressively build your storage system over time, and have it look however you want.  You can also provide a "misc" (catch-all) category, which catches all items which don't have their own group built.

Items are teleported directly to their matching [item frames](https://minecraft.gamepedia.com/Item_Frame) for the category.  The idea is that you can place a [hopper](https://minecraft.gamepedia.com/Hopper) directly under each item frame, which then routes the items into a connected chest (or multiple chests), or furnaces for auto-smelting.  Item routing and storing is left up to the player, which can be simple or quite complex.

## Why

It is already possible to build a complete item sorting and storage system using built-in vanilla Minecraft features.  I've seen some [incredible systems](https://www.youtube.com/watch?v=wsNV9Mo00Gw), and my hat is off to those amazing builders.  However in practice, actually doing it is very difficult and tedious in my experience.  It requires a large amount of hoppers and complex redstone contraptions for filtering.  For example, to filter and store every item in the game, it would take at least 2 hoppers per unique item, or 1,550 hoppers total (3,875 iron ingots).  Doing this in survival mode would take a very long time, and use up an enormous amount of space just for the machinery.

The magic sorting system is designed to make all this much easier to build.  It requires only 1 hopper per category (39 categories total for sorting all items in the game), and handles all the item filtering and routing "magically" (i.e. by automatic item teleportation).  It is server-friendly (lag-free), and it keeps survival gameplay balanced by requiring some expensive resources to start out.

Players can still build out custom storage systems using hoppers, chests, furnaces and more.  They can be as simple or complex as they want.  The magic sorting system *only* teleports items to special item frames.  The rest is up to the player.

## Features at a Glance

- Build and setup everything in pure survival mode
- Design your storage system to look however you like
- Progressively add new categories over time
- Sorts 878 unique items into 39 categories
- Unsorted items automatically go into a "misc" group
- Can have multiple sorting systems in same world (128+ blocks apart)
- Items are sorted to nearest matching item frames
- Very server-friendly (lag-free design)
- No redstone, no command blocks, and no console commands required
- Costs 1 gold block and 1 lapis block for controller
- Each sort group costs at least 1 item frame, 1 hopper and 1 chest
- Can extend sort groups into infinite chests with chained hoppers
- Can dump entire stacks quickly using `Ctrl-Q` keybind (Windows only)
- Items are sorted the moment they land on the pickup area
- Many categories have fallback groups (i.e. sandstone falls back to sand, etc.)
- Automatically distributes items across multiple item frames in same group
- Support for automatic smelting, and automatic food cooking
- Create your own custom sort groups by modifying config file

## Upgrading from v1.0

Are you upgrading from Magic Sorting System v1.0?  Version 2.0 has been completely redesigned, and no longer uses a chest (well, it still can if you want one), and there is no need to "activate" a controller by standing on it.  Please see the [Creating the Controller](#creating-the-controller) section for updated instructions.  If you still want to use a drop chest, see the [Advanced](#advanced) section for instructions.

## Table of Contents

<!-- toc -->
- [Installation](#installation)
	* [Single Player](#single-player)
	* [Multiplayer](#multiplayer)
- [Usage](#usage)
	* [Building](#building)
	* [Creating the Controller](#creating-the-controller)
	* [Creating an Item Receiver](#creating-an-item-receiver)
		+ [Multiple Chests](#multiple-chests)
		+ [Multiple Item Frames](#multiple-item-frames)
		+ [Automatic Smelting or Cooking](#automatic-smelting-or-cooking)
		+ [Automatic Coal Fuel](#automatic-coal-fuel)
		+ [Fallback Groups](#fallback-groups)
		+ [Misc Catch-All Group](#misc-catch-all-group)
	* [Controller for Farms](#controller-for-farms)
	* [Advanced](#advanced)
		+ [Double Speed Auto-Drop Chest](#double-speed-auto-drop-chest)
	* [Groups](#groups)
		+ [Dirt](#dirt)
			- [Gravel](#gravel)
		+ [Sand](#sand)
			- [Sandstone](#sandstone)
		+ [Wood](#wood)
			- [Woodwork](#woodwork)
				* [Office](#office)
		+ [Stone](#stone)
			- [Stonework](#stonework)
		+ [Coal](#coal)
		+ [Tools](#tools)
			- [Storage](#storage)
			- [Armor](#armor)
			- [Rails](#rails)
		+ [Plants](#plants)
			- [Flowers](#flowers)
		+ [Food](#food)
			- [Raw](#raw)
		+ [Mobs](#mobs)
		+ [Precious](#precious)
			- [Lapis](#lapis)
		+ [Magic](#magic)
			- [Potions](#potions)
			- [Books](#books)
		+ [Wool](#wool)
		+ [Concrete](#concrete)
		+ [Terracotta](#terracotta)
		+ [Glass](#glass)
		+ [Ice](#ice)
		+ [Ocean](#ocean)
			- [Coral](#coral)
			- [Prismarine](#prismarine)
		+ [Ink](#ink)
		+ [Nether](#nether)
		+ [Ores](#ores)
		+ [Redstone](#redstone)
		+ [End](#end)
		+ [Music](#music)
		+ [Misc](#misc)
- [FAQ](#faq)
- [Development](#development)
	* [Maximum Teleport Distance](#maximum-teleport-distance)
	* [Teleport Effects](#teleport-effects)
	* [Compiling](#compiling)
- [References](#references)
- [License](#license)

# Installation

To install the data pack, download the latest ZIP file from the [releases page](https://github.com/jhuckaby/magic-sorting-system/releases), unzip the file, and copy the `magic-sorting-system-#.#.#` folder into your `datapacks` folder for your Minecraft world.  Here are specific instructions for single and multiplayer:

## Single Player

- Open Minecraft.
- Select your world, click on "**Edit**", then "**Open world folder**".
- Open the folder named `datapacks`, and put the data pack folder file into it.
- Play the world.

## Multiplayer

- FTP to your server.
- Open your server folder, then open the folder named `world`.
- Upload the data pack folder into a folder named `datapacks`.
- Restart the server.

# Usage

In a nutshell, the magic sorting system is an item teleporter.  It will teleport unsorted items dropped onto a special pickup area, to their respective item frames nearby, and from there they simply fall into hoppers and into your storage chests.  So you need a special magic drop-off block, and one or more item groups containing item frames, hoppers and chests.  The item frames require special items displayed which identify the groups.  See [Groups](#groups) below to learn which groups require which framed items.

## Building

To build the magic sorting system, assuming survival mode, you will have to play your way to gold level first.  You will need some gold, lapis, wood, and plenty of iron to build a storage system.  At the bare minimum to get things started, you will need the following raw materials:

| Item | Name | Amount | Purpose |
|------|------|--------|---------|
| <img src="https://pixlcore.com/software/mss/images/gold_ingot.png" width="32" height="32"> | [Gold Ingot](https://minecraft.gamepedia.com/Gold_Ingot) | 9 | To build the lower base controller block. |
| <img src="https://pixlcore.com/software/mss/images/lapis_lazuli.png" width="32" height="32"> | [Lapis Lazuli](https://minecraft.gamepedia.com/Lapis_Lazuli) | 9 | To build the upper base controller block. |
| <img src="https://pixlcore.com/software/mss/images/iron_ingot.png" width="32" height="32"> | [Iron Ingot](https://minecraft.gamepedia.com/Iron_Ingot) | 5 | To build the first [hopper](https://minecraft.gamepedia.com/Hopper). |
| <img src="https://pixlcore.com/software/mss/images/oak_log.png" width="32" height="32"> | [Wood Log](https://minecraft.gamepedia.com/Log) | 4 | To build the first [chests](https://minecraft.gamepedia.com/Chest) and [item frame](https://minecraft.gamepedia.com/Item_Frame). |
| <img src="https://pixlcore.com/software/mss/images/leather.png" width="32" height="32"> | [Leather](https://minecraft.gamepedia.com/Leather) | 1 | To build the first item frame. |

As you add more groups to your sorting system, you will need additional chests, item frames (plus one special target item to put in the item frame), and a hopper.  For larger groups, multiple chests and chained hoppers are recommended (instructions below).

## Creating the Controller

The first thing you will need is a storage "controller" to deposit your unsorted items onto.  This is created by placing down a [gold block](https://minecraft.gamepedia.com/Block_of_Gold), with a [lapis block](https://minecraft.gamepedia.com/Lapis_Lazuli_Block) on top of it.

Typically the two blocks are submerged underground, so you could start with a 2-block-deep hole like this:

![Controller Build 1](https://pixlcore.com/software/mss/screenshots/v2/step-1.png)

Place the gold block on the bottom:

![Controller Build 2](https://pixlcore.com/software/mss/screenshots/v2/step-2.png)

And then place the lapis block on top of that:

![Controller Build 3](https://pixlcore.com/software/mss/screenshots/v2/step-3.png)

Fill in the rest of the hole:

![Controller Build 4](https://pixlcore.com/software/mss/screenshots/v2/step-4.png)

And you're done:

![Controller Build 5](https://pixlcore.com/software/mss/screenshots/v2/step-5.png)

If you have more lapis and gold blocks, a 3x3 grid is recommended, so it's easier to drop items onto:

![Controller Build 6](https://pixlcore.com/software/mss/screenshots/v2/step-6.png)

Now the controller is ready to go!  All you have to do now is drop your items to be sorted onto any lapis block, and they will be teleported to their respective item frames.  For Windows PC users, you can drop entire stacks at a time from your inventory using the `Ctrl-Q` keybind.  For Mac users, you can press `Q` to drop single items, or click and drag each stack out of your inventory to drop it.

For a more advanced auto-controller, see the [Advanced](#advanced) section below.  It requires a tiny bit of redstone, but it allows you to design a dropoff chest that automatically sorts all items placed into it.

## Creating an Item Receiver

An "item receiver" is just an [item frame](https://minecraft.gamepedia.com/Item_Frame) that contains a special item which represents one of the [39 groups](#groups).  Then, all items to be sorted within that group will teleport to the item frame.  What happens then?  Well, it's actually entirely up to you!  But the most common thing is to simply place a [hopper](https://minecraft.gamepedia.com/Hopper) underneath the item frame, and route that to a nearby chest.  Example:

![Single Chest Receiver](https://pixlcore.com/software/mss/screenshots/single-chest.png)

In this example, the item frame contains a [block of cobblestone](https://minecraft.gamepedia.com/Cobblestone), which is the item representing the [Stone](#stone) group, so all stone items will be routed here.  They'll teleport to the item frame, drop into hopper and be delivered to the chest.

**Tip:** Make sure you shift-click on the chest when placing the hopper, so it directs the output accordingly.  By default hoppers drop straight down.

### Multiple Chests

To handle item overflow, the best way is to simply build downward by adding more chests and hoppers directly beneath.  The hopper system in Minecraft seems to handle distribution by filling the topmost and bottommost chests evenly, working inwards as things fill up.  Example:

![Double Chest Receiver](https://pixlcore.com/software/mss/screenshots/double-chest.png)

There are, of course, a million different ways to solve this problem -- this is only one simple example.  But the idea with the magic sorting system is that it leaves things up to you!  It only teleports items to appropriate frames, but *you* can decide how to handle routing and storage.

### Multiple Item Frames

For high traffic groups such as [Stone](#stone), where a player might drop off a large number of item stacks at once, it is recommended that you use multiple item frames.  This is because a single hopper can only handle up to 5 stacks of items at one time.  If you drop off more all at once, your hopper might overflow and dump some items onto the floor before it can route them.  To handle this situation better, consider the following setup:

![Double Chest and Item Frame](https://pixlcore.com/software/mss/screenshots/double-chest-double-item-frame.png)

Here we have two item frames with identical items inside them, pointing to hoppers that route to the same chest.  This works because the magic sorting system will pick *random item frame targets* for teleporting each item, if they both display the correct group target item, effectively balancing the drop-off load between the matching frames.  So in this case the group could handle up to 10 stacks of items dropped off at once before it overflows.

There are other ways to handle item drop-off overflow, including building walls all around your item frames, so the items get "trapped" after teleporting, and just sit and wait until the hopper can service them.  However, this means your item frame would have to be hidden in a wall, or in the ceiling, and thus you lose the dual-purpose nature of having the item frame be both a visual label, and a teleportation target.

Also see the [Advanced](#advanced) section for another way to solve item overflow, which is to build an automatic drop chest.

### Automatic Smelting or Cooking

You can route your items into things other than chests -- you can also setup an easy auto-smelting system, for [ores](#ores) and/or [raw food](#raw).  Simply add an additional hopper under the item chest, and route it to a furnace on its top side:

![Ore Chest and Furnace](https://pixlcore.com/software/mss/screenshots/single-ore-single-furnace.png)

As you can see in the above example, you can also route the *output* of the furnace to another chest out the bottom, to hold your completed ingots or cooked food.

### Automatic Coal Fuel

Furnaces need fuel as well.  So taking this a step further, you can route the [Coal](#coal) item group into the *sides* of the furnace, to automatically supply it with fuel.  Here is a more complete example, with double item frames for handling many items at once:

![Full Auto-Smelter Setup](https://pixlcore.com/software/mss/screenshots/double-everything.png)

Here we have [Ores](#ores) routed into a double-chest at the top, which is then routed into two furnaces, which are auto supplied with fuel from the [Coal](#coal) group into the sides.  Finally, the furnaces deposit smelted ingots into a double chest at the bottom, which is also setup as the [Precious](#precious) group (with the [gold ingots](https://minecraft.gamepedia.com/Gold_Ingot) displayed in the bottom item frames).

So let's say you come home from a mining trip and have some raw ores, some coal, and some ingots you found in a treasure chest.  Simply drop off *all* the items at once, and the ores will get smelted, the coal fuel will power the furnaces, and all the ingots (including the ones you brought with you, *and* the smelted ones from the ore), will all end up in the [Precious](#precious) chest.

Remember that the magic sorting system will randomly pick item frames if multiple are available for a group.  So you can *also* have a [Coal](#coal) group with additional item frames routed to plain chests, and it'll balance between storing the coal in your chests, and fueling your auto-smelting system.

### Fallback Groups

Several of the item groups have sub-groups, which are optional and fall back to the main group if a more specific item frame isn't found.  For example, consider the following simple item receiver for the [Ocean](#ocean) group:

![Ocean Group Simple](https://pixlcore.com/software/mss/screenshots/ocean-group-1.png)

By default, this item frame with the [kelp](https://minecraft.gamepedia.com/Kelp) leaf on display would receive *all* items that come from the ocean.  However, the sorting system defines two sub-groups under ocean, [Prismarine](#prismarine) and [Coral](#coral).  These optional sub-groups can further sort the ocean's many items into 3 categories, if you want:

![Ocean Group Complex](https://pixlcore.com/software/mss/screenshots/ocean-group-2.png)

So in this case, all prismarine related items would teleport to the item frame with the [prismarine](https://minecraft.gamepedia.com/Prismarine) block, all coral items would teleport to the item frame with the [bubble coral](https://minecraft.gamepedia.com/Coral_Block) block, and all the *other* non-prismarine non-coral ocean items would teleport to the item frame with the [Kelp](https://minecraft.gamepedia.com/Kelp) leaf.  The magic sorting system automatically detects which item frames are on display, and sorts accordingly.

See the [Groups](#groups) section below for a list of all 39 groups and to see how the sub-group hierarchy works.

### Misc Catch-All Group

All item groups ultimately fall back to a special [Misc](#misc) group, which is the universal "catch-all".  That is, if no suitable item frame can be found for an item, it will teleport to the miscellaneous group, which uses the [carrot on a stick](https://minecraft.gamepedia.com/Carrot_on_a_Stick) display item:

![Miscellaneous Group](https://pixlcore.com/software/mss/screenshots/misc-group.png)

This is a great way to start out your storage system, so you don't have to build everything at once.  Just build the main groups you need (dirt, sand, stone, ores, tools, etc.), and everything else will route to the misc group, until you have the time and resources to build all the specific groups.

Note that if the misc group item frame itself cannot be found, items will teleport back to the player.

## Controller for Farms

You can have as many controllers as you want in a Minecraft world.  All you need is another [lapis block](https://minecraft.gamepedia.com/Lapis_Lazuli_Block) on top of a [gold block](https://minecraft.gamepedia.com/Block_of_Gold).  One neat trick is to use one of these for a water-harvested plant farms or a nearby [dungeon](https://minecraft.gamepedia.com/Dungeon).  Any loose items detected on top of the lapis block will be sorted and teleported just like the drop-off chest.  For example, consider a simple mob dungeon like this:

![Mob Spawner Setup](https://pixlcore.com/software/mss/screenshots/mob-spawner.png)

That's a lapis block in the bottom right corner there, just outside of the water range, with a gold block under it.  If you were to setup a mob kill system here, either by trapping the mobs and killing them for XP, or devising a long fall for them, their item drops would fall onto the lapis and be instantly teleported into the sorting system.

This same kind of thing can work for an automated food farm as well, assuming you have a water-flush-harvest system in place.  If all the ripe food gets flushed into a canal and routed to a single block, have it be a lapis block, with gold underneath, and you have an automated harvest sorting system!

## Advanced

One of the features of the Magic Sorting System is that no redstone is required.  That is true, however with a simple redstone clock you can build a drop-off chest that automatically sorts all items placed inside it.  It is much easier to dump your entire inventory into a chest versus tossing it out onto the floor.  Also, this has another nice side effect in that it "throttles" item sorting so your hoppers do not overload.  Here is how to build it:

![Auto-Drop Chest 1](https://pixlcore.com/software/mss/screenshots/v2/auto-chest-redstone.png)

This requires a one [chest](https://minecraft.gamepedia.com/Chest), one [hopper](https://minecraft.gamepedia.com/Hopper), one [dropper](https://minecraft.gamepedia.com/Dropper) facing downward, one [comparator](https://minecraft.gamepedia.com/Redstone_Comparator), one [repeater](https://minecraft.gamepedia.com/Redstone_Repeater) and 5 [redstone dust](https://minecraft.gamepedia.com/Redstone_Dust).  The redstone circuit is copied verbatim from [this video tutorial](https://www.youtube.com/watch?v=-oUSS5jTHps), so please watch that to see how to orient the blocks.  In particular, the comparator must be facing *away* from the dropper.  Here is a view from above:

![Auto-Drop Chest 2](https://pixlcore.com/software/mss/screenshots/v2/auto-chest-above.png)

The key here is to face the dropper downward, leave one block of empty space below it, and then place your [lapis block](https://minecraft.gamepedia.com/Lapis_Lazuli_Block) on top of a [gold block](https://minecraft.gamepedia.com/Block_of_Gold) underneath all that.  Here is a cross section view:

![Auto-Drop Chest 3](https://pixlcore.com/software/mss/screenshots/v2/auto-chest-cross-section.png)

Then, simply place items or entire stacks into the chest and they'll automatically start sorting themselves.  This redstone clock only ticks if there are items in the chest, so it makes no noise unless items are dropped into it.

**Tip:** If the dropper ticking noise bothers you, consider using a resource pack.  Check out [Vanilla Tweaks](https://vanillatweaks.net/picker/resource-packs/), click to expand the "**Peace and Quiet**" group and then download the "**Quieter Dispensers and Droppers**" pack.

**Tip:** If you use a [trapped chest](https://minecraft.gamepedia.com/Trapped_Chest) instead of a normal one, the system will not start sorting items until you close the chest lid.  This is a nice safeguard in case you shift-click on the wrong item in your inventory.

### Double Speed Auto-Drop Chest

If the auto-drop chest is too slow for your taste, you can build a much faster one with some more materials.  For this you will need two [chests](https://minecraft.gamepedia.com/Chest), two [hoppers](https://minecraft.gamepedia.com/Hopper), two [droppers](https://minecraft.gamepedia.com/Dropper) facing downward, two [comparators](https://minecraft.gamepedia.com/Redstone_Comparator), two [repeaters](https://minecraft.gamepedia.com/Redstone_Repeater) and 10 [redstone dust](https://minecraft.gamepedia.com/Redstone_Dust).  The double-speed redstone circuit is copied verbatim from [this video tutorial](https://www.youtube.com/watch?v=w5tiFl74cSI), so please watch that to see how to orient the blocks.  Here is how it should look:

![Double Auto-Drop Chest 1](https://pixlcore.com/software/mss/screenshots/v2/double-auto-chest.png)

Note that each comparator faces away from the droppers, but the redstone is mirrored on each side.  The [video](https://www.youtube.com/watch?v=w5tiFl74cSI) does a much better job of explaining this, but here is a view from above:

![Double Auto-Drop Chest 2](https://pixlcore.com/software/mss/screenshots/v2/double-auto-chest-above.png)

Just like the single drop chest, you should face both droppers downward, leave one block of empty space below them, and then place your [lapis blocks](https://minecraft.gamepedia.com/Lapis_Lazuli_Block) on top of [gold blocks](https://minecraft.gamepedia.com/Block_of_Gold) underneath all that.  Here is a cross section view:

![Double Auto-Drop Chest 3](https://pixlcore.com/software/mss/screenshots/v2/double-auto-chest-cross-section.png)

Feel free to bury the entire thing (leave some air for the redstone to breathe), and just have the drop chest sticking up above ground.

## Groups

Here is a list of all 39 groups in the magic sorting system, how some fallback to others, and all the items they contain.

### Dirt

| Group ID | Items | Fallback Group | Item Frame | Image |
|----------|-------|----------------|------------|-------|
| `dirt` | 9 | Misc | `minecraft:dirt` | <img src="https://pixlcore.com/software/mss/images/dirt.png?v=3" width="32" height="32"> |

The Dirt group contains all forms of dirt blocks, including regular, coarse, farmland, grass blocks (silk touched), grass path, mycelium and podzol.

<details><summary>Click to Show Dirt Items</summary>
<p>

| Item ID | Image |
|---------|-------|
| `minecraft:coarse_dirt` | <img src="https://pixlcore.com/software/mss/images/coarse_dirt.png?v=3" width="32" height="32"> |
| `minecraft:dirt` | <img src="https://pixlcore.com/software/mss/images/dirt.png?v=3" width="32" height="32"> |
| `minecraft:farmland` | <img src="https://pixlcore.com/software/mss/images/farmland.png?v=3" width="32" height="32"> |
| `minecraft:grass_block` | <img src="https://pixlcore.com/software/mss/images/grass_block.png?v=3" width="32" height="32"> |
| `minecraft:grass_path` | <img src="https://pixlcore.com/software/mss/images/grass_path.png?v=3" width="32" height="32"> |
| `minecraft:mycelium` | <img src="https://pixlcore.com/software/mss/images/mycelium.png?v=3" width="32" height="32"> |
| `minecraft:podzol` | <img src="https://pixlcore.com/software/mss/images/podzol.png?v=3" width="32" height="32"> |
| `minecraft:crimson_nylium` | <img src="https://pixlcore.com/software/mss/images/crimson_nylium.png?v=3" width="32" height="32"> |
| `minecraft:warped_nylium` | <img src="https://pixlcore.com/software/mss/images/warped_nylium.png?v=3" width="32" height="32"> |

</p>
</details>

#### Gravel

| Group ID | Items | Fallback Group | Item Frame | Image |
|----------|-------|----------------|------------|-------|
| `gravel` | 1 | Dirt | `minecraft:gravel` | <img src="https://pixlcore.com/software/mss/images/gravel.png?v=3" width="32" height="32"> |

The Gravel group contains only gravel blocks.  It is deliberately sorted into its own group, but this is optional.  If you omit the gravel target item frame, it will fallback to the Dirt group.

<details><summary>Click to Show Gravel Items</summary>
<p>

| Item ID | Image |
|---------|-------|
| `minecraft:gravel` | <img src="https://pixlcore.com/software/mss/images/gravel.png?v=3" width="32" height="32"> |

</p>
</details>

### Sand

| Group ID | Items | Fallback Group | Item Frame | Image |
|----------|-------|----------------|------------|-------|
| `sand` | 1 | Misc | `minecraft:sand` | <img src="https://pixlcore.com/software/mss/images/sand.png?v=3" width="32" height="32"> |

The Sand group contains only sand blocks.  However, see [Sandstone](#sandstone) below.  If you omit the sandstone group, all sandstone blocks fallback to the Sand group.

<details><summary>Click to Show Sand Items</summary>
<p>

| Item ID | Image |
|---------|-------|
| `minecraft:sand` | <img src="https://pixlcore.com/software/mss/images/sand.png?v=3" width="32" height="32"> |

</p>
</details>

#### Sandstone

| Group ID | Items | Fallback Group | Item Frame | Image |
|----------|-------|----------------|------------|-------|
| `sandstone` | 21 | Sand | `minecraft:sandstone` | <img src="https://pixlcore.com/software/mss/images/sandstone.png?v=3" width="32" height="32"> |

The Sandstone group contains all the various forms of sandstone, including regular, smooth, chiseled, cut, red, and slabs and stairs.  If you would prefer sandstone to get sorted with sand, simply omit the sandstone item frame.  All sandstone falls back to sand.

<details><summary>Click to Show Sandstone Items</summary>
<p>

| Item ID | Image |
|---------|-------|
| `minecraft:chiseled_red_sandstone` | <img src="https://pixlcore.com/software/mss/images/chiseled_red_sandstone.png?v=3" width="32" height="32"> |
| `minecraft:chiseled_sandstone` | <img src="https://pixlcore.com/software/mss/images/chiseled_sandstone.png?v=3" width="32" height="32"> |
| `minecraft:cut_red_sandstone` | <img src="https://pixlcore.com/software/mss/images/cut_red_sandstone.png?v=3" width="32" height="32"> |
| `minecraft:cut_sandstone` | <img src="https://pixlcore.com/software/mss/images/cut_sandstone.png?v=3" width="32" height="32"> |
| `minecraft:red_sand` | <img src="https://pixlcore.com/software/mss/images/red_sand.png?v=3" width="32" height="32"> |
| `minecraft:red_sandstone` | <img src="https://pixlcore.com/software/mss/images/red_sandstone.png?v=3" width="32" height="32"> |
| `minecraft:red_sandstone_slab` | <img src="https://pixlcore.com/software/mss/images/red_sandstone_slab.png?v=3" width="32" height="32"> |
| `minecraft:red_sandstone_stairs` | <img src="https://pixlcore.com/software/mss/images/red_sandstone_stairs.png?v=3" width="32" height="32"> |
| `minecraft:sandstone` | <img src="https://pixlcore.com/software/mss/images/sandstone.png?v=3" width="32" height="32"> |
| `minecraft:sandstone_slab` | <img src="https://pixlcore.com/software/mss/images/sandstone_slab.png?v=3" width="32" height="32"> |
| `minecraft:sandstone_stairs` | <img src="https://pixlcore.com/software/mss/images/sandstone_stairs.png?v=3" width="32" height="32"> |
| `minecraft:smooth_red_sandstone` | <img src="https://pixlcore.com/software/mss/images/smooth_red_sandstone.png?v=3" width="32" height="32"> |
| `minecraft:smooth_sandstone` | <img src="https://pixlcore.com/software/mss/images/smooth_sandstone.png?v=3" width="32" height="32"> |
| `minecraft:cut_red_sandstone_slab` | <img src="https://pixlcore.com/software/mss/images/cut_red_sandstone_slab.png?v=3" width="32" height="32"> |
| `minecraft:cut_sandstone_slab` | <img src="https://pixlcore.com/software/mss/images/cut_sandstone_slab.png?v=3" width="32" height="32"> |
| `minecraft:red_sandstone_wall` | <img src="https://pixlcore.com/software/mss/images/red_sandstone_wall.png?v=3" width="32" height="32"> |
| `minecraft:sandstone_wall` | <img src="https://pixlcore.com/software/mss/images/sandstone_wall.png?v=3" width="32" height="32"> |
| `minecraft:smooth_red_sandstone_slab` | <img src="https://pixlcore.com/software/mss/images/smooth_red_sandstone_slab.png?v=3" width="32" height="32"> |
| `minecraft:smooth_red_sandstone_stairs` | <img src="https://pixlcore.com/software/mss/images/smooth_red_sandstone_stairs.png?v=3" width="32" height="32"> |
| `minecraft:smooth_sandstone_slab` | <img src="https://pixlcore.com/software/mss/images/smooth_sandstone_slab.png?v=3" width="32" height="32"> |
| `minecraft:smooth_sandstone_stairs` | <img src="https://pixlcore.com/software/mss/images/smooth_sandstone_stairs.png?v=3" width="32" height="32"> |

</p>
</details>

### Wood

| Group ID | Items | Fallback Group | Item Frame | Image |
|----------|-------|----------------|------------|-------|
| `wood` | 41 | Misc | `minecraft:oak_log` | <img src="https://pixlcore.com/software/mss/images/oak_log.png?v=3" width="32" height="32"> |

The Wood group contains primarily raw wood blocks, but also includes stripped logs, and simple planks and sticks.  All other wood products are sorted into the [Woodwork](#woodwork) group.

<details><summary>Click to Show Wood Items</summary>
<p>

| Item ID | Image |
|---------|-------|
| `minecraft:acacia_log` | <img src="https://pixlcore.com/software/mss/images/acacia_log.png?v=3" width="32" height="32"> |
| `minecraft:acacia_planks` | <img src="https://pixlcore.com/software/mss/images/acacia_planks.png?v=3" width="32" height="32"> |
| `minecraft:acacia_wood` | <img src="https://pixlcore.com/software/mss/images/acacia_wood.png?v=3" width="32" height="32"> |
| `minecraft:birch_log` | <img src="https://pixlcore.com/software/mss/images/birch_log.png?v=3" width="32" height="32"> |
| `minecraft:birch_planks` | <img src="https://pixlcore.com/software/mss/images/birch_planks.png?v=3" width="32" height="32"> |
| `minecraft:birch_wood` | <img src="https://pixlcore.com/software/mss/images/birch_wood.png?v=3" width="32" height="32"> |
| `minecraft:dark_oak_log` | <img src="https://pixlcore.com/software/mss/images/dark_oak_log.png?v=3" width="32" height="32"> |
| `minecraft:dark_oak_planks` | <img src="https://pixlcore.com/software/mss/images/dark_oak_planks.png?v=3" width="32" height="32"> |
| `minecraft:dark_oak_wood` | <img src="https://pixlcore.com/software/mss/images/dark_oak_wood.png?v=3" width="32" height="32"> |
| `minecraft:jungle_log` | <img src="https://pixlcore.com/software/mss/images/jungle_log.png?v=3" width="32" height="32"> |
| `minecraft:jungle_planks` | <img src="https://pixlcore.com/software/mss/images/jungle_planks.png?v=3" width="32" height="32"> |
| `minecraft:jungle_wood` | <img src="https://pixlcore.com/software/mss/images/jungle_wood.png?v=3" width="32" height="32"> |
| `minecraft:oak_log` | <img src="https://pixlcore.com/software/mss/images/oak_log.png?v=3" width="32" height="32"> |
| `minecraft:oak_planks` | <img src="https://pixlcore.com/software/mss/images/oak_planks.png?v=3" width="32" height="32"> |
| `minecraft:oak_wood` | <img src="https://pixlcore.com/software/mss/images/oak_wood.png?v=3" width="32" height="32"> |
| `minecraft:spruce_log` | <img src="https://pixlcore.com/software/mss/images/spruce_log.png?v=3" width="32" height="32"> |
| `minecraft:spruce_planks` | <img src="https://pixlcore.com/software/mss/images/spruce_planks.png?v=3" width="32" height="32"> |
| `minecraft:spruce_wood` | <img src="https://pixlcore.com/software/mss/images/spruce_wood.png?v=3" width="32" height="32"> |
| `minecraft:stick` | <img src="https://pixlcore.com/software/mss/images/stick.png?v=3" width="32" height="32"> |
| `minecraft:stripped_acacia_log` | <img src="https://pixlcore.com/software/mss/images/stripped_acacia_log.png?v=3" width="32" height="32"> |
| `minecraft:stripped_acacia_wood` | <img src="https://pixlcore.com/software/mss/images/stripped_acacia_wood.png?v=3" width="32" height="32"> |
| `minecraft:stripped_birch_log` | <img src="https://pixlcore.com/software/mss/images/stripped_birch_log.png?v=3" width="32" height="32"> |
| `minecraft:stripped_birch_wood` | <img src="https://pixlcore.com/software/mss/images/stripped_birch_wood.png?v=3" width="32" height="32"> |
| `minecraft:stripped_dark_oak_log` | <img src="https://pixlcore.com/software/mss/images/stripped_dark_oak_log.png?v=3" width="32" height="32"> |
| `minecraft:stripped_dark_oak_wood` | <img src="https://pixlcore.com/software/mss/images/stripped_dark_oak_wood.png?v=3" width="32" height="32"> |
| `minecraft:stripped_jungle_log` | <img src="https://pixlcore.com/software/mss/images/stripped_jungle_log.png?v=3" width="32" height="32"> |
| `minecraft:stripped_jungle_wood` | <img src="https://pixlcore.com/software/mss/images/stripped_jungle_wood.png?v=3" width="32" height="32"> |
| `minecraft:stripped_oak_log` | <img src="https://pixlcore.com/software/mss/images/stripped_oak_log.png?v=3" width="32" height="32"> |
| `minecraft:stripped_oak_wood` | <img src="https://pixlcore.com/software/mss/images/stripped_oak_wood.png?v=3" width="32" height="32"> |
| `minecraft:stripped_spruce_log` | <img src="https://pixlcore.com/software/mss/images/stripped_spruce_log.png?v=3" width="32" height="32"> |
| `minecraft:stripped_spruce_wood` | <img src="https://pixlcore.com/software/mss/images/stripped_spruce_wood.png?v=3" width="32" height="32"> |
| `minecraft:crimson_planks` | <img src="https://pixlcore.com/software/mss/images/crimson_planks.png?v=3" width="32" height="32"> |
| `minecraft:warped_planks` | <img src="https://pixlcore.com/software/mss/images/warped_planks.png?v=3" width="32" height="32"> |
| `minecraft:crimson_stem` | <img src="https://pixlcore.com/software/mss/images/crimson_stem.png?v=3" width="32" height="32"> |
| `minecraft:warped_stem` | <img src="https://pixlcore.com/software/mss/images/warped_stem.png?v=3" width="32" height="32"> |
| `minecraft:stripped_crimson_stem` | <img src="https://pixlcore.com/software/mss/images/stripped_crimson_stem.png?v=3" width="32" height="32"> |
| `minecraft:stripped_warped_stem` | <img src="https://pixlcore.com/software/mss/images/stripped_warped_stem.png?v=3" width="32" height="32"> |
| `minecraft:stripped_crimson_hyphae` | <img src="https://pixlcore.com/software/mss/images/stripped_crimson_hyphae.png?v=3" width="32" height="32"> |
| `minecraft:stripped_warped_hyphae` | <img src="https://pixlcore.com/software/mss/images/stripped_warped_hyphae.png?v=3" width="32" height="32"> |
| `minecraft:crimson_hyphae` | <img src="https://pixlcore.com/software/mss/images/crimson_hyphae.png?v=3" width="32" height="32"> |
| `minecraft:warped_hyphae` | <img src="https://pixlcore.com/software/mss/images/warped_hyphae.png?v=3" width="32" height="32"> |

</p>
</details>

#### Woodwork

| Group ID | Items | Fallback Group | Item Frame | Image |
|----------|-------|----------------|------------|-------|
| `woodwork` | 112 | Wood | `minecraft:oak_stairs` | <img src="https://pixlcore.com/software/mss/images/oak_stairs.png?v=3" width="32" height="32"> |

The Woodwork group contains all products made out of wood, including slabs, stairs, boats, doors, beds, buttons, fences, gates, pressure plates, trap doors, chests, bowls, item frames, signs and ladders.  If you would prefer all wood to be sorted into a single combined group, omit the item frame for this group, and all woodwork products will fallback to the [Wood](#wood) group.

<details><summary>Click to Show Woodwork Items</summary>
<p>

| Item ID | Image |
|---------|-------|
| `minecraft:acacia_boat` | <img src="https://pixlcore.com/software/mss/images/acacia_boat.png?v=3" width="32" height="32"> |
| `minecraft:acacia_button` | <img src="https://pixlcore.com/software/mss/images/acacia_button.png?v=3" width="32" height="32"> |
| `minecraft:acacia_door` | <img src="https://pixlcore.com/software/mss/images/acacia_door.png?v=3" width="32" height="32"> |
| `minecraft:acacia_fence` | <img src="https://pixlcore.com/software/mss/images/acacia_fence.png?v=3" width="32" height="32"> |
| `minecraft:acacia_fence_gate` | <img src="https://pixlcore.com/software/mss/images/acacia_fence_gate.png?v=3" width="32" height="32"> |
| `minecraft:acacia_pressure_plate` | <img src="https://pixlcore.com/software/mss/images/acacia_pressure_plate.png?v=3" width="32" height="32"> |
| `minecraft:acacia_slab` | <img src="https://pixlcore.com/software/mss/images/acacia_slab.png?v=3" width="32" height="32"> |
| `minecraft:acacia_stairs` | <img src="https://pixlcore.com/software/mss/images/acacia_stairs.png?v=3" width="32" height="32"> |
| `minecraft:acacia_trapdoor` | <img src="https://pixlcore.com/software/mss/images/acacia_trapdoor.png?v=3" width="32" height="32"> |
| `minecraft:birch_boat` | <img src="https://pixlcore.com/software/mss/images/birch_boat.png?v=3" width="32" height="32"> |
| `minecraft:birch_button` | <img src="https://pixlcore.com/software/mss/images/birch_button.png?v=3" width="32" height="32"> |
| `minecraft:birch_door` | <img src="https://pixlcore.com/software/mss/images/birch_door.png?v=3" width="32" height="32"> |
| `minecraft:birch_fence` | <img src="https://pixlcore.com/software/mss/images/birch_fence.png?v=3" width="32" height="32"> |
| `minecraft:birch_fence_gate` | <img src="https://pixlcore.com/software/mss/images/birch_fence_gate.png?v=3" width="32" height="32"> |
| `minecraft:birch_pressure_plate` | <img src="https://pixlcore.com/software/mss/images/birch_pressure_plate.png?v=3" width="32" height="32"> |
| `minecraft:birch_slab` | <img src="https://pixlcore.com/software/mss/images/birch_slab.png?v=3" width="32" height="32"> |
| `minecraft:birch_stairs` | <img src="https://pixlcore.com/software/mss/images/birch_stairs.png?v=3" width="32" height="32"> |
| `minecraft:birch_trapdoor` | <img src="https://pixlcore.com/software/mss/images/birch_trapdoor.png?v=3" width="32" height="32"> |
| `minecraft:black_bed` | <img src="https://pixlcore.com/software/mss/images/black_bed.png?v=3" width="32" height="32"> |
| `minecraft:blue_bed` | <img src="https://pixlcore.com/software/mss/images/blue_bed.png?v=3" width="32" height="32"> |
| `minecraft:bowl` | <img src="https://pixlcore.com/software/mss/images/bowl.png?v=3" width="32" height="32"> |
| `minecraft:brown_bed` | <img src="https://pixlcore.com/software/mss/images/brown_bed.png?v=3" width="32" height="32"> |
| `minecraft:crafting_table` | <img src="https://pixlcore.com/software/mss/images/crafting_table.png?v=3" width="32" height="32"> |
| `minecraft:cyan_bed` | <img src="https://pixlcore.com/software/mss/images/cyan_bed.png?v=3" width="32" height="32"> |
| `minecraft:dark_oak_boat` | <img src="https://pixlcore.com/software/mss/images/dark_oak_boat.png?v=3" width="32" height="32"> |
| `minecraft:dark_oak_button` | <img src="https://pixlcore.com/software/mss/images/dark_oak_button.png?v=3" width="32" height="32"> |
| `minecraft:dark_oak_door` | <img src="https://pixlcore.com/software/mss/images/dark_oak_door.png?v=3" width="32" height="32"> |
| `minecraft:dark_oak_fence` | <img src="https://pixlcore.com/software/mss/images/dark_oak_fence.png?v=3" width="32" height="32"> |
| `minecraft:dark_oak_fence_gate` | <img src="https://pixlcore.com/software/mss/images/dark_oak_fence_gate.png?v=3" width="32" height="32"> |
| `minecraft:dark_oak_pressure_plate` | <img src="https://pixlcore.com/software/mss/images/dark_oak_pressure_plate.png?v=3" width="32" height="32"> |
| `minecraft:dark_oak_slab` | <img src="https://pixlcore.com/software/mss/images/dark_oak_slab.png?v=3" width="32" height="32"> |
| `minecraft:dark_oak_stairs` | <img src="https://pixlcore.com/software/mss/images/dark_oak_stairs.png?v=3" width="32" height="32"> |
| `minecraft:dark_oak_trapdoor` | <img src="https://pixlcore.com/software/mss/images/dark_oak_trapdoor.png?v=3" width="32" height="32"> |
| `minecraft:gray_bed` | <img src="https://pixlcore.com/software/mss/images/gray_bed.png?v=3" width="32" height="32"> |
| `minecraft:green_bed` | <img src="https://pixlcore.com/software/mss/images/green_bed.png?v=3" width="32" height="32"> |
| `minecraft:item_frame` | <img src="https://pixlcore.com/software/mss/images/item_frame.png?v=3" width="32" height="32"> |
| `minecraft:jungle_boat` | <img src="https://pixlcore.com/software/mss/images/jungle_boat.png?v=3" width="32" height="32"> |
| `minecraft:jungle_button` | <img src="https://pixlcore.com/software/mss/images/jungle_button.png?v=3" width="32" height="32"> |
| `minecraft:jungle_door` | <img src="https://pixlcore.com/software/mss/images/jungle_door.png?v=3" width="32" height="32"> |
| `minecraft:jungle_fence` | <img src="https://pixlcore.com/software/mss/images/jungle_fence.png?v=3" width="32" height="32"> |
| `minecraft:jungle_fence_gate` | <img src="https://pixlcore.com/software/mss/images/jungle_fence_gate.png?v=3" width="32" height="32"> |
| `minecraft:jungle_pressure_plate` | <img src="https://pixlcore.com/software/mss/images/jungle_pressure_plate.png?v=3" width="32" height="32"> |
| `minecraft:jungle_slab` | <img src="https://pixlcore.com/software/mss/images/jungle_slab.png?v=3" width="32" height="32"> |
| `minecraft:jungle_stairs` | <img src="https://pixlcore.com/software/mss/images/jungle_stairs.png?v=3" width="32" height="32"> |
| `minecraft:jungle_trapdoor` | <img src="https://pixlcore.com/software/mss/images/jungle_trapdoor.png?v=3" width="32" height="32"> |
| `minecraft:ladder` | <img src="https://pixlcore.com/software/mss/images/ladder.png?v=3" width="32" height="32"> |
| `minecraft:light_blue_bed` | <img src="https://pixlcore.com/software/mss/images/light_blue_bed.png?v=3" width="32" height="32"> |
| `minecraft:light_gray_bed` | <img src="https://pixlcore.com/software/mss/images/light_gray_bed.png?v=3" width="32" height="32"> |
| `minecraft:lime_bed` | <img src="https://pixlcore.com/software/mss/images/lime_bed.png?v=3" width="32" height="32"> |
| `minecraft:magenta_bed` | <img src="https://pixlcore.com/software/mss/images/magenta_bed.png?v=3" width="32" height="32"> |
| `minecraft:oak_boat` | <img src="https://pixlcore.com/software/mss/images/oak_boat.png?v=3" width="32" height="32"> |
| `minecraft:oak_button` | <img src="https://pixlcore.com/software/mss/images/oak_button.png?v=3" width="32" height="32"> |
| `minecraft:oak_door` | <img src="https://pixlcore.com/software/mss/images/oak_door.png?v=3" width="32" height="32"> |
| `minecraft:oak_fence` | <img src="https://pixlcore.com/software/mss/images/oak_fence.png?v=3" width="32" height="32"> |
| `minecraft:oak_fence_gate` | <img src="https://pixlcore.com/software/mss/images/oak_fence_gate.png?v=3" width="32" height="32"> |
| `minecraft:oak_pressure_plate` | <img src="https://pixlcore.com/software/mss/images/oak_pressure_plate.png?v=3" width="32" height="32"> |
| `minecraft:oak_slab` | <img src="https://pixlcore.com/software/mss/images/oak_slab.png?v=3" width="32" height="32"> |
| `minecraft:oak_stairs` | <img src="https://pixlcore.com/software/mss/images/oak_stairs.png?v=3" width="32" height="32"> |
| `minecraft:oak_trapdoor` | <img src="https://pixlcore.com/software/mss/images/oak_trapdoor.png?v=3" width="32" height="32"> |
| `minecraft:orange_bed` | <img src="https://pixlcore.com/software/mss/images/orange_bed.png?v=3" width="32" height="32"> |
| `minecraft:painting` | <img src="https://pixlcore.com/software/mss/images/painting.png?v=3" width="32" height="32"> |
| `minecraft:petrified_oak_slab` | <img src="https://pixlcore.com/software/mss/images/petrified_oak_slab.png?v=3" width="32" height="32"> |
| `minecraft:pink_bed` | <img src="https://pixlcore.com/software/mss/images/pink_bed.png?v=3" width="32" height="32"> |
| `minecraft:purple_bed` | <img src="https://pixlcore.com/software/mss/images/purple_bed.png?v=3" width="32" height="32"> |
| `minecraft:red_bed` | <img src="https://pixlcore.com/software/mss/images/red_bed.png?v=3" width="32" height="32"> |
| `minecraft:sign` | <img src="https://pixlcore.com/software/mss/images/sign.png?v=3" width="32" height="32"> |
| `minecraft:spruce_boat` | <img src="https://pixlcore.com/software/mss/images/spruce_boat.png?v=3" width="32" height="32"> |
| `minecraft:spruce_button` | <img src="https://pixlcore.com/software/mss/images/spruce_button.png?v=3" width="32" height="32"> |
| `minecraft:spruce_door` | <img src="https://pixlcore.com/software/mss/images/spruce_door.png?v=3" width="32" height="32"> |
| `minecraft:spruce_fence` | <img src="https://pixlcore.com/software/mss/images/spruce_fence.png?v=3" width="32" height="32"> |
| `minecraft:spruce_fence_gate` | <img src="https://pixlcore.com/software/mss/images/spruce_fence_gate.png?v=3" width="32" height="32"> |
| `minecraft:spruce_pressure_plate` | <img src="https://pixlcore.com/software/mss/images/spruce_pressure_plate.png?v=3" width="32" height="32"> |
| `minecraft:spruce_slab` | <img src="https://pixlcore.com/software/mss/images/spruce_slab.png?v=3" width="32" height="32"> |
| `minecraft:spruce_stairs` | <img src="https://pixlcore.com/software/mss/images/spruce_stairs.png?v=3" width="32" height="32"> |
| `minecraft:spruce_trapdoor` | <img src="https://pixlcore.com/software/mss/images/spruce_trapdoor.png?v=3" width="32" height="32"> |
| `minecraft:white_bed` | <img src="https://pixlcore.com/software/mss/images/white_bed.png?v=3" width="32" height="32"> |
| `minecraft:yellow_bed` | <img src="https://pixlcore.com/software/mss/images/yellow_bed.png?v=3" width="32" height="32"> |
| `minecraft:acacia_sign` | <img src="https://pixlcore.com/software/mss/images/acacia_sign.png?v=3" width="32" height="32"> |
| `minecraft:acacia_wall_sign` | <img src="https://pixlcore.com/software/mss/images/acacia_wall_sign.png?v=3" width="32" height="32"> |
| `minecraft:birch_sign` | <img src="https://pixlcore.com/software/mss/images/birch_sign.png?v=3" width="32" height="32"> |
| `minecraft:birch_wall_sign` | <img src="https://pixlcore.com/software/mss/images/birch_wall_sign.png?v=3" width="32" height="32"> |
| `minecraft:dark_oak_sign` | <img src="https://pixlcore.com/software/mss/images/dark_oak_sign.png?v=3" width="32" height="32"> |
| `minecraft:dark_oak_wall_sign` | <img src="https://pixlcore.com/software/mss/images/dark_oak_wall_sign.png?v=3" width="32" height="32"> |
| `minecraft:jungle_sign` | <img src="https://pixlcore.com/software/mss/images/jungle_sign.png?v=3" width="32" height="32"> |
| `minecraft:jungle_wall_sign` | <img src="https://pixlcore.com/software/mss/images/jungle_wall_sign.png?v=3" width="32" height="32"> |
| `minecraft:oak_sign` | <img src="https://pixlcore.com/software/mss/images/oak_sign.png?v=3" width="32" height="32"> |
| `minecraft:oak_wall_sign` | <img src="https://pixlcore.com/software/mss/images/oak_wall_sign.png?v=3" width="32" height="32"> |
| `minecraft:spruce_sign` | <img src="https://pixlcore.com/software/mss/images/spruce_sign.png?v=3" width="32" height="32"> |
| `minecraft:spruce_wall_sign` | <img src="https://pixlcore.com/software/mss/images/spruce_wall_sign.png?v=3" width="32" height="32"> |
| `minecraft:scaffolding` | <img src="https://pixlcore.com/software/mss/images/scaffolding.png?v=3" width="32" height="32"> |
| `minecraft:cartography_table` | <img src="https://pixlcore.com/software/mss/images/cartography_table.png?v=3" width="32" height="32"> |
| `minecraft:composter` | <img src="https://pixlcore.com/software/mss/images/composter.png?v=3" width="32" height="32"> |
| `minecraft:lectern` | <img src="https://pixlcore.com/software/mss/images/lectern.png?v=3" width="32" height="32"> |
| `minecraft:beehive` | <img src="https://pixlcore.com/software/mss/images/beehive.png?v=3" width="32" height="32"> |
| `minecraft:crimson_slab` | <img src="https://pixlcore.com/software/mss/images/crimson_slab.png?v=3" width="32" height="32"> |
| `minecraft:warped_slab` | <img src="https://pixlcore.com/software/mss/images/warped_slab.png?v=3" width="32" height="32"> |
| `minecraft:crimson_pressure_plate` | <img src="https://pixlcore.com/software/mss/images/crimson_pressure_plate.png?v=3" width="32" height="32"> |
| `minecraft:warped_pressure_plate` | <img src="https://pixlcore.com/software/mss/images/warped_pressure_plate.png?v=3" width="32" height="32"> |
| `minecraft:crimson_fence` | <img src="https://pixlcore.com/software/mss/images/crimson_fence.png?v=3" width="32" height="32"> |
| `minecraft:warped_fence` | <img src="https://pixlcore.com/software/mss/images/warped_fence.png?v=3" width="32" height="32"> |
| `minecraft:crimson_trapdoor` | <img src="https://pixlcore.com/software/mss/images/crimson_trapdoor.png?v=3" width="32" height="32"> |
| `minecraft:warped_trapdoor` | <img src="https://pixlcore.com/software/mss/images/warped_trapdoor.png?v=3" width="32" height="32"> |
| `minecraft:crimson_fence_gate` | <img src="https://pixlcore.com/software/mss/images/crimson_fence_gate.png?v=3" width="32" height="32"> |
| `minecraft:warped_fence_gate` | <img src="https://pixlcore.com/software/mss/images/warped_fence_gate.png?v=3" width="32" height="32"> |
| `minecraft:crimson_stairs` | <img src="https://pixlcore.com/software/mss/images/crimson_stairs.png?v=3" width="32" height="32"> |
| `minecraft:warped_stairs` | <img src="https://pixlcore.com/software/mss/images/warped_stairs.png?v=3" width="32" height="32"> |
| `minecraft:crimson_button` | <img src="https://pixlcore.com/software/mss/images/crimson_button.png?v=3" width="32" height="32"> |
| `minecraft:warped_button` | <img src="https://pixlcore.com/software/mss/images/warped_button.png?v=3" width="32" height="32"> |
| `minecraft:crimson_door` | <img src="https://pixlcore.com/software/mss/images/crimson_door.png?v=3" width="32" height="32"> |
| `minecraft:warped_door` | <img src="https://pixlcore.com/software/mss/images/warped_door.png?v=3" width="32" height="32"> |
| `minecraft:crimson_sign` | <img src="https://pixlcore.com/software/mss/images/crimson_sign.png?v=3" width="32" height="32"> |
| `minecraft:warped_sign` | <img src="https://pixlcore.com/software/mss/images/warped_sign.png?v=3" width="32" height="32"> |

</p>
</details>

##### Office

| Group ID | Items | Fallback Group | Item Frame | Image |
|----------|-------|----------------|------------|-------|
| `office` | 6 | Woodwork | `minecraft:paper` | <img src="https://pixlcore.com/software/mss/images/paper.png?v=3" width="32" height="32"> |

The Office group is basically an offshoot of the [Woodwork](#woodwork) group, which contains items specifcially suitable for an office.  This includes books, bookshelves, maps (empty and filled), paper, writable and written books.  This group is optional, and if the item frame is omitted, all these items will sort into the [Woodwork](#woodwork) group instead.

<details><summary>Click to Show Office Items</summary>
<p>

| Item ID | Image |
|---------|-------|
| `minecraft:bookshelf` | <img src="https://pixlcore.com/software/mss/images/bookshelf.png?v=3" width="32" height="32"> |
| `minecraft:writable_book` | <img src="https://pixlcore.com/software/mss/images/writable_book.png?v=3" width="32" height="32"> |
| `minecraft:written_book` | <img src="https://pixlcore.com/software/mss/images/written_book.png?v=3" width="32" height="32"> |
| `minecraft:filled_map` | <img src="https://pixlcore.com/software/mss/images/filled_map.png?v=3" width="32" height="32"> |
| `minecraft:map` | <img src="https://pixlcore.com/software/mss/images/map.png?v=3" width="32" height="32"> |
| `minecraft:paper` | <img src="https://pixlcore.com/software/mss/images/paper.png?v=3" width="32" height="32"> |

</p>
</details>

### Stone

| Group ID | Items | Fallback Group | Item Frame | Image |
|----------|-------|----------------|------------|-------|
| `stone` | 10 | Misc | `minecraft:cobblestone` | <img src="https://pixlcore.com/software/mss/images/cobblestone.png?v=3" width="32" height="32"> |

The Stone group contains primarily raw stone blocks, including regular stone, cobblestone, mossy cobblestone, granite, diorite, andesite, and clay.

<details><summary>Click to Show Stone Items</summary>
<p>

| Item ID | Image |
|---------|-------|
| `minecraft:andesite` | <img src="https://pixlcore.com/software/mss/images/andesite.png?v=3" width="32" height="32"> |
| `minecraft:clay` | <img src="https://pixlcore.com/software/mss/images/clay.png?v=3" width="32" height="32"> |
| `minecraft:clay_ball` | <img src="https://pixlcore.com/software/mss/images/clay_ball.png?v=3" width="32" height="32"> |
| `minecraft:cobblestone` | <img src="https://pixlcore.com/software/mss/images/cobblestone.png?v=3" width="32" height="32"> |
| `minecraft:diorite` | <img src="https://pixlcore.com/software/mss/images/diorite.png?v=3" width="32" height="32"> |
| `minecraft:granite` | <img src="https://pixlcore.com/software/mss/images/granite.png?v=3" width="32" height="32"> |
| `minecraft:mossy_cobblestone` | <img src="https://pixlcore.com/software/mss/images/mossy_cobblestone.png?v=3" width="32" height="32"> |
| `minecraft:stone` | <img src="https://pixlcore.com/software/mss/images/stone.png?v=3" width="32" height="32"> |
| `minecraft:basalt` | <img src="https://pixlcore.com/software/mss/images/basalt.png?v=3" width="32" height="32"> |
| `minecraft:blackstone` | <img src="https://pixlcore.com/software/mss/images/blackstone.png?v=3" width="32" height="32"> |

</p>
</details>

#### Stonework

| Group ID | Items | Fallback Group | Item Frame | Image |
|----------|-------|----------------|------------|-------|
| `stonework` | 64 | Stone | `minecraft:cobblestone_stairs` | <img src="https://pixlcore.com/software/mss/images/cobblestone_stairs.png?v=3" width="32" height="32"> |

The Stonework group contains all products made out of stone, including slabs, stairs, bricks, walls, buttons, pressure plates, and flower pots.  This also includes variants of stone like cracked, chiseled, smooth and polished.  If you would prefer all stone to be sorted into a single combined group, omit the item frame for this group, and all stone products will fallback to the [Stone](#stone) group.

<details><summary>Click to Show Stonework Items</summary>
<p>

| Item ID | Image |
|---------|-------|
| `minecraft:brick` | <img src="https://pixlcore.com/software/mss/images/brick.png?v=3" width="32" height="32"> |
| `minecraft:brick_slab` | <img src="https://pixlcore.com/software/mss/images/brick_slab.png?v=3" width="32" height="32"> |
| `minecraft:brick_stairs` | <img src="https://pixlcore.com/software/mss/images/brick_stairs.png?v=3" width="32" height="32"> |
| `minecraft:brick_wall` | <img src="https://pixlcore.com/software/mss/images/brick_wall.png?v=3" width="32" height="32"> |
| `minecraft:bricks` | <img src="https://pixlcore.com/software/mss/images/bricks.png?v=3" width="32" height="32"> |
| `minecraft:chiseled_stone_bricks` | <img src="https://pixlcore.com/software/mss/images/chiseled_stone_bricks.png?v=3" width="32" height="32"> |
| `minecraft:cobblestone_slab` | <img src="https://pixlcore.com/software/mss/images/cobblestone_slab.png?v=3" width="32" height="32"> |
| `minecraft:cobblestone_wall` | <img src="https://pixlcore.com/software/mss/images/cobblestone_wall.png?v=3" width="32" height="32"> |
| `minecraft:cracked_stone_bricks` | <img src="https://pixlcore.com/software/mss/images/cracked_stone_bricks.png?v=3" width="32" height="32"> |
| `minecraft:flower_pot` | <img src="https://pixlcore.com/software/mss/images/flower_pot.png?v=3" width="32" height="32"> |
| `minecraft:mossy_cobblestone_wall` | <img src="https://pixlcore.com/software/mss/images/mossy_cobblestone_wall.png?v=3" width="32" height="32"> |
| `minecraft:mossy_stone_bricks` | <img src="https://pixlcore.com/software/mss/images/mossy_stone_bricks.png?v=3" width="32" height="32"> |
| `minecraft:polished_andesite` | <img src="https://pixlcore.com/software/mss/images/polished_andesite.png?v=3" width="32" height="32"> |
| `minecraft:polished_diorite` | <img src="https://pixlcore.com/software/mss/images/polished_diorite.png?v=3" width="32" height="32"> |
| `minecraft:polished_granite` | <img src="https://pixlcore.com/software/mss/images/polished_granite.png?v=3" width="32" height="32"> |
| `minecraft:smooth_stone` | <img src="https://pixlcore.com/software/mss/images/smooth_stone.png?v=3" width="32" height="32"> |
| `minecraft:stone_brick_slab` | <img src="https://pixlcore.com/software/mss/images/stone_brick_slab.png?v=3" width="32" height="32"> |
| `minecraft:stone_brick_stairs` | <img src="https://pixlcore.com/software/mss/images/stone_brick_stairs.png?v=3" width="32" height="32"> |
| `minecraft:stone_bricks` | <img src="https://pixlcore.com/software/mss/images/stone_bricks.png?v=3" width="32" height="32"> |
| `minecraft:stone_button` | <img src="https://pixlcore.com/software/mss/images/stone_button.png?v=3" width="32" height="32"> |
| `minecraft:stone_pressure_plate` | <img src="https://pixlcore.com/software/mss/images/stone_pressure_plate.png?v=3" width="32" height="32"> |
| `minecraft:stone_slab` | <img src="https://pixlcore.com/software/mss/images/stone_slab.png?v=3" width="32" height="32"> |
| `minecraft:cobblestone_stairs` | <img src="https://pixlcore.com/software/mss/images/cobblestone_stairs.png?v=3" width="32" height="32"> |
| `minecraft:andesite_slab` | <img src="https://pixlcore.com/software/mss/images/andesite_slab.png?v=3" width="32" height="32"> |
| `minecraft:andesite_stairs` | <img src="https://pixlcore.com/software/mss/images/andesite_stairs.png?v=3" width="32" height="32"> |
| `minecraft:andesite_wall` | <img src="https://pixlcore.com/software/mss/images/andesite_wall.png?v=3" width="32" height="32"> |
| `minecraft:bell` | <img src="https://pixlcore.com/software/mss/images/bell.png?v=3" width="32" height="32"> |
| `minecraft:diorite_slab` | <img src="https://pixlcore.com/software/mss/images/diorite_slab.png?v=3" width="32" height="32"> |
| `minecraft:diorite_stairs` | <img src="https://pixlcore.com/software/mss/images/diorite_stairs.png?v=3" width="32" height="32"> |
| `minecraft:diorite_wall` | <img src="https://pixlcore.com/software/mss/images/diorite_wall.png?v=3" width="32" height="32"> |
| `minecraft:granite_slab` | <img src="https://pixlcore.com/software/mss/images/granite_slab.png?v=3" width="32" height="32"> |
| `minecraft:granite_stairs` | <img src="https://pixlcore.com/software/mss/images/granite_stairs.png?v=3" width="32" height="32"> |
| `minecraft:granite_wall` | <img src="https://pixlcore.com/software/mss/images/granite_wall.png?v=3" width="32" height="32"> |
| `minecraft:mossy_cobblestone_slab` | <img src="https://pixlcore.com/software/mss/images/mossy_cobblestone_slab.png?v=3" width="32" height="32"> |
| `minecraft:mossy_cobblestone_stairs` | <img src="https://pixlcore.com/software/mss/images/mossy_cobblestone_stairs.png?v=3" width="32" height="32"> |
| `minecraft:mossy_stone_brick_slab` | <img src="https://pixlcore.com/software/mss/images/mossy_stone_brick_slab.png?v=3" width="32" height="32"> |
| `minecraft:mossy_stone_brick_stairs` | <img src="https://pixlcore.com/software/mss/images/mossy_stone_brick_stairs.png?v=3" width="32" height="32"> |
| `minecraft:mossy_stone_brick_wall` | <img src="https://pixlcore.com/software/mss/images/mossy_stone_brick_wall.png?v=3" width="32" height="32"> |
| `minecraft:polished_andesite_slab` | <img src="https://pixlcore.com/software/mss/images/polished_andesite_slab.png?v=3" width="32" height="32"> |
| `minecraft:polished_andesite_stairs` | <img src="https://pixlcore.com/software/mss/images/polished_andesite_stairs.png?v=3" width="32" height="32"> |
| `minecraft:polished_diorite_slab` | <img src="https://pixlcore.com/software/mss/images/polished_diorite_slab.png?v=3" width="32" height="32"> |
| `minecraft:polished_diorite_stairs` | <img src="https://pixlcore.com/software/mss/images/polished_diorite_stairs.png?v=3" width="32" height="32"> |
| `minecraft:polished_granite_slab` | <img src="https://pixlcore.com/software/mss/images/polished_granite_slab.png?v=3" width="32" height="32"> |
| `minecraft:polished_granite_stairs` | <img src="https://pixlcore.com/software/mss/images/polished_granite_stairs.png?v=3" width="32" height="32"> |
| `minecraft:smooth_stone_slab` | <img src="https://pixlcore.com/software/mss/images/smooth_stone_slab.png?v=3" width="32" height="32"> |
| `minecraft:stone_brick_wall` | <img src="https://pixlcore.com/software/mss/images/stone_brick_wall.png?v=3" width="32" height="32"> |
| `minecraft:stone_stairs` | <img src="https://pixlcore.com/software/mss/images/stone_stairs.png?v=3" width="32" height="32"> |
| `minecraft:polished_blackstone_pressure_plate` | <img src="https://pixlcore.com/software/mss/images/polished_blackstone_pressure_plate.png?v=3" width="32" height="32"> |
| `minecraft:polished_basalt` | <img src="https://pixlcore.com/software/mss/images/polished_basalt.png?v=3" width="32" height="32"> |
| `minecraft:blackstone_wall` | <img src="https://pixlcore.com/software/mss/images/blackstone_wall.png?v=3" width="32" height="32"> |
| `minecraft:polished_blackstone_wall` | <img src="https://pixlcore.com/software/mss/images/polished_blackstone_wall.png?v=3" width="32" height="32"> |
| `minecraft:polished_blackstone_brick_wall` | <img src="https://pixlcore.com/software/mss/images/polished_blackstone_brick_wall.png?v=3" width="32" height="32"> |
| `minecraft:polished_blackstone_button` | <img src="https://pixlcore.com/software/mss/images/polished_blackstone_button.png?v=3" width="32" height="32"> |
| `minecraft:blackstone_slab` | <img src="https://pixlcore.com/software/mss/images/blackstone_slab.png?v=3" width="32" height="32"> |
| `minecraft:blackstone_stairs` | <img src="https://pixlcore.com/software/mss/images/blackstone_stairs.png?v=3" width="32" height="32"> |
| `minecraft:gilded_blackstone` | <img src="https://pixlcore.com/software/mss/images/gilded_blackstone.png?v=3" width="32" height="32"> |
| `minecraft:polished_blackstone` | <img src="https://pixlcore.com/software/mss/images/polished_blackstone.png?v=3" width="32" height="32"> |
| `minecraft:polished_blackstone_slab` | <img src="https://pixlcore.com/software/mss/images/polished_blackstone_slab.png?v=3" width="32" height="32"> |
| `minecraft:polished_blackstone_stairs` | <img src="https://pixlcore.com/software/mss/images/polished_blackstone_stairs.png?v=3" width="32" height="32"> |
| `minecraft:chiseled_polished_blackstone` | <img src="https://pixlcore.com/software/mss/images/chiseled_polished_blackstone.png?v=3" width="32" height="32"> |
| `minecraft:polished_blackstone_bricks` | <img src="https://pixlcore.com/software/mss/images/polished_blackstone_bricks.png?v=3" width="32" height="32"> |
| `minecraft:polished_blackstone_brick_slab` | <img src="https://pixlcore.com/software/mss/images/polished_blackstone_brick_slab.png?v=3" width="32" height="32"> |
| `minecraft:polished_blackstone_brick_stairs` | <img src="https://pixlcore.com/software/mss/images/polished_blackstone_brick_stairs.png?v=3" width="32" height="32"> |
| `minecraft:cracked_polished_blackstone_bricks` | <img src="https://pixlcore.com/software/mss/images/cracked_polished_blackstone_bricks.png?v=3" width="32" height="32"> |

</p>
</details>

### Coal

| Group ID | Items | Fallback Group | Item Frame | Image |
|----------|-------|----------------|------------|-------|
| `coal` | 3 | Misc | `minecraft:coal` | <img src="https://pixlcore.com/software/mss/images/coal.png?v=3" width="32" height="32"> |

The Coal group contains only coal, charcoal and coal blocks.  These three items have been sorted into their own group because they can fuel furnaces.  You can even automate this if you like.

<details><summary>Click to Show Coal Items</summary>
<p>

| Item ID | Image |
|---------|-------|
| `minecraft:charcoal` | <img src="https://pixlcore.com/software/mss/images/charcoal.png?v=3" width="32" height="32"> |
| `minecraft:coal` | <img src="https://pixlcore.com/software/mss/images/coal.png?v=3" width="32" height="32"> |
| `minecraft:coal_block` | <img src="https://pixlcore.com/software/mss/images/coal_block.png?v=3" width="32" height="32"> |

</p>
</details>

### Tools

| Group ID | Items | Fallback Group | Item Frame | Image |
|----------|-------|----------------|------------|-------|
| `tools` | 83 | Misc | `minecraft:wooden_pickaxe` | <img src="https://pixlcore.com/software/mss/images/wooden_pickaxe.png?v=3" width="32" height="32"> |

The Tools group contains a large amount of items, but all of them can be categorized as either tools or weapons.  The short list includes pickaxes, swords, axes, bows, shovels, hoes, shears, fishing rods, furnaces, shulker boxes, ender chests, fireworks, buckets, anvils, clocks, compasses, flint, name tags, leads, TNT and torches.  The Tools group excludes [Armor](#armor), [Rails](#rails) and [Redstone](#redstone) items, which have their own respective groups.

<details><summary>Click to Show Tools Items</summary>
<p>

| Item ID | Image |
|---------|-------|
| `minecraft:anvil` | <img src="https://pixlcore.com/software/mss/images/anvil.png?v=3" width="32" height="32"> |
| `minecraft:arrow` | <img src="https://pixlcore.com/software/mss/images/arrow.png?v=3" width="32" height="32"> |
| `minecraft:bow` | <img src="https://pixlcore.com/software/mss/images/bow.png?v=3" width="32" height="32"> |
| `minecraft:bucket` | <img src="https://pixlcore.com/software/mss/images/bucket.png?v=3" width="32" height="32"> |
| `minecraft:chipped_anvil` | <img src="https://pixlcore.com/software/mss/images/chipped_anvil.png?v=3" width="32" height="32"> |
| `minecraft:clock` | <img src="https://pixlcore.com/software/mss/images/clock.png?v=3" width="32" height="32"> |
| `minecraft:clownfish_bucket` | <img src="https://pixlcore.com/software/mss/images/clownfish_bucket.png?v=3" width="32" height="32"> |
| `minecraft:cod_bucket` | <img src="https://pixlcore.com/software/mss/images/cod_bucket.png?v=3" width="32" height="32"> |
| `minecraft:tropical_fish_bucket` | <img src="https://pixlcore.com/software/mss/images/tropical_fish_bucket.png?v=3" width="32" height="32"> |
| `minecraft:compass` | <img src="https://pixlcore.com/software/mss/images/compass.png?v=3" width="32" height="32"> |
| `minecraft:damaged_anvil` | <img src="https://pixlcore.com/software/mss/images/damaged_anvil.png?v=3" width="32" height="32"> |
| `minecraft:diamond_axe` | <img src="https://pixlcore.com/software/mss/images/diamond_axe.png?v=3" width="32" height="32"> |
| `minecraft:diamond_hoe` | <img src="https://pixlcore.com/software/mss/images/diamond_hoe.png?v=3" width="32" height="32"> |
| `minecraft:diamond_pickaxe` | <img src="https://pixlcore.com/software/mss/images/diamond_pickaxe.png?v=3" width="32" height="32"> |
| `minecraft:diamond_shovel` | <img src="https://pixlcore.com/software/mss/images/diamond_shovel.png?v=3" width="32" height="32"> |
| `minecraft:diamond_sword` | <img src="https://pixlcore.com/software/mss/images/diamond_sword.png?v=3" width="32" height="32"> |
| `minecraft:fire_charge` | <img src="https://pixlcore.com/software/mss/images/fire_charge.png?v=3" width="32" height="32"> |
| `minecraft:firework_rocket` | <img src="https://pixlcore.com/software/mss/images/firework_rocket.png?v=3" width="32" height="32"> |
| `minecraft:firework_star` | <img src="https://pixlcore.com/software/mss/images/firework_star.png?v=3" width="32" height="32"> |
| `minecraft:fishing_rod` | <img src="https://pixlcore.com/software/mss/images/fishing_rod.png?v=3" width="32" height="32"> |
| `minecraft:warped_fungus_on_a_stick` | <img src="https://pixlcore.com/software/mss/images/warped_fungus_on_a_stick.png?v=3" width="32" height="32"> |
| `minecraft:flint` | <img src="https://pixlcore.com/software/mss/images/flint.png?v=3" width="32" height="32"> |
| `minecraft:flint_and_steel` | <img src="https://pixlcore.com/software/mss/images/flint_and_steel.png?v=3" width="32" height="32"> |
| `minecraft:furnace` | <img src="https://pixlcore.com/software/mss/images/furnace.png?v=3" width="32" height="32"> |
| `minecraft:golden_axe` | <img src="https://pixlcore.com/software/mss/images/golden_axe.png?v=3" width="32" height="32"> |
| `minecraft:golden_hoe` | <img src="https://pixlcore.com/software/mss/images/golden_hoe.png?v=3" width="32" height="32"> |
| `minecraft:golden_pickaxe` | <img src="https://pixlcore.com/software/mss/images/golden_pickaxe.png?v=3" width="32" height="32"> |
| `minecraft:golden_shovel` | <img src="https://pixlcore.com/software/mss/images/golden_shovel.png?v=3" width="32" height="32"> |
| `minecraft:golden_sword` | <img src="https://pixlcore.com/software/mss/images/golden_sword.png?v=3" width="32" height="32"> |
| `minecraft:gunpowder` | <img src="https://pixlcore.com/software/mss/images/gunpowder.png?v=3" width="32" height="32"> |
| `minecraft:iron_axe` | <img src="https://pixlcore.com/software/mss/images/iron_axe.png?v=3" width="32" height="32"> |
| `minecraft:iron_bars` | <img src="https://pixlcore.com/software/mss/images/iron_bars.png?v=3" width="32" height="32"> |
| `minecraft:iron_block` | <img src="https://pixlcore.com/software/mss/images/iron_block.png?v=3" width="32" height="32"> |
| `minecraft:iron_door` | <img src="https://pixlcore.com/software/mss/images/iron_door.png?v=3" width="32" height="32"> |
| `minecraft:iron_hoe` | <img src="https://pixlcore.com/software/mss/images/iron_hoe.png?v=3" width="32" height="32"> |
| `minecraft:iron_pickaxe` | <img src="https://pixlcore.com/software/mss/images/iron_pickaxe.png?v=3" width="32" height="32"> |
| `minecraft:iron_shovel` | <img src="https://pixlcore.com/software/mss/images/iron_shovel.png?v=3" width="32" height="32"> |
| `minecraft:iron_sword` | <img src="https://pixlcore.com/software/mss/images/iron_sword.png?v=3" width="32" height="32"> |
| `minecraft:iron_trapdoor` | <img src="https://pixlcore.com/software/mss/images/iron_trapdoor.png?v=3" width="32" height="32"> |
| `minecraft:lava_bucket` | <img src="https://pixlcore.com/software/mss/images/lava_bucket.png?v=3" width="32" height="32"> |
| `minecraft:lead` | <img src="https://pixlcore.com/software/mss/images/lead.png?v=3" width="32" height="32"> |
| `minecraft:milk_bucket` | <img src="https://pixlcore.com/software/mss/images/milk_bucket.png?v=3" width="32" height="32"> |
| `minecraft:name_tag` | <img src="https://pixlcore.com/software/mss/images/name_tag.png?v=3" width="32" height="32"> |
| `minecraft:pufferfish_bucket` | <img src="https://pixlcore.com/software/mss/images/pufferfish_bucket.png?v=3" width="32" height="32"> |
| `minecraft:salmon_bucket` | <img src="https://pixlcore.com/software/mss/images/salmon_bucket.png?v=3" width="32" height="32"> |
| `minecraft:shears` | <img src="https://pixlcore.com/software/mss/images/shears.png?v=3" width="32" height="32"> |
| `minecraft:spectral_arrow` | <img src="https://pixlcore.com/software/mss/images/spectral_arrow.png?v=3" width="32" height="32"> |
| `minecraft:stone_axe` | <img src="https://pixlcore.com/software/mss/images/stone_axe.png?v=3" width="32" height="32"> |
| `minecraft:stone_hoe` | <img src="https://pixlcore.com/software/mss/images/stone_hoe.png?v=3" width="32" height="32"> |
| `minecraft:stone_pickaxe` | <img src="https://pixlcore.com/software/mss/images/stone_pickaxe.png?v=3" width="32" height="32"> |
| `minecraft:stone_shovel` | <img src="https://pixlcore.com/software/mss/images/stone_shovel.png?v=3" width="32" height="32"> |
| `minecraft:stone_sword` | <img src="https://pixlcore.com/software/mss/images/stone_sword.png?v=3" width="32" height="32"> |
| `minecraft:tipped_arrow` | <img src="https://pixlcore.com/software/mss/images/tipped_arrow.png?v=3" width="32" height="32"> |
| `minecraft:tnt` | <img src="https://pixlcore.com/software/mss/images/tnt.png?v=3" width="32" height="32"> |
| `minecraft:torch` | <img src="https://pixlcore.com/software/mss/images/torch.png?v=3" width="32" height="32"> |
| `minecraft:soul_torch` | <img src="https://pixlcore.com/software/mss/images/soul_torch.png?v=3" width="32" height="32"> |
| `minecraft:water_bucket` | <img src="https://pixlcore.com/software/mss/images/water_bucket.png?v=3" width="32" height="32"> |
| `minecraft:wooden_axe` | <img src="https://pixlcore.com/software/mss/images/wooden_axe.png?v=3" width="32" height="32"> |
| `minecraft:wooden_hoe` | <img src="https://pixlcore.com/software/mss/images/wooden_hoe.png?v=3" width="32" height="32"> |
| `minecraft:wooden_pickaxe` | <img src="https://pixlcore.com/software/mss/images/wooden_pickaxe.png?v=3" width="32" height="32"> |
| `minecraft:wooden_shovel` | <img src="https://pixlcore.com/software/mss/images/wooden_shovel.png?v=3" width="32" height="32"> |
| `minecraft:wooden_sword` | <img src="https://pixlcore.com/software/mss/images/wooden_sword.png?v=3" width="32" height="32"> |
| `minecraft:crossbow` | <img src="https://pixlcore.com/software/mss/images/crossbow.png?v=3" width="32" height="32"> |
| `minecraft:blast_furnace` | <img src="https://pixlcore.com/software/mss/images/blast_furnace.png?v=3" width="32" height="32"> |
| `minecraft:campfire` | <img src="https://pixlcore.com/software/mss/images/campfire.png?v=3" width="32" height="32"> |
| `minecraft:lantern` | <img src="https://pixlcore.com/software/mss/images/lantern.png?v=3" width="32" height="32"> |
| `minecraft:soul_lantern` | <img src="https://pixlcore.com/software/mss/images/soul_lantern.png?v=3" width="32" height="32"> |
| `minecraft:soul_campfire` | <img src="https://pixlcore.com/software/mss/images/soul_campfire.png?v=3" width="32" height="32"> |
| `minecraft:fletching_table` | <img src="https://pixlcore.com/software/mss/images/fletching_table.png?v=3" width="32" height="32"> |
| `minecraft:grindstone` | <img src="https://pixlcore.com/software/mss/images/grindstone.png?v=3" width="32" height="32"> |
| `minecraft:loom` | <img src="https://pixlcore.com/software/mss/images/loom.png?v=3" width="32" height="32"> |
| `minecraft:smithing_table` | <img src="https://pixlcore.com/software/mss/images/smithing_table.png?v=3" width="32" height="32"> |
| `minecraft:smoker` | <img src="https://pixlcore.com/software/mss/images/smoker.png?v=3" width="32" height="32"> |
| `minecraft:stonecutter` | <img src="https://pixlcore.com/software/mss/images/stonecutter.png?v=3" width="32" height="32"> |
| `minecraft:chain` | <img src="https://pixlcore.com/software/mss/images/chain.png?v=3" width="32" height="32"> |
| `minecraft:lodestone` | <img src="https://pixlcore.com/software/mss/images/lodestone.png?v=3" width="32" height="32"> |
| `minecraft:target` | <img src="https://pixlcore.com/software/mss/images/target.png?v=3" width="32" height="32"> |
| `minecraft:respawn_anchor` | <img src="https://pixlcore.com/software/mss/images/respawn_anchor.png?v=3" width="32" height="32"> |
| `minecraft:netherite_sword` | <img src="https://pixlcore.com/software/mss/images/netherite_sword.png?v=3" width="32" height="32"> |
| `minecraft:netherite_shovel` | <img src="https://pixlcore.com/software/mss/images/netherite_shovel.png?v=3" width="32" height="32"> |
| `minecraft:netherite_pickaxe` | <img src="https://pixlcore.com/software/mss/images/netherite_pickaxe.png?v=3" width="32" height="32"> |
| `minecraft:netherite_axe` | <img src="https://pixlcore.com/software/mss/images/netherite_axe.png?v=3" width="32" height="32"> |
| `minecraft:netherite_hoe` | <img src="https://pixlcore.com/software/mss/images/netherite_hoe.png?v=3" width="32" height="32"> |

</p>
</details>

#### Storage

| Group ID | Items | Fallback Group | Item Frame | Image |
|----------|-------|----------------|------------|-------|
| `storage` | 21 | Tools | `minecraft:chest` | <img src="https://pixlcore.com/software/mss/images/chest.png?v=3" width="32" height="32"> |

The Storage group contains all forms of storage, including chests, trapped chests, ender chests and shulker boxes (all colors).  This group is optional, so if you omit the item frame all the items will fall back to sorting into the [Tools](#tools) group.

<details><summary>Click to Show Storage Items</summary>
<p>

| Item ID | Image |
|---------|-------|
| `minecraft:chest` | <img src="https://pixlcore.com/software/mss/images/chest.png?v=3" width="32" height="32"> |
| `minecraft:trapped_chest` | <img src="https://pixlcore.com/software/mss/images/trapped_chest.png?v=3" width="32" height="32"> |
| `minecraft:ender_chest` | <img src="https://pixlcore.com/software/mss/images/ender_chest.png?v=3" width="32" height="32"> |
| `minecraft:black_shulker_box` | <img src="https://pixlcore.com/software/mss/images/black_shulker_box.png?v=3" width="32" height="32"> |
| `minecraft:blue_shulker_box` | <img src="https://pixlcore.com/software/mss/images/blue_shulker_box.png?v=3" width="32" height="32"> |
| `minecraft:brown_shulker_box` | <img src="https://pixlcore.com/software/mss/images/brown_shulker_box.png?v=3" width="32" height="32"> |
| `minecraft:cyan_shulker_box` | <img src="https://pixlcore.com/software/mss/images/cyan_shulker_box.png?v=3" width="32" height="32"> |
| `minecraft:gray_shulker_box` | <img src="https://pixlcore.com/software/mss/images/gray_shulker_box.png?v=3" width="32" height="32"> |
| `minecraft:green_shulker_box` | <img src="https://pixlcore.com/software/mss/images/green_shulker_box.png?v=3" width="32" height="32"> |
| `minecraft:light_blue_shulker_box` | <img src="https://pixlcore.com/software/mss/images/light_blue_shulker_box.png?v=3" width="32" height="32"> |
| `minecraft:lime_shulker_box` | <img src="https://pixlcore.com/software/mss/images/lime_shulker_box.png?v=3" width="32" height="32"> |
| `minecraft:magenta_shulker_box` | <img src="https://pixlcore.com/software/mss/images/magenta_shulker_box.png?v=3" width="32" height="32"> |
| `minecraft:orange_shulker_box` | <img src="https://pixlcore.com/software/mss/images/orange_shulker_box.png?v=3" width="32" height="32"> |
| `minecraft:pink_shulker_box` | <img src="https://pixlcore.com/software/mss/images/pink_shulker_box.png?v=3" width="32" height="32"> |
| `minecraft:purple_shulker_box` | <img src="https://pixlcore.com/software/mss/images/purple_shulker_box.png?v=3" width="32" height="32"> |
| `minecraft:red_shulker_box` | <img src="https://pixlcore.com/software/mss/images/red_shulker_box.png?v=3" width="32" height="32"> |
| `minecraft:shulker_box` | <img src="https://pixlcore.com/software/mss/images/shulker_box.png?v=3" width="32" height="32"> |
| `minecraft:light_gray_shulker_box` | <img src="https://pixlcore.com/software/mss/images/light_gray_shulker_box.png?v=3" width="32" height="32"> |
| `minecraft:white_shulker_box` | <img src="https://pixlcore.com/software/mss/images/white_shulker_box.png?v=3" width="32" height="32"> |
| `minecraft:yellow_shulker_box` | <img src="https://pixlcore.com/software/mss/images/yellow_shulker_box.png?v=3" width="32" height="32"> |
| `minecraft:barrel` | <img src="https://pixlcore.com/software/mss/images/barrel.png?v=3" width="32" height="32"> |

</p>
</details>

#### Armor

| Group ID | Items | Fallback Group | Item Frame | Image |
|----------|-------|----------------|------------|-------|
| `armor` | 32 | Tools | `minecraft:leather_chestplate` | <img src="https://pixlcore.com/software/mss/images/leather_chestplate.png?v=3" width="32" height="32"> |

The Armor group contains all forms of armor in the game, including boots, chestplates, leggings and helmets of all types, horse armor, saddles, shields and armor stands.

<details><summary>Click to Show Armor Items</summary>
<p>

| Item ID | Image |
|---------|-------|
| `minecraft:armor_stand` | <img src="https://pixlcore.com/software/mss/images/armor_stand.png?v=3" width="32" height="32"> |
| `minecraft:chainmail_boots` | <img src="https://pixlcore.com/software/mss/images/chainmail_boots.png?v=3" width="32" height="32"> |
| `minecraft:chainmail_chestplate` | <img src="https://pixlcore.com/software/mss/images/chainmail_chestplate.png?v=3" width="32" height="32"> |
| `minecraft:chainmail_helmet` | <img src="https://pixlcore.com/software/mss/images/chainmail_helmet.png?v=3" width="32" height="32"> |
| `minecraft:chainmail_leggings` | <img src="https://pixlcore.com/software/mss/images/chainmail_leggings.png?v=3" width="32" height="32"> |
| `minecraft:diamond_boots` | <img src="https://pixlcore.com/software/mss/images/diamond_boots.png?v=3" width="32" height="32"> |
| `minecraft:diamond_chestplate` | <img src="https://pixlcore.com/software/mss/images/diamond_chestplate.png?v=3" width="32" height="32"> |
| `minecraft:diamond_helmet` | <img src="https://pixlcore.com/software/mss/images/diamond_helmet.png?v=3" width="32" height="32"> |
| `minecraft:diamond_horse_armor` | <img src="https://pixlcore.com/software/mss/images/diamond_horse_armor.png?v=3" width="32" height="32"> |
| `minecraft:diamond_leggings` | <img src="https://pixlcore.com/software/mss/images/diamond_leggings.png?v=3" width="32" height="32"> |
| `minecraft:golden_boots` | <img src="https://pixlcore.com/software/mss/images/golden_boots.png?v=3" width="32" height="32"> |
| `minecraft:golden_chestplate` | <img src="https://pixlcore.com/software/mss/images/golden_chestplate.png?v=3" width="32" height="32"> |
| `minecraft:golden_helmet` | <img src="https://pixlcore.com/software/mss/images/golden_helmet.png?v=3" width="32" height="32"> |
| `minecraft:golden_horse_armor` | <img src="https://pixlcore.com/software/mss/images/golden_horse_armor.png?v=3" width="32" height="32"> |
| `minecraft:golden_leggings` | <img src="https://pixlcore.com/software/mss/images/golden_leggings.png?v=3" width="32" height="32"> |
| `minecraft:iron_boots` | <img src="https://pixlcore.com/software/mss/images/iron_boots.png?v=3" width="32" height="32"> |
| `minecraft:iron_chestplate` | <img src="https://pixlcore.com/software/mss/images/iron_chestplate.png?v=3" width="32" height="32"> |
| `minecraft:iron_helmet` | <img src="https://pixlcore.com/software/mss/images/iron_helmet.png?v=3" width="32" height="32"> |
| `minecraft:iron_horse_armor` | <img src="https://pixlcore.com/software/mss/images/iron_horse_armor.png?v=3" width="32" height="32"> |
| `minecraft:iron_leggings` | <img src="https://pixlcore.com/software/mss/images/iron_leggings.png?v=3" width="32" height="32"> |
| `minecraft:leather_boots` | <img src="https://pixlcore.com/software/mss/images/leather_boots.png?v=3" width="32" height="32"> |
| `minecraft:leather_chestplate` | <img src="https://pixlcore.com/software/mss/images/leather_chestplate.png?v=3" width="32" height="32"> |
| `minecraft:leather_helmet` | <img src="https://pixlcore.com/software/mss/images/leather_helmet.png?v=3" width="32" height="32"> |
| `minecraft:leather_leggings` | <img src="https://pixlcore.com/software/mss/images/leather_leggings.png?v=3" width="32" height="32"> |
| `minecraft:saddle` | <img src="https://pixlcore.com/software/mss/images/saddle.png?v=3" width="32" height="32"> |
| `minecraft:shield` | <img src="https://pixlcore.com/software/mss/images/shield.png?v=3" width="32" height="32"> |
| `minecraft:turtle_helmet` | <img src="https://pixlcore.com/software/mss/images/turtle_helmet.png?v=3" width="32" height="32"> |
| `minecraft:leather_horse_armor` | <img src="https://pixlcore.com/software/mss/images/leather_horse_armor.png?v=3" width="32" height="32"> |
| `minecraft:netherite_helmet` | <img src="https://pixlcore.com/software/mss/images/netherite_helmet.png?v=3" width="32" height="32"> |
| `minecraft:netherite_chestplate` | <img src="https://pixlcore.com/software/mss/images/netherite_chestplate.png?v=3" width="32" height="32"> |
| `minecraft:netherite_leggings` | <img src="https://pixlcore.com/software/mss/images/netherite_leggings.png?v=3" width="32" height="32"> |
| `minecraft:netherite_boots` | <img src="https://pixlcore.com/software/mss/images/netherite_boots.png?v=3" width="32" height="32"> |

</p>
</details>

#### Rails

| Group ID | Items | Fallback Group | Item Frame | Image |
|----------|-------|----------------|------------|-------|
| `rails` | 10 | Tools | `minecraft:rail` | <img src="https://pixlcore.com/software/mss/images/rail.png?v=3" width="32" height="32"> |

The Rails group contains all items relating to rails, including rails themselves, activator rails, detector rails, powered rails, as well as all forms of minecarts (regular minecarts, chest minecarts, command block minecarts, furnace minecarts, hopper minecarts, and TNT minecarts).

<details><summary>Click to Show Rails Items</summary>
<p>

| Item ID | Image |
|---------|-------|
| `minecraft:activator_rail` | <img src="https://pixlcore.com/software/mss/images/activator_rail.png?v=3" width="32" height="32"> |
| `minecraft:chest_minecart` | <img src="https://pixlcore.com/software/mss/images/chest_minecart.png?v=3" width="32" height="32"> |
| `minecraft:command_block_minecart` | <img src="https://pixlcore.com/software/mss/images/command_block_minecart.png?v=3" width="32" height="32"> |
| `minecraft:detector_rail` | <img src="https://pixlcore.com/software/mss/images/detector_rail.png?v=3" width="32" height="32"> |
| `minecraft:furnace_minecart` | <img src="https://pixlcore.com/software/mss/images/furnace_minecart.png?v=3" width="32" height="32"> |
| `minecraft:hopper_minecart` | <img src="https://pixlcore.com/software/mss/images/hopper_minecart.png?v=3" width="32" height="32"> |
| `minecraft:minecart` | <img src="https://pixlcore.com/software/mss/images/minecart.png?v=3" width="32" height="32"> |
| `minecraft:powered_rail` | <img src="https://pixlcore.com/software/mss/images/powered_rail.png?v=3" width="32" height="32"> |
| `minecraft:rail` | <img src="https://pixlcore.com/software/mss/images/rail.png?v=3" width="32" height="32"> |
| `minecraft:tnt_minecart` | <img src="https://pixlcore.com/software/mss/images/tnt_minecart.png?v=3" width="32" height="32"> |

</p>
</details>

### Plants

| Group ID | Items | Fallback Group | Item Frame | Image |
|----------|-------|----------------|------------|-------|
| `plants` | 62 | Misc | `minecraft:oak_sapling` | <img src="https://pixlcore.com/software/mss/images/oak_sapling.png?v=3" width="32" height="32"> |

The Plants group basically contains all the organic items in the game, if they are or came from plants.  This includes leaves, saplings, seeds, beans, mushrooms, cactus, pumpkins, chorus fruit, bushes, ferns, grass, hay, lily pads, melons, nether wart, sugar cane and wheat.  The group specifically excludes [Flowers](#flowers) which have their own dedicated group.

<details><summary>Click to Show Plants Items</summary>
<p>

| Item ID | Image |
|---------|-------|
| `minecraft:acacia_leaves` | <img src="https://pixlcore.com/software/mss/images/acacia_leaves.png?v=3" width="32" height="32"> |
| `minecraft:acacia_sapling` | <img src="https://pixlcore.com/software/mss/images/acacia_sapling.png?v=3" width="32" height="32"> |
| `minecraft:beetroot` | <img src="https://pixlcore.com/software/mss/images/beetroot.png?v=3" width="32" height="32"> |
| `minecraft:beetroot_seeds` | <img src="https://pixlcore.com/software/mss/images/beetroot_seeds.png?v=3" width="32" height="32"> |
| `minecraft:birch_leaves` | <img src="https://pixlcore.com/software/mss/images/birch_leaves.png?v=3" width="32" height="32"> |
| `minecraft:birch_sapling` | <img src="https://pixlcore.com/software/mss/images/birch_sapling.png?v=3" width="32" height="32"> |
| `minecraft:brown_mushroom` | <img src="https://pixlcore.com/software/mss/images/brown_mushroom.png?v=3" width="32" height="32"> |
| `minecraft:brown_mushroom_block` | <img src="https://pixlcore.com/software/mss/images/brown_mushroom_block.png?v=3" width="32" height="32"> |
| `minecraft:cactus` | <img src="https://pixlcore.com/software/mss/images/cactus.png?v=3" width="32" height="32"> |
| `minecraft:carved_pumpkin` | <img src="https://pixlcore.com/software/mss/images/carved_pumpkin.png?v=3" width="32" height="32"> |
| `minecraft:chorus_fruit` | <img src="https://pixlcore.com/software/mss/images/chorus_fruit.png?v=3" width="32" height="32"> |
| `minecraft:popped_chorus_fruit` | <img src="https://pixlcore.com/software/mss/images/popped_chorus_fruit.png?v=3" width="32" height="32"> |
| `minecraft:chorus_plant` | <img src="https://pixlcore.com/software/mss/images/chorus_plant.png?v=3" width="32" height="32"> |
| `minecraft:cocoa_beans` | <img src="https://pixlcore.com/software/mss/images/cocoa_beans.png?v=3" width="32" height="32"> |
| `minecraft:dark_oak_leaves` | <img src="https://pixlcore.com/software/mss/images/dark_oak_leaves.png?v=3" width="32" height="32"> |
| `minecraft:dark_oak_sapling` | <img src="https://pixlcore.com/software/mss/images/dark_oak_sapling.png?v=3" width="32" height="32"> |
| `minecraft:dead_bush` | <img src="https://pixlcore.com/software/mss/images/dead_bush.png?v=3" width="32" height="32"> |
| `minecraft:fern` | <img src="https://pixlcore.com/software/mss/images/fern.png?v=3" width="32" height="32"> |
| `minecraft:grass` | <img src="https://pixlcore.com/software/mss/images/grass.png?v=3" width="32" height="32"> |
| `minecraft:hay_block` | <img src="https://pixlcore.com/software/mss/images/hay_block.png?v=3" width="32" height="32"> |
| `minecraft:jack_o_lantern` | <img src="https://pixlcore.com/software/mss/images/jack_o_lantern.png?v=3" width="32" height="32"> |
| `minecraft:jungle_leaves` | <img src="https://pixlcore.com/software/mss/images/jungle_leaves.png?v=3" width="32" height="32"> |
| `minecraft:jungle_sapling` | <img src="https://pixlcore.com/software/mss/images/jungle_sapling.png?v=3" width="32" height="32"> |
| `minecraft:large_fern` | <img src="https://pixlcore.com/software/mss/images/large_fern.png?v=3" width="32" height="32"> |
| `minecraft:lily_pad` | <img src="https://pixlcore.com/software/mss/images/lily_pad.png?v=3" width="32" height="32"> |
| `minecraft:melon` | <img src="https://pixlcore.com/software/mss/images/melon.png?v=3" width="32" height="32"> |
| `minecraft:melon_seeds` | <img src="https://pixlcore.com/software/mss/images/melon_seeds.png?v=3" width="32" height="32"> |
| `minecraft:mushroom_stem` | <img src="https://pixlcore.com/software/mss/images/mushroom_stem.png?v=3" width="32" height="32"> |
| `minecraft:nether_wart` | <img src="https://pixlcore.com/software/mss/images/nether_wart.png?v=3" width="32" height="32"> |
| `minecraft:oak_leaves` | <img src="https://pixlcore.com/software/mss/images/oak_leaves.png?v=3" width="32" height="32"> |
| `minecraft:oak_sapling` | <img src="https://pixlcore.com/software/mss/images/oak_sapling.png?v=3" width="32" height="32"> |
| `minecraft:poisonous_potato` | <img src="https://pixlcore.com/software/mss/images/poisonous_potato.png?v=3" width="32" height="32"> |
| `minecraft:pumpkin` | <img src="https://pixlcore.com/software/mss/images/pumpkin.png?v=3" width="32" height="32"> |
| `minecraft:pumpkin_seeds` | <img src="https://pixlcore.com/software/mss/images/pumpkin_seeds.png?v=3" width="32" height="32"> |
| `minecraft:red_mushroom` | <img src="https://pixlcore.com/software/mss/images/red_mushroom.png?v=3" width="32" height="32"> |
| `minecraft:red_mushroom_block` | <img src="https://pixlcore.com/software/mss/images/red_mushroom_block.png?v=3" width="32" height="32"> |
| `minecraft:spruce_leaves` | <img src="https://pixlcore.com/software/mss/images/spruce_leaves.png?v=3" width="32" height="32"> |
| `minecraft:spruce_sapling` | <img src="https://pixlcore.com/software/mss/images/spruce_sapling.png?v=3" width="32" height="32"> |
| `minecraft:sugar_cane` | <img src="https://pixlcore.com/software/mss/images/sugar_cane.png?v=3" width="32" height="32"> |
| `minecraft:tall_grass` | <img src="https://pixlcore.com/software/mss/images/tall_grass.png?v=3" width="32" height="32"> |
| `minecraft:vine` | <img src="https://pixlcore.com/software/mss/images/vine.png?v=3" width="32" height="32"> |
| `minecraft:wheat` | <img src="https://pixlcore.com/software/mss/images/wheat.png?v=3" width="32" height="32"> |
| `minecraft:wheat_seeds` | <img src="https://pixlcore.com/software/mss/images/wheat_seeds.png?v=3" width="32" height="32"> |
| `minecraft:bamboo_sapling` | <img src="https://pixlcore.com/software/mss/images/bamboo_sapling.png?v=3" width="32" height="32"> |
| `minecraft:cornflower` | <img src="https://pixlcore.com/software/mss/images/cornflower.png?v=3" width="32" height="32"> |
| `minecraft:lily_of_the_valley` | <img src="https://pixlcore.com/software/mss/images/lily_of_the_valley.png?v=3" width="32" height="32"> |
| `minecraft:potted_bamboo` | <img src="https://pixlcore.com/software/mss/images/potted_bamboo.png?v=3" width="32" height="32"> |
| `minecraft:potted_cornflower` | <img src="https://pixlcore.com/software/mss/images/potted_cornflower.png?v=3" width="32" height="32"> |
| `minecraft:potted_lily_of_the_valley` | <img src="https://pixlcore.com/software/mss/images/potted_lily_of_the_valley.png?v=3" width="32" height="32"> |
| `minecraft:potted_wither_rose` | <img src="https://pixlcore.com/software/mss/images/potted_wither_rose.png?v=3" width="32" height="32"> |
| `minecraft:sweet_berry_bush` | <img src="https://pixlcore.com/software/mss/images/sweet_berry_bush.png?v=3" width="32" height="32"> |
| `minecraft:wither_rose` | <img src="https://pixlcore.com/software/mss/images/wither_rose.png?v=3" width="32" height="32"> |
| `minecraft:sweet_berries` | <img src="https://pixlcore.com/software/mss/images/sweet_berries.png?v=3" width="32" height="32"> |
| `minecraft:bamboo` | <img src="https://pixlcore.com/software/mss/images/bamboo.png?v=3" width="32" height="32"> |
| `minecraft:crimson_fungus` | <img src="https://pixlcore.com/software/mss/images/crimson_fungus.png?v=3" width="32" height="32"> |
| `minecraft:warped_fungus` | <img src="https://pixlcore.com/software/mss/images/warped_fungus.png?v=3" width="32" height="32"> |
| `minecraft:crimson_roots` | <img src="https://pixlcore.com/software/mss/images/crimson_roots.png?v=3" width="32" height="32"> |
| `minecraft:warped_roots` | <img src="https://pixlcore.com/software/mss/images/warped_roots.png?v=3" width="32" height="32"> |
| `minecraft:nether_sprouts` | <img src="https://pixlcore.com/software/mss/images/nether_sprouts.png?v=3" width="32" height="32"> |
| `minecraft:weeping_vines` | <img src="https://pixlcore.com/software/mss/images/weeping_vines.png?v=3" width="32" height="32"> |
| `minecraft:twisting_vines` | <img src="https://pixlcore.com/software/mss/images/twisting_vines.png?v=3" width="32" height="32"> |
| `minecraft:warped_wart_block` | <img src="https://pixlcore.com/software/mss/images/warped_wart_block.png?v=3" width="32" height="32"> |

</p>
</details>

#### Flowers

| Group ID | Items | Fallback Group | Item Frame | Image |
|----------|-------|----------------|------------|-------|
| `flowers` | 15 | Plants | `minecraft:poppy` | <img src="https://pixlcore.com/software/mss/images/poppy.png?v=3" width="32" height="32"> |

The Flowers group contains all the flowers in the game.  These are sorted separately from [Plants](#plants) because there are so many varieties: allium, azure bluet, blue orchid, chorus flower, dandelion, lilac, tulip, daisy, just to name a few.  This group is optional, so if you omit the item frame all flowers will fall back to sorting into the [Plants](#plants) group.

<details><summary>Click to Show Flowers Items</summary>
<p>

| Item ID | Image |
|---------|-------|
| `minecraft:allium` | <img src="https://pixlcore.com/software/mss/images/allium.png?v=3" width="32" height="32"> |
| `minecraft:azure_bluet` | <img src="https://pixlcore.com/software/mss/images/azure_bluet.png?v=3" width="32" height="32"> |
| `minecraft:blue_orchid` | <img src="https://pixlcore.com/software/mss/images/blue_orchid.png?v=3" width="32" height="32"> |
| `minecraft:chorus_flower` | <img src="https://pixlcore.com/software/mss/images/chorus_flower.png?v=3" width="32" height="32"> |
| `minecraft:dandelion` | <img src="https://pixlcore.com/software/mss/images/dandelion.png?v=3" width="32" height="32"> |
| `minecraft:lilac` | <img src="https://pixlcore.com/software/mss/images/lilac.png?v=3" width="32" height="32"> |
| `minecraft:orange_tulip` | <img src="https://pixlcore.com/software/mss/images/orange_tulip.png?v=3" width="32" height="32"> |
| `minecraft:oxeye_daisy` | <img src="https://pixlcore.com/software/mss/images/oxeye_daisy.png?v=3" width="32" height="32"> |
| `minecraft:peony` | <img src="https://pixlcore.com/software/mss/images/peony.png?v=3" width="32" height="32"> |
| `minecraft:pink_tulip` | <img src="https://pixlcore.com/software/mss/images/pink_tulip.png?v=3" width="32" height="32"> |
| `minecraft:poppy` | <img src="https://pixlcore.com/software/mss/images/poppy.png?v=3" width="32" height="32"> |
| `minecraft:red_tulip` | <img src="https://pixlcore.com/software/mss/images/red_tulip.png?v=3" width="32" height="32"> |
| `minecraft:rose_bush` | <img src="https://pixlcore.com/software/mss/images/rose_bush.png?v=3" width="32" height="32"> |
| `minecraft:sunflower` | <img src="https://pixlcore.com/software/mss/images/sunflower.png?v=3" width="32" height="32"> |
| `minecraft:white_tulip` | <img src="https://pixlcore.com/software/mss/images/white_tulip.png?v=3" width="32" height="32"> |

</p>
</details>

### Food

| Group ID | Items | Fallback Group | Item Frame | Image |
|----------|-------|----------------|------------|-------|
| `food` | 20 | Misc | `minecraft:cooked_beef` | <img src="https://pixlcore.com/software/mss/images/cooked_beef.png?v=3" width="32" height="32"> |

The Food group contains specifically cooked foods, which are ready to eat.  It also contains some fresh foods that do not cook and can be eaten raw (e.g. carrots, apples and melon slices), and ingredients to make other foods like sugar.

<details><summary>Click to Show Food Items</summary>
<p>

| Item ID | Image |
|---------|-------|
| `minecraft:apple` | <img src="https://pixlcore.com/software/mss/images/apple.png?v=3" width="32" height="32"> |
| `minecraft:baked_potato` | <img src="https://pixlcore.com/software/mss/images/baked_potato.png?v=3" width="32" height="32"> |
| `minecraft:beetroot_soup` | <img src="https://pixlcore.com/software/mss/images/beetroot_soup.png?v=3" width="32" height="32"> |
| `minecraft:bread` | <img src="https://pixlcore.com/software/mss/images/bread.png?v=3" width="32" height="32"> |
| `minecraft:cake` | <img src="https://pixlcore.com/software/mss/images/cake.png?v=3" width="32" height="32"> |
| `minecraft:carrot` | <img src="https://pixlcore.com/software/mss/images/carrot.png?v=3" width="32" height="32"> |
| `minecraft:cooked_beef` | <img src="https://pixlcore.com/software/mss/images/cooked_beef.png?v=3" width="32" height="32"> |
| `minecraft:cooked_chicken` | <img src="https://pixlcore.com/software/mss/images/cooked_chicken.png?v=3" width="32" height="32"> |
| `minecraft:cooked_cod` | <img src="https://pixlcore.com/software/mss/images/cooked_cod.png?v=3" width="32" height="32"> |
| `minecraft:cooked_mutton` | <img src="https://pixlcore.com/software/mss/images/cooked_mutton.png?v=3" width="32" height="32"> |
| `minecraft:cooked_porkchop` | <img src="https://pixlcore.com/software/mss/images/cooked_porkchop.png?v=3" width="32" height="32"> |
| `minecraft:cooked_rabbit` | <img src="https://pixlcore.com/software/mss/images/cooked_rabbit.png?v=3" width="32" height="32"> |
| `minecraft:cooked_salmon` | <img src="https://pixlcore.com/software/mss/images/cooked_salmon.png?v=3" width="32" height="32"> |
| `minecraft:cookie` | <img src="https://pixlcore.com/software/mss/images/cookie.png?v=3" width="32" height="32"> |
| `minecraft:melon_slice` | <img src="https://pixlcore.com/software/mss/images/melon_slice.png?v=3" width="32" height="32"> |
| `minecraft:mushroom_stew` | <img src="https://pixlcore.com/software/mss/images/mushroom_stew.png?v=3" width="32" height="32"> |
| `minecraft:pumpkin_pie` | <img src="https://pixlcore.com/software/mss/images/pumpkin_pie.png?v=3" width="32" height="32"> |
| `minecraft:rabbit_stew` | <img src="https://pixlcore.com/software/mss/images/rabbit_stew.png?v=3" width="32" height="32"> |
| `minecraft:sugar` | <img src="https://pixlcore.com/software/mss/images/sugar.png?v=3" width="32" height="32"> |
| `minecraft:suspicious_stew` | <img src="https://pixlcore.com/software/mss/images/suspicious_stew.png?v=3" width="32" height="32"> |

</p>
</details>

#### Raw

| Group ID | Items | Fallback Group | Item Frame | Image |
|----------|-------|----------------|------------|-------|
| `raw` | 8 | Food | `minecraft:beef` | <img src="https://pixlcore.com/software/mss/images/beef.png?v=3" width="32" height="32"> |

The Raw group contains specifically raw foods, which require cooking before eating.  This includes raw beef, chicken, cod, mutton, porkchop, potato, rabbit and salmon.  The idea is that you can automate cooking by routing this group into a smelter.  If the Raw group item frame is omitted, all the raw items fall back to to the [Food](#food) group.

<details><summary>Click to Show Raw Items</summary>
<p>

| Item ID | Image |
|---------|-------|
| `minecraft:beef` | <img src="https://pixlcore.com/software/mss/images/beef.png?v=3" width="32" height="32"> |
| `minecraft:chicken` | <img src="https://pixlcore.com/software/mss/images/chicken.png?v=3" width="32" height="32"> |
| `minecraft:cod` | <img src="https://pixlcore.com/software/mss/images/cod.png?v=3" width="32" height="32"> |
| `minecraft:mutton` | <img src="https://pixlcore.com/software/mss/images/mutton.png?v=3" width="32" height="32"> |
| `minecraft:porkchop` | <img src="https://pixlcore.com/software/mss/images/porkchop.png?v=3" width="32" height="32"> |
| `minecraft:potato` | <img src="https://pixlcore.com/software/mss/images/potato.png?v=3" width="32" height="32"> |
| `minecraft:rabbit` | <img src="https://pixlcore.com/software/mss/images/rabbit.png?v=3" width="32" height="32"> |
| `minecraft:salmon` | <img src="https://pixlcore.com/software/mss/images/salmon.png?v=3" width="32" height="32"> |

</p>
</details>

### Mobs

| Group ID | Items | Fallback Group | Item Frame | Image |
|----------|-------|----------------|------------|-------|
| `mobs` | 103 | Misc | `minecraft:bone` | <img src="https://pixlcore.com/software/mss/images/bone.png?v=3" width="32" height="32"> |

The Mobs group contains all organic items dropped from mobs.  This includes bones, cobwebs, string, eggs, feathers, tears, leather, infested blocks (hidden monster spawners), rotten flesh, feet, hides, scutes, slime, mob spawners, mob spawn eggs and mob heads.

<details><summary>Click to Show Mobs Items</summary>
<p>

| Item ID | Image |
|---------|-------|
| `minecraft:bat_spawn_egg` | <img src="https://pixlcore.com/software/mss/images/bat_spawn_egg.png?v=3" width="32" height="32"> |
| `minecraft:blaze_spawn_egg` | <img src="https://pixlcore.com/software/mss/images/blaze_spawn_egg.png?v=3" width="32" height="32"> |
| `minecraft:bone` | <img src="https://pixlcore.com/software/mss/images/bone.png?v=3" width="32" height="32"> |
| `minecraft:bone_block` | <img src="https://pixlcore.com/software/mss/images/bone_block.png?v=3" width="32" height="32"> |
| `minecraft:bone_meal` | <img src="https://pixlcore.com/software/mss/images/bone_meal.png?v=3" width="32" height="32"> |
| `minecraft:cave_spider_spawn_egg` | <img src="https://pixlcore.com/software/mss/images/cave_spider_spawn_egg.png?v=3" width="32" height="32"> |
| `minecraft:chicken_spawn_egg` | <img src="https://pixlcore.com/software/mss/images/chicken_spawn_egg.png?v=3" width="32" height="32"> |
| `minecraft:cobweb` | <img src="https://pixlcore.com/software/mss/images/cobweb.png?v=3" width="32" height="32"> |
| `minecraft:cod_spawn_egg` | <img src="https://pixlcore.com/software/mss/images/cod_spawn_egg.png?v=3" width="32" height="32"> |
| `minecraft:cow_spawn_egg` | <img src="https://pixlcore.com/software/mss/images/cow_spawn_egg.png?v=3" width="32" height="32"> |
| `minecraft:creeper_head` | <img src="https://pixlcore.com/software/mss/images/creeper_head.png?v=3" width="32" height="32"> |
| `minecraft:creeper_spawn_egg` | <img src="https://pixlcore.com/software/mss/images/creeper_spawn_egg.png?v=3" width="32" height="32"> |
| `minecraft:dolphin_spawn_egg` | <img src="https://pixlcore.com/software/mss/images/dolphin_spawn_egg.png?v=3" width="32" height="32"> |
| `minecraft:donkey_spawn_egg` | <img src="https://pixlcore.com/software/mss/images/donkey_spawn_egg.png?v=3" width="32" height="32"> |
| `minecraft:dragon_egg` | <img src="https://pixlcore.com/software/mss/images/dragon_egg.png?v=3" width="32" height="32"> |
| `minecraft:dragon_head` | <img src="https://pixlcore.com/software/mss/images/dragon_head.png?v=3" width="32" height="32"> |
| `minecraft:drowned_spawn_egg` | <img src="https://pixlcore.com/software/mss/images/drowned_spawn_egg.png?v=3" width="32" height="32"> |
| `minecraft:egg` | <img src="https://pixlcore.com/software/mss/images/egg.png?v=3" width="32" height="32"> |
| `minecraft:elder_guardian_spawn_egg` | <img src="https://pixlcore.com/software/mss/images/elder_guardian_spawn_egg.png?v=3" width="32" height="32"> |
| `minecraft:enderman_spawn_egg` | <img src="https://pixlcore.com/software/mss/images/enderman_spawn_egg.png?v=3" width="32" height="32"> |
| `minecraft:endermite_spawn_egg` | <img src="https://pixlcore.com/software/mss/images/endermite_spawn_egg.png?v=3" width="32" height="32"> |
| `minecraft:evoker_spawn_egg` | <img src="https://pixlcore.com/software/mss/images/evoker_spawn_egg.png?v=3" width="32" height="32"> |
| `minecraft:feather` | <img src="https://pixlcore.com/software/mss/images/feather.png?v=3" width="32" height="32"> |
| `minecraft:fermented_spider_eye` | <img src="https://pixlcore.com/software/mss/images/fermented_spider_eye.png?v=3" width="32" height="32"> |
| `minecraft:ghast_spawn_egg` | <img src="https://pixlcore.com/software/mss/images/ghast_spawn_egg.png?v=3" width="32" height="32"> |
| `minecraft:ghast_tear` | <img src="https://pixlcore.com/software/mss/images/ghast_tear.png?v=3" width="32" height="32"> |
| `minecraft:guardian_spawn_egg` | <img src="https://pixlcore.com/software/mss/images/guardian_spawn_egg.png?v=3" width="32" height="32"> |
| `minecraft:horse_spawn_egg` | <img src="https://pixlcore.com/software/mss/images/horse_spawn_egg.png?v=3" width="32" height="32"> |
| `minecraft:husk_spawn_egg` | <img src="https://pixlcore.com/software/mss/images/husk_spawn_egg.png?v=3" width="32" height="32"> |
| `minecraft:infested_chiseled_stone_bricks` | <img src="https://pixlcore.com/software/mss/images/infested_chiseled_stone_bricks.png?v=3" width="32" height="32"> |
| `minecraft:infested_cobblestone` | <img src="https://pixlcore.com/software/mss/images/infested_cobblestone.png?v=3" width="32" height="32"> |
| `minecraft:infested_cracked_stone_bricks` | <img src="https://pixlcore.com/software/mss/images/infested_cracked_stone_bricks.png?v=3" width="32" height="32"> |
| `minecraft:infested_mossy_stone_bricks` | <img src="https://pixlcore.com/software/mss/images/infested_mossy_stone_bricks.png?v=3" width="32" height="32"> |
| `minecraft:infested_stone` | <img src="https://pixlcore.com/software/mss/images/infested_stone.png?v=3" width="32" height="32"> |
| `minecraft:infested_stone_bricks` | <img src="https://pixlcore.com/software/mss/images/infested_stone_bricks.png?v=3" width="32" height="32"> |
| `minecraft:leather` | <img src="https://pixlcore.com/software/mss/images/leather.png?v=3" width="32" height="32"> |
| `minecraft:llama_spawn_egg` | <img src="https://pixlcore.com/software/mss/images/llama_spawn_egg.png?v=3" width="32" height="32"> |
| `minecraft:magma_cube_spawn_egg` | <img src="https://pixlcore.com/software/mss/images/magma_cube_spawn_egg.png?v=3" width="32" height="32"> |
| `minecraft:spawner` | <img src="https://pixlcore.com/software/mss/images/spawner.png?v=3" width="32" height="32"> |
| `minecraft:mooshroom_spawn_egg` | <img src="https://pixlcore.com/software/mss/images/mooshroom_spawn_egg.png?v=3" width="32" height="32"> |
| `minecraft:mule_spawn_egg` | <img src="https://pixlcore.com/software/mss/images/mule_spawn_egg.png?v=3" width="32" height="32"> |
| `minecraft:ocelot_spawn_egg` | <img src="https://pixlcore.com/software/mss/images/ocelot_spawn_egg.png?v=3" width="32" height="32"> |
| `minecraft:parrot_spawn_egg` | <img src="https://pixlcore.com/software/mss/images/parrot_spawn_egg.png?v=3" width="32" height="32"> |
| `minecraft:phantom_membrane` | <img src="https://pixlcore.com/software/mss/images/phantom_membrane.png?v=3" width="32" height="32"> |
| `minecraft:phantom_spawn_egg` | <img src="https://pixlcore.com/software/mss/images/phantom_spawn_egg.png?v=3" width="32" height="32"> |
| `minecraft:pig_spawn_egg` | <img src="https://pixlcore.com/software/mss/images/pig_spawn_egg.png?v=3" width="32" height="32"> |
| `minecraft:player_head` | <img src="https://pixlcore.com/software/mss/images/player_head.png?v=3" width="32" height="32"> |
| `minecraft:polar_bear_spawn_egg` | <img src="https://pixlcore.com/software/mss/images/polar_bear_spawn_egg.png?v=3" width="32" height="32"> |
| `minecraft:pufferfish_spawn_egg` | <img src="https://pixlcore.com/software/mss/images/pufferfish_spawn_egg.png?v=3" width="32" height="32"> |
| `minecraft:rabbit_foot` | <img src="https://pixlcore.com/software/mss/images/rabbit_foot.png?v=3" width="32" height="32"> |
| `minecraft:rabbit_hide` | <img src="https://pixlcore.com/software/mss/images/rabbit_hide.png?v=3" width="32" height="32"> |
| `minecraft:rabbit_spawn_egg` | <img src="https://pixlcore.com/software/mss/images/rabbit_spawn_egg.png?v=3" width="32" height="32"> |
| `minecraft:rotten_flesh` | <img src="https://pixlcore.com/software/mss/images/rotten_flesh.png?v=3" width="32" height="32"> |
| `minecraft:salmon_spawn_egg` | <img src="https://pixlcore.com/software/mss/images/salmon_spawn_egg.png?v=3" width="32" height="32"> |
| `minecraft:scute` | <img src="https://pixlcore.com/software/mss/images/scute.png?v=3" width="32" height="32"> |
| `minecraft:sheep_spawn_egg` | <img src="https://pixlcore.com/software/mss/images/sheep_spawn_egg.png?v=3" width="32" height="32"> |
| `minecraft:shulker_shell` | <img src="https://pixlcore.com/software/mss/images/shulker_shell.png?v=3" width="32" height="32"> |
| `minecraft:shulker_spawn_egg` | <img src="https://pixlcore.com/software/mss/images/shulker_spawn_egg.png?v=3" width="32" height="32"> |
| `minecraft:silverfish_spawn_egg` | <img src="https://pixlcore.com/software/mss/images/silverfish_spawn_egg.png?v=3" width="32" height="32"> |
| `minecraft:skeleton_horse_spawn_egg` | <img src="https://pixlcore.com/software/mss/images/skeleton_horse_spawn_egg.png?v=3" width="32" height="32"> |
| `minecraft:skeleton_skull` | <img src="https://pixlcore.com/software/mss/images/skeleton_skull.png?v=3" width="32" height="32"> |
| `minecraft:skeleton_spawn_egg` | <img src="https://pixlcore.com/software/mss/images/skeleton_spawn_egg.png?v=3" width="32" height="32"> |
| `minecraft:slime_ball` | <img src="https://pixlcore.com/software/mss/images/slime_ball.png?v=3" width="32" height="32"> |
| `minecraft:slime_block` | <img src="https://pixlcore.com/software/mss/images/slime_block.png?v=3" width="32" height="32"> |
| `minecraft:slime_spawn_egg` | <img src="https://pixlcore.com/software/mss/images/slime_spawn_egg.png?v=3" width="32" height="32"> |
| `minecraft:spider_eye` | <img src="https://pixlcore.com/software/mss/images/spider_eye.png?v=3" width="32" height="32"> |
| `minecraft:spider_spawn_egg` | <img src="https://pixlcore.com/software/mss/images/spider_spawn_egg.png?v=3" width="32" height="32"> |
| `minecraft:squid_spawn_egg` | <img src="https://pixlcore.com/software/mss/images/squid_spawn_egg.png?v=3" width="32" height="32"> |
| `minecraft:stray_spawn_egg` | <img src="https://pixlcore.com/software/mss/images/stray_spawn_egg.png?v=3" width="32" height="32"> |
| `minecraft:string` | <img src="https://pixlcore.com/software/mss/images/string.png?v=3" width="32" height="32"> |
| `minecraft:tropical_fish_spawn_egg` | <img src="https://pixlcore.com/software/mss/images/tropical_fish_spawn_egg.png?v=3" width="32" height="32"> |
| `minecraft:turtle_egg` | <img src="https://pixlcore.com/software/mss/images/turtle_egg.png?v=3" width="32" height="32"> |
| `minecraft:turtle_spawn_egg` | <img src="https://pixlcore.com/software/mss/images/turtle_spawn_egg.png?v=3" width="32" height="32"> |
| `minecraft:vex_spawn_egg` | <img src="https://pixlcore.com/software/mss/images/vex_spawn_egg.png?v=3" width="32" height="32"> |
| `minecraft:villager_spawn_egg` | <img src="https://pixlcore.com/software/mss/images/villager_spawn_egg.png?v=3" width="32" height="32"> |
| `minecraft:vindicator_spawn_egg` | <img src="https://pixlcore.com/software/mss/images/vindicator_spawn_egg.png?v=3" width="32" height="32"> |
| `minecraft:witch_spawn_egg` | <img src="https://pixlcore.com/software/mss/images/witch_spawn_egg.png?v=3" width="32" height="32"> |
| `minecraft:wither_skeleton_skull` | <img src="https://pixlcore.com/software/mss/images/wither_skeleton_skull.png?v=3" width="32" height="32"> |
| `minecraft:wither_skeleton_spawn_egg` | <img src="https://pixlcore.com/software/mss/images/wither_skeleton_spawn_egg.png?v=3" width="32" height="32"> |
| `minecraft:wolf_spawn_egg` | <img src="https://pixlcore.com/software/mss/images/wolf_spawn_egg.png?v=3" width="32" height="32"> |
| `minecraft:zombie_head` | <img src="https://pixlcore.com/software/mss/images/zombie_head.png?v=3" width="32" height="32"> |
| `minecraft:zombie_horse_spawn_egg` | <img src="https://pixlcore.com/software/mss/images/zombie_horse_spawn_egg.png?v=3" width="32" height="32"> |
| `minecraft:zombie_pigman_spawn_egg` | <img src="https://pixlcore.com/software/mss/images/zombie_pigman_spawn_egg.png?v=3" width="32" height="32"> |
| `minecraft:zombie_spawn_egg` | <img src="https://pixlcore.com/software/mss/images/zombie_spawn_egg.png?v=3" width="32" height="32"> |
| `minecraft:zombie_villager_spawn_egg` | <img src="https://pixlcore.com/software/mss/images/zombie_villager_spawn_egg.png?v=3" width="32" height="32"> |
| `minecraft:cat_spawn_egg` | <img src="https://pixlcore.com/software/mss/images/cat_spawn_egg.png?v=3" width="32" height="32"> |
| `minecraft:fox_spawn_egg` | <img src="https://pixlcore.com/software/mss/images/fox_spawn_egg.png?v=3" width="32" height="32"> |
| `minecraft:panda_spawn_egg` | <img src="https://pixlcore.com/software/mss/images/panda_spawn_egg.png?v=3" width="32" height="32"> |
| `minecraft:pillager_spawn_egg` | <img src="https://pixlcore.com/software/mss/images/pillager_spawn_egg.png?v=3" width="32" height="32"> |
| `minecraft:ravager_spawn_egg` | <img src="https://pixlcore.com/software/mss/images/ravager_spawn_egg.png?v=3" width="32" height="32"> |
| `minecraft:trader_llama_spawn_egg` | <img src="https://pixlcore.com/software/mss/images/trader_llama_spawn_egg.png?v=3" width="32" height="32"> |
| `minecraft:wandering_trader_spawn_egg` | <img src="https://pixlcore.com/software/mss/images/wandering_trader_spawn_egg.png?v=3" width="32" height="32"> |
| `minecraft:bee_nest` | <img src="https://pixlcore.com/software/mss/images/bee_nest.png?v=3" width="32" height="32"> |
| `minecraft:bee_spawn_egg` | <img src="https://pixlcore.com/software/mss/images/bee_spawn_egg.png?v=3" width="32" height="32"> |
| `minecraft:honey_block` | <img src="https://pixlcore.com/software/mss/images/honey_block.png?v=3" width="32" height="32"> |
| `minecraft:honeycomb` | <img src="https://pixlcore.com/software/mss/images/honeycomb.png?v=3" width="32" height="32"> |
| `minecraft:honeycomb_block` | <img src="https://pixlcore.com/software/mss/images/honeycomb_block.png?v=3" width="32" height="32"> |
| `minecraft:hoglin_spawn_egg` | <img src="https://pixlcore.com/software/mss/images/hoglin_spawn_egg.png?v=3" width="32" height="32"> |
| `minecraft:piglin_spawn_egg` | <img src="https://pixlcore.com/software/mss/images/piglin_spawn_egg.png?v=3" width="32" height="32"> |
| `minecraft:piglin_brute_spawn_egg` | <img src="https://pixlcore.com/software/mss/images/piglin_brute_spawn_egg.png?v=3" width="32" height="32"> |
| `minecraft:strider_spawn_egg` | <img src="https://pixlcore.com/software/mss/images/strider_spawn_egg.png?v=3" width="32" height="32"> |
| `minecraft:zoglin_spawn_egg` | <img src="https://pixlcore.com/software/mss/images/zoglin_spawn_egg.png?v=3" width="32" height="32"> |
| `minecraft:zombified_piglin_spawn_egg` | <img src="https://pixlcore.com/software/mss/images/zombified_piglin_spawn_egg.png?v=3" width="32" height="32"> |

</p>
</details>

### Precious

| Group ID | Items | Fallback Group | Item Frame | Image |
|----------|-------|----------------|------------|-------|
| `precious` | 21 | Misc | `minecraft:gold_ingot` | <img src="https://pixlcore.com/software/mss/images/gold_ingot.png?v=3" width="32" height="32"> |

The Precious group contains items that can be classified as expensive or rare, like ingots, nuggets, elytra wings, nether stars, totems, tridents, hearts of the sea, beacons and conduits.

<details><summary>Click to Show Precious Items</summary>
<p>

| Item ID | Image |
|---------|-------|
| `minecraft:beacon` | <img src="https://pixlcore.com/software/mss/images/beacon.png?v=3" width="32" height="32"> |
| `minecraft:conduit` | <img src="https://pixlcore.com/software/mss/images/conduit.png?v=3" width="32" height="32"> |
| `minecraft:diamond` | <img src="https://pixlcore.com/software/mss/images/diamond.png?v=3" width="32" height="32"> |
| `minecraft:diamond_block` | <img src="https://pixlcore.com/software/mss/images/diamond_block.png?v=3" width="32" height="32"> |
| `minecraft:diamond_ore` | <img src="https://pixlcore.com/software/mss/images/diamond_ore.png?v=3" width="32" height="32"> |
| `minecraft:elytra` | <img src="https://pixlcore.com/software/mss/images/elytra.png?v=3" width="32" height="32"> |
| `minecraft:emerald` | <img src="https://pixlcore.com/software/mss/images/emerald.png?v=3" width="32" height="32"> |
| `minecraft:emerald_block` | <img src="https://pixlcore.com/software/mss/images/emerald_block.png?v=3" width="32" height="32"> |
| `minecraft:gold_block` | <img src="https://pixlcore.com/software/mss/images/gold_block.png?v=3" width="32" height="32"> |
| `minecraft:gold_ingot` | <img src="https://pixlcore.com/software/mss/images/gold_ingot.png?v=3" width="32" height="32"> |
| `minecraft:gold_nugget` | <img src="https://pixlcore.com/software/mss/images/gold_nugget.png?v=3" width="32" height="32"> |
| `minecraft:heart_of_the_sea` | <img src="https://pixlcore.com/software/mss/images/heart_of_the_sea.png?v=3" width="32" height="32"> |
| `minecraft:iron_ingot` | <img src="https://pixlcore.com/software/mss/images/iron_ingot.png?v=3" width="32" height="32"> |
| `minecraft:iron_nugget` | <img src="https://pixlcore.com/software/mss/images/iron_nugget.png?v=3" width="32" height="32"> |
| `minecraft:nether_star` | <img src="https://pixlcore.com/software/mss/images/nether_star.png?v=3" width="32" height="32"> |
| `minecraft:obsidian` | <img src="https://pixlcore.com/software/mss/images/obsidian.png?v=3" width="32" height="32"> |
| `minecraft:totem_of_undying` | <img src="https://pixlcore.com/software/mss/images/totem_of_undying.png?v=3" width="32" height="32"> |
| `minecraft:trident` | <img src="https://pixlcore.com/software/mss/images/trident.png?v=3" width="32" height="32"> |
| `minecraft:netherite_ingot` | <img src="https://pixlcore.com/software/mss/images/netherite_ingot.png?v=3" width="32" height="32"> |
| `minecraft:netherite_scrap` | <img src="https://pixlcore.com/software/mss/images/netherite_scrap.png?v=3" width="32" height="32"> |
| `minecraft:netherite_block` | <img src="https://pixlcore.com/software/mss/images/netherite_block.png?v=3" width="32" height="32"> |

</p>
</details>

#### Lapis

| Group ID | Items | Fallback Group | Item Frame | Image |
|----------|-------|----------------|------------|-------|
| `lapis` | 2 | Precious | `minecraft:lapis_lazuli` | <img src="https://pixlcore.com/software/mss/images/lapis_lazuli.png?v=3" width="32" height="32"> |

The Lapis group contains both lapis lazuli and lapis blocks.  This group is optional, and if omitted the items will fall back to the Precious group.

<details><summary>Click to Show Lapis Items</summary>
<p>

| Item ID | Image |
|---------|-------|
| `minecraft:lapis_block` | <img src="https://pixlcore.com/software/mss/images/lapis_block.png?v=3" width="32" height="32"> |
| `minecraft:lapis_lazuli` | <img src="https://pixlcore.com/software/mss/images/lapis_lazuli.png?v=3" width="32" height="32"> |

</p>
</details>

### Magic

| Group ID | Items | Fallback Group | Item Frame | Image |
|----------|-------|----------------|------------|-------|
| `magic` | 16 | Misc | `minecraft:glass_bottle` | <img src="https://pixlcore.com/software/mss/images/glass_bottle.png?v=3" width="32" height="32"> |

The Magic group contains magical items, or items designed to work with magic or potions.  This includes blaze powder, blaze rods, brewing stands, cauldrons, enchanted books, ender eyes and pearls, potions of all kinds, golden apples and golden carrots.

<details><summary>Click to Show Magic Items</summary>
<p>

| Item ID | Image |
|---------|-------|
| `minecraft:bedrock` | <img src="https://pixlcore.com/software/mss/images/bedrock.png?v=3" width="32" height="32"> |
| `minecraft:blaze_powder` | <img src="https://pixlcore.com/software/mss/images/blaze_powder.png?v=3" width="32" height="32"> |
| `minecraft:blaze_rod` | <img src="https://pixlcore.com/software/mss/images/blaze_rod.png?v=3" width="32" height="32"> |
| `minecraft:brewing_stand` | <img src="https://pixlcore.com/software/mss/images/brewing_stand.png?v=3" width="32" height="32"> |
| `minecraft:cauldron` | <img src="https://pixlcore.com/software/mss/images/cauldron.png?v=3" width="32" height="32"> |
| `minecraft:dragon_breath` | <img src="https://pixlcore.com/software/mss/images/dragon_breath.png?v=3" width="32" height="32"> |
| `minecraft:enchanted_golden_apple` | <img src="https://pixlcore.com/software/mss/images/enchanted_golden_apple.png?v=3" width="32" height="32"> |
| `minecraft:enchanting_table` | <img src="https://pixlcore.com/software/mss/images/enchanting_table.png?v=3" width="32" height="32"> |
| `minecraft:ender_eye` | <img src="https://pixlcore.com/software/mss/images/ender_eye.png?v=3" width="32" height="32"> |
| `minecraft:ender_pearl` | <img src="https://pixlcore.com/software/mss/images/ender_pearl.png?v=3" width="32" height="32"> |
| `minecraft:experience_bottle` | <img src="https://pixlcore.com/software/mss/images/experience_bottle.png?v=3" width="32" height="32"> |
| `minecraft:glass_bottle` | <img src="https://pixlcore.com/software/mss/images/glass_bottle.png?v=3" width="32" height="32"> |
| `minecraft:glistering_melon_slice` | <img src="https://pixlcore.com/software/mss/images/glistering_melon_slice.png?v=3" width="32" height="32"> |
| `minecraft:golden_apple` | <img src="https://pixlcore.com/software/mss/images/golden_apple.png?v=3" width="32" height="32"> |
| `minecraft:golden_carrot` | <img src="https://pixlcore.com/software/mss/images/golden_carrot.png?v=3" width="32" height="32"> |
| `minecraft:honey_bottle` | <img src="https://pixlcore.com/software/mss/images/honey_bottle.png?v=3" width="32" height="32"> |

</p>
</details>

#### Potions

| Group ID | Items | Fallback Group | Item Frame | Image |
|----------|-------|----------------|------------|-------|
| `potions` | 3 | Magic | `minecraft:potion` | <img src="https://pixlcore.com/software/mss/images/potion.png?v=3" width="32" height="32"> |

The Potions group contains all three kinds of potions (standard, lingering and splash).  This group is optional, and if omitted the items will fall back to the Magic group.

<details><summary>Click to Show Potions Items</summary>
<p>

| Item ID | Image |
|---------|-------|
| `minecraft:lingering_potion` | <img src="https://pixlcore.com/software/mss/images/lingering_potion.png?v=3" width="32" height="32"> |
| `minecraft:potion` | <img src="https://pixlcore.com/software/mss/images/potion.png?v=3" width="32" height="32"> |
| `minecraft:splash_potion` | <img src="https://pixlcore.com/software/mss/images/splash_potion.png?v=3" width="32" height="32"> |

</p>
</details>

#### Books

| Group ID | Items | Fallback Group | Item Frame | Image |
|----------|-------|----------------|------------|-------|
| `books` | 2 | Magic | `minecraft:book` | <img src="https://pixlcore.com/software/mss/images/book.png?v=3" width="32" height="32"> |

The Books group contains both standard books and enchanted books.  This group is optional, and if omitted the items will fall back to the Magic group.

<details><summary>Click to Show Books Items</summary>
<p>

| Item ID | Image |
|---------|-------|
| `minecraft:book` | <img src="https://pixlcore.com/software/mss/images/book.png?v=3" width="32" height="32"> |
| `minecraft:enchanted_book` | <img src="https://pixlcore.com/software/mss/images/enchanted_book.png?v=3" width="32" height="32"> |

</p>
</details>

### Wool

| Group ID | Items | Fallback Group | Item Frame | Image |
|----------|-------|----------------|------------|-------|
| `wool` | 54 | Misc | `minecraft:white_wool` | <img src="https://pixlcore.com/software/mss/images/white_wool.png?v=3" width="32" height="32"> |

The Wool group contains wool of all colors, as well as carpet and banners.

<details><summary>Click to Show Wool Items</summary>
<p>

| Item ID | Image |
|---------|-------|
| `minecraft:black_banner` | <img src="https://pixlcore.com/software/mss/images/black_banner.png?v=3" width="32" height="32"> |
| `minecraft:black_carpet` | <img src="https://pixlcore.com/software/mss/images/black_carpet.png?v=3" width="32" height="32"> |
| `minecraft:black_wool` | <img src="https://pixlcore.com/software/mss/images/black_wool.png?v=3" width="32" height="32"> |
| `minecraft:blue_banner` | <img src="https://pixlcore.com/software/mss/images/blue_banner.png?v=3" width="32" height="32"> |
| `minecraft:blue_carpet` | <img src="https://pixlcore.com/software/mss/images/blue_carpet.png?v=3" width="32" height="32"> |
| `minecraft:blue_wool` | <img src="https://pixlcore.com/software/mss/images/blue_wool.png?v=3" width="32" height="32"> |
| `minecraft:brown_banner` | <img src="https://pixlcore.com/software/mss/images/brown_banner.png?v=3" width="32" height="32"> |
| `minecraft:brown_carpet` | <img src="https://pixlcore.com/software/mss/images/brown_carpet.png?v=3" width="32" height="32"> |
| `minecraft:brown_wool` | <img src="https://pixlcore.com/software/mss/images/brown_wool.png?v=3" width="32" height="32"> |
| `minecraft:cyan_banner` | <img src="https://pixlcore.com/software/mss/images/cyan_banner.png?v=3" width="32" height="32"> |
| `minecraft:cyan_carpet` | <img src="https://pixlcore.com/software/mss/images/cyan_carpet.png?v=3" width="32" height="32"> |
| `minecraft:cyan_wool` | <img src="https://pixlcore.com/software/mss/images/cyan_wool.png?v=3" width="32" height="32"> |
| `minecraft:gray_banner` | <img src="https://pixlcore.com/software/mss/images/gray_banner.png?v=3" width="32" height="32"> |
| `minecraft:gray_carpet` | <img src="https://pixlcore.com/software/mss/images/gray_carpet.png?v=3" width="32" height="32"> |
| `minecraft:gray_wool` | <img src="https://pixlcore.com/software/mss/images/gray_wool.png?v=3" width="32" height="32"> |
| `minecraft:green_banner` | <img src="https://pixlcore.com/software/mss/images/green_banner.png?v=3" width="32" height="32"> |
| `minecraft:green_carpet` | <img src="https://pixlcore.com/software/mss/images/green_carpet.png?v=3" width="32" height="32"> |
| `minecraft:green_wool` | <img src="https://pixlcore.com/software/mss/images/green_wool.png?v=3" width="32" height="32"> |
| `minecraft:light_blue_banner` | <img src="https://pixlcore.com/software/mss/images/light_blue_banner.png?v=3" width="32" height="32"> |
| `minecraft:light_blue_carpet` | <img src="https://pixlcore.com/software/mss/images/light_blue_carpet.png?v=3" width="32" height="32"> |
| `minecraft:light_blue_wool` | <img src="https://pixlcore.com/software/mss/images/light_blue_wool.png?v=3" width="32" height="32"> |
| `minecraft:light_gray_banner` | <img src="https://pixlcore.com/software/mss/images/light_gray_banner.png?v=3" width="32" height="32"> |
| `minecraft:light_gray_carpet` | <img src="https://pixlcore.com/software/mss/images/light_gray_carpet.png?v=3" width="32" height="32"> |
| `minecraft:light_gray_wool` | <img src="https://pixlcore.com/software/mss/images/light_gray_wool.png?v=3" width="32" height="32"> |
| `minecraft:lime_banner` | <img src="https://pixlcore.com/software/mss/images/lime_banner.png?v=3" width="32" height="32"> |
| `minecraft:lime_carpet` | <img src="https://pixlcore.com/software/mss/images/lime_carpet.png?v=3" width="32" height="32"> |
| `minecraft:lime_wool` | <img src="https://pixlcore.com/software/mss/images/lime_wool.png?v=3" width="32" height="32"> |
| `minecraft:magenta_banner` | <img src="https://pixlcore.com/software/mss/images/magenta_banner.png?v=3" width="32" height="32"> |
| `minecraft:magenta_carpet` | <img src="https://pixlcore.com/software/mss/images/magenta_carpet.png?v=3" width="32" height="32"> |
| `minecraft:magenta_wool` | <img src="https://pixlcore.com/software/mss/images/magenta_wool.png?v=3" width="32" height="32"> |
| `minecraft:orange_banner` | <img src="https://pixlcore.com/software/mss/images/orange_banner.png?v=3" width="32" height="32"> |
| `minecraft:orange_carpet` | <img src="https://pixlcore.com/software/mss/images/orange_carpet.png?v=3" width="32" height="32"> |
| `minecraft:orange_wool` | <img src="https://pixlcore.com/software/mss/images/orange_wool.png?v=3" width="32" height="32"> |
| `minecraft:pink_banner` | <img src="https://pixlcore.com/software/mss/images/pink_banner.png?v=3" width="32" height="32"> |
| `minecraft:pink_carpet` | <img src="https://pixlcore.com/software/mss/images/pink_carpet.png?v=3" width="32" height="32"> |
| `minecraft:pink_wool` | <img src="https://pixlcore.com/software/mss/images/pink_wool.png?v=3" width="32" height="32"> |
| `minecraft:purple_banner` | <img src="https://pixlcore.com/software/mss/images/purple_banner.png?v=3" width="32" height="32"> |
| `minecraft:purple_carpet` | <img src="https://pixlcore.com/software/mss/images/purple_carpet.png?v=3" width="32" height="32"> |
| `minecraft:purple_wool` | <img src="https://pixlcore.com/software/mss/images/purple_wool.png?v=3" width="32" height="32"> |
| `minecraft:red_banner` | <img src="https://pixlcore.com/software/mss/images/red_banner.png?v=3" width="32" height="32"> |
| `minecraft:red_carpet` | <img src="https://pixlcore.com/software/mss/images/red_carpet.png?v=3" width="32" height="32"> |
| `minecraft:red_wool` | <img src="https://pixlcore.com/software/mss/images/red_wool.png?v=3" width="32" height="32"> |
| `minecraft:white_banner` | <img src="https://pixlcore.com/software/mss/images/white_banner.png?v=3" width="32" height="32"> |
| `minecraft:white_carpet` | <img src="https://pixlcore.com/software/mss/images/white_carpet.png?v=3" width="32" height="32"> |
| `minecraft:white_wool` | <img src="https://pixlcore.com/software/mss/images/white_wool.png?v=3" width="32" height="32"> |
| `minecraft:yellow_banner` | <img src="https://pixlcore.com/software/mss/images/yellow_banner.png?v=3" width="32" height="32"> |
| `minecraft:yellow_carpet` | <img src="https://pixlcore.com/software/mss/images/yellow_carpet.png?v=3" width="32" height="32"> |
| `minecraft:yellow_wool` | <img src="https://pixlcore.com/software/mss/images/yellow_wool.png?v=3" width="32" height="32"> |
| `minecraft:flower_banner_pattern` | <img src="https://pixlcore.com/software/mss/images/flower_banner_pattern.png?v=3" width="32" height="32"> |
| `minecraft:creeper_banner_pattern` | <img src="https://pixlcore.com/software/mss/images/creeper_banner_pattern.png?v=3" width="32" height="32"> |
| `minecraft:skull_banner_pattern` | <img src="https://pixlcore.com/software/mss/images/skull_banner_pattern.png?v=3" width="32" height="32"> |
| `minecraft:mojang_banner_pattern` | <img src="https://pixlcore.com/software/mss/images/mojang_banner_pattern.png?v=3" width="32" height="32"> |
| `minecraft:globe_banner_pattern` | <img src="https://pixlcore.com/software/mss/images/globe_banner_pattern.png?v=3" width="32" height="32"> |
| `minecraft:piglin_banner_pattern` | <img src="https://pixlcore.com/software/mss/images/piglin_banner_pattern.png?v=3" width="32" height="32"> |

</p>
</details>

### Concrete

| Group ID | Items | Fallback Group | Item Frame | Image |
|----------|-------|----------------|------------|-------|
| `concrete` | 32 | Misc | `minecraft:gray_concrete_powder` | <img src="https://pixlcore.com/software/mss/images/gray_concrete_powder.png?v=3" width="32" height="32"> |

The Concrete group contains concrete blocks and concrete powder of all colors.

<details><summary>Click to Show Concrete Items</summary>
<p>

| Item ID | Image |
|---------|-------|
| `minecraft:black_concrete` | <img src="https://pixlcore.com/software/mss/images/black_concrete.png?v=3" width="32" height="32"> |
| `minecraft:black_concrete_powder` | <img src="https://pixlcore.com/software/mss/images/black_concrete_powder.png?v=3" width="32" height="32"> |
| `minecraft:blue_concrete` | <img src="https://pixlcore.com/software/mss/images/blue_concrete.png?v=3" width="32" height="32"> |
| `minecraft:blue_concrete_powder` | <img src="https://pixlcore.com/software/mss/images/blue_concrete_powder.png?v=3" width="32" height="32"> |
| `minecraft:brown_concrete` | <img src="https://pixlcore.com/software/mss/images/brown_concrete.png?v=3" width="32" height="32"> |
| `minecraft:brown_concrete_powder` | <img src="https://pixlcore.com/software/mss/images/brown_concrete_powder.png?v=3" width="32" height="32"> |
| `minecraft:cyan_concrete` | <img src="https://pixlcore.com/software/mss/images/cyan_concrete.png?v=3" width="32" height="32"> |
| `minecraft:cyan_concrete_powder` | <img src="https://pixlcore.com/software/mss/images/cyan_concrete_powder.png?v=3" width="32" height="32"> |
| `minecraft:gray_concrete` | <img src="https://pixlcore.com/software/mss/images/gray_concrete.png?v=3" width="32" height="32"> |
| `minecraft:gray_concrete_powder` | <img src="https://pixlcore.com/software/mss/images/gray_concrete_powder.png?v=3" width="32" height="32"> |
| `minecraft:green_concrete` | <img src="https://pixlcore.com/software/mss/images/green_concrete.png?v=3" width="32" height="32"> |
| `minecraft:green_concrete_powder` | <img src="https://pixlcore.com/software/mss/images/green_concrete_powder.png?v=3" width="32" height="32"> |
| `minecraft:light_blue_concrete` | <img src="https://pixlcore.com/software/mss/images/light_blue_concrete.png?v=3" width="32" height="32"> |
| `minecraft:light_blue_concrete_powder` | <img src="https://pixlcore.com/software/mss/images/light_blue_concrete_powder.png?v=3" width="32" height="32"> |
| `minecraft:light_gray_concrete` | <img src="https://pixlcore.com/software/mss/images/light_gray_concrete.png?v=3" width="32" height="32"> |
| `minecraft:light_gray_concrete_powder` | <img src="https://pixlcore.com/software/mss/images/light_gray_concrete_powder.png?v=3" width="32" height="32"> |
| `minecraft:lime_concrete` | <img src="https://pixlcore.com/software/mss/images/lime_concrete.png?v=3" width="32" height="32"> |
| `minecraft:lime_concrete_powder` | <img src="https://pixlcore.com/software/mss/images/lime_concrete_powder.png?v=3" width="32" height="32"> |
| `minecraft:magenta_concrete` | <img src="https://pixlcore.com/software/mss/images/magenta_concrete.png?v=3" width="32" height="32"> |
| `minecraft:magenta_concrete_powder` | <img src="https://pixlcore.com/software/mss/images/magenta_concrete_powder.png?v=3" width="32" height="32"> |
| `minecraft:orange_concrete` | <img src="https://pixlcore.com/software/mss/images/orange_concrete.png?v=3" width="32" height="32"> |
| `minecraft:orange_concrete_powder` | <img src="https://pixlcore.com/software/mss/images/orange_concrete_powder.png?v=3" width="32" height="32"> |
| `minecraft:pink_concrete` | <img src="https://pixlcore.com/software/mss/images/pink_concrete.png?v=3" width="32" height="32"> |
| `minecraft:pink_concrete_powder` | <img src="https://pixlcore.com/software/mss/images/pink_concrete_powder.png?v=3" width="32" height="32"> |
| `minecraft:purple_concrete` | <img src="https://pixlcore.com/software/mss/images/purple_concrete.png?v=3" width="32" height="32"> |
| `minecraft:purple_concrete_powder` | <img src="https://pixlcore.com/software/mss/images/purple_concrete_powder.png?v=3" width="32" height="32"> |
| `minecraft:red_concrete` | <img src="https://pixlcore.com/software/mss/images/red_concrete.png?v=3" width="32" height="32"> |
| `minecraft:red_concrete_powder` | <img src="https://pixlcore.com/software/mss/images/red_concrete_powder.png?v=3" width="32" height="32"> |
| `minecraft:white_concrete` | <img src="https://pixlcore.com/software/mss/images/white_concrete.png?v=3" width="32" height="32"> |
| `minecraft:white_concrete_powder` | <img src="https://pixlcore.com/software/mss/images/white_concrete_powder.png?v=3" width="32" height="32"> |
| `minecraft:yellow_concrete` | <img src="https://pixlcore.com/software/mss/images/yellow_concrete.png?v=3" width="32" height="32"> |
| `minecraft:yellow_concrete_powder` | <img src="https://pixlcore.com/software/mss/images/yellow_concrete_powder.png?v=3" width="32" height="32"> |

</p>
</details>

### Terracotta

| Group ID | Items | Fallback Group | Item Frame | Image |
|----------|-------|----------------|------------|-------|
| `terracotta` | 33 | Misc | `minecraft:terracotta` | <img src="https://pixlcore.com/software/mss/images/terracotta.png?v=3" width="32" height="32"> |

The Terracotta group contains both regular and glazed terracotta blocks of all colors.

<details><summary>Click to Show Terracotta Items</summary>
<p>

| Item ID | Image |
|---------|-------|
| `minecraft:black_glazed_terracotta` | <img src="https://pixlcore.com/software/mss/images/black_glazed_terracotta.png?v=3" width="32" height="32"> |
| `minecraft:black_terracotta` | <img src="https://pixlcore.com/software/mss/images/black_terracotta.png?v=3" width="32" height="32"> |
| `minecraft:blue_glazed_terracotta` | <img src="https://pixlcore.com/software/mss/images/blue_glazed_terracotta.png?v=3" width="32" height="32"> |
| `minecraft:blue_terracotta` | <img src="https://pixlcore.com/software/mss/images/blue_terracotta.png?v=3" width="32" height="32"> |
| `minecraft:brown_glazed_terracotta` | <img src="https://pixlcore.com/software/mss/images/brown_glazed_terracotta.png?v=3" width="32" height="32"> |
| `minecraft:brown_terracotta` | <img src="https://pixlcore.com/software/mss/images/brown_terracotta.png?v=3" width="32" height="32"> |
| `minecraft:cyan_glazed_terracotta` | <img src="https://pixlcore.com/software/mss/images/cyan_glazed_terracotta.png?v=3" width="32" height="32"> |
| `minecraft:cyan_terracotta` | <img src="https://pixlcore.com/software/mss/images/cyan_terracotta.png?v=3" width="32" height="32"> |
| `minecraft:gray_glazed_terracotta` | <img src="https://pixlcore.com/software/mss/images/gray_glazed_terracotta.png?v=3" width="32" height="32"> |
| `minecraft:gray_terracotta` | <img src="https://pixlcore.com/software/mss/images/gray_terracotta.png?v=3" width="32" height="32"> |
| `minecraft:green_glazed_terracotta` | <img src="https://pixlcore.com/software/mss/images/green_glazed_terracotta.png?v=3" width="32" height="32"> |
| `minecraft:green_terracotta` | <img src="https://pixlcore.com/software/mss/images/green_terracotta.png?v=3" width="32" height="32"> |
| `minecraft:light_blue_glazed_terracotta` | <img src="https://pixlcore.com/software/mss/images/light_blue_glazed_terracotta.png?v=3" width="32" height="32"> |
| `minecraft:light_blue_terracotta` | <img src="https://pixlcore.com/software/mss/images/light_blue_terracotta.png?v=3" width="32" height="32"> |
| `minecraft:light_gray_terracotta` | <img src="https://pixlcore.com/software/mss/images/light_gray_terracotta.png?v=3" width="32" height="32"> |
| `minecraft:lime_glazed_terracotta` | <img src="https://pixlcore.com/software/mss/images/lime_glazed_terracotta.png?v=3" width="32" height="32"> |
| `minecraft:lime_terracotta` | <img src="https://pixlcore.com/software/mss/images/lime_terracotta.png?v=3" width="32" height="32"> |
| `minecraft:magenta_glazed_terracotta` | <img src="https://pixlcore.com/software/mss/images/magenta_glazed_terracotta.png?v=3" width="32" height="32"> |
| `minecraft:magenta_terracotta` | <img src="https://pixlcore.com/software/mss/images/magenta_terracotta.png?v=3" width="32" height="32"> |
| `minecraft:orange_glazed_terracotta` | <img src="https://pixlcore.com/software/mss/images/orange_glazed_terracotta.png?v=3" width="32" height="32"> |
| `minecraft:orange_terracotta` | <img src="https://pixlcore.com/software/mss/images/orange_terracotta.png?v=3" width="32" height="32"> |
| `minecraft:pink_glazed_terracotta` | <img src="https://pixlcore.com/software/mss/images/pink_glazed_terracotta.png?v=3" width="32" height="32"> |
| `minecraft:pink_terracotta` | <img src="https://pixlcore.com/software/mss/images/pink_terracotta.png?v=3" width="32" height="32"> |
| `minecraft:purple_glazed_terracotta` | <img src="https://pixlcore.com/software/mss/images/purple_glazed_terracotta.png?v=3" width="32" height="32"> |
| `minecraft:purple_terracotta` | <img src="https://pixlcore.com/software/mss/images/purple_terracotta.png?v=3" width="32" height="32"> |
| `minecraft:red_glazed_terracotta` | <img src="https://pixlcore.com/software/mss/images/red_glazed_terracotta.png?v=3" width="32" height="32"> |
| `minecraft:red_terracotta` | <img src="https://pixlcore.com/software/mss/images/red_terracotta.png?v=3" width="32" height="32"> |
| `minecraft:light_gray_glazed_terracotta` | <img src="https://pixlcore.com/software/mss/images/light_gray_glazed_terracotta.png?v=3" width="32" height="32"> |
| `minecraft:terracotta` | <img src="https://pixlcore.com/software/mss/images/terracotta.png?v=3" width="32" height="32"> |
| `minecraft:white_glazed_terracotta` | <img src="https://pixlcore.com/software/mss/images/white_glazed_terracotta.png?v=3" width="32" height="32"> |
| `minecraft:white_terracotta` | <img src="https://pixlcore.com/software/mss/images/white_terracotta.png?v=3" width="32" height="32"> |
| `minecraft:yellow_glazed_terracotta` | <img src="https://pixlcore.com/software/mss/images/yellow_glazed_terracotta.png?v=3" width="32" height="32"> |
| `minecraft:yellow_terracotta` | <img src="https://pixlcore.com/software/mss/images/yellow_terracotta.png?v=3" width="32" height="32"> |

</p>
</details>

### Glass

| Group ID | Items | Fallback Group | Item Frame | Image |
|----------|-------|----------------|------------|-------|
| `glass` | 34 | Misc | `minecraft:glass` | <img src="https://pixlcore.com/software/mss/images/glass.png?v=3" width="32" height="32"> |

The Glass group contains all glass blocks, glass panes, and stained glass of all colors.

<details><summary>Click to Show Glass Items</summary>
<p>

| Item ID | Image |
|---------|-------|
| `minecraft:black_stained_glass` | <img src="https://pixlcore.com/software/mss/images/black_stained_glass.png?v=3" width="32" height="32"> |
| `minecraft:black_stained_glass_pane` | <img src="https://pixlcore.com/software/mss/images/black_stained_glass_pane.png?v=3" width="32" height="32"> |
| `minecraft:blue_stained_glass` | <img src="https://pixlcore.com/software/mss/images/blue_stained_glass.png?v=3" width="32" height="32"> |
| `minecraft:blue_stained_glass_pane` | <img src="https://pixlcore.com/software/mss/images/blue_stained_glass_pane.png?v=3" width="32" height="32"> |
| `minecraft:brown_stained_glass` | <img src="https://pixlcore.com/software/mss/images/brown_stained_glass.png?v=3" width="32" height="32"> |
| `minecraft:brown_stained_glass_pane` | <img src="https://pixlcore.com/software/mss/images/brown_stained_glass_pane.png?v=3" width="32" height="32"> |
| `minecraft:cyan_stained_glass` | <img src="https://pixlcore.com/software/mss/images/cyan_stained_glass.png?v=3" width="32" height="32"> |
| `minecraft:cyan_stained_glass_pane` | <img src="https://pixlcore.com/software/mss/images/cyan_stained_glass_pane.png?v=3" width="32" height="32"> |
| `minecraft:glass` | <img src="https://pixlcore.com/software/mss/images/glass.png?v=3" width="32" height="32"> |
| `minecraft:glass_pane` | <img src="https://pixlcore.com/software/mss/images/glass_pane.png?v=3" width="32" height="32"> |
| `minecraft:gray_stained_glass` | <img src="https://pixlcore.com/software/mss/images/gray_stained_glass.png?v=3" width="32" height="32"> |
| `minecraft:gray_stained_glass_pane` | <img src="https://pixlcore.com/software/mss/images/gray_stained_glass_pane.png?v=3" width="32" height="32"> |
| `minecraft:green_stained_glass` | <img src="https://pixlcore.com/software/mss/images/green_stained_glass.png?v=3" width="32" height="32"> |
| `minecraft:green_stained_glass_pane` | <img src="https://pixlcore.com/software/mss/images/green_stained_glass_pane.png?v=3" width="32" height="32"> |
| `minecraft:light_blue_stained_glass` | <img src="https://pixlcore.com/software/mss/images/light_blue_stained_glass.png?v=3" width="32" height="32"> |
| `minecraft:light_blue_stained_glass_pane` | <img src="https://pixlcore.com/software/mss/images/light_blue_stained_glass_pane.png?v=3" width="32" height="32"> |
| `minecraft:light_gray_stained_glass` | <img src="https://pixlcore.com/software/mss/images/light_gray_stained_glass.png?v=3" width="32" height="32"> |
| `minecraft:light_gray_stained_glass_pane` | <img src="https://pixlcore.com/software/mss/images/light_gray_stained_glass_pane.png?v=3" width="32" height="32"> |
| `minecraft:lime_stained_glass` | <img src="https://pixlcore.com/software/mss/images/lime_stained_glass.png?v=3" width="32" height="32"> |
| `minecraft:lime_stained_glass_pane` | <img src="https://pixlcore.com/software/mss/images/lime_stained_glass_pane.png?v=3" width="32" height="32"> |
| `minecraft:magenta_stained_glass` | <img src="https://pixlcore.com/software/mss/images/magenta_stained_glass.png?v=3" width="32" height="32"> |
| `minecraft:magenta_stained_glass_pane` | <img src="https://pixlcore.com/software/mss/images/magenta_stained_glass_pane.png?v=3" width="32" height="32"> |
| `minecraft:orange_stained_glass` | <img src="https://pixlcore.com/software/mss/images/orange_stained_glass.png?v=3" width="32" height="32"> |
| `minecraft:orange_stained_glass_pane` | <img src="https://pixlcore.com/software/mss/images/orange_stained_glass_pane.png?v=3" width="32" height="32"> |
| `minecraft:pink_stained_glass` | <img src="https://pixlcore.com/software/mss/images/pink_stained_glass.png?v=3" width="32" height="32"> |
| `minecraft:pink_stained_glass_pane` | <img src="https://pixlcore.com/software/mss/images/pink_stained_glass_pane.png?v=3" width="32" height="32"> |
| `minecraft:purple_stained_glass` | <img src="https://pixlcore.com/software/mss/images/purple_stained_glass.png?v=3" width="32" height="32"> |
| `minecraft:purple_stained_glass_pane` | <img src="https://pixlcore.com/software/mss/images/purple_stained_glass_pane.png?v=3" width="32" height="32"> |
| `minecraft:red_stained_glass` | <img src="https://pixlcore.com/software/mss/images/red_stained_glass.png?v=3" width="32" height="32"> |
| `minecraft:red_stained_glass_pane` | <img src="https://pixlcore.com/software/mss/images/red_stained_glass_pane.png?v=3" width="32" height="32"> |
| `minecraft:white_stained_glass` | <img src="https://pixlcore.com/software/mss/images/white_stained_glass.png?v=3" width="32" height="32"> |
| `minecraft:white_stained_glass_pane` | <img src="https://pixlcore.com/software/mss/images/white_stained_glass_pane.png?v=3" width="32" height="32"> |
| `minecraft:yellow_stained_glass` | <img src="https://pixlcore.com/software/mss/images/yellow_stained_glass.png?v=3" width="32" height="32"> |
| `minecraft:yellow_stained_glass_pane` | <img src="https://pixlcore.com/software/mss/images/yellow_stained_glass_pane.png?v=3" width="32" height="32"> |

</p>
</details>

### Ice

| Group ID | Items | Fallback Group | Item Frame | Image |
|----------|-------|----------------|------------|-------|
| `ice` | 6 | Misc | `minecraft:ice` | <img src="https://pixlcore.com/software/mss/images/ice.png?v=3" width="32" height="32"> |

The Ice group contains all ice and snow variants, including regular ice, blue ice, packed ice, snow, snow blocks and snowballs.

<details><summary>Click to Show Ice Items</summary>
<p>

| Item ID | Image |
|---------|-------|
| `minecraft:blue_ice` | <img src="https://pixlcore.com/software/mss/images/blue_ice.png?v=3" width="32" height="32"> |
| `minecraft:ice` | <img src="https://pixlcore.com/software/mss/images/ice.png?v=3" width="32" height="32"> |
| `minecraft:packed_ice` | <img src="https://pixlcore.com/software/mss/images/packed_ice.png?v=3" width="32" height="32"> |
| `minecraft:snow` | <img src="https://pixlcore.com/software/mss/images/snow.png?v=3" width="32" height="32"> |
| `minecraft:snow_block` | <img src="https://pixlcore.com/software/mss/images/snow_block.png?v=3" width="32" height="32"> |
| `minecraft:snowball` | <img src="https://pixlcore.com/software/mss/images/snowball.png?v=3" width="32" height="32"> |

</p>
</details>

### Ocean

| Group ID | Items | Fallback Group | Item Frame | Image |
|----------|-------|----------------|------------|-------|
| `ocean` | 11 | Misc | `minecraft:kelp` | <img src="https://pixlcore.com/software/mss/images/kelp.png?v=3" width="32" height="32"> |

The Ocean group contains items found in oceans, including kelp (wet and dry), shells, pufferfish, sea lanterns, sea pickles, seagrass, sponges (wet and dry), and tropical fish.  It specifically excludes editable fish, which are categorized as [Raw](#raw) or [Food](#food).  Note that [Coral](#coral) and [Prismarine](#prismarine) have their own optional sub-groups, but both fallback to Ocean.

<details><summary>Click to Show Ocean Items</summary>
<p>

| Item ID | Image |
|---------|-------|
| `minecraft:dried_kelp` | <img src="https://pixlcore.com/software/mss/images/dried_kelp.png?v=3" width="32" height="32"> |
| `minecraft:dried_kelp_block` | <img src="https://pixlcore.com/software/mss/images/dried_kelp_block.png?v=3" width="32" height="32"> |
| `minecraft:kelp` | <img src="https://pixlcore.com/software/mss/images/kelp.png?v=3" width="32" height="32"> |
| `minecraft:nautilus_shell` | <img src="https://pixlcore.com/software/mss/images/nautilus_shell.png?v=3" width="32" height="32"> |
| `minecraft:pufferfish` | <img src="https://pixlcore.com/software/mss/images/pufferfish.png?v=3" width="32" height="32"> |
| `minecraft:sea_lantern` | <img src="https://pixlcore.com/software/mss/images/sea_lantern.png?v=3" width="32" height="32"> |
| `minecraft:sea_pickle` | <img src="https://pixlcore.com/software/mss/images/sea_pickle.png?v=3" width="32" height="32"> |
| `minecraft:seagrass` | <img src="https://pixlcore.com/software/mss/images/seagrass.png?v=3" width="32" height="32"> |
| `minecraft:sponge` | <img src="https://pixlcore.com/software/mss/images/sponge.png?v=3" width="32" height="32"> |
| `minecraft:tropical_fish` | <img src="https://pixlcore.com/software/mss/images/tropical_fish.png?v=3" width="32" height="32"> |
| `minecraft:wet_sponge` | <img src="https://pixlcore.com/software/mss/images/wet_sponge.png?v=3" width="32" height="32"> |

</p>
</details>

#### Coral

| Group ID | Items | Fallback Group | Item Frame | Image |
|----------|-------|----------------|------------|-------|
| `coral` | 30 | Ocean | `minecraft:bubble_coral_block` | <img src="https://pixlcore.com/software/mss/images/bubble_coral_block.png?v=3" width="32" height="32"> |

The Coral group contains all coral blocks and items found in warm ocean biomes.  This includes brain coral, bubble coral, fire coral, horn coral, tube coral and dead coral.  This is an optional group, and if the item frame is omitted, all coral will sort into [Ocean](#ocean) instead.

<details><summary>Click to Show Coral Items</summary>
<p>

| Item ID | Image |
|---------|-------|
| `minecraft:brain_coral` | <img src="https://pixlcore.com/software/mss/images/brain_coral.png?v=3" width="32" height="32"> |
| `minecraft:brain_coral_block` | <img src="https://pixlcore.com/software/mss/images/brain_coral_block.png?v=3" width="32" height="32"> |
| `minecraft:brain_coral_fan` | <img src="https://pixlcore.com/software/mss/images/brain_coral_fan.png?v=3" width="32" height="32"> |
| `minecraft:bubble_coral` | <img src="https://pixlcore.com/software/mss/images/bubble_coral.png?v=3" width="32" height="32"> |
| `minecraft:bubble_coral_block` | <img src="https://pixlcore.com/software/mss/images/bubble_coral_block.png?v=3" width="32" height="32"> |
| `minecraft:bubble_coral_fan` | <img src="https://pixlcore.com/software/mss/images/bubble_coral_fan.png?v=3" width="32" height="32"> |
| `minecraft:dead_brain_coral_block` | <img src="https://pixlcore.com/software/mss/images/dead_brain_coral_block.png?v=3" width="32" height="32"> |
| `minecraft:dead_bubble_coral_block` | <img src="https://pixlcore.com/software/mss/images/dead_bubble_coral_block.png?v=3" width="32" height="32"> |
| `minecraft:dead_fire_coral_block` | <img src="https://pixlcore.com/software/mss/images/dead_fire_coral_block.png?v=3" width="32" height="32"> |
| `minecraft:dead_horn_coral_block` | <img src="https://pixlcore.com/software/mss/images/dead_horn_coral_block.png?v=3" width="32" height="32"> |
| `minecraft:dead_tube_coral_block` | <img src="https://pixlcore.com/software/mss/images/dead_tube_coral_block.png?v=3" width="32" height="32"> |
| `minecraft:fire_coral` | <img src="https://pixlcore.com/software/mss/images/fire_coral.png?v=3" width="32" height="32"> |
| `minecraft:fire_coral_block` | <img src="https://pixlcore.com/software/mss/images/fire_coral_block.png?v=3" width="32" height="32"> |
| `minecraft:fire_coral_fan` | <img src="https://pixlcore.com/software/mss/images/fire_coral_fan.png?v=3" width="32" height="32"> |
| `minecraft:horn_coral` | <img src="https://pixlcore.com/software/mss/images/horn_coral.png?v=3" width="32" height="32"> |
| `minecraft:horn_coral_block` | <img src="https://pixlcore.com/software/mss/images/horn_coral_block.png?v=3" width="32" height="32"> |
| `minecraft:horn_coral_fan` | <img src="https://pixlcore.com/software/mss/images/horn_coral_fan.png?v=3" width="32" height="32"> |
| `minecraft:tube_coral` | <img src="https://pixlcore.com/software/mss/images/tube_coral.png?v=3" width="32" height="32"> |
| `minecraft:tube_coral_block` | <img src="https://pixlcore.com/software/mss/images/tube_coral_block.png?v=3" width="32" height="32"> |
| `minecraft:tube_coral_fan` | <img src="https://pixlcore.com/software/mss/images/tube_coral_fan.png?v=3" width="32" height="32"> |
| `minecraft:dead_brain_coral` | <img src="https://pixlcore.com/software/mss/images/dead_brain_coral.png?v=3" width="32" height="32"> |
| `minecraft:dead_bubble_coral` | <img src="https://pixlcore.com/software/mss/images/dead_bubble_coral.png?v=3" width="32" height="32"> |
| `minecraft:dead_fire_coral` | <img src="https://pixlcore.com/software/mss/images/dead_fire_coral.png?v=3" width="32" height="32"> |
| `minecraft:dead_horn_coral` | <img src="https://pixlcore.com/software/mss/images/dead_horn_coral.png?v=3" width="32" height="32"> |
| `minecraft:dead_tube_coral` | <img src="https://pixlcore.com/software/mss/images/dead_tube_coral.png?v=3" width="32" height="32"> |
| `minecraft:dead_tube_coral_fan` | <img src="https://pixlcore.com/software/mss/images/dead_tube_coral_fan.png?v=3" width="32" height="32"> |
| `minecraft:dead_brain_coral_fan` | <img src="https://pixlcore.com/software/mss/images/dead_brain_coral_fan.png?v=3" width="32" height="32"> |
| `minecraft:dead_bubble_coral_fan` | <img src="https://pixlcore.com/software/mss/images/dead_bubble_coral_fan.png?v=3" width="32" height="32"> |
| `minecraft:dead_fire_coral_fan` | <img src="https://pixlcore.com/software/mss/images/dead_fire_coral_fan.png?v=3" width="32" height="32"> |
| `minecraft:dead_horn_coral_fan` | <img src="https://pixlcore.com/software/mss/images/dead_horn_coral_fan.png?v=3" width="32" height="32"> |

</p>
</details>

#### Prismarine

| Group ID | Items | Fallback Group | Item Frame | Image |
|----------|-------|----------------|------------|-------|
| `prismarine` | 12 | Ocean | `minecraft:prismarine` | <img src="https://pixlcore.com/software/mss/images/prismarine.png?v=3" width="32" height="32"> |

The Prismarine group contains all prismarine blocks in the game, including slabs, stairs, bricks, crystals, shards, and dark prismarine variants.  This is an optional group, and if the item frame is omitted, all prismarine will sort into [Ocean](#ocean) instead.

<details><summary>Click to Show Prismarine Items</summary>
<p>

| Item ID | Image |
|---------|-------|
| `minecraft:dark_prismarine` | <img src="https://pixlcore.com/software/mss/images/dark_prismarine.png?v=3" width="32" height="32"> |
| `minecraft:dark_prismarine_slab` | <img src="https://pixlcore.com/software/mss/images/dark_prismarine_slab.png?v=3" width="32" height="32"> |
| `minecraft:dark_prismarine_stairs` | <img src="https://pixlcore.com/software/mss/images/dark_prismarine_stairs.png?v=3" width="32" height="32"> |
| `minecraft:prismarine` | <img src="https://pixlcore.com/software/mss/images/prismarine.png?v=3" width="32" height="32"> |
| `minecraft:prismarine_brick_slab` | <img src="https://pixlcore.com/software/mss/images/prismarine_brick_slab.png?v=3" width="32" height="32"> |
| `minecraft:prismarine_brick_stairs` | <img src="https://pixlcore.com/software/mss/images/prismarine_brick_stairs.png?v=3" width="32" height="32"> |
| `minecraft:prismarine_bricks` | <img src="https://pixlcore.com/software/mss/images/prismarine_bricks.png?v=3" width="32" height="32"> |
| `minecraft:prismarine_crystals` | <img src="https://pixlcore.com/software/mss/images/prismarine_crystals.png?v=3" width="32" height="32"> |
| `minecraft:prismarine_shard` | <img src="https://pixlcore.com/software/mss/images/prismarine_shard.png?v=3" width="32" height="32"> |
| `minecraft:prismarine_slab` | <img src="https://pixlcore.com/software/mss/images/prismarine_slab.png?v=3" width="32" height="32"> |
| `minecraft:prismarine_stairs` | <img src="https://pixlcore.com/software/mss/images/prismarine_stairs.png?v=3" width="32" height="32"> |
| `minecraft:prismarine_wall` | <img src="https://pixlcore.com/software/mss/images/prismarine_wall.png?v=3" width="32" height="32"> |

</p>
</details>

### Ink

| Group ID | Items | Fallback Group | Item Frame | Image |
|----------|-------|----------------|------------|-------|
| `ink` | 20 | Misc | `minecraft:ink_sac` | <img src="https://pixlcore.com/software/mss/images/ink_sac.png?v=3" width="32" height="32"> |

The Ink group contains all ink and dyes, including cactus green, cyan, dandelion yellow, gray, black, light blue, light gray, lime, magenta, orange, pink, purple and rose red.

<details><summary>Click to Show Ink Items</summary>
<p>

| Item ID | Image |
|---------|-------|
| `minecraft:cactus_green` | <img src="https://pixlcore.com/software/mss/images/cactus_green.png?v=3" width="32" height="32"> |
| `minecraft:cyan_dye` | <img src="https://pixlcore.com/software/mss/images/cyan_dye.png?v=3" width="32" height="32"> |
| `minecraft:dandelion_yellow` | <img src="https://pixlcore.com/software/mss/images/dandelion_yellow.png?v=3" width="32" height="32"> |
| `minecraft:gray_dye` | <img src="https://pixlcore.com/software/mss/images/gray_dye.png?v=3" width="32" height="32"> |
| `minecraft:ink_sac` | <img src="https://pixlcore.com/software/mss/images/ink_sac.png?v=3" width="32" height="32"> |
| `minecraft:light_blue_dye` | <img src="https://pixlcore.com/software/mss/images/light_blue_dye.png?v=3" width="32" height="32"> |
| `minecraft:light_gray_dye` | <img src="https://pixlcore.com/software/mss/images/light_gray_dye.png?v=3" width="32" height="32"> |
| `minecraft:lime_dye` | <img src="https://pixlcore.com/software/mss/images/lime_dye.png?v=3" width="32" height="32"> |
| `minecraft:magenta_dye` | <img src="https://pixlcore.com/software/mss/images/magenta_dye.png?v=3" width="32" height="32"> |
| `minecraft:orange_dye` | <img src="https://pixlcore.com/software/mss/images/orange_dye.png?v=3" width="32" height="32"> |
| `minecraft:pink_dye` | <img src="https://pixlcore.com/software/mss/images/pink_dye.png?v=3" width="32" height="32"> |
| `minecraft:purple_dye` | <img src="https://pixlcore.com/software/mss/images/purple_dye.png?v=3" width="32" height="32"> |
| `minecraft:rose_red` | <img src="https://pixlcore.com/software/mss/images/rose_red.png?v=3" width="32" height="32"> |
| `minecraft:black_dye` | <img src="https://pixlcore.com/software/mss/images/black_dye.png?v=3" width="32" height="32"> |
| `minecraft:blue_dye` | <img src="https://pixlcore.com/software/mss/images/blue_dye.png?v=3" width="32" height="32"> |
| `minecraft:brown_dye` | <img src="https://pixlcore.com/software/mss/images/brown_dye.png?v=3" width="32" height="32"> |
| `minecraft:green_dye` | <img src="https://pixlcore.com/software/mss/images/green_dye.png?v=3" width="32" height="32"> |
| `minecraft:yellow_dye` | <img src="https://pixlcore.com/software/mss/images/yellow_dye.png?v=3" width="32" height="32"> |
| `minecraft:red_dye` | <img src="https://pixlcore.com/software/mss/images/red_dye.png?v=3" width="32" height="32"> |
| `minecraft:white_dye` | <img src="https://pixlcore.com/software/mss/images/white_dye.png?v=3" width="32" height="32"> |

</p>
</details>

### Nether

| Group ID | Items | Fallback Group | Item Frame | Image |
|----------|-------|----------------|------------|-------|
| `nether` | 32 | Misc | `minecraft:netherrack` | <img src="https://pixlcore.com/software/mss/images/netherrack.png?v=3" width="32" height="32"> |

The Nether group contains items found in the nether, including netherrack, nether bricks (includes fences, slabs and stairs), glowstone (blocks and dust), quartz (including variants like pillars, slabs, stairs, and chiseled), magma blocks, magma cream and soul sand.

<details><summary>Click to Show Nether Items</summary>
<p>

| Item ID | Image |
|---------|-------|
| `minecraft:chiseled_quartz_block` | <img src="https://pixlcore.com/software/mss/images/chiseled_quartz_block.png?v=3" width="32" height="32"> |
| `minecraft:glowstone` | <img src="https://pixlcore.com/software/mss/images/glowstone.png?v=3" width="32" height="32"> |
| `minecraft:glowstone_dust` | <img src="https://pixlcore.com/software/mss/images/glowstone_dust.png?v=3" width="32" height="32"> |
| `minecraft:magma_block` | <img src="https://pixlcore.com/software/mss/images/magma_block.png?v=3" width="32" height="32"> |
| `minecraft:magma_cream` | <img src="https://pixlcore.com/software/mss/images/magma_cream.png?v=3" width="32" height="32"> |
| `minecraft:nether_brick` | <img src="https://pixlcore.com/software/mss/images/nether_brick.png?v=3" width="32" height="32"> |
| `minecraft:nether_brick_fence` | <img src="https://pixlcore.com/software/mss/images/nether_brick_fence.png?v=3" width="32" height="32"> |
| `minecraft:nether_brick_slab` | <img src="https://pixlcore.com/software/mss/images/nether_brick_slab.png?v=3" width="32" height="32"> |
| `minecraft:nether_brick_stairs` | <img src="https://pixlcore.com/software/mss/images/nether_brick_stairs.png?v=3" width="32" height="32"> |
| `minecraft:nether_brick_wall` | <img src="https://pixlcore.com/software/mss/images/nether_brick_wall.png?v=3" width="32" height="32"> |
| `minecraft:nether_bricks` | <img src="https://pixlcore.com/software/mss/images/nether_bricks.png?v=3" width="32" height="32"> |
| `minecraft:red_nether_brick_slab` | <img src="https://pixlcore.com/software/mss/images/red_nether_brick_slab.png?v=3" width="32" height="32"> |
| `minecraft:red_nether_brick_stairs` | <img src="https://pixlcore.com/software/mss/images/red_nether_brick_stairs.png?v=3" width="32" height="32"> |
| `minecraft:red_nether_brick_wall` | <img src="https://pixlcore.com/software/mss/images/red_nether_brick_wall.png?v=3" width="32" height="32"> |
| `minecraft:nether_wart_block` | <img src="https://pixlcore.com/software/mss/images/nether_wart_block.png?v=3" width="32" height="32"> |
| `minecraft:netherrack` | <img src="https://pixlcore.com/software/mss/images/netherrack.png?v=3" width="32" height="32"> |
| `minecraft:quartz` | <img src="https://pixlcore.com/software/mss/images/quartz.png?v=3" width="32" height="32"> |
| `minecraft:quartz_block` | <img src="https://pixlcore.com/software/mss/images/quartz_block.png?v=3" width="32" height="32"> |
| `minecraft:quartz_pillar` | <img src="https://pixlcore.com/software/mss/images/quartz_pillar.png?v=3" width="32" height="32"> |
| `minecraft:quartz_slab` | <img src="https://pixlcore.com/software/mss/images/quartz_slab.png?v=3" width="32" height="32"> |
| `minecraft:quartz_stairs` | <img src="https://pixlcore.com/software/mss/images/quartz_stairs.png?v=3" width="32" height="32"> |
| `minecraft:red_nether_bricks` | <img src="https://pixlcore.com/software/mss/images/red_nether_bricks.png?v=3" width="32" height="32"> |
| `minecraft:smooth_quartz` | <img src="https://pixlcore.com/software/mss/images/smooth_quartz.png?v=3" width="32" height="32"> |
| `minecraft:soul_sand` | <img src="https://pixlcore.com/software/mss/images/soul_sand.png?v=3" width="32" height="32"> |
| `minecraft:soul_soil` | <img src="https://pixlcore.com/software/mss/images/soul_soil.png?v=3" width="32" height="32"> |
| `minecraft:smooth_quartz_slab` | <img src="https://pixlcore.com/software/mss/images/smooth_quartz_slab.png?v=3" width="32" height="32"> |
| `minecraft:smooth_quartz_stairs` | <img src="https://pixlcore.com/software/mss/images/smooth_quartz_stairs.png?v=3" width="32" height="32"> |
| `minecraft:cracked_nether_bricks` | <img src="https://pixlcore.com/software/mss/images/cracked_nether_bricks.png?v=3" width="32" height="32"> |
| `minecraft:chiseled_nether_bricks` | <img src="https://pixlcore.com/software/mss/images/chiseled_nether_bricks.png?v=3" width="32" height="32"> |
| `minecraft:quartz_bricks` | <img src="https://pixlcore.com/software/mss/images/quartz_bricks.png?v=3" width="32" height="32"> |
| `minecraft:shroomlight` | <img src="https://pixlcore.com/software/mss/images/shroomlight.png?v=3" width="32" height="32"> |
| `minecraft:crying_obsidian` | <img src="https://pixlcore.com/software/mss/images/crying_obsidian.png?v=3" width="32" height="32"> |

</p>
</details>

### Ores

| Group ID | Items | Fallback Group | Item Frame | Image |
|----------|-------|----------------|------------|-------|
| `ores` | 9 | Misc | `minecraft:iron_ore` | <img src="https://pixlcore.com/software/mss/images/iron_ore.png?v=3" width="32" height="32"> |

The Ores group contains ore blocks ready for smelting, including iron, gold, coal, emerald, lapis, nether quartz and restone ore.  **It explicitly excludes diamond ore**, because it is assumed you would rather not have that auto-smelted, and instead want to mine it with a fortune pick.

<details><summary>Click to Show Ores Items</summary>
<p>

| Item ID | Image |
|---------|-------|
| `minecraft:coal_ore` | <img src="https://pixlcore.com/software/mss/images/coal_ore.png?v=3" width="32" height="32"> |
| `minecraft:emerald_ore` | <img src="https://pixlcore.com/software/mss/images/emerald_ore.png?v=3" width="32" height="32"> |
| `minecraft:gold_ore` | <img src="https://pixlcore.com/software/mss/images/gold_ore.png?v=3" width="32" height="32"> |
| `minecraft:iron_ore` | <img src="https://pixlcore.com/software/mss/images/iron_ore.png?v=3" width="32" height="32"> |
| `minecraft:lapis_ore` | <img src="https://pixlcore.com/software/mss/images/lapis_ore.png?v=3" width="32" height="32"> |
| `minecraft:nether_quartz_ore` | <img src="https://pixlcore.com/software/mss/images/nether_quartz_ore.png?v=3" width="32" height="32"> |
| `minecraft:nether_gold_ore` | <img src="https://pixlcore.com/software/mss/images/nether_gold_ore.png?v=3" width="32" height="32"> |
| `minecraft:redstone_ore` | <img src="https://pixlcore.com/software/mss/images/redstone_ore.png?v=3" width="32" height="32"> |
| `minecraft:ancient_debris` | <img src="https://pixlcore.com/software/mss/images/ancient_debris.png?v=3" width="32" height="32"> |

</p>
</details>

### Redstone

| Group ID | Items | Fallback Group | Item Frame | Image |
|----------|-------|----------------|------------|-------|
| `redstone` | 20 | Misc | `minecraft:redstone` | <img src="https://pixlcore.com/software/mss/images/redstone.png?v=3" width="32" height="32"> |

The Redstone group contains all redstone related items, including redstone dust, command blocks (all types), comparators, daylight detectors, dispensers, droppers, weighted pressure plates, hoppers, levers, observers, pistons, redstone blocks, redstone lamps, redstone torches, repeaters, and tripwire hooks.

<details><summary>Click to Show Redstone Items</summary>
<p>

| Item ID | Image |
|---------|-------|
| `minecraft:chain_command_block` | <img src="https://pixlcore.com/software/mss/images/chain_command_block.png?v=3" width="32" height="32"> |
| `minecraft:command_block` | <img src="https://pixlcore.com/software/mss/images/command_block.png?v=3" width="32" height="32"> |
| `minecraft:comparator` | <img src="https://pixlcore.com/software/mss/images/comparator.png?v=3" width="32" height="32"> |
| `minecraft:daylight_detector` | <img src="https://pixlcore.com/software/mss/images/daylight_detector.png?v=3" width="32" height="32"> |
| `minecraft:dispenser` | <img src="https://pixlcore.com/software/mss/images/dispenser.png?v=3" width="32" height="32"> |
| `minecraft:dropper` | <img src="https://pixlcore.com/software/mss/images/dropper.png?v=3" width="32" height="32"> |
| `minecraft:heavy_weighted_pressure_plate` | <img src="https://pixlcore.com/software/mss/images/heavy_weighted_pressure_plate.png?v=3" width="32" height="32"> |
| `minecraft:hopper` | <img src="https://pixlcore.com/software/mss/images/hopper.png?v=3" width="32" height="32"> |
| `minecraft:lever` | <img src="https://pixlcore.com/software/mss/images/lever.png?v=3" width="32" height="32"> |
| `minecraft:light_weighted_pressure_plate` | <img src="https://pixlcore.com/software/mss/images/light_weighted_pressure_plate.png?v=3" width="32" height="32"> |
| `minecraft:observer` | <img src="https://pixlcore.com/software/mss/images/observer.png?v=3" width="32" height="32"> |
| `minecraft:piston` | <img src="https://pixlcore.com/software/mss/images/piston.png?v=3" width="32" height="32"> |
| `minecraft:redstone` | <img src="https://pixlcore.com/software/mss/images/redstone.png?v=3" width="32" height="32"> |
| `minecraft:redstone_block` | <img src="https://pixlcore.com/software/mss/images/redstone_block.png?v=3" width="32" height="32"> |
| `minecraft:redstone_lamp` | <img src="https://pixlcore.com/software/mss/images/redstone_lamp.png?v=3" width="32" height="32"> |
| `minecraft:redstone_torch` | <img src="https://pixlcore.com/software/mss/images/redstone_torch.png?v=3" width="32" height="32"> |
| `minecraft:repeater` | <img src="https://pixlcore.com/software/mss/images/repeater.png?v=3" width="32" height="32"> |
| `minecraft:repeating_command_block` | <img src="https://pixlcore.com/software/mss/images/repeating_command_block.png?v=3" width="32" height="32"> |
| `minecraft:sticky_piston` | <img src="https://pixlcore.com/software/mss/images/sticky_piston.png?v=3" width="32" height="32"> |
| `minecraft:tripwire_hook` | <img src="https://pixlcore.com/software/mss/images/tripwire_hook.png?v=3" width="32" height="32"> |

</p>
</details>

### End

| Group ID | Items | Fallback Group | Item Frame | Image |
|----------|-------|----------------|------------|-------|
| `end` | 12 | Misc | `minecraft:end_stone` | <img src="https://pixlcore.com/software/mss/images/end_stone.png?v=3" width="32" height="32"> |

The End group contains all items found in The End dimension, including end stone, end stone bricks, end crystals, end rods, end portal frames, purpur blocks, purpur pillars, purpur slabs and stairs.

<details><summary>Click to Show End Items</summary>
<p>

| Item ID | Image |
|---------|-------|
| `minecraft:end_crystal` | <img src="https://pixlcore.com/software/mss/images/end_crystal.png?v=3" width="32" height="32"> |
| `minecraft:end_portal_frame` | <img src="https://pixlcore.com/software/mss/images/end_portal_frame.png?v=3" width="32" height="32"> |
| `minecraft:end_rod` | <img src="https://pixlcore.com/software/mss/images/end_rod.png?v=3" width="32" height="32"> |
| `minecraft:end_stone` | <img src="https://pixlcore.com/software/mss/images/end_stone.png?v=3" width="32" height="32"> |
| `minecraft:end_stone_bricks` | <img src="https://pixlcore.com/software/mss/images/end_stone_bricks.png?v=3" width="32" height="32"> |
| `minecraft:purpur_block` | <img src="https://pixlcore.com/software/mss/images/purpur_block.png?v=3" width="32" height="32"> |
| `minecraft:purpur_pillar` | <img src="https://pixlcore.com/software/mss/images/purpur_pillar.png?v=3" width="32" height="32"> |
| `minecraft:purpur_slab` | <img src="https://pixlcore.com/software/mss/images/purpur_slab.png?v=3" width="32" height="32"> |
| `minecraft:purpur_stairs` | <img src="https://pixlcore.com/software/mss/images/purpur_stairs.png?v=3" width="32" height="32"> |
| `minecraft:end_stone_brick_slab` | <img src="https://pixlcore.com/software/mss/images/end_stone_brick_slab.png?v=3" width="32" height="32"> |
| `minecraft:end_stone_brick_stairs` | <img src="https://pixlcore.com/software/mss/images/end_stone_brick_stairs.png?v=3" width="32" height="32"> |
| `minecraft:end_stone_brick_wall` | <img src="https://pixlcore.com/software/mss/images/end_stone_brick_wall.png?v=3" width="32" height="32"> |

</p>
</details>

### Music

| Group ID | Items | Fallback Group | Item Frame | Image |
|----------|-------|----------------|------------|-------|
| `music` | 15 | Misc | `minecraft:note_block` | <img src="https://pixlcore.com/software/mss/images/note_block.png?v=3" width="32" height="32"> |

The Music group contains all music related items in the game, including all the unique music discs, note blocks, and the jukebox.

<details><summary>Click to Show Music Items</summary>
<p>

| Item ID | Image |
|---------|-------|
| `minecraft:music_disc_11` | <img src="https://pixlcore.com/software/mss/images/music_disc_11.png?v=3" width="32" height="32"> |
| `minecraft:music_disc_13` | <img src="https://pixlcore.com/software/mss/images/music_disc_13.png?v=3" width="32" height="32"> |
| `minecraft:music_disc_blocks` | <img src="https://pixlcore.com/software/mss/images/music_disc_blocks.png?v=3" width="32" height="32"> |
| `minecraft:music_disc_cat` | <img src="https://pixlcore.com/software/mss/images/music_disc_cat.png?v=3" width="32" height="32"> |
| `minecraft:music_disc_chirp` | <img src="https://pixlcore.com/software/mss/images/music_disc_chirp.png?v=3" width="32" height="32"> |
| `minecraft:music_disc_far` | <img src="https://pixlcore.com/software/mss/images/music_disc_far.png?v=3" width="32" height="32"> |
| `minecraft:music_disc_mall` | <img src="https://pixlcore.com/software/mss/images/music_disc_mall.png?v=3" width="32" height="32"> |
| `minecraft:music_disc_mellohi` | <img src="https://pixlcore.com/software/mss/images/music_disc_mellohi.png?v=3" width="32" height="32"> |
| `minecraft:music_disc_stal` | <img src="https://pixlcore.com/software/mss/images/music_disc_stal.png?v=3" width="32" height="32"> |
| `minecraft:music_disc_strad` | <img src="https://pixlcore.com/software/mss/images/music_disc_strad.png?v=3" width="32" height="32"> |
| `minecraft:music_disc_wait` | <img src="https://pixlcore.com/software/mss/images/music_disc_wait.png?v=3" width="32" height="32"> |
| `minecraft:music_disc_ward` | <img src="https://pixlcore.com/software/mss/images/music_disc_ward.png?v=3" width="32" height="32"> |
| `minecraft:music_disc_pigstep` | <img src="https://pixlcore.com/software/mss/images/music_disc_pigstep.png?v=3" width="32" height="32"> |
| `minecraft:note_block` | <img src="https://pixlcore.com/software/mss/images/note_block.png?v=3" width="32" height="32"> |
| `minecraft:jukebox` | <img src="https://pixlcore.com/software/mss/images/jukebox.png?v=3" width="32" height="32"> |

</p>
</details>

### Misc

| Group ID | Items | Fallback Group | Item Frame | Image |
|----------|-------|----------------|------------|-------|
| `misc` | 1 | n/a | `minecraft:carrot_on_a_stick` | <img src="https://pixlcore.com/software/mss/images/carrot_on_a_stick.png?v=3" width="32" height="32"> |

The Misc group is a special universal catch-all group, and collects all otherwise unsorted items.  If a particuar group item frame is missing, and the group has no specified fallback group, the items will end up in Misc.  Note that if the misc item frame (containing a carrot on a stick) is itself missing, unsorted items will teleport back to the player.

<details><summary>Click to Show Misc Items</summary>
<p>

| Item ID | Image |
|---------|-------|
| `minecraft:carrot_on_a_stick` | <img src="https://pixlcore.com/software/mss/images/carrot_on_a_stick.png?v=3" width="32" height="32"> |

</p>
</details>

# FAQ

**Q. Why do some of my items teleport to my friend's storage system?**

A. If you have multiple magic sorting systems in the same world or on the same server, make sure they are at least 8 chunks (128 blocks) away from each other.  This is the maximum teleport distance of items in the magic sorting system.  You can use the [F3 debug screen](https://minecraft.gamepedia.com/Debug_screen) to measure distance between locations using your player X/Y/Z coordinates.

**Q. Why do some of my items keep teleporting back to ME?**

A. This happens when a suitable [item frame](https://minecraft.gamepedia.com/Item_Frame) cannot be found for the items, which can happen for a number of reasons.  First, make sure you have an item frame displaying the *correct item* that matches the target group.  This may not be the exact item in your inventory, but rather a specific item that represents the whole group.  See [Groups](#groups) for a list of these special items -- the item frames must contain those *exact* items!  Second, the item frame must be within 8 chunks (128 blocks) of the controller (drop-off chest), and the chunks all have to be loaded.  Finally, you may not have a [misc category](#misc) setup.  That is, you need an item frame with a [carrot on a stick](https://minecraft.gamepedia.com/Carrot_on_a_Stick), which is a universal catch-all for all unsorted items.  Add this to catch all the items that you don't have specific groups for.

**Q. Why isn't diamond ore sorted into the ores group?**

A. This was actually a deliberate decision when we made the data pack.  We assumed that most of the time, the player would not want diamond ore to be auto-smelted (which is probably where the ores group gets routed -- i.e. into a smelter).  It is more likely that the player would want to break the diamond ore themselves, using a fortune pick.  That being said, if *you* want diamond ore sorted into *your* ores group, you can edit the `config.json` file and rebuild the data pack to your liking!  See [Development](#development) for details.

**Q. Why not simply teleport items to the _nearest_ matching item frame?  Then you wouldn't even need a maximum teleport distance!**

A. That is true, however we actually don't want items teleported to the nearest matching item frame per se.  Consider that a single sort group may have double or more item frames, to load balance the deposited items between multiple hoppers and/or chests.  See [Multiple Item Frames](#multiple-item-frames) for an example.  In this case, to handle large numbers of deposited items at once, we need to randomize between the target item frames, but still maintain compatibility with multiple sorting systems in the same world.  That is where the maximum distance (8 chunks) comes into play.

**Q. I dropped off a stack of coal but it didn't split between my two item frames!**

A. Sometimes Minecraft treats a stack of items as a "single item with 64 quantity" and thus it gets teleported as one item, to a single item frame.  To fix this, you can "spread out" your stack of items in the drop-off chest, simply by holding down the left mouse button and dragging across the chest dialog, like this:

![Coal Distribution](https://pixlcore.com/software/mss/screenshots/coal-dist.png)

This spread arrangement has a much better chance of load balancing between multiple item frame targets, because the game treats the items as multiple smaller stacks when the chest is broken.

# Development

The Magic Sorting System is designed to be extensible.  You can change group sorting rules, add your own custom groups, and even add new items (possibly for supporting mod packs or when new Minecraft versions are released).  This is accomplished by editing a special JSON configuration file.

If you unzip the data pack, and look inside the `source` folder, you will find a `config.json` file.  Open this in your favorite text editor and you will find `groups` array, containing all the sorting groups.  Example snippet:

```js
"groups": {
	{
		"group_name": "dirt",
		"item_frame": "minecraft:dirt",
		"fallback": "misc",
		"items": [
			"minecraft:coarse_dirt",
			"minecraft:dirt",
			"minecraft:farmland",
			"minecraft:grass_block",
			"minecraft:grass_path",
			"minecraft:mycelium",
			"minecraft:podzol"
		]
	},
	{
		"group_name": "gravel",
		"item_frame": "minecraft:gravel",
		"fallback": "dirt",
		"items": [
			"minecraft:gravel"
		]
	},
	{
		"group_name": "misc",
		"item_frame": "minecraft:carrot_on_a_stick",
		"items": [
			"minecraft:carrot_on_a_stick"
		]
	}
}
```

Each group entry has the following properties:

| Property | Type | Description |
|----------|------|-------------|
| `group_name` | String | The name of the sort group, which should be lower-case alphanumeric.  This is an arbitrary name, and does not correspond with any Minecraft Item ID. |
| `item_frame` | String | The exact [Minecraft Item ID](https://minecraft.gamepedia.com/Java_Edition_data_values) of the item in the Item Frame that the sort group uses as a teleport target. |
| `fallback` | String | The name of the group items should fall back to, if this group's item frame cannot be found.  Omit this to fallback to teleporting to the player. |
| `items` | Array | A list of all the [Minecraft Item IDs](https://minecraft.gamepedia.com/Java_Edition_data_values) of items to be sorted into this group. |

The idea is that all the item IDs listed in the `items` array will be sorted into this group, if and only if an [item frame](https://minecraft.gamepedia.com/Item_Frame) containing the item specified in `item_frame` can be found within 128 blocks.  If not, then the item is sorted into the `fallback` group instead.

In the example JSON snippet above, you can see three separate groups described.  The cascading works as follows.  The `gravel` group would sort gravel into an item frame containing a `minecraft:gravel` block.  However, if that item frame couldn't be found, the group falls back to the `dirt` group.  The `dirt` group itself contains 7 items, which would all be sorted to an item frame containing a `minecraft:dirt` block.  However, if *that* item frame couldn't be found, those items would fall back to the `misc` group.  The `misc` group by default catches all unsorted items, and routes to an item frame containing a `minecraft:carrot_on_a_stick`.

## Maximum Teleport Distance

By default, the maximum item teleportation is 128 blocks.  This feature allows multiple sorting systems to coexist in the same world, without items teleporting to the wrong item frames.  However, if you want to change this, it is set in the `config.json` file outside of the `groups` array:

```js
"max_teleport_distance": 128,
```

Change this to any number of blocks you want, but please note that the chunks containing the item frames have to be loaded for the teleport to work.  For long distance teleportation it is recommended you build your storage system inside the spawn chunks, so it stays loaded.

## Teleport Effects

Don't like the particle effect or sound effect when items are sorted?  You can customize or disable those by editing the `effects` array:

```js
"effects": [
	"playsound minecraft:entity.illusioner.mirror_move block @a[distance=..5] ~ ~ ~ 1.0 1.0",
	"particle minecraft:entity_effect ~ ~ ~ 1 1 1 1 100"
]
```

By default we show some colorful particles and play one of the sound effects from the [illusioner](https://minecraft.gamepedia.com/Illusioner) mob, but you can change this.  For example, if you don't want any effects at all, just empty the effects array like this:

```js
"effects": []
```

Or, you can choose your own [particles](https://minecraft.gamepedia.com/Particles#Types_of_particles) and/or [sounds](https://minecraft.gamepedia.com/Sounds.json#Sound_events) from the game, and replace the commands with your custom versions.

## Compiling

When you are done making your changes to the file, save and [validate the syntax](https://jsonlint.com/) (JSON can be picky).  Then you will have to "compile" the config file into actual data pack function code.  This is done by running a special `generate.js` script that also lives in the `source` folder.  You will need [Node.js](https://nodejs.org/) installed on your machine to run this script.  Once installed, open a command prompt, change into the `source` directory and type this:

```
node generate.js
```

This will regenerate all the data pack function code (i.e. all the `.mcfunction` files) using your own `config.json` file as the source.  When the script is complete, the new data pack should be all ready to be installed to your local folder or server.

Note that data packs can be installed as a ZIP file, or as a folder.

# References

- [Minecraft Data Packs](https://minecraft.gamepedia.com/Data_pack)
- [Minecraft Item IDs](https://minecraft.gamepedia.com/Java_Edition_data_values)
- [Node.js](https://nodejs.org/)
- [JSON Validator](https://jsonlint.com/)

# License

**The MIT License (MIT)**

*Copyright (c) 2018 - 2020 Joseph Huckaby*

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

NOT AN OFFICIAL MINECRAFT PRODUCT. NOT APPROVED BY OR ASSOCIATED WITH MOJANG.
