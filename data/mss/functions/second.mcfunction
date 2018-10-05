# Runs every second via tick counter (main:tick)
# Locate any loose items ready to sort

# Setup once if player is standing on chest, on lapis, on gold, and no armor stand is present
execute as @e[type=player] at @s if block ~ ~ ~ minecraft:chest if block ~ ~-1 ~ minecraft:lapis_block if block ~ ~-2 ~ minecraft:gold_block unless entity @e[type=minecraft:armor_stand,name=MSS,distance=0..10] run function mss:setup

# Primary sort routine
execute as @e[type=item] at @s if block ~ ~-1 ~ minecraft:lapis_block if block ~ ~-2 ~ minecraft:gold_block run function mss:sort
