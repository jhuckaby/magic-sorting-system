# Runs every second via tick counter (main:tick)
# Locate any loose items ready to sort

# Primary sort routine
execute as @e[type=item] at @s if block ~ ~-1 ~ minecraft:lapis_block if block ~ ~-2 ~ minecraft:gold_block run function mss:sort
