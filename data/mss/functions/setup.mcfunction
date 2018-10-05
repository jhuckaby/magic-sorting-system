# Setup routine
# Runs once, if player is standing on chest, on lapis, on gold, and no armor stand is present

kill @e[type=minecraft:armor_stand,name=MSS,distance=0..10]
summon minecraft:armor_stand ~ ~-2 ~ {CustomName:"\"MSS\""}

execute at @s run particle minecraft:entity_effect ~ ~ ~ 1 1 1 1 100
execute at @s run playsound minecraft:block.beacon.activate block @a[distance=..5] ~ ~ ~ 1.0 1.0

execute as @e[type=minecraft:armor_stand,name=MSS,distance=0..10] run say Magic Sorting Chest is ready to use!
execute as @e[type=minecraft:armor_stand,name=MSS,distance=0..10] run say Deposit items and destroy chest.
