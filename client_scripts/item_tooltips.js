// priority: 0

function getKeybind(langKey) {
    let key = Text.keybind(langKey).string.trim() ? Text.keybind(langKey).aqua() : Text.aqua('Unbound')
    let keyName = [
        Text.gold(` (`),
        Text.yellow(`'`),
        (Text.translate(langKey)).yellow(),
        Text.yellow(`'`),
        Text.gold(`)`)
    ]
    return [key, Array.from(keyName)]
}

function extractItemName(itemId) {
    const colonIndex = itemId.indexOf(':')
    if (colonIndex > 0) itemId = itemId.substring(colonIndex)
    
    const words = itemId.split('_')
    let out = ''
    for (let word of words) {
        out += word[0].toUpperCase()
        if (word.length > 1) out += word.slice(1)
    }
}

const pollution_filter_map = {
    'dust': {
        'low': ['htm:plant_fabric'],
        'medium': ['minecraft:paper', 'tfc:burlap_cloth'],
        'high': ['tfc:silk_cloth', 'tfc:wool_cloth']
    },
    'carbon': {
        'low': ['minecraft:jungle_leaves', 'minecraft:oak_leaves', 'minecraft:spruce_leaves', 'minecraft:dark_oak_leaves', 'minecraft:acacia_leaves', 'minecraft:birch_leaves', 'minecraft:azalea_leaves', 'minecraft:flowering_azalea_leaves', 'tfc:wood/leaves/acacia', 'tfc:wood/leaves/ash', 'tfc:wood/leaves/aspen', 'tfc:wood/leaves/birch', 'tfc:wood/leaves/blackwood', 'tfc:wood/leaves/chestnut', 'tfc:wood/leaves/douglas_fir', 'tfc:wood/leaves/hickory', 'tfc:wood/leaves/kapok', 'tfc:wood/leaves/maple', 'tfc:wood/leaves/oak', 'tfc:wood/leaves/palm', 'tfc:wood/leaves/pine', 'tfc:wood/leaves/rosewood', 'tfc:wood/leaves/sequoia', 'tfc:wood/leaves/spruce', 'tfc:wood/leaves/sycamore', 'tfc:wood/leaves/white_cedar', 'tfc:wood/leaves/willow', 'twilightforest:rainbow_oak_leaves', 'twilightforest:twilight_oak_leaves', 'twilightforest:canopy_leaves', 'twilightforest:mangrove_leaves', 'twilightforest:dark_leaves', 'twilightforest:time_leaves', 'twilightforest:transformation_leaves', 'twilightforest:mining_leaves', 'twilightforest:sorting_leaves', 'twilightforest:thorn_leaves', 'twilightforest:beanstalk_leaves', 'myrtrees:rubberwood_leaves', 'tconstruct:earth_slime_leaves', 'tconstruct:sky_slime_leaves', 'tconstruct:ender_slime_leaves', 'tfc:plant/cherry_leaves', 'tfc:plant/green_apple_leaves', 'tfc:plant/lemon_leaves', 'tfc:plant/olive_leaves', 'tfc:plant/orange_leaves', 'tfc:plant/peach_leaves', 'tfc:plant/plum_leaves', 'tfc:plant/red_apple_leaves'],
        'medium': ['tfc:plant/leafy_kelp', 'tfc:plant/winged_kelp'],
        'high': ['coralstfc:coral_powder']
    },
    'sulfur': {
        'medium': ['minecraft:charcoal'],
        'high': ['minecraft:white_wool', 'minecraft:orange_wool', 'minecraft:magenta_wool', 'minecraft:light_blue_wool', 'minecraft:yellow_wool', 'minecraft:lime_wool', 'minecraft:pink_wool', 'minecraft:gray_wool', 'minecraft:light_gray_wool', 'minecraft:cyan_wool', 'minecraft:purple_wool', 'minecraft:blue_wool', 'minecraft:brown_wool', 'minecraft:green_wool', 'minecraft:red_wool', 'minecraft:black_wool']
    }
}

onEvent('item.tooltip', tooltip => {
    const boilerParts = [
        ['steampowered:bronze_burner',    'steampowered:bronze_boiler',    'steampowered:bronze_flywheel'],
        ['steampowered:cast_iron_burner', 'steampowered:cast_iron_boiler', 'steampowered:cast_iron_flywheel'],
        ['steampowered:steel_burner',     'steampowered:steel_boiler',     'steampowered:steel_flywheel']
    ]

    boilerParts.forEach(partSet => {
        partSet.forEach(part => {
            tooltip.addAdvanced(part, (item, advanced, text) => {
                text.add(1, Text.red('Not the same as Steam Engines from base Create!'))

                let missing = ['Boiler', 'Burner', 'Engine', 'Flywheel']
                console.log(part)
                for (const thingamajig of missing) {
                    console.log(`${thingamajig.toLowerCase()}: ${part.includes(thingamajig.toLowerCase())}`)
                    if (part.includes(thingamajig.toLowerCase())) {
                        missing.splice(missing.indexOf(thingamajig), 1)
                        console.log(`Spliced: ${missing}`)
                        break
                    }
                }
                text.add(2, Text.gold(`Also needs a matching ${missing[0]}, ${missing[1]} and ${missing[2]} to function`))
                text.add(3, ' ')
            })
        })
    })

    const pollution_filter_map = {
        'dust': {
            'low': ['htm:plant_fabric'],
            'medium': ['minecraft:paper', 'tfc:burlap_cloth'],
            'high': ['tfc:silk_cloth', 'tfc:wool_cloth']
        },
        'carbon': {
            'low': ['minecraft:jungle_leaves', 'minecraft:oak_leaves', 'minecraft:spruce_leaves', 'minecraft:dark_oak_leaves', 'minecraft:acacia_leaves', 'minecraft:birch_leaves', 'minecraft:azalea_leaves', 'minecraft:flowering_azalea_leaves', 'tfc:wood/leaves/acacia', 'tfc:wood/leaves/ash', 'tfc:wood/leaves/aspen', 'tfc:wood/leaves/birch', 'tfc:wood/leaves/blackwood', 'tfc:wood/leaves/chestnut', 'tfc:wood/leaves/douglas_fir', 'tfc:wood/leaves/hickory', 'tfc:wood/leaves/kapok', 'tfc:wood/leaves/maple', 'tfc:wood/leaves/oak', 'tfc:wood/leaves/palm', 'tfc:wood/leaves/pine', 'tfc:wood/leaves/rosewood', 'tfc:wood/leaves/sequoia', 'tfc:wood/leaves/spruce', 'tfc:wood/leaves/sycamore', 'tfc:wood/leaves/white_cedar', 'tfc:wood/leaves/willow', 'twilightforest:rainbow_oak_leaves', 'twilightforest:twilight_oak_leaves', 'twilightforest:canopy_leaves', 'twilightforest:mangrove_leaves', 'twilightforest:dark_leaves', 'twilightforest:time_leaves', 'twilightforest:transformation_leaves', 'twilightforest:mining_leaves', 'twilightforest:sorting_leaves', 'twilightforest:thorn_leaves', 'twilightforest:beanstalk_leaves', 'myrtrees:rubberwood_leaves', 'tconstruct:earth_slime_leaves', 'tconstruct:sky_slime_leaves', 'tconstruct:ender_slime_leaves', 'tfc:plant/cherry_leaves', 'tfc:plant/green_apple_leaves', 'tfc:plant/lemon_leaves', 'tfc:plant/olive_leaves', 'tfc:plant/orange_leaves', 'tfc:plant/peach_leaves', 'tfc:plant/plum_leaves', 'tfc:plant/red_apple_leaves'],
            'medium': ['tfc:plant/leafy_kelp', 'tfc:plant/winged_kelp'],
            'high': ['coralstfc:coral_powder']
        },
        'sulfur': {
            'medium': ['minecraft:charcoal'],
            'high': ['minecraft:white_wool', 'minecraft:orange_wool', 'minecraft:magenta_wool', 'minecraft:light_blue_wool', 'minecraft:yellow_wool', 'minecraft:lime_wool', 'minecraft:pink_wool', 'minecraft:gray_wool', 'minecraft:light_gray_wool', 'minecraft:cyan_wool', 'minecraft:purple_wool', 'minecraft:blue_wool', 'minecraft:brown_wool', 'minecraft:green_wool', 'minecraft:red_wool', 'minecraft:black_wool']
        }
    }
    //#minecraft:wool = ['minecraft:white_wool','minecraft:orange_wool','minecraft:magenta_wool','minecraft:light_blue_wool','minecraft:yellow_wool','minecraft:lime_wool','minecraft:pink_wool','minecraft:gray_wool','minecraft:light_gray_wool','minecraft:cyan_wool','minecraft:purple_wool','minecraft:blue_wool','minecraft:brown_wool','minecraft:green_wool','minecraft:red_wool','minecraft:black_wool']
    //#forge:kelp = ['tfc:plant/leafy_kelp','tfc:plant/winged_kelp']
    //#minecraft:leaves = ['minecraft:jungle_leaves','minecraft:oak_leaves','minecraft:spruce_leaves','minecraft:dark_oak_leaves','minecraft:acacia_leaves','minecraft:birch_leaves','minecraft:azalea_leaves','minecraft:flowering_azalea_leaves','tfc:wood/leaves/acacia','tfc:wood/leaves/ash','tfc:wood/leaves/aspen','tfc:wood/leaves/birch','tfc:wood/leaves/blackwood','tfc:wood/leaves/chestnut','tfc:wood/leaves/douglas_fir','tfc:wood/leaves/hickory','tfc:wood/leaves/kapok','tfc:wood/leaves/maple','tfc:wood/leaves/oak','tfc:wood/leaves/palm','tfc:wood/leaves/pine','tfc:wood/leaves/rosewood','tfc:wood/leaves/sequoia','tfc:wood/leaves/spruce','tfc:wood/leaves/sycamore','tfc:wood/leaves/white_cedar','tfc:wood/leaves/willow','twilightforest:rainbow_oak_leaves','twilightforest:twilight_oak_leaves','twilightforest:canopy_leaves','twilightforest:mangrove_leaves','twilightforest:dark_leaves','twilightforest:time_leaves','twilightforest:transformation_leaves','twilightforest:mining_leaves','twilightforest:sorting_leaves','twilightforest:thorn_leaves','twilightforest:beanstalk_leaves','myrtrees:rubberwood_leaves','tconstruct:earth_slime_leaves','tconstruct:sky_slime_leaves','tconstruct:ender_slime_leaves']

    Object.keys(pollution_filter_map).forEach(pollution_type => {
        Object.keys(pollution_filter_map[pollution_type]).forEach(filter_tier => {
            pollution_filter_map[pollution_type][filter_tier].forEach(filter_item => {
                tooltip.addAdvanced(filter_item, (item, advanced, text) => {
                    if (!tooltip.shift) {
                        text.add(1, [Text.gold('Hold '), Text.yellow('Shift'), Text.gold(' to see more info')])
                    } else {
                        text.add(1, [Text.gold('This item is a '), Text.yellow(`${filter_tier}-tier ${pollution_type} filter`),Text.gold('.')])
                        text.add(2, Text.gold('Place inside of a filter frame and route pollution'))
                        text.add(3, Text.gold('using pumps, vents and chimneys.'))
                    }
                })
            })
        })
    })

    tooltip.addAdvanced('firmalife:drying_mat', (item, advanced, text) => {
        if (!tooltip.shift) {
            text.add(1, [Text.gold('Hold '), Text.yellow('Shift'), Text.gold(' to see more info')])
        } else {
            text.add(1, Text.gold('No longer craftable due to causing lag.'))
            text.add(2, Text.gold('Make solar driers instead!'))
        }
    })
    tooltip.addAdvanced(['supplementaries:soap'], (item, advanced, text) => {
        if (!tooltip.shift) {
            text.add(1, [Text.gold('Hold '), Text.yellow('Shift'), Text.gold(' to see more info')])
        } else {
            text.add(1, [Text.gold('Instantly restores '), Text.yellow('5 points'), Text.gold(' (out of 10) of the dirtiness meter.')])
            text.add(2, Text.gold('Two is enough to fully clean yourself.'))
        }
    })
    tooltip.addAdvanced(/^bodyhygiene:.+_soap$/, (item, advanced, text) => {
        if (!tooltip.shift) {
            text.add(1, [Text.gold('Hold '), Text.yellow('Shift'), Text.gold(' to see more info')])
        } else {
            text.add(1, [Text.yellow('Completely resets'), Text.gold(' the dirtiness meter.')])
            text.add(2, Text.gold('A newly crafted bar has four uses.'))
        }
    })
    tooltip.addAdvanced('kubejs:sanitizer_bottle', (item, advanced, text) => {
        text.add(1, `${item?.nbt?.CustomModelData || 0}mb / 1000mb Sanitizer Fluid`)
        if (!tooltip.shift) {
            text.add(2, [Text.gold('Hold '), Text.yellow('Shift'), Text.gold(' to see more info')])
        } else {
            text.add(2, [Text.yellow('Instantly resets'), Text.gold(' the dirtiness meter.')])
            text.add(3, [Text.gold('Costs '), Text.yellow('10mb per point'), Text.gold(', up to 100mb per full meter.')])
        }
    })
    tooltip.addAdvanced([
        'compressedcreativity:mesh_splashing',
        'compressedcreativity:mesh_dense',
        'compressedcreativity:mesh_haunted'
    ], (item, advanced, text) => {
        text.add(1, [Text.gray('Used with '), Text.white('Industrial Air Blowers')])
    })
    tooltip.addAdvanced('compressedcreativity:mesh_splashing', (item, advanced, text) => {
        if (!tooltip.shift) {
            text.add(2, [Text.gold('Hold '), Text.yellow('Shift'), Text.gold(' to see more info')])
        } else {
            text.add(2, Text.gold('Makes the air blower shoot water particles'))
            text.add(3, Text.gold('as if there is a block of water in front of it.'))
        }
    })
    tooltip.addAdvanced('compressedcreativity:mesh_dense', (item, advanced, text) => {
        if (!tooltip.shift) {
            text.add(2, [Text.gold('Hold '), Text.yellow('Shift'), Text.gold(' to see more info')])
        } else {
            text.add(2, Text.gold('Drastically lowers the minimal temperature for'))
            text.add(3, Text.gold('smoking and blasting, but makes heat drain faster.'))
            text.add(4, [Text.gold('The exact values are '), Text.yellow('55°C+ for smoking ')])
            text.add(5, [Text.gold('and '), Text.yellow('110°C+ for blasting'), Text.gold('.')])
        }
    })
    tooltip.addAdvanced('compressedcreativity:mesh_haunted', (item, advanced, text) => {
        if (!tooltip.shift) {
            text.add(2, [Text.gold('Hold '), Text.yellow('Shift'), Text.gold(' to see more info')])
        } else {
            text.add(2, Text.gold('Turns passing hot air into soul flame,'))
            text.add(3, Text.gold('which allows for haunting recipes.'))
            text.add(4, Text.yellow('Keep in mind that the fan still has to be hot!'))
            text.add(5, [Text.gold('The exact minimal temperature is '), Text.yellow('110°C'), Text.gold('.')])
        }
    })
    tooltip.addAdvanced('compressedcreativity:mesh_splashing_frozen', (item, advanced, text) => {
        if (!tooltip.shift) {
            text.add(1, [Text.gold('Hold '), Text.yellow('Shift'), Text.gold(' to see more info')])
        } else {
            text.add(1, Text.gold('A result of a fan with a Water Soaked Mesh'))
            text.add(2, Text.gold('working outside of the valid temperature range.'))
            text.add(3, Text.gold(''))
            text.add(4, Text.gold('Can be re-heated back into a Soaked Mesh.'))
        }
    })
    tooltip.addAdvanced('compressedcreativity:air_blower', (item, advanced, text) => {
        if (tooltip.shift) {
            text.add(2, Text.aqua('Works like a powerful Encased Fan!'))
            text.add(3, Text.aqua('Powered by PNC air pressure instead of SU.'))
            text.add(4, Text.aqua('At 4.0+ bar, processing speed reaches double.'))
        }
    })
    tooltip.addAdvanced('compressedcreativity:industrial_air_blower', (item, advanced, text) => {
        if (tooltip.shift) {
            text.add(2, Text.aqua('Works like a VERY powerful Encased Fan!'))
            text.add(3, Text.aqua('At 9.1+ bar, processing speed reaches quadruple.'))
            text.add(4, Text.aqua('Accepts meshes: type $blower_mesh in JEI for more info'))
            text.add(5, Text.gold('Can also be heated by any PNC heat source!'))
            text.add(6, [Text.gold('Exact minimal temps are '), Text.yellow('110°C+ for smoking ')])
            text.add(7, [Text.gold('and '), Text.yellow('330°C+ for blasting'), Text.gold('.')])
        }
    })
    tooltip.addAdvanced('compressedcreativity:rotational_compressor', (item, advanced, text) => {
        if (tooltip.shift) {
            text.add(2, Text.aqua('A primitive air compressor.'))
            text.add(3, Text.aqua('Generates up to 20ml/t.'))
            text.add(4, Text.aqua('Doesn\'t support safety or speed upgrades.'))
        }
    })
    tooltip.addAdvanced('compressedcreativity:compressed_air_engine', (item, advanced, text) => {
        if (tooltip.shift) {
            text.add(2, Text.aqua('A cheap motor based on PNC pressure.'))
            text.add(3, Text.aqua('Produces up to 1024su for 40ml/t.'))
        }
    })
    tooltip.addAdvanced('compressedcreativity:mechanical_visor_upgrade', (item, advanced, text) => {
        if (tooltip.shift) {
            text.add(1, Text.aqua('Adds the functionality of Engineer\'s Goggles.'))
            text.add(2, Text.aqua('Alternatively, a similar effect can be accomplished by'))
            text.add(3, Text.aqua('placing a pair of goggles into the curio head slot.'))
        }
    })
    tooltip.addAdvanced('supplementaries:slingshot', (item, advanced, text) => {
        if (!tooltip.shift) {
            text.add(1, [Text.gold('Hold '), Text.yellow('Shift'), Text.gold(' to see more info')])
        } else {
            text.add(1, Text.gold('Shoots blocks! Any placeables, in fact.'))
            text.add(2, Text.gold('Deals no damage and is completely harmless'))
        }
    })
    tooltip.addAdvanced('immersiveengineering:cokebrick', (item, advanced, text) => {
        text.add(1, Text.gold('Coke ovens are made from fire bricks, not coke bricks!'))
    })
    tooltip.addAdvanced(['immersiveengineering:blastbrick', 'immersiveengineering:blastbrick_reinforced'], (item, advanced, text) => {
        text.add(1, Text.gold('Used for making advanced blast furnaces'))
    })
    tooltip.addAdvanced('kubejs:feed_vege', (item, advanced, text) => {
        if (!tooltip.shift) {
            text.add(1, [Text.gold('Hold '), Text.yellow('Shift'), Text.gold(' to see more info')])
        } else {
            text.add(1, Text.gold('fodder that will allow you to tame and'))
            text.add(2, Text.gold('breed some of the wild Boar and Tortoise'))
        }
    })
    tooltip.addAdvanced('kubejs:feed_seed', (item, advanced, text) => {
        if (!tooltip.shift) {
            text.add(1, [Text.gold('Hold '), Text.yellow('Shift'), Text.gold(' to see more info')])
        } else {
            text.add(1, Text.gold('fodder that will allow you to tame and breed'))
            text.add(2, Text.gold('some of the wild animals - Aardvark, Terror Bird'))
        }
    })
    tooltip.addAdvanced('kubejs:feed_hay', (item, advanced, text) => {
        if (!tooltip.shift) {
            text.add(1, [Text.gold('Hold '), Text.yellow('Shift'), Text.gold(' to see more info')])
        } else {
            text.add(1, Text.gold('fodder that will allow you to tame and'))
            text.add(2, Text.gold('breed some of the cattle - Big Bisons'))
        }
    })
    tooltip.addAdvanced('kubejs:feed_fruit', (item, advanced, text) => {
        if (!tooltip.shift) {
            text.add(1, [Text.gold('Hold '), Text.yellow('Shift'), Text.gold(' to see more info')])
        } else {
            text.add(1, Text.gold('fodder that will help you tame and breed some'))
            text.add(2, Text.gold('of the lizards - Newts, Giant Salamanders, Monitor'))
        }
    })
    tooltip.addAdvanced('kubejs:feed_meat', (item, advanced, text) => {
        if (!tooltip.shift) {
            text.add(1, [Text.gold('Hold '), Text.yellow('Shift'), Text.gold(' to see more info')])
        } else {
            text.add(1, Text.gold('fodder that will help you tame and breed'))
            text.add(2, Text.gold('some of the wilds animals - Opossum'))
        }
    })
    tooltip.addAdvanced('untamedwilds:chum', (item, advanced, text) => {
        if (!tooltip.shift) {
            text.add(1, [Text.gold('Hold '), Text.yellow('Shift'), Text.gold(' to see more info')])
        } else {
            text.add(1, Text.gold('fodder that will help you tame and breed some of the'))
            text.add(2, Text.gold('wild fishes - sunfish, triggerfish, sawfish, arowana '))
        }
    })
    tooltip.addAdvanced('kubejs:canoe', (item, advanced, text) => {
        if (!tooltip.shift) {
            text.add(1, [Text.gold('Hold '), Text.yellow('Shift'), Text.gold(' to see more info')])
        } else {
            text.add(1, Text.gold('First boat had to be chiselled and burned from the wood'))
            text.add(2, Text.red('IMPORTANT - only a few types of wood can be chiseled'))
            text.add(3, Text.red('Aspen / Chestnut / Douglas fir / Kapok'))
            text.add(4, Text.red('Pine / Rosewood / Spruce / White cedar / Willow'))
            text.add(5, [Text.gold('- Place 3 logs of '), Text.of('stripped ').red(), Text.of('wood horizontally on one line').gold()])
            text.add(6, Text.gold('- Use a saw with a chisel on all the logs'))
            text.add(7, Text.gold('- Use an axe with a chisel on all logs '))
            text.add(8, Text.gold('- Use a Fire Starter or Flint & Steel and burn the center '))
            text.add(9, Text.gold('- Wait patiently '))
            text.add(10, Text.red('WARNING - you CANNOT break the boat - because you will destroy it '))
        }
    })
    tooltip.addAdvanced('minecraft:campfire', (item, advanced, text) => {
        if (!tooltip.shift) {
            text.add(1, [Text.gold('Hold '), Text.yellow('Shift'), Text.gold(' to see more info')])
        } else {
            text.add(1, Text.gold('Creating a firepit'))
            text.add(2, Text.gold('- Put 1 log and 3 sticks together on top of a block'))
            text.add(3, Text.gold('- Use a Fire Starter or Flint & Steel - burn the top of the block '))
            text.add(4, Text.gold('- Greater chance when you put paper, straw and/or pinecones - optional'))
        }
    })
    tooltip.addAdvanced('minecraft:glass_bottle', (item, advanced, text) => {
        if (!tooltip.shift) {
            text.add(1, [Text.gold('Hold '), Text.yellow('Shift'), Text.gold(' to see more info')])
        } else {
            text.add(1, Text.gold('It is not only bottle'))
            text.add(2, Text.gold('Has a small amount of air inside'))
            text.add(3, Text.gold('Very useful when diving'))
        }
    })
    tooltip.addAdvanced([//#hordes:infection_cures
        'minecraft:golden_apple',
        'kubejs:silver_carrot',
        'kubejs:silver_apple',
        'minecraft:golden_carrot',
        'farmersdelight:squid_ink_pasta',
        'minecraft:enchanted_golden_apple'
    ], (item, advanced, text) => {
        text.add(1, Text.gold('Cures Zombie Infection'))
    })
    tooltip.addAdvanced([//#forge:space_ores
        'beyond_earth:raw_desh',
        'beyond_earth:raw_ostrum',
        'beyond_earth:raw_calorite',
        'beyond_earth:ice_shard'
    ], (item, advanced, text) => {
        if (!tooltip.shift) {
            text.add(1, [Text.gold('Hold '), Text.yellow('Shift'), Text.gold(' to see more info')])
        } else {
            text.add(1, Text.gold('Extraterrestrial mineral.'))
            text.add(2, [Text.gold('Can be found exploring the '), Text.red('Solar System'), Text.gold('.')])
        }
    })
    tooltip.addAdvanced([
        'butchersdelight:dead_cow',
        'butchersdelight:deadsheep',
        'butchersdelight:deadpig',
        'butchersdelight:deadgoat',
        'butchersdelight:deadhoglin',
        'butchersdelight:deadllama',
        'butchersdelight:deadstrider'
    ], (item, advanced, text) => {
        if (!tooltip.shift) {
            text.add(1, [Text.gold('Hold '), Text.yellow('Shift'), Text.gold(' to see more info')])
        } else {
            text.add(1, [Text.gold('Can be hung on a '), Text.yellow('Hook'), Text.gold(' for extra outputs,')])
            text.add(2, Text.gold('or cut up with a knife in the crafting grid.'))
        }
    })
    tooltip.addAdvanced([//#tfc:drink_items
        'tfc:ceramic/jug',
        'waterflasks:leather_flask',
        'waterflasks:iron_flask'
    ], (item, advanced, text) => {
        if (!tooltip.shift) {
            text.add(1, [Text.gold('Hold '), Text.yellow('Shift'), Text.gold(' to see more info')])
        } else {
            text.add(1, Text.gold('Use this item to store drinking water'))
            text.add(2, Text.gold('But be careful, fresh water can give you infection'))
            text.add(3, Text.gold('Drink only boiled, purified or mineral water'))
        }
    })
    tooltip.addAdvanced([//#tfc:lamp_fuel
        'tfc:bucket/tallow',
        'tfc:bucket/olive_oil',
        'immersiveengineering:creosote_bucket'
    ], (item, advanced, text) => {
        if (!tooltip.shift) {
            text.add(1, [Text.gold('Hold '), Text.yellow('Shift'), Text.gold(' to see more info')])
        } else {
            text.add(1, Text.gold('Can be used as fuel in TFC lamps'))
        }
    })
    tooltip.addAdvanced('farmersrespite:coffee_berries', (item, advanced, text) => {
        if (!tooltip.shift) {
            text.add(1, [Text.gold('Hold '), Text.yellow('Shift'), Text.gold(' to see more info')])
        } else {
            text.add(1, [Text.gold('Coffee berries can be found on dark-red '), Text.yellow('Coffee Bushes'), Text.gold('.')])
            text.add(2, [Text.gold('They grow in '), Text.yellow('the Nether'), Text.gold(', exclusively in basalt biomes.')])
            text.add(3, Text.gold('The journey can be difficult, but rewarding.'))
        }
    })
    tooltip.addAdvanced('tfc:food/cattail_root', (item, advanced, text) => {
        if (!tooltip.shift) {
            text.add(1, [Text.gold('Hold '), Text.yellow('Shift'), Text.gold(' to see more info')])
        } else {
            text.add(1, Text.gold('Cattail plants are plentiful in lakes and puddles!'))
            text.add(2, Text.gold('Break them with a knife for a chance to get a root.'))
        }
    })
    tooltip.addAdvanced('tfc:food/taro_root', (item, advanced, text) => {
        if (!tooltip.shift) {
            text.add(1, [Text.gold('Hold '), Text.yellow('Shift'), Text.gold(' to see more info')])
        } else {
            text.add(1, Text.gold('Water Taros are a tropical variant of Cattails.'))
            text.add(2, [Text.gold('They can be found in areas with a temperature of '), Text.yellow('12C+')])
            text.add(3, [Text.gold('and an annual rainfall of '), Text.yellow('250mm+'), Text.gold('.')])
        }
    })
    tooltip.addAdvanced('adpother:dust', (item, advanced, text) => {
        if (!tooltip.shift) {
            text.add(1, [Text.gold('Hold '), Text.yellow('Shift'), Text.gold(' to see more info')])
        } else {
            text.add(1, Text.gold('Released by millstones, saws, crushers and similar machines.'))
            text.add(2, Text.gold('Degrades the ground when absorbed by it.'))
            text.add(3, Text.gold('Explodes when in high concentration with a fire source nearby.'))
            text.add(4, [Text.of('Type ').gold(), Text.of('$filters/dust').yellow(), Text.of(' into the search bar for a full list of filters!').gold()])
        }
    })
    tooltip.addAdvanced('adpother:carbon', (item, advanced, text) => {
        if (!tooltip.shift) {
            text.add(1, [Text.gold('Hold '), Text.yellow('Shift'), Text.gold(' to see more info')])
        } else {
            text.add(1, Text.gold('Released from fire sources and heavy machinery along with sulfur.'))
            text.add(2, Text.gold('Large buildups cause severe debuffs to living beings.'))
            text.add(3, Text.gold('Explodes when in high concentration with a fire source nearby.'))
            text.add(4, [Text.of('Type ').gold(), Text.of('$filters/carbon').yellow(), Text.of(' into the search bar for a full list of filters!').gold()])
        }
    })
    tooltip.addAdvanced('adpother:sulfur', (item, advanced, text) => {
        if (!tooltip.shift) {
            text.add(1, [Text.gold('Hold '), Text.yellow('Shift'), Text.gold(' to see more info')])
        } else {
            text.add(1, Text.gold('Released from fire sources and heavy machinery along with carbon.'))
            text.add(2, Text.gold('Large buildups cause severe debuffs to living beings.'))
            text.add(3, Text.gold('Explodes when in high concentration with a fire source nearby.'))
            text.add(4, [Text.of('Type ').gold(), Text.of('$filters/sulfur').yellow(), Text.of(' into the search bar for a full list of filters!').gold()])
        }
    })

    tooltip.addAdvanced([
        /^adpother:.+_respirator$/,
        'beyond_earth:oxygen_mask',
        'beyond_earth:netherite_oxygen_mask',
        'create:netherite_diving_helmet',
        'mekanism:hazmat_mask',
        'mekanism:scuba_mask'
    ], (item, advanced, text) => {
        if (!tooltip.shift) {
            text.add(1, [Text.gold('Hold '), Text.yellow('Shift'), Text.gold(' to see more info')])
        } else {
            text.add(1, Text.gold('Protects from harmful pollution-borne debuffs!'))
            text.add(2, Text.gold('Multiple different filters can be active at once.'))
            text.add(3, '')
            text.add(4, [Text.of('Prevents eating and some right-click interactions').yellow(), Text.of(',').gold()])
            text.add(5, Text.gold('no matter if it has filters installed or not.'))
        }
    })
    tooltip.addAdvanced([
        'mekanism:mekasuit_helmet',
        'pneumaticcraft:pneumatic_helmet'
    ], (item, advanced, text) => {
        if (!tooltip.shift) {
            text.add(1, [Text.gold('Hold '), Text.yellow('Shift'), Text.gold(' to see more info')])
        } else {
            text.add(1, Text.gold('Protects from harmful pollution-borne debuffs!'))
            text.add(2, Text.gold('Multiple different filters can be active at once.'))
            text.add(3, '')
            text.add(4, Text.gold('Unlike other respirator helmets,'))
            text.add(5, [Text.of('this one ').gold(), Text.of('does not').yellow(), Text.of(' prevent eating or limit interactions!').gold()])
        }
    })
    tooltip.addAdvanced([/^adpother:.+_vacuum_bag$/], (item, advanced, text) => {
        if (!tooltip.shift) {
            text.add(1, [Text.gold('Hold '), Text.yellow('Shift'), Text.gold(' to see more info')])
        } else {
            text.add(1, [Text.of('Equip this to collect pollution sucked in with a ').gold(), Text.of('Vacuum Tube').yellow(), Text.of('!').gold()])
            text.add(2, [Text.of('A filter item can be applied in a ').gold(), Text.of('vanilla anvil').yellow(), Text.of('.').gold()])
            text.add(3, [Text.of('Applying a filter to a bag requires ').gold(), Text.of('two filter items').yellow(), Text.of(' per use.').gold()])
            text.add(4, Text.gold('Multiple different filters can be active at once.'))
            text.add(5, [Text.gold('This can also be equipped in the '), Text.yellow('Curio Back slot'), Text.gold('!')])
        }
    })
    tooltip.addAdvanced([/^adpother:.+_vacuum_tube$/], (item, advanced, text) => {
        if (!tooltip.shift) {
            text.add(1, [Text.gold('Hold '), Text.yellow('Shift'), Text.gold(' to see more info')])
        } else {
            text.add(1, [Text.of('Lets you ').gold(), Text.of('collect pollution manually').yellow(), Text.of('!').gold()])
            text.add(2, [Text.of('You will need a ').gold(), Text.of('vacuum bag').yellow(), Text.of(' to use it.').gold()])
            text.add(3, Text.gold('If your vacuum bag does not have a matching filter,'))
            text.add(4, Text.gold('or the filter runs out, or you don\'t have a bag equipped at all,'))
            text.add(5, Text.gold('it will simply move the pollution to your feet.'))
        }
    })
    tooltip.addAdvanced('kubejs:dust_mop', (item, advanced, text) => {
        text.add(1, `${item?.nbt?.CustomModelData || 0}mb / 1000mb Water`)
        if (!tooltip.shift) {
            text.add(2, [Text.gold('Hold '), Text.yellow('Shift'), Text.gold(' to see more info')])
        } else {
            text.add(2, [Text.of('Allows cleaning up light-gray ').gold(), Text.of('dust pollution').yellow(), Text.of(' blocks!').gold()])
            text.add(3, Text.gold('Does not work for other types of pollution.'))
            text.add(4, Text.gold('Is effectively a very primitive Vacuum Tube.'))
        }
    })
    tooltip.addAdvanced([/^adpother:.+_filter_frame$/], (item, advanced, text) => {
        if (!tooltip.shift) {
            text.add(1, [Text.gold('Hold '), Text.yellow('Shift'), Text.gold(' to see more info')])
        } else {
            text.add(1, [Text.of('Absorbs pollution routed into it from below').gold()])
            text.add(2, [Text.of('with a ').gold(), Text.of('Chimney').yellow(), Text.of(' or with a ').gold(), Text.of('pump-powered Vent').yellow(), Text.of(' directly.').gold()])
            text.add(3, Text.gold('Has a storage for filter items. Can only use one type at once.'))
            text.add(4, Text.gold('Filters degrade much faster than in respirators or vacuum bags.'))
            text.add(5, '')
        }
    })
    tooltip.addAdvanced([/^adchimneys:.+_chimney$/], (item, advanced, text) => {
        if (!tooltip.shift) {
            text.add(1, [Text.gold('Hold '), Text.yellow('Shift'), Text.gold(' to see more info')])
        } else {
            text.add(1, [Text.of('Moves pollution ').gold(), Text.of('vertically').yellow(), Text.of('! Up, to be more specific.').gold()])
            text.add(2, [Text.of('Pollution has to first be captured via a ').gold(), Text.of('Vent').yellow(), Text.of(' that is powered by a ').gold(), Text.of('Pump').yellow(), Text.of('.').gold()])
            text.add(3, Text.gold('A vent can transfer pollution into a chimney from its side or bottom.'))
            text.add(4, Text.gold('Has no range limit, since it lets gravity do the work.'))
        }
    })
    tooltip.addAdvanced([/^adchimneys:.+_vent$/], (item, advanced, text) => {
        if (!tooltip.shift) {
            text.add(1, [Text.gold('Hold '), Text.yellow('Shift'), Text.gold(' to see more info')])
        } else {
            text.add(1, [Text.of('Moves pollution ').gold(), Text.of('horizontally').yellow(), Text.of('!').gold()])
            text.add(2, [Text.of('Pollution has to be first captured via a ').gold(), Text.of('Vent').yellow(), Text.of(' that is powered by a ').gold(), Text.of('Pump').yellow(), Text.of(', or transferred from a ').gold(), Text.of('Chimney').yellow(), Text.of('.').gold()])
            text.add(3, [Text.of('Captures nearby pollution when powered by a ').gold(), Text.of('Pump').yellow(), Text.of('.').gold()])
            text.add(4, Text.gold('Can pull pollution from up to three blocks away, and only in a straight line. No diagonals.'))
            text.add(5, [Text.of('Loses pump power when over ').gold(), Text.of('30 blocks').yellow(), Text.of(' away from a pump.').gold()])
        }
    })
    tooltip.addAdvanced([/^adchimneys:.+_pump$/], (item, advanced, text) => {
        if (!tooltip.shift) {
            text.add(1, [Text.gold('Hold '), Text.yellow('Shift'), Text.gold(' to see more info')])
        } else {
            text.add(1, [Text.of('Powers ').gold(), Text.of('vents').yellow(), Text.of(' to let them capture and move pollution!').gold()])
            text.add(2, [Text.of('Needs ').gold(), Text.of('redstone signal').yellow(), Text.of(' to operate. A lever is a good option!').gold()])
            text.add(3, Text.gold('Works by pulling pollution from horizontally adjacent Vents.'))
            text.add(4, [Text.of('Will "power" (pull from) a chain of up to ').gold(), Text.of('30 Vent blocks').yellow(), Text.of('.').gold()])
            text.add(5, '')
            text.add(6, Text.gold('A simple pollution control setup is a line of Vents on the ceiling,'))
            text.add(7, Text.gold('a Pump somewhere in the middle, and a column of Chimneys above it,'))
            text.add(8, Text.gold('capped with one Filter Frame per pollution type.'))
            text.add(9, Text.gold('The vents will pick up pollution, lead it to the pump,'))
            text.add(10, Text.gold('and the pump will release it directly upwards into the chimneys.'))
            text.add(11, Text.gold('The pollution will then be absorbed by the filter frames.'))
        }
    })
    tooltip.addAdvanced(['adpother:aerometer'], (item, advanced, text) => {
        if (!tooltip.shift) {
            text.add(1, [Text.gold('Hold '), Text.yellow('Shift'), Text.gold(' to see more info')])
        } else {
            text.add(1, Text.yellow('Shows pollution level when held!'))
            text.add(2, Text.gold('Gray, black and yellow gauges will appear on the model'))
            text.add(3, Text.gold('when the pollution level is above 0%.'))
            text.add(4, Text.gold('Exact percentage will also be shown in item tooltip.'))
        }
    })
    tooltip.addAdvanced('waystones:waystone', (item, advanced, text) => {
        if (!tooltip.shift) {
            text.add(1, [Text.gold('Hold '), Text.yellow('Shift'), Text.gold(' to see more info')])
        } else {
            text.add(1, [Text.of('Waystones provide a way of ').gold(), Text.of('teleportation').yellow(), Text.of('.').gold()])
            text.add(2, Text.gold('Placing multiple lets you travel between them.'))
            text.add(3, Text.gold('Teleporting over distances of >1000 blocks will cost XP.'))
            text.add(4, [Text.of('Each player ').gold(), Text.of('only gets one waystone').red(), Text.of(', be careful not to lose yours!').gold()])
            text.add(5, '')
            text.add(6, Text.gold('Has no use in singleplayer, as multiple are required to function.'))
        }
    })
    tooltip.addAdvanced(['toolbelt:belt'], (item, advanced, text) => {
        if (!tooltip.shift) {
            text.add(1, [Text.gold('Hold '), Text.yellow('Shift'), Text.gold(' to see more info')])
        } else {
            text.add(1, Text.yellow(''))
            text.add(2, Text.yellow('Can hold any unstackable item or block!'))
            text.add(3, [Text.of('Press ').gold(), getKeybind('key.toolbelt.slot'), Text.of(' and equip the belt.').gold()])
            text.add(4, [Text.of('Hold any unstackable item and hold ').gold(), getKeybind('key.toolbelt.open')])
            text.add(5, Text.gold('to bring up a radial menu.'))
            text.add(6, '')
            text.add(7, [Text.gold('Starts with 2 slots. Can be upgraded to hold more items.')])
            text.add(8, [Text.of('You can upgrade to ').gold(), Text.of('3 total slots').yellow(), Text.of(' with a ').gold(), Text.of('bone needle').yellow(), Text.of(',').gold()])
            text.add(9, [Text.of('up to ').gold(), Text.of('4').yellow(), Text.of(' with an ').gold(), Text.of('iron').yellow(), Text.of(' and up to ').gold(), Text.of('9').yellow(), Text.of(' with a ').gold(), Text.of('netherite').yellow(), Text.of('!').gold()])
        }
    })
    tooltip.addAdvanced([
        'firmalife:oven_chimney',
        'firmalife:cured_stone_oven_chimney',
        'firmalife:cured_tile_oven_chimney',
        'firmalife:cured_rustic_oven_chimney',
        'firmalife:cured_oven_chimney'
    ], (item, advanced, text) => {
        if (!tooltip.shift) {
            text.add(1, [Text.gold('Hold '), Text.yellow('Shift'), Text.gold(' to see more info')])
        } else {
            text.add(1, Text.gold('Three must be placed behind main oven parts.'))
            text.add(2, Text.gold('See the guidebook entry for more info!'))
        }
    })
    const nutrients = ['Grain', 'Fruit', 'Vegetables', 'Protein', 'Dairy']
    nutrients.forEach(nutrient => {
        ['soup', 'salad'].forEach(foodType => {
            tooltip.addAdvanced(`tfc:food/${nutrient.toLowerCase()}_${foodType}`, (item, advanced, text) => {
                if (tooltip.shift) {
                    text.add([Text.of('Made when ').gray(), Text.of(nutrient).white(), Text.of(' is the highest nutrient').gray()])
                }
            })
        })
    })
    tooltip.addAdvanced('firmalife:food/stinky_soup', (item, advanced, text) => {
        if (tooltip.shift) {
            text.add([Text.of('Made by adding ').gray(), Text.of('Nightshade').white(), Text.of('. Eat at your own risk!').gray()])
        }
    })
    tooltip.addAdvanced('supplementaries:pancake', (item, advanced, text) => {
        if (!tooltip.shift) {
            text.add(1, [Text.gold('Hold '), Text.yellow('Shift'), Text.gold(' to see more info')])
        } else {
            text.add(1, Text.gold('Inedible. Will not rot. Can be placed.'))
            text.add(2, Text.darkGray('What have you done...'))
        }
    })
    tooltip.addAdvanced(/^kubejs:prop_foods\//, (item, advanced, text) => {
        if (!tooltip.shift) {
            text.add(1, [Text.gold('Hold '), Text.yellow('Shift'), Text.gold(' to see more info')])
        } else {
            text.add(1, Text.gold('Inedible. Will not rot.'))
            text.add(2, Text.darkGray('What have you done...'))
        }
    })
    tooltip.addAdvanced('create_sa:copper_magnet', (item, advanced, text) => {
        text.add(1, Text.red('Crafting disabled in favor of custom magnets'))
    })
    tooltip.addAdvanced('kubejs:magnet/copper', (item, advanced, text) => {
        if (!tooltip.shift) {
            text.add(1, [Text.gold('Hold '), Text.yellow('Shift'), Text.gold(' to see more info')])
        } else {
            text.add(1, [Text.of('Can only attract items with the ').gold(), Text.of('$metallic').yellow(), Text.of(' tag!').gold()])
            text.add(2, '')
            text.add(3, Text.gold('Quite a weak pull, but gets the job done.'))
            text.add(4, Text.gold('Take care when moving lots of items around!'))
            text.add(5, '')
            text.add(6, Text.gold('Look into getting a better magnet when you\'re able to!'))
        }
    })
    tooltip.addAdvanced('kubejs:magnet/colored_steel', (item, advanced, text) => {
        if (!tooltip.shift) {
            text.add(1, [Text.gold('Hold '), Text.yellow('Shift'), Text.gold(' to see more info')])
        } else {
            text.add(1, [Text.of('Can attract ').gold(), Text.of('any').yellow(), Text.of(' items, not just metallic ones!').gold()])
            text.add(2, [Text.of('Still, is slightly more effective with ').gold(), Text.of('$metallic').yellow(), Text.of(' items.').gold()])
            text.add(3, [Text.of('$huge_very_heavy').yellow(), Text.of(' items are pulled very slowly.').gold()])
            text.add(4, '')
            text.add(5, Text.gold('Uses no energy despite being made from an accumulator.'))
            text.add(6, '')
            if (!tooltip.ctrl) text.add(7, [Text.of('Hold ').gold(), Text.of('Ctrl').yellow(), Text.of(' for stationary alternatives!').gold()])
            else {
                text.add(7, [Text.gold('* A '), Text.yellow('Smart Chest'), Text.gold(' with '), Text.of('magnet and range upgrades').yellow(), Text.gold(' can suck up')])
                text.add(8, Text.gold('items in a huge area, and has incredible storage.'))
                text.add(9, [Text.gold('* A '), Text.yellow('Vacuum Hopper'), Text.gold(' is similar, but is simpler and cheaper!')])
                text.add(10, [Text.gold('* An '), Text.yellow('Encased Fan'), Text.gold(' with a '), Text.yellow('Nozzle'), Text.gold(' can pull or push items')])
                text.add(11, Text.gold('in all directions. Higher rotation speed means higher range!'))
            }
        }
    })
    tooltip.addAdvanced([
        'kubejs:magnet/hdpe_offline',
        'createsifter:string_mesh',
        /^waterstrainer:.+_mesh/,
        'htm:plant_mesh',
        'kubejs:compressed_mesh',
        'compressedcreativity:mesh_empty',
        'compressedcreativity:mesh_woven'
    ], (item, advanced, text) => {
        text.add(1, Text.gray('Crafting Material'))
    })
    tooltip.addAdvanced('createsifter:brass_mesh', (item, advanced, text) => {
        text.add(1, [Text.gray('Used with '), Text.white('Mechanical Sifters')])
    })
    tooltip.addAdvanced('createsifter:sifter', (item, advanced, text) => {
        text.add(1, [Text.gray('Requires a '), Text.white('Hard Brass Mesh'), Text.gray(' to work')])
    })
    tooltip.addAdvanced([
        'exnihilosequentia:string_mesh',
        'exnihilosequentia:iron_mesh',
        'exnihilosequentia:diamond_mesh',
        'exnihilosequentia:emerald_mesh',
        'exnihilosequentia:netherite_mesh'
    ], (item, advanced, text) => {
        text.add(1, [Text.gray('Used with '), Text.white('Light Sieves')])
    })
    tooltip.addAdvanced([
        'exnihilosequentia:iron_mesh',
        'exnihilosequentia:diamond_mesh',
        'exnihilosequentia:emerald_mesh',
        'exnihilosequentia:netherite_mesh'
    ], (item, advanced, text) => {
        text.add(2, Text.gray('Increased outputs for some recipes. Check with JEI!'))
    })
    tooltip.addAdvanced('exnihilosequentia:birch_sieve', (item, advanced, text) => {
        text.add(1, [Text.gray('Requires any '), Text.white('Large Mesh'), Text.gray(' to work')])
    })
    tooltip.addAdvanced('kubejs:magnet/hdpe', (item, advanced, text) => {
        if (!tooltip.shift) {
            text.add(1, [Text.gold('Hold '), Text.yellow('Shift'), Text.gold(' to see more info')])
        } else {
            text.add(1, Text.gold('Drastically different compared to weaker magnets:'))
            text.add(2, Text.gold('attraction is direct instead of being momentum-based.'))
            text.add(3, Text.yellow('This gives much more control of where items go!'))
            text.add(4, '')
            text.add(5, Text.gold('Does not care whether an item is metallic or not.'))
            text.add(6, [Text.yellow('$huge_very_heavy'), Text.gold(' items are still barely moved.')])
            text.add(7, '')
            if (!tooltip.ctrl) text.add(8, [Text.gold('Hold '), Text.yellow('Ctrl'), Text.gold(' for better alternatives than this magnet!')])
            else {
                text.add(8, [Text.gold('* PNC\'s '), Text.yellow('Magnet Upgrades'), Text.gold(' let a pneumatic chestplate')])
                text.add(9, Text.gold('teleport items from up to 20-ish blocks.'))
                text.add(10, Text.gold('This costs air pressure, but is super powerful!'))
                text.add(11, [Text.gold('* Mekanism\'s '), Text.yellow('Magnetic Attraction Unit'), Text.gold(' lets mekasuit boots')])
                text.add(12, Text.gold('attract nearby items via teleporting.'))
                text.add(13, Text.gold('Does not have a large range, but is passive.'))
            }
        }
    })
    tooltip.addAdvanced('kubejs:magnet/polonium', (item, advanced, text) => {
        if (!tooltip.shift) {
            text.add(1, [Text.gold('Hold '), Text.yellow('Shift'), Text.gold(' to see more info')])
        } else {
            text.add(1, [Text.gold('Similar to the '), Text.yellow('HDPE magnet'), Text.gold(', but has an active ability:')])
            text.add(2, [Text.gold('right clicking starts a '), Text.yellow('warp'), Text.gold(' that teleports items')])
            text.add(3, [Text.gold('within a '), Text.yellow('15-block range'), Text.gold(' directly to your feet.')])
            text.add(4, Text.gold('This has a 20 second cooldown.'))
            text.add(5, '')
            if (!tooltip.ctrl) text.add(6, [Text.gold('Hold '), Text.yellow('Ctrl'), Text.gold(' for better alternatives than this magnet!')])
            else {
                text.add(6, [Text.gold('* PNC\'s '), Text.yellow('Magnet Upgrades'), Text.gold(' let a pneumatic chestplate')])
                text.add(7, Text.gold('teleport items from up to 20-ish blocks.'))
                text.add(8, Text.gold('This costs air pressure, but is super powerful!'))
                text.add(9, [Text.gold('* Mekanism\'s '), Text.yellow('Magnetic Attraction Unit'), Text.gold(' lets mekasuit boots')])
                text.add(10, Text.gold('attract nearby items via teleporting.'))
                text.add(11, Text.gold('Does not have a large range, but is passive.'))
            }
        }
    })
    tooltip.addAdvanced('kubejs:fuel_component', (item, advanced, text) => {
        text.add(1, Text.of('Not consumed in recipes').gold())
    })
    tooltip.addAdvanced('tconstruct:efln_ball', (item, advanced, text) => {
        text.add(1, [Text.of('Spawns ').gold(), Text.of('MASSIVE').red(), Text.of(' pollution clouds.').gold()])
        text.add(2, Text.of('Use responsibly!').gold())
    })
    tooltip.addAdvanced('kubejs:magic_crystal', (item, advanced, text) => {
        text.add(1, Text.gold('Used to create a portal to the Twilight Forest'))
    })
    tooltip.addAdvanced('hardrock_mek_compat:nutrimix', (item, advanced, text) => {
        text.add(1, Text.of('Not edible directly').gold())
    })
    tooltip.addAdvanced(['supplementaries:planter','supplementaries:planter_rich'], (item, advanced, text) => {
        if (!tooltip.shift) {
            text.add(1, [Text.gold('Hold '), Text.yellow('Shift'), Text.gold(' to see more info')])
        } else {
            text.add(1, [Text.gold('Not to be confused with '), Text.yellow('Greenhouse planters'), Text.gold('.')])
            text.add(2, Text.gold('Can be used to grow non-tfc plants,'))
            text.add(3, Text.gold('like Tea or Industrial Hemp.'))
        }
    })
    tooltip.addAdvanced([
        /^supplementaries:sconce/,
        /^supplementaries:candle_holder/,
        /^supplementaries:.+lantern$/,
        /^supplementaries:.+_lamp$/,
        /^minecraft:.*candle$/,
        /^minecraft:.*lantern$/,
        /^minecraft:.*torch$/,
        'minecraft:glowstone',
        /^createdeco:.+_lamp$/,
        /^pneumaticcraft:wall_lamp/,
        'glassential:glass_light',
        'create:experience_block',
        'minecraft:blaze_rod',
        'tconstruct:seared_lantern',
        'tconstruct:scorched_lantern'
    ], (item, advanced, text) => {
        text.add(1, Text.of('Permanent light source').gold())
    })
    tooltip.addAdvanced('beyond_earth:coal_torch', (item, advanced, text) => {
        if (!tooltip.shift) {
            text.add(1, [Text.gold('Hold '), Text.yellow('Shift'), Text.gold(' to see more info')])
        } else {
            text.add(1, [Text.gold('Turns into a '), Text.yellow('permanent torch'), Text.gold(' when lit!')])
        }
    })
    tooltip.addAdvanced('beyond_earth:coal_lantern', (item, advanced, text) => {
        if (!tooltip.shift) {
            text.add(1, [Text.gold('Hold '), Text.yellow('Shift'), Text.gold(' to see more info')])
        } else {
            text.add(1, [Text.gold('Turns into a '), Text.yellow('permanent lantern'), Text.gold(' when lit!')])
            text.add(2, Text.gold('Can only be lit when placed directly on the ground.'))
        }
    })
    tooltip.addAdvanced(['untamedwilds:material_pearl','untamedwilds:material_giant_pearl'], (item, advanced, text) => {
        if (!tooltip.shift) {
            text.add(1, [Text.gold('Hold '), Text.yellow('Shift'), Text.gold(' to see more info')])
        } else {
            text.add(1, [Text.gold('Can rarely be found on '), Text.yellow('Amadron'), Text.gold('!')])
        }
    })
    tooltip.addAdvanced([
        'minecraft:lantern',
        /^supplementaries:.+_lantern$/
    ], (item, advanced, text) => {
        text.add(1, Text.of('Gives off light when equipped!').white())
    })
    tooltip.addAdvanced('minecraft:soul_lantern', (item, advanced, text) => {
        text.add(1, Text.of('Gives off subtle light when equipped!').white())
    })
    tooltip.addAdvanced(/^supplementaries:candle_holder/, (item, advanced, text) => {
        text.add(2, Text.of('Placeable on walls and ceilings').darkGray().italic())
    })
    tooltip.addAdvanced(['create_sa:vault_component', 'create_sa:fan_component'], (item, advanced, text) => {
        text.add(1, Text.of('Brass Drone module').gray())
    })
    tooltip.addAdvanced('create_sa:copper_jetpack_chestplate', (item, advanced, text) => {
        if (tooltip.shift) {
            text.add(5, [Text.of('Low horizontal and vertical speed,').gold()])
            text.add(6, [Text.of('medium vertical range.').gold()])
            text.add(7, [Text.of('Can be filled with a ').gold(),Text.of('filling tank').yellow(),Text.of('.').gold()])
            text.add(8, '')
        }
    })
    tooltip.addAdvanced('create_sa:andesite_jetpack_chestplate', (item, advanced, text) => {
        if (tooltip.shift) {
            text.add(5, [Text.of('High horizontal and vertical speed,').gold()])
            text.add(6, [Text.of('medium vertical range.').gold()])
            text.add(7, [Text.of('Can be filled with a ').gold(),Text.of('fueling tank').yellow(),Text.of('.').gold()])
            text.add(8, '')
        }
    })
    tooltip.addAdvanced('create_sa:brass_jetpack_chestplate', (item, advanced, text) => {
        if (tooltip.shift) {
            text.add(6, [Text.of('Medium horizontal and vertical speed,').gold()])
            text.add(7, [Text.of('very high vertical range.').gold()])
            text.add(8, [Text.of('Can be filled with a ').gold(),Text.of('filling').yellow(),Text.of(' and a ').gold(),Text.of('fueling tank').yellow(),Text.of('.').gold()])
            text.add(9, '')
        }
    })
    tooltip.addAdvanced([
        'create_sa:copper_exoskeleton_chestplate',
        'create_sa:block_picker'
    ], (item, advanced, text) => {
        if (tooltip.shift) {
            text.add(4, [Text.of('Can be filled with a ').gold(),Text.of('filling tank').yellow(),Text.of('.').gold()])
            text.add(5, '')
        }
    })
    tooltip.addAdvanced([
        'create_sa:andesite_exoskeleton_chestplate',
        'create_sa:flamethrower',
        'create_sa:grapplin_whisk'
    ], (item, advanced, text) => {
        if (tooltip.shift) {
            text.add(4, [Text.of('Can be filled with a ').gold(),Text.of('fueling tank').yellow(),Text.of('.').gold()])
            text.add(5, '')
        }
    })
    tooltip.addAdvanced([
        'create_sa:brass_exoskeleton_chestplate',
        'create_sa:portable_drill'
    ], (item, advanced, text) => {
        if (tooltip.shift) {
            text.add(5, [Text.of('Can be filled with a ').gold(),Text.of('filling').yellow(),Text.of(' and a ').gold(),Text.of('fueling tank').yellow(),Text.of('.').gold()])
            text.add(6, '')
        }
    })
    tooltip.addAdvanced([
        //'pneumaticcraft:cod_n_chips',
        //'pneumaticcraft:salmon_tempura',
        //'firmalife:food/banana_split',
        'farmersdelight:bacon_and_eggs',
        'farmersdelight:ratatouille',
        'farmersrespite:blazing_chili',
        
        'farmersdelight:pasta_with_meatballs',
        'farmersdelight:pasta_with_mutton_chop',
        'farmersdelight:mushroom_rice',
        'farmersdelight:steak_and_potatoes',
        'farmersdelight:grilled_salmon',
        'farmersrespite:black_cod',
        'farmersrespite:tea_curry',

        'farmersdelight:roasted_mutton_chops',
        'farmersdelight:vegetable_noodles',
        'farmersdelight:squid_ink_pasta',
        'farmersdelight:roast_chicken',
        'farmersdelight:stuffed_pumpkin',
        'farmersdelight:honey_glazed_ham',
        'farmersdelight:shepherds_pie'
    ], (item, advanced, text) => {
        if (!tooltip.shift) {
            text.add(1, [Text.gold('Hold '), Text.yellow('Shift'), Text.gold(' to see more info')])
        } else {
            text.add(1, [Text.gold('Foods with the '),Text.yellow('Nourishment'),Text.gold(' effect')])
            text.add(2, [Text.gold('will fill you for much longer than usual.')])
        }
    })
    tooltip.addAdvanced(['tfchomestead:jar','tfchomestead:full_jar'], (item, advanced, text) => {
        text.add(1, Text.gold('May cause world rendering issues when placed'))
    })
    tooltip.addAdvanced('tfc:torch', (item, advanced, text) => {
        if (!tooltip.shift) {
            text.add(1, [Text.gold('Hold '), Text.yellow('Shift'), Text.gold(' to see more info')])
        } else {
            text.add(1, [Text.gold('Made from heating up '), Text.yellow('Unlit Torches'), Text.gold('.')])
            text.add(2, [Text.gold('Will produce tiny amounts of pollution when placed.')])
        }
    })
    tooltip.addAdvanced([
        'butchersdelight:rack',
        /^paraglider:.+statue$/,
        'twilightforest:uncrafting_table'
    ], (item, advanced, text) => {
        text.add(1, Text.gold('Decorative use only'))
    })
    tooltip.addAdvanced('minecraft:end_portal_frame', (item, advanced, text) => {
        if (!tooltip.shift) {
            text.add(1, [Text.gold('Hold '), Text.yellow('Shift'), Text.gold(' to see more info')])
        } else {
            text.add(1, [Text.gold('Making twelve of these lets you build your own end portal!')])
            text.add(2, [Text.gold('Acts as a more permanent alternative to '), Text.yellow('End Cakes'), Text.gold('.')])
            text.add(3, [Text.gold('')])
            text.add(4, [Text.gold('Unlike in vanilla, these are destructible.')])
        }
    })
    tooltip.addAdvanced('exnihilosequentia:end_cake', (item, advanced, text) => {
        if (!tooltip.shift) {
            text.add(1, [Text.gold('Hold '), Text.yellow('Shift'), Text.gold(' to see more info')])
        } else {
            text.add(1, [Text.gold('A cheap alternative to making '), Text.yellow('End Portal Frames'), Text.gold('.')])
            text.add(2, [Text.gold('Is intended to be the first way of getting to the End.')])
            text.add(3, [Text.gold('Can be used seven times before it gets fully consumed.')])
        }
    })
    tooltip.addAdvanced('weather2:weather_deflector', (item, advanced, text) => {
        if (!tooltip.shift) {
            text.add(1, [Text.gold('Hold '), Text.yellow('Shift'), Text.gold(' to see more info')])
        } else {
            text.add(1, [Text.gold('Protects an area around 150 blocks in diameter,')])
            text.add(2, [Text.gold('centered on the deflector.')])
            text.add(3, [Text.gold('')])
            text.add(4, [Text.gold('Does not require anything to operate.')])
            text.add(5, [Text.gold('Simply place it down and you\'re good to go!')])
            text.add(6, [Text.gold('')])
            text.add(7, [Text.gold('Can be destroyed, but '), Text.red('will not drop itself when broken'), Text.gold('.')])
        }
    })
    tooltip.addAdvanced('supplementaries:bellows', (item, advanced, text) => {
        if (!tooltip.shift) {
            text.add(1, [Text.gold('Hold '), Text.yellow('Shift'), Text.gold(' to see more info')])
        } else {
            text.add(1, Text.gold('Pushes entities around when given a redstone signal.'))
            text.add(2, Text.gold(''))
            text.add(3, [Text.yellow('Not compatible with TFC charcoal forges'), Text.gold(';')])
            text.add(4, [Text.gold('is essentially just a little toy.')])
        }
    })
    tooltip.addAdvanced(['create:belt_connector'], (item, advanced, text) => {
        text.add(1, Text.gold('Please minimize usage on large servers!'))
    })
    tooltip.addAdvanced(['create:cart_assembler'], (item, advanced, text) => {
        text.add(1, Text.red('Picking up contraption minecarts with a wrench is disabled'))
    })

const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
function convert_thousands(num) {
    if (num >= 1000) return convert_hundreds(Math.floor(num / 1000), true) + (convert_hundreds(Math.floor(num / 1000)) == '' ? '' : ' ') + "thousand " + ((num % 1000 > 0) && (num % 1000 < 100) ? "and " : "") + convert_hundreds(num % 1000)
    else return convert_hundreds(num)
}
function convert_hundreds(num, noAnd) {
    if (num > 99) return ones[Math.floor(num / 100)] + " hundred " + ((!noAnd && num % 100 > 0) ? "and " : "") + convert_tens(num % 100, true)
    else return convert_tens(num)
}
function convert_tens(num, addDashes) {
    if (num < 10) return ones[num]
    else if (num >= 10 && num < 20) return teens[num - 10]
    else if (ones[num % 10] !== '') return tens[Math.floor(num / 10)] + (addDashes ? '-' : ' ') + ones[num % 10]
    else return tens[Math.floor(num / 10)]
}
function convertNumber(num) {
    if (num == 0) return "zero"
    else if (num >= 1000000) return num
    else return convert_thousands(num)
}
    tooltip.addAdvanced('kubejs:gravedigger', (item, advanced, text) => {
        text.add(1, Text.gold('Lets you get rid of player corpses'))
        if (item?.nbt?.CustomModelData && item.nbt.CustomModelData != 0) {
            if (item.nbt.CustomModelData >= 50) text.add(2, Text.darkRed(`${convertNumber(item.nbt.CustomModelData)}`))
            else text.add(2, Text.darkGray(`${convertNumber(item.nbt.CustomModelData)}`))
            //text.add(3, Text.darkGray(`${item.nbt.CustomModelData}`))
        }
    })

    const agedAlcoholEffects = [
        ['Beer', 'Absorption II', '20:00'],
        ['Cider', 'Speed I', '5:20'],
        ['Rum', 'Speed II', '2:40'],
        ['Corn Whiskey', 'Haste I', '5:20'],
        ['Rye Whiskey', 'Haste I', '5:20'],
        ['Whiskey', 'Haste II', '2:40'],
        ['Sake', 'Resistance I', '5:20'],
        ['Vodka', 'Resistance II', '2:40']
    ]
    agedAlcoholEffects.forEach(([drinkName, effectName, effectDuration]) => {
        tooltip.addAdvanced(`tfc:bucket/${drinkName.replace(/ /g, '_').toLowerCase()}`, (item, advanced, text) => {
            text.add(1, [Text.gold('When '), Text.yellow('aged'), Text.gold(`, ${drinkName} gives `), Text.yellow(effectName), Text.gold(' for '), Text.yellow(effectDuration)])
        })
    })

    // Unfortunately traveller's backpacks don't have a consistent name I can use, and tags are loaded after client_scripts
    tooltip.addAdvanced([
    'travelersbackpack:netherite',
    'travelersbackpack:diamond',
    'travelersbackpack:gold',
    'travelersbackpack:emerald',
    'travelersbackpack:iron',
    'travelersbackpack:lapis',
    'travelersbackpack:redstone',
    'travelersbackpack:bookshelf',
    'travelersbackpack:sponge',
    'travelersbackpack:cake',
    'travelersbackpack:cactus',
    'travelersbackpack:melon',
    'travelersbackpack:pumpkin',
    'travelersbackpack:creeper',
    'travelersbackpack:dragon',
    'travelersbackpack:enderman',
    'travelersbackpack:blaze',
    'travelersbackpack:ghast',
    'travelersbackpack:magma_cube',
    'travelersbackpack:spider',
    'travelersbackpack:wither',
    'travelersbackpack:bee',
    'travelersbackpack:ocelot',
    'travelersbackpack:cow',
    'travelersbackpack:chicken',
    'travelersbackpack:squid',
    'travelersbackpack:bat'
    ],
    (item, advanced, text) => {
        text.add(item.nbt.Ability ? Text.green('Ability is active')
        : [Text.red('Ability is inactive'), Text.gold(' (hold '),  Text.yellow('Shift'),  Text.gold(' for info)')])
        if (tooltip.shift) {
            text.add(Text.gold(''))
            text.add(Text.yellow('Abilities are turned off by default!').underlined())
            text.add([Text.gold('When first making the backpack, make sure to '), Text.yellow('equip it'), Text.gold(',')])
            text.add([Text.gold('then open it with '), getKeybind('key.travelersbackpack.inventory'), Text.gold(',')])
            text.add([Text.gold('and '), Text.yellow('enable its abilities'), Text.gold(' with the switch on the left.')])
        }
    })

    
    tooltip.addAdvanced('firmalife:large_planter', (item, advanced, text) => {
        if (!tooltip.shift) {
            text.add(1, [Text.gold('Hold '), Text.yellow('Shift '), Text.gold('for more info')])
        } else {
            text.add(1, [
                Text.gold('Grows '),
                Text.yellow('Barley'), Text.gold(', '),
                Text.yellow('Green Beans'), Text.gold(', '),
                Text.yellow('Jute'), Text.gold(', '),
                Text.yellow('Maize'), Text.gold(', '),
                Text.yellow('Oat'), Text.gold(', ')
            ])
            text.add(2, [
                Text.yellow('Papyrus'), Text.gold(', '),
                Text.yellow('Rye'), Text.gold(', '),
                Text.yellow('Sugarcane'), Text.gold(', '),
                Text.yellow('Tomato'), Text.gold(' and '),
                Text.yellow('Wheat')
            ])
        }
    })
    tooltip.addAdvanced('firmalife:quad_planter', (item, advanced, text) => {
        if (!tooltip.shift) {
            text.add(1, [Text.gold('Hold '), Text.yellow('Shift '), Text.gold('for more info')])
        } else {
            text.add(1, [
                Text.gold('Grows '),
                Text.yellow('Beet'), Text.gold(', '),
                Text.yellow('Cabbage'), Text.gold(', '),
                Text.yellow('Carrot'), Text.gold(', '),
                Text.yellow('Garlic'), Text.gold(', ')
            ])
            text.add(2, [
                Text.yellow('Onion'), Text.gold(', '),
                Text.yellow('Potato'), Text.gold(' and '),
                Text.yellow('Soybean')
            ])
        }
    })
    tooltip.addAdvanced('firmalife:hydroponic_planter', (item, advanced, text) => {
        if (!tooltip.shift) {
            text.add(1, [Text.gold('Hold '), Text.yellow('Shift '), Text.gold('for more info')])
        } else {
            text.add(1, [
                Text.gold('Grows '),
                Text.yellow('Cranberry'), Text.gold(' and '),
                Text.yellow('Rice')
            ])
        }
    })
    tooltip.addAdvanced('firmalife:bonsai_planter', (item, advanced, text) => {
        if (!tooltip.shift) {
            text.add(1, [Text.gold('Hold '), Text.yellow('Shift '), Text.gold('for more info')])
        } else {
            text.add(1, [
                Text.gold('Grows '),
                Text.yellow('Apple'), Text.gold(', '),
                Text.yellow('Cherry'), Text.gold(', '),
                Text.yellow('Cocoa'), Text.gold(', '),
                Text.yellow('Fig'), Text.gold(', ')
            ])
            text.add(2, [
                Text.yellow('Lemon'), Text.gold(', '),
                Text.yellow('Orange'), Text.gold(', '),
                Text.yellow('Peach'), Text.gold(' and '),
                Text.yellow('Plum')
            ])
        }
    })
    tooltip.addAdvanced('firmalife:hanging_planter', (item, advanced, text) => {
        if (!tooltip.shift) {
            text.add(1, [Text.gold('Hold '), Text.yellow('Shift '), Text.gold('for more info')])
        } else {
            text.add(1, [
                Text.gold('Grows '),
                Text.yellow('Banana'), Text.gold(', '),
                Text.yellow('Melon'), Text.gold(', '),
                Text.yellow('Pumpkin'), Text.gold(' and '),
                Text.yellow('Squash')
            ])
        }
    })
    tooltip.addAdvanced('firmalife:trellis_planter', (item, advanced, text) => {
        if (!tooltip.shift) {
            text.add(1, [Text.gold('Hold '), Text.yellow('Shift '), Text.gold('for more info')])
        } else {
            text.add(1, [
                Text.gold('Grows '),
                Text.yellow('Blackberry'), Text.gold(', '),
                Text.yellow('Blueberry'), Text.gold(', '),
                Text.yellow('Bunchberry'), Text.gold(', '),
                Text.yellow('Cloudberry'), Text.gold(', ')
            ])
            text.add(2, [
                Text.yellow('Elderberry'), Text.gold(', '),
                Text.yellow('Gooseberry'), Text.gold(', '),
                Text.yellow('Nightshade'), Text.gold(', '),
                Text.yellow('Pineapple'), Text.gold(', ')
            ])
            text.add(3, [
                Text.yellow('Raspberry'), Text.gold(', '),
                Text.yellow('Snowberry'), Text.gold(', '),
                Text.yellow('Strawberry'), Text.gold(' and '),
                Text.yellow('Wintergreen')
            ])
        }
    })
    tooltip.addAdvanced([
    'tfc:seeds/beet',
    'tfc:seeds/cabbage',
    'tfc:seeds/carrot',
    'tfc:seeds/garlic',
    'tfc:seeds/green_bean',
    'tfc:seeds/jute',
    'tfc:seeds/onion',
    'tfc:seeds/papyrus',
    'tfc:seeds/potato',
    'tfc:seeds/soybean',
    'tfc:seeds/squash',
    'tfc:seeds/sugarcane',
    'tfc:seeds/tomato'
    ], (item, advanced, text) => {
        if (!tooltip.alt) {
            text.add(1, [Text.darkGray('Hold '), Text.gray('Alt '), Text.darkGray('for greenhouse tier')])
        } else {
            text.add(1, [Text.white('Requires '), Text.gold('Wooden'), Text.white(' greenhouse or better')])
        }
    })
    tooltip.addAdvanced([
    'tfc:seeds/barley',
    'tfc:seeds/maize',
    'tfc:seeds/oat',
    'tfc:seeds/rice',
    'tfc:seeds/rye',
    'tfc:seeds/wheat'
    ], (item, advanced, text) => {
        if (!tooltip.alt) {
            text.add(1, [Text.darkGray('Hold '), Text.gray('Alt '), Text.darkGray('for greenhouse tier')])
        } else {
            text.add(1, [Text.white('Requires '), Text.of('Copper').color('#ee7354'), Text.white(' greenhouse or better')])
        }
    })
    tooltip.addAdvanced([
    'tfc:plant/banana_sapling',
    'tfc:plant/blackberry_bush',
    'tfc:plant/blueberry_bush',
    'tfc:plant/bunchberry_bush',
    'tfc:plant/cherry_sapling',
    'tfc:plant/cloudberry_bush',
    'firmalife:plant/cocoa_sapling',
    'tfc:plant/cranberry_bush',
    'tfc:plant/elderberry_bush',
    'firmalife:plant/fig_sapling',
    'tfc:plant/gooseberry_bush',
    'tfc:plant/green_apple_sapling',
    'tfc:plant/lemon_sapling',
    'tfc:seeds/melon',
    'firmalife:plant/nightshade_bush',
    'tfc:plant/olive_sapling',
    'tfc:plant/orange_sapling',
    'tfc:plant/peach_sapling',
    'firmalife:plant/pineapple_bush',
    'tfc:plant/plum_sapling',
    'tfc:seeds/pumpkin',
    'tfc:plant/raspberry_bush',
    'tfc:plant/red_apple_sapling',
    'tfc:plant/snowberry_bush',
    'tfc:plant/strawberry_bush',
    'tfc:plant/wintergreen_bush'
    ], (item, advanced, text) => {
        if (!tooltip.alt) {
            text.add(1, [Text.darkGray('Hold '), Text.gray('Alt '), Text.darkGray('for greenhouse tier')])
        } else {
            text.add(1, [Text.white('Requires '), Text.gray('Iron'), Text.white(' greenhouse or better')])
        }
    })
    tooltip.addAdvanced('firmalife:squirting_moisture_transducer', (item, advanced, text) => {
        if (!tooltip.shift) {
            text.add(1, [Text.gold('Hold '), Text.yellow('Shift '), Text.gold('for more info')])
        } else {
            text.add(1, Text.gold('Legacy item with limited support and documentation.'))
            text.add(2, [Text.gold('Use '), Text.yellow('Sprinklers'), Text.gold(' or '), Text.yellow('Dribblers') ,Text.gold(' instead!')])
        }
    })
    tooltip.addAdvanced('bodyhygiene:shower', (item, advanced, text) => {
        if (!tooltip.shift) {
            text.add(1, [Text.gold('Hold '), Text.yellow('Shift '), Text.gold('for more info')])
        } else {
            text.add(1, [Text.gold('Gimmicky. You may want to use '), Text.yellow('$soap'), Text.gold(' instead.')])
            text.add(2, Text.gold(''))
            text.add(3, Text.gold('Requires a water source precisely two blocks below,'))
            text.add(4, Text.gold('after which the handle can be pulled.'))
            text.add(5, Text.gold('This should make water particles appear!'))
            text.add(6, Text.gold('Stand right below the shower head to slowly get cleaned.'))
        }
    })
    tooltip.addAdvanced('immersiveengineering:alu_post', (item, advanced, text) => {
        if (!tooltip.shift) {
            text.add(1, [Text.gold('Hold '), Text.yellow('Shift '), Text.gold('for more info')])
        } else {
            text.add(1, [Text.gold('Works as a '), Text.yellow('stronger support'), Text.gold('.')])
            text.add(2, [Text.gold('Has '), Text.yellow('1.5x the range'), Text.gold(' (13x8x13) of wooden supports,')])
            text.add(3, [Text.gold('thus covering '), Text.yellow('three times'), Text.gold(' as much area in volume.')])
            text.add(4, Text.gold(''))
            text.add(5, Text.gold('A single post needs 4 blocks of vertical space.'))
            text.add(6, Text.gold('Like wooden supports, will break if a block falls on it.'))
        }
    })
    tooltip.addAdvanced('create:metal_girder', (item, advanced, text) => {
        if (!tooltip.shift) {
            text.add(1, [Text.gold('Hold '), Text.yellow('Shift '), Text.gold('for more info')])
        } else {
            text.add(1, [Text.gold('Works as a '), Text.yellow('super-support'), Text.gold('.')])
            text.add(2, [Text.gold('Has '), Text.yellow('double the range'), Text.gold(' (17x9x17) of wooden supports,')])
            text.add(3, [Text.gold('thus covering '), Text.yellow('eight times'), Text.gold(' as much area in volume.')])
            text.add(4, Text.gold(''))
            text.add(5, Text.gold('Does not need a supporting structure to function:'))
            text.add(6, Text.gold('placing a single girder down is enough for it to work.'))
            text.add(7, Text.gold('Like wooden supports, will break if a block falls on it.'))
        }
    })
    tooltip.addAdvanced([
        'immersiveengineering:connector_lv',
        'immersiveengineering:connector_lv_relay',
        'immersiveengineering:wirecoil_copper',
        'immersiveengineering:wirecoil_copper_ins'
    ], (item, advanced, text) => {
        if (!tooltip.shift) {
            text.add(1, [Text.gold('Hold '), Text.yellow('Shift '), Text.gold('for more info')])
        } else {
            if (!item.id.includes('relay')) {
                text.add(1, [Text.gold('Input/output rate: '), Text.yellow('1024 FE/t')])
            } else {
                text.add(1, [Text.gold('Max capacity before overload: '), Text.yellow('8192 FE/t')])
            }
            text.add(2, Text.gold('No power is lost over distance.'))
            text.add(3, Text.gold(''))
            text.add(4, [Text.gold('Uses '), Text.yellow('LV Wire Coils'), Text.gold(' made from copper.')])
            text.add(5, Text.gold('Wires have an insulated variant.'))
            text.add(6, [Text.gold('Wires can be up to '), Text.yellow('16 blocks'), Text.gold(' long.')])
        }
    })
    tooltip.addAdvanced([
        'immersiveengineering:connector_mv',
        'immersiveengineering:connector_mv_relay',
        'immersiveengineering:wirecoil_electrum',
        'immersiveengineering:wirecoil_electrum_ins'
    ], (item, advanced, text) => {
        if (!tooltip.shift) {
            text.add(1, [Text.gold('Hold '), Text.yellow('Shift '), Text.gold('for more info')])
        } else {
            if (!item.id.includes('relay')) {
                text.add(1, [Text.gold('Input/output rate: '), Text.yellow('4096 FE/t')])
            } else {
                text.add(1, [Text.gold('Max capacity before overload: '), Text.yellow('32768 FE/t')])
            }
            text.add(2, Text.gold('No power is lost over distance.'))
            text.add(3, Text.gold(''))
            text.add(4, [Text.gold('Uses '), Text.yellow('MV Wire Coils'), Text.gold(' made from electrum.')])
            text.add(5, Text.gold('Wires have an insulated variant.'))
            text.add(6, [Text.gold('Wires can be up to '), Text.yellow('16 blocks'), Text.gold(' long.')])
        }
    })
    tooltip.addAdvanced([
        'immersiveengineering:connector_hv',
        'immersiveengineering:connector_hv_relay',
        'immersiveengineering:wirecoil_steel'
    ], (item, advanced, text) => {
        if (!tooltip.shift) {
            text.add(1, [Text.gold('Hold '), Text.yellow('Shift '), Text.gold('for more info')])
        } else {
            if (!item.id.includes('relay')) {
                text.add(1, [Text.gold('Input/output rate: '), Text.yellow('16384 FE/t')])
            } else {
                text.add(1, [Text.gold('Max capacity before overload: '), Text.yellow('131072 FE/t')])
            }
            text.add(2, [Text.yellow('1.25%'), Text.gold(' of power is lost for every '), Text.yellow('16 blocks'), Text.gold(' of distance.')])
            text.add(3, Text.gold(''))
            text.add(4, [Text.gold('Uses '), Text.yellow('HV Wire Coils'), Text.gold(' made from steel and aluminum.')])
            text.add(5, [Text.gold('Wires do '), Text.yellow('not').underlined(), Text.gold(' have an insulated variant. Be careful!')])
            text.add(6, [Text.gold('Wires can be up to '), Text.yellow('32 blocks'), Text.gold(' long.')])
        }
    })
    tooltip.addAdvanced(['createaddition:connector'], (item, advanced, text) => {
        if (tooltip.shift) {
            text.add(1, Text.gold(''))
            text.add(2, [Text.gold('Input/output rate: '), Text.yellow('1024 FE/t')])
            text.add(3, Text.gold('No power is lost over distance.'))
            text.add(4, Text.gold(''))
            text.add(5, Text.gold('All wires are considered insulated.'))
            text.add(6, [Text.gold('Wires can be up to '), Text.yellow('16 blocks'), Text.gold(' long.')])
        }
    })
    tooltip.addAdvanced(['createaddition:large_connector'], (item, advanced, text) => {
        if (tooltip.shift) {
            text.add(1, Text.gold(''))
            text.add(2, [Text.gold('Input/output rate: '), Text.yellow('4096 FE/t')])
            text.add(3, Text.gold('No power is lost over distance.'))
            text.add(4, Text.gold(''))
            text.add(5, Text.gold('All wires are considered insulated.'))
            text.add(6, [Text.gold('Wires can be up to '), Text.yellow('16 blocks'), Text.gold(' long.')])
        }
    })
    tooltip.addAdvanced(/^tfc:wood\/sluice/, (item, advanced, text) => {
        if (!tooltip.shift) {
            text.add(1, [Text.gold('Hold '), Text.yellow('Shift '), Text.gold('for more info')])
        } else {
            text.add(1, Text.gold('Sluiceable items have a special'))
            text.add(2, [Text.gold('"'), Text.of('Can be processed in a sluice').gray(), Text.gold('" tooltip.')])
            text.add(3, [Text.gold('These items '), Text.yellow('will not despawn'), Text.gold(' when')])
            text.add(4, Text.gold('on top of a sluice!'))
        }
    })
    tooltip.addAdvanced('kubejs:slot_pocket', (item, advanced, text) => {
        if (!tooltip.shift) {
            text.add(1, [Text.gold('Hold '), Text.yellow('Shift '), Text.gold('for more info')])
        } else {
            text.add(1, Text.yellow('Permanently unlocks an inventory slot!'))
            text.add(2, Text.gold('Consumed by right clicking.'))
            text.add(3, Text.gold(''))
            text.add(4, Text.gold('Slots can be unlocked one at a time.'))
            text.add(5, Text.gold('In total, 27 slot pockets are needed'))
            text.add(6, Text.gold('to unlock the full inventory.'))
        }
    })
    tooltip.addAdvanced(['immersivepetroleum:projector', 'immersiveengineering:windmill', 'immersiveengineering:watermill'], (item, advanced, text) => {
        text.add(1, Text.gold('Known to have shader compatibility issues'))
    })
    tooltip.addAdvanced('immersiveengineering:survey_tools', (item, advanced, text) => {
        if (!tooltip.shift) {
            text.add(1, [Text.gold('Hold '), Text.yellow('Shift '), Text.gold('for more info')])
        } else {
            text.add(1, [Text.gold('Used to locate virtual veins for the '), Text.yellow('IE Excavator')])
        }
    })
    tooltip.addAdvanced('immersivepetroleum:seismic_survey', (item, advanced, text) => {
        if (!tooltip.shift) {
            text.add(1, Text.gold(''))
            text.add(2, [Text.gold('Hold '), Text.yellow('Shift '), Text.gold('for more info')])
        } else {
            text.add(1, Text.gold(''))
            text.add(2, [Text.gold('Used to locate virtual '), Text.yellow('Crude Oil'), Text.gold(' veins')])
            text.add(3, [Text.gold('that can be extracted with a '), Text.yellow('Derrick'), Text.gold(' and '), Text.yellow('Pumpjack')])
        }
    })
    tooltip.addAdvanced('createoreexcavation:vein_finder', (item, advanced, text) => {
        if (!tooltip.shift) {
            text.add(1, [Text.gold('Hold '), Text.yellow('Shift '), Text.gold('for more info')])
        } else {
            text.add(1, [Text.gold('Used to locate virtual veins for the '), Text.yellow('Drilling Machine')])
            text.add(2, [Text.gold('and '), Text.yellow('Fluid Well Extractor'), Text.gold(' from Create Ore Excavation.')])
            text.add(3, Text.gold(''))
            text.add(4, [Text.gold('Does '), Text.yellow('not').underlined(), Text.gold(' serve as an alternative to TFC prospecting tools!')])
        }
    })
    tooltip.addAdvanced('createoreexcavation:diamond_drill', (item, advanced, text) => {
        if (!tooltip.shift) {
            text.add(1, [Text.gold('Hold '), Text.yellow('Shift '), Text.gold('for more info')])
        } else {
            text.add(1, Text.gold('Required to extract some of the higher-tier veins!'))
            text.add(2, Text.gold('No bonus in speed or efficiency, just unlocks more stuff.'))
            text.add(3, Text.gold(''))
            if (!tooltip.ctrl) {
                text.add(4, [Text.gold('Hold '), Text.yellow('Ctrl'), Text.gold(' for an exact list of additional vein types')])
            } else {
                text.add(4, [Text.darkGray('['), Text.white('Drilling Machine'), Text.gray(']')])
                text.add(5, [Text.gold('- '), Text.yellow('Cinnabar'), Text.gold(' vein')])
                text.add(6, [Text.gold('- '), Text.yellow('Magnetite'), Text.gold(' vein')])
                text.add(7, [Text.gold('- '), Text.yellow('Rare Gems'), Text.gold(' vein')])
                text.add(8, [Text.gold('- '), Text.yellow('Uraninite'), Text.gold(' vein')])
                text.add(9, [Text.darkGray('['), Text.white('Fluid Well Extractor'), Text.gray(']')])
                text.add(10, [Text.gold('- '), Text.yellow('Lava'), Text.gold(' vein')])
            }
        }
    })
    tooltip.addAdvanced('createoreexcavation:netherite_drill', (item, advanced, text) => {
        if (!tooltip.shift) {
            text.add(1, [Text.gold('Hold '), Text.yellow('Shift '), Text.gold('for more info')])
        } else {
            text.add(1, [Text.gold('Required to extract '), Text.yellow('Crude Oil'), Text.gold(' and '), Text.yellow('Osmium'), Text.gold(' veins!')])
            text.add(2, Text.gold('No bonus in speed or efficiency, just unlocks more stuff.'))
        }
    })
    tooltip.addAdvanced(['firmalife:food/nightshade_berry', 'firmalife:food/stinky_soup'], (item, advanced, text) => {
        text.add(1, [Text.gray('Poisonous. '), Text.gray('Be careful!')])
    })
    tooltip.addAdvanced('myrtrees:rubberwood_log', (item, advanced, text) => {
        text.add(1, [Text.gold('Has a chance to not drop when broken')])
    })
    tooltip.addAdvanced('firmalife:beehive', (item, advanced, text) => {
        text.add(1, [Text.gold('Requires Beehive Frames to work')])
    })
    tooltip.addAdvanced('firmalife:watering_can', (item, advanced, text) => {
        text.add(1, [Text.gray('Only usable on Greenhouse planters')])
    })
    tooltip.addAdvanced(/^functionalstorage:fluid_/, (item, advanced, text) => {
        text.add(1, [Text.red('Removed due to upgrades making them too strong.')])
        text.add(2, [Text.gold('Sorry ;-;')])
        text.add(3, [Text.gold('')])
        if (!tooltip.ctrl) {
            text.add(4, [Text.gold('Hold '), Text.yellow('Ctrl'), Text.gold(' for a list of alternatives')])
        } else {
            text.add(4, [Text.gold('* '), Text.yellow('PNC Fluid Tanks'), Text.gold(' are rather cheap to make')])
            text.add(5, [Text.gold('and can hold up to '), Text.yellow('32b of fluid'), Text.gold('.')])
            text.add(6, [Text.gold('* '), Text.yellow('Jumbo Tanks'), Text.gold(' have almost no special features,')])
            text.add(7, [Text.gold('but can store an absurd '), Text.yellow('1024b of fluid'), Text.gold('.')])
            text.add(8, [Text.gold('* High-level '), Text.yellow('Mekanism Fluid Tanks'), Text.gold(' are quite convenient,')])
            text.add(9, Text.gold('but are not available until lategame.'))
        }
    })
    tooltip.addAdvanced([
        'tfc:gem/opal',
        'tfc:gem/pyrite',
        'tfc:gem/ruby',
        'tfc:gem/sapphire',
        'tfc:gem/topaz',
    ], (item, advanced, text) => {
        text.add(1, [Text.red('Not usable outside of Villager trading')])
    })
    tooltip.addAdvanced('minecraft:wolf_spawn_egg', (item, advanced, text) => {
        if (!tooltip.shift) {
            text.add(1, [Text.gold('Hold '), Text.yellow('Shift '), Text.gold('for more info')])
        } else {
            text.add(1, [Text.gold('Summons a '), Text.yellow('vanilla Wolf'), Text.gold('.')])
            text.add(2, [Text.gold('Vanilla wolves can be tamed with '), Text.yellow('Bones'), Text.gold(' using vanilla taming mechanics.')])
            text.add(3, [Text.gold('They are capable of getting powerful perks from '), Text.yellow('Doggy Talents'), Text.gold('.')])
        }
    })
    // TODO: add cat food as a dedicated taming item
    //tooltip.addAdvanced('minecraft:cat_spawn_egg', (item, advanced, text) => {
    //    if (!tooltip.shift) {
    //        text.add(1, [Text.gold('Hold '), Text.yellow('Shift '), Text.gold('for more info')])
    //    } else {
    //        text.add(1, [Text.gold('Summons a '), Text.yellow('vanilla Cat'), Text.gold('.')])
    //        text.add(2, [Text.gold('Vanilla cats can be tamed with '), Text.yellow('Cat Food'), Text.gold(' using vanilla taming mechanics.')])
    //    }
    //})



    const enchantWarning = Text.red('TFC blocks are not affected by Silk Touch or Fortune!')

    tooltip.addAdvanced([
        'minecraft:enchanted_book',
    ], (item, advanced, text) => {
        if (item === Item.of('minecraft:enchanted_book').enchant('minecraft:silk_touch', 1))
            text.add(1, [enchantWarning])

        for (let i = 1; i <= 3; i++) {
            if (item === Item.of('minecraft:enchanted_book').enchant('minecraft:fortune', i))
                text.add(1, [enchantWarning])
        }
    })
    tooltip.addAdvanced([
        'mekanism:module_silk_touch_unit',
        'refinedstorage:silk_touch_upgrade',
        'mekanism:module_fortune_unit',
        /refinedstorage:fortune_([1-3])_upgrade/,
        'immersiveengineering:toolupgrade_drill_fortune'
    ], (item, advanced, text) => {
        text.add(1, [enchantWarning])
    })



    tooltip.addAdvanced([/^tfcambiental/], (item, advanced, text) => {
        if (!tooltip.shift) {
            text.add(1, [Text.gold('Hold '), Text.yellow('Shift '), Text.gold('for more info')])
        } else {
            text.add(1, [Text.gold('TFC Ambiental clothing goes into the Curio slots, not in the armor slots!')])
            text.add(2, [Text.gold('Press '), getKeybind('key.curios.open.desc'), Text.gold(' to open the Curios menu,')])
            text.add(3, [Text.gold('or find the little circle icon near your character model in your inventory.')])
        }
    })
    tooltip.addAdvanced(['tfc:bloomery', 'tfc:blast_furnace'], (item, advanced, text) => {
        if (!tooltip.shift) {
            text.add(1, [Text.gold('Hold '), Text.yellow('Shift '), Text.gold('for more info')])
        } else {
            text.add(1, [Text.gold('The Bloomery and the Blast Furnace '), Text.red('do not accept unprocessed ores'), Text.gold('!')])
            text.add(2, [Text.gold('They take any item that has "'), Text.gray('Melts into'), Text.white('..mb of Cast Iron'), Text.gold('" in its tooltips.')])
            text.add(3, '')
            text.add(4, [Text.gold('Powders technically work, but they are very low density.')])
            text.add(5, [Text.gold('Crafting them into briquettes first is a good idea!')])
            text.add(6, '')
            text.add(7, [Text.yellow('Check the JEI Info Tab for more tips!')])
        }
    })
    tooltip.addAdvanced('immersiveengineering:rockcutter', (item, advanced, text) => {
            text.add(1, [Text.gold('When equipped on a buzzsaw, allows '), Text.yellow('directly extracting TFC raw stone '), Text.gold('!')])
        }
    )
})