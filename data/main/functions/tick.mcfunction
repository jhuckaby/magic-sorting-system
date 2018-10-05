# Desc: Controls all function to run on the server. Make funtions run much less
# Thanks to: https://xisumavoid.com/vanillatweaks/
# Called by: #minecraft:tick

scoreboard players add #hc_tick hc_tick 1

# Every 1 second
execute if score #hc_tick hc_tick matches 1 run function #main:second
execute if score #hc_tick hc_tick matches 21 run function #main:second
execute if score #hc_tick hc_tick matches 41 run function #main:second
execute if score #hc_tick hc_tick matches 61 run function #main:second
execute if score #hc_tick hc_tick matches 81 run function #main:second

# Every 1 second just after previous tick (cooldown)
execute if score #hc_tick hc_tick matches 2 if score #mss_cooldown mss_cooldown matches 1 run function mss:cleanup
execute if score #hc_tick hc_tick matches 22 if score #mss_cooldown mss_cooldown matches 1 run function mss:cleanup
execute if score #hc_tick hc_tick matches 42 if score #mss_cooldown mss_cooldown matches 1 run function mss:cleanup
execute if score #hc_tick hc_tick matches 62 if score #mss_cooldown mss_cooldown matches 1 run function mss:cleanup
execute if score #hc_tick hc_tick matches 82 if score #mss_cooldown mss_cooldown matches 1 run function mss:cleanup

# Reset at 100
execute if score #hc_tick hc_tick matches 100.. run scoreboard players set #hc_tick hc_tick 0
