# Runs every second via tick counter (main:tick)
# But only if mss_cooldown is set
# Locate any unsorted items and move them to misc

# replace chest
execute at @e[limit=1,sort=nearest,type=minecraft:armor_stand,name=MSS] run setblock ~ ~2 ~ minecraft:chest replace

scoreboard players set #mss_cooldown mss_cooldown 0
