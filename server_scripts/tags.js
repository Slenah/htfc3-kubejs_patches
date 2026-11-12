// priority: 10

onEvent('tags.entity_types', event => {
    event.add('untamedwilds:cage_trap_blacklist', [
        'tfchomestead:villager'
    ])
})

// ======= BLOCKS
onEvent('tags.blocks', event => {
    event.add('ftbchunks:interact_whitelist', [
        '#lootr:containers',
        /^applecrates/
    ])
    event.remove('ftbchunks:interact_whitelist', [
        'minecraft:crafting_table'
    ])
    event.add('create:non_movable', [
        '#create:toolboxes'
    ])
    event.add('firmalife:oven_blocks', [
        'firmalife:vat',
        'firmalife:stovetop_grill',
        'firmalife:stovetop_pot',
        'farmersdelight:cooking_pot',
        'farmersrespite:kettle'
    ])
    event.add('firmalife:oven_insulation', [
        'firmalife:vat',
        'firmalife:stovetop_grill',
        'firmalife:stovetop_pot',
        'farmersdelight:cooking_pot',
        'farmersrespite:kettle'
    ])
    event.add('firmalife:drops_ice_shavings', 'tfc:ice_pile')
    event.add('tfc:needs_colored_steel_tool', [
        'minecraft:end_portal_frame'
    ])
    event.add('minecraft:mineable/pickaxe', [
        'weather2:weather_forecast',
        'weather2:tornado_siren',
        'minecraft:end_portal_frame'
    ])
    event.add('minecraft:mineable/shovel', [
        'weather2:sand_layer',
        /^weathertfc:sand\/sand_layer/
    ])
    event.add('hardrock:non_choppable', [
        '#minecraft:logs'
    ])
    event.remove('hardrock:non_choppable', [
        'myrtrees:rubberwood_log',
        'myrtrees:filled_rubberwood_log'
    ])
    event.add('chiselsandbits:chiselable/blocked', [
        '#forge:ores',
        '#minecraft:water',
        '#minecraft:lava',
        '#tfc:rock/raw'
    ])

    
    event.add('minecraft:trapdoors', 'firmalife:sealed_trapdoor')
    event.add('tfc:candles', [
        'tfc:candle',
        /tfc:candle\/.*/
    ])
    event.add('tfc:torches', [
        'tfc:torch',
        'tfc:wall_torch'
    ])
    event.add('tfc:non_permanent_light_source', [
        '#tfc:candles',
        '#tfc:lamps',
        '#tfc:torches'
    ])
    event.add('functionalstorage:drawers', /^functionalstorage:.*_[124]$/)
    event.add('tfc:supports_landslide', [
        'exnihilosequentia:infested_leaves'
    ])
    event.add('tfc:can_landslide', [
        'exnihilosequentia:infested_leaves'
    ])
    event.add('tfc:toughness_3', [
        '#waystones:waystones',
        '#waystones:sharestones',
        /^mekanism/,
        /^pneumaticcraft/
    ])
    event.add('tfc:can_be_snow_piled', [
        'tfc:placed_item'
    ])
    event.add('tfc:can_trigger_collapse', [
        /^tfc:raw_sandstone\/.+/,
        /^tfc_ie_addon:ore\/.+_aluminum/,
        /^tfc_ie_addon:ore\/.+_lead/,
        /^tfc_ie_addon:ore\/.+_uranium/,
        /^firmalife:ore\/.+_chromite/
    ])
    event.add('tfc:can_start_collapse', [
        /^tfc:raw_sandstone\/.+/
    ])
    event.add('tfc:can_collapse', [
        /^tfc:raw_sandstone\/.+/
    ])
    event.add('minecraft:mineable/axe', [
        'sewingkit:sewing_station',
        'sewingkit:storing_sewing_station'
    ])
    event.add('twilightforest:portal/edge', [
        '#tfc:dirt',
        '#tfc:grass',
        '#tfc:clay_grass',
        '#tfc:farmland'
    ])
    event.add('forge:immovable', [
        'domum_ornamentum:vanilla_doors_compat',
        'domum_ornamentum:fancy_door',
        'butchersdelight:rackhoglin',
        'butchersdelight:rackgoat',
        'butchersdelight:racksheep',
        'butchersdelight:rackcow',
        'butchersdelight:rackhoglin',
        'butchersdelight:rackhoglin',
        'exnihilosequentia:stone_barrel',
        'tfc:charcoal_forge',
        '#firmalife:cheese_wheels',
        'firmalife:mixing_bowl',
        'firmalife:iron_composter',
        'firmalife:drying_mat',
        'firmalife:solar_drier',
        'tfc:drying_bricks/silt',
        'tfc:drying_bricks/silty_loam',
        'tfc:drying_bricks/sandy_loam',
        'tfc:drying_bricks/loam',
        'tfc:ingot_pile',
        'tfc:firepit',
        'tfc:pot',
        'tfc:composter',
        'tfc:grill',
        'tfc:bloomery',
        'tfc:bloom',
        'tfc:molten',
        'tfcchannelcasting:mold_table',
        'tfchomestead:full_jar',
        'tfchomestead:jar',
        'untamedwilds:block_burrow',
        '#tfc:wild_fruits',
        '#tfc:anvils',
        '#tfc:sluices'
    ])
    event.add('tfc:tornado_grab', [
        '#tfc:plants',
        'tfc:nest_box',
        'create:shaft',
        'create:cogwheel',
        'create:large_cogwheel',
        'create:depot',
        'create:fluid_pipe',
        'create:chute',
        'create:sail_frame',
        'create:white_sail',
        'exnihilosequentia:infesting_leaves',
        'exnihilosequentia:infested_leaves',
        'firmaciv:thatch_roofing',
        'firmalife:large_planter',
        'firmalife:quad_planter',
        'firmalife:bonsai_planter',
        'firmalife:hanging_planter',
        'firmalife:trellis_planter',
        'firmalife:beehive',
        'firmalife:treated_wood_greenhouse_door',
        'firmalife:treated_wood_greenhouse_roof_top',
        'firmalife:treated_wood_greenhouse_roof',
        'firmalife:weathered_treated_wood_greenhouse_door',
        'firmalife:weathered_treated_wood_greenhouse_roof_top',
        'firmalife:weathered_treated_wood_greenhouse_roof',
        '#minecraft:fences', 
        '#minecraft:fence_gates', 
        '#minecraft:wooden_doors', 
        '#minecraft:wooden_stairs', 
        '#minecraft:wooden_slabs', 
        '#minecraft:flowers', 
        '#minecraft:planks', 
        '#minecraft:wool', 
        '#minecraft:wooden_trapdoors', 
        '#minecraft:wooden_pressure_plates', 
        '#minecraft:cave_vines', 
        '#minecraft:saplings', 
        '#minecraft:banners', 
        '#minecraft:small_flowers', 
        '#minecraft:beds', 
        '#minecraft:tall_flowers', 
        '#minecraft:flowers', 
        '#minecraft:candles', 
        '#minecraft:wall_signs', 
        '#minecraft:signs', 
        '#minecraft:fire', 
        '#minecraft:campfires', 
        '#minecraft:replaceable_plants', 
        '#minecraft:wall_post_override'
    ])

    event.add('adpother:pollution_passthrough', [
        '#minecraft:carpets',
        '#minecraft:trapdoors',
        '#forge:thatch',
        '#minecraft:signs',
        '#immersiveengineering:scaffoldings/aluminum',
        '#immersiveengineering:scaffoldings/steel',
        '#immersiveengineering:scaffolding_slabs/aluminum',
        '#immersiveengineering:scaffolding_stairs/aluminum',
        '#immersiveengineering:scaffolding_slabs/steel',
        '#immersiveengineering:scaffolding_stairs/steel',
        'createdeco:zinc_catwalk',
        'createdeco:copper_catwalk',
        'createdeco:iron_catwalk',
        'createdeco:cast_iron_catwalk',
        'createdeco:brass_catwalk',
        'createdeco:andesite_catwalk',
        'createdeco:netherite_catwalk',
        'createdeco:gold_catwalk',
        /^mcwbridges/,
        /^mcw_tfc_aio:bridges/
    ])
})
// ===== FLUIDS
onEvent('tags.fluids', event => {
    event.add('tfc:milks', 'kubejs:oat_milk')
    event.add('tfc:milk_vinegar', ['kubejs:goat_milk_vinegar', 'kubejs:yak_milk_vinegar'])

    event.add('forge:molten_rose_gold', ['tfc:metal/rose_gold'])
    event.add('forge:molten_unknown', ['tfc:metal/unknown'])
    event.add('forge:molten_weak_steel', ['tfc:metal/weak_steel'])
    event.add('forge:molten_weak_red_steel', ['tfc:metal/weak_red_steel'])
    event.add('forge:molten_weak_blue_steel', ['tfc:metal/weak_blue_steel'])
    event.add('forge:molten_cast_iron', ['tfc:metal/cast_iron'])
    event.add('forge:molten_wrought_iron', ['tfc:metal/wrought_iron'])
    event.add('forge:molten_iron_any', ['tfc:metal/cast_iron','tconstruct:molten_iron'])
    event.add('forge:molten_bismuth', ['tfc:metal/bismuth'])
    event.add('forge:molten_bismuth_bronze', ['tfc:metal/bismuth_bronze'])
    event.add('forge:molten_black_bronze', ['tfc:metal/black_bronze'])
    event.add('forge:molten_sterling_silver', ['tfc:metal/sterling_silver'])
    event.add('forge:molten_black_steel', ['tfc:metal/black_steel'])
    event.add('forge:molten_red_steel', ['tfc:metal/red_steel'])
    event.add('forge:molten_blue_steel', ['tfc:metal/blue_steel'])
    event.add('forge:molten_colored_steel', ['#forge:molten_red_steel', '#forge:molten_blue_steel'])

    event.add('forge:molten_iron_quartz', ['kubejs:molten_iron_quartz'])
    event.add('forge:molten_andesite_alloy', ['kubejs:andesite_alloy'])
    event.add('forge:molten_lead', ['tfc_ie_addon:metal/lead'])
    event.add('forge:molten_steel', ['tfc:metal/steel'])
    event.add('forge:molten_copper', ['tfc:metal/copper'])
    event.add('forge:molten_gold', ['tfc:metal/gold'])
    event.add('forge:molten_silver', ['tfc:metal/silver'])
    event.add('forge:molten_brass', ['tfc:metal/brass'])
    event.add('forge:molten_bronze', ['tfc:metal/bronze'])
    event.add('forge:molten_nickel', ['tfc:metal/nickel'])
    event.add('forge:molten_tin', ['tfc:metal/tin'])
    event.add('forge:molten_zinc', ['tfc:metal/zinc'])
    event.add('forge:molten_uranium', ['tfc_ie_addon:metal/uranium'])
    event.add('forge:molten_constantan', ['tfc_ie_addon:metal/constantan'])
    event.add('forge:molten_electrum', ['tfc_ie_addon:metal/electrum'])
    event.add('forge:molten_aluminum', ['tfc_ie_addon:metal/aluminum'])
    event.add('forge:active_redstone', ['kubejs:active_redstone'])
    event.add('forge:molten_fire_clay', ['kubejs:molten_fire_clay'])
    event.add('tfc:andesite_alloy', ['kubejs:andesite_alloy'])
    event.add('tfc:andesite_stone', ['kubejs:andesite_stone'])
    event.add('tfc:mixable', ['kubejs:herbal_water', 'kubejs:purified_water', 'kubejs:boiled_water', 'kubejs:mineral_water','immersiveengineering:creosote'])
    event.add('minecraft:waters', ['minecraft:water', 'kubejs:herbal_water', 'kubejs:purified_water', 'kubejs:boiled_water', 'kubejs:mineral_water', 'tfc:spring_water'])
    event.add('minecraft:water', ['kubejs:herbal_water', 'kubejs:purified_water', 'kubejs:boiled_water', 'kubejs:mineral_water'])
    event.add('tfc:drinkables', ['kubejs:herbal_water', 'kubejs:purified_water', 'kubejs:boiled_water', 'kubejs:mineral_water', 'minecraft:milk','firmalife:yak_milk','firmalife:goat_milk'])
    event.add('tfc:infinite_water', ['kubejs:purified_water'])
    event.add('tfc:usable_in_ingot_mold', ['kubejs:andesite_alloy', 'tconstruct:seared_stone', 'kubejs:andesite_stone', 'tconstruct:molten_glass', 'kubejs:molten_iron_quartz'])
    event.add('tfc:usable_in_barrel', [
        'firmalife:sugar_water',
        'tconstruct:honey',
        'kubejs:herbal_water',
        'kubejs:purified_water',
        'kubejs:boiled_water',
        'kubejs:mineral_water',
        'kubejs:seed_oil_water',
        'create:tea',
        'tfc:spring_water',
        'createaddition:seed_oil',
        "kubejs:goat_milk_vinegar",
        "kubejs:yak_milk_vinegar",
        "kubejs:oat_slurry",
        "kubejs:lumpy_oat_milk",
        "kubejs:unsweetened_oat_milk",
        "kubejs:liquid_smoke",
    ])
    event.add('tfc:usable_in_blue_steel_bucket', ['firmalife:sugar_water', 'tconstruct:honey', 'immersiveengineering:creosote', 'kubejs:herbal_water', 'kubejs:purified_water', 'kubejs:boiled_water', 'kubejs:mineral_water', 'kubejs:seed_oil_water', 'kubejs:active_redstone', 'kubejs:andesite_stone', 'kubejs:andesite_alloy', 'kubejs:molten_iron_quartz', 'createaddition:seed_oil', 'kubejs:liquid_smoke'])
    event.add('tfc:usable_in_red_steel_bucket', ['firmalife:sugar_water', 'tconstruct:honey', 'immersiveengineering:creosote', 'kubejs:herbal_water', 'kubejs:purified_water', 'kubejs:boiled_water', 'kubejs:mineral_water', 'kubejs:seed_oil_water', 'kubejs:active_redstone', 'kubejs:andesite_stone', 'kubejs:andesite_alloy', 'kubejs:molten_iron_quartz', 'createaddition:seed_oil', 'kubejs:liquid_smoke'])
    event.add('tfc:usable_in_wooden_bucket', ['firmalife:sugar_water', 'tconstruct:honey', 'immersiveengineering:creosote', 'kubejs:herbal_water', 'kubejs:purified_water', 'kubejs:boiled_water', 'kubejs:mineral_water', 'kubejs:seed_oil_water', 'create:tea', 'tfc:spring_water', 'createaddition:seed_oil', 'kubejs:liquid_smoke'])
    event.add('tfc:usable_in_pot', ['firmalife:sugar_water', 'tconstruct:honey', 'immersiveengineering:creosote', 'kubejs:herbal_water', 'kubejs:purified_water', 'kubejs:boiled_water', 'kubejs:mineral_water', 'kubejs:seed_oil_water', 'create:tea'])
    event.add('tfc:usable_in_jug', ['firmalife:sugar_water', 'tconstruct:honey', 'immersiveengineering:creosote', 'kubejs:herbal_water', 'kubejs:purified_water', 'kubejs:boiled_water', 'kubejs:mineral_water', 'kubejs:seed_oil_water', 'tfc:tallow', 'create:tea'])
    event.add('firmalife:usable_in_mixing_bowl', ['tconstruct:honey', 'immersiveengineering:creosote', 'kubejs:herbal_water', 'kubejs:purified_water', 'kubejs:boiled_water', 'kubejs:mineral_water', 'kubejs:seed_oil_water', 'create:tea', 'createaddition:seed_oil'])
    event.add('firmalife:usable_in_vat', ['tconstruct:honey', 'immersiveengineering:creosote', 'kubejs:herbal_water', 'kubejs:purified_water', 'kubejs:boiled_water', 'kubejs:mineral_water', 'kubejs:seed_oil_water'])
    event.add('tfc:brine', ['mekanism:brine'])
    event.add('forge:brine', ['tfc:brine'])
    event.add('forge:liquid_smoke', 'kubejs:liquid_smoke')
    event.remove('forge:diesel', ['pneumaticcraft:diesel'])
    event.remove('forge:biodiesel', ['pneumaticcraft:biodiesel'])
    event.remove('forge:kerosene', ['pneumaticcraft:kerosene'])
    event.remove('forge:gasoline', ['pneumaticcraft:gasoline'])
    event.remove('forge:lubricant', ['pneumaticcraft:lubricant'])
    event.remove('forge:ethanol', ['pneumaticcraft:ethanol'])
    event.remove('forge:plantoil', ['pneumaticcraft:vegetable_oil', 'immersiveengineering:plantoil'])
})
// ========= ITEMS
onEvent('tags.items', event => {
    //event.add('ftbchunks:right_click_blacklist', [
    //    'pneumaticcraft:micromissiles'
    //])
    event.add('adpother:pollution_passthrough', [
        '#minecraft:carpets',
        '#minecraft:trapdoors',
        '#forge:thatch',
        '#minecraft:signs',
        '#immersiveengineering:scaffoldings/aluminum',
        '#immersiveengineering:scaffoldings/steel',
        '#immersiveengineering:scaffolding_slabs/aluminum',
        '#immersiveengineering:scaffolding_stairs/aluminum',
        '#immersiveengineering:scaffolding_slabs/steel',
        '#immersiveengineering:scaffolding_stairs/steel',
        'createdeco:zinc_catwalk',
        'createdeco:copper_catwalk',
        'createdeco:iron_catwalk',
        'createdeco:cast_iron_catwalk',
        'createdeco:brass_catwalk',
        'createdeco:andesite_catwalk',
        'createdeco:netherite_catwalk',
        'createdeco:gold_catwalk',
        /^mcwbridges/,
        /^mcw_tfc_aio:bridges/
    ])

    event.add('tfc:tornado_grab', [
        '#tfc:plants',
        'tfc:nest_box',
        'create:shaft',
        'create:cogwheel',
        'create:large_cogwheel',
        'create:depot',
        'create:fluid_pipe',
        'create:chute',
        'create:sail_frame',
        'create:white_sail',
        'exnihilosequentia:infesting_leaves',
        'exnihilosequentia:infested_leaves',
        'firmaciv:thatch_roofing',
        'firmalife:large_planter',
        'firmalife:quad_planter',
        'firmalife:bonsai_planter',
        'firmalife:hanging_planter',
        'firmalife:trellis_planter',
        'firmalife:beehive',
        'firmalife:treated_wood_greenhouse_door',
        'firmalife:treated_wood_greenhouse_roof_top',
        'firmalife:treated_wood_greenhouse_roof',
        'firmalife:weathered_treated_wood_greenhouse_door',
        'firmalife:weathered_treated_wood_greenhouse_roof_top',
        'firmalife:weathered_treated_wood_greenhouse_roof',
        '#minecraft:fences', 
        '#minecraft:fence_gates', 
        '#minecraft:wooden_doors', 
        '#minecraft:wooden_stairs', 
        '#minecraft:wooden_slabs', 
        '#minecraft:flowers', 
        '#minecraft:planks', 
        '#minecraft:wool', 
        '#minecraft:wooden_trapdoors', 
        '#minecraft:wooden_pressure_plates', 
        '#minecraft:cave_vines', 
        '#minecraft:saplings', 
        '#minecraft:banners', 
        '#minecraft:small_flowers', 
        '#minecraft:beds', 
        '#minecraft:tall_flowers', 
        '#minecraft:flowers', 
        '#minecraft:candles', 
        '#minecraft:wall_signs', 
        '#minecraft:signs', 
        '#minecraft:fire', 
        '#minecraft:campfires', 
        '#minecraft:replaceable_plants', 
        '#minecraft:wall_post_override'
    ])

    event.add('hardrock:explosion_immune', [
        '#forge:ingots/compressed_iron'
    ])

    event.add('hardrock:dont_despawn', [
        '#forge:ingots/compressed_iron'
    ])
    
    event.add('immersiveengineering:forbidden_in_crates', [
        '#functionalstorage:drawer',
        'toolbelt:belt'
    ])
    
    event.remove('forge:gravel', /^tfc:deposit/)
    event.add('hardrock:permanent_lanterns', [
        'minecraft:lantern',
        'minecraft:soul_lantern',
        'supplementaries:copper_lantern',
        'supplementaries:brass_lantern',
        'supplementaries:crimson_lantern',
        'supplementaries:silver_lantern',
        'supplementaries:lead_lantern',
    ])
    event.add('tfc:wooden_trapdoors', /^tfc:wood\/planks\/.+_trapdoor$/)
    event.add('mcw_tfc_aio:bridge/supports/wooden', /^mcw_tfc_aio:bridges\/(?!.*(brick|bamboo|iron)).+_bridges\/.+_bridge_pier$/)
    event.add('forge:rods/metal', [
        /^tfc:metal\/rod\//,
        /^firmalife:metal\/rod\//,
        'immersiveengineering:stick_aluminum',
        /^immersiveposts:stick_/,
        'kubejs:compressed_rod',
        'kubejs:misc_mats/netherite/rod'
    ])
    event.add('forge:rubber', 'kubejs:vulcanized_rubber')
    event.add('forge:workbenches', '#tfc:workbenches')
    event.add('tfc:rock/button', /^tfc:rock\/button\//)
    event.add('tfc:metal_item/cast_iron_tools', 'kubejs:gravedigger')
    event.add('tfc:metal_item/cast_iron', '#tfc:metal_item/cast_iron_tools')
    event.add('tfc:shovels', 'kubejs:gravedigger')

    event.remove('forge:gems/diamond', 'tfc:gem/diamond')
    event.remove('forge:gems/emerald', 'tfc:gem/emerald')
    event.remove('forge:gems/lapis', 'tfc:gem/lapis_lazuli')
    event.add('forge:tools/screwdrivers', '#immersiveengineering:tools/screwdrivers')
    event.add('sewingkit:needles', [
        'sewingkit:bone_sewing_needle',
        'sewingkit:iron_sewing_needle',
        'sewingkit:netherite_sewing_needle'
    ])
    event.add('tfc:buckets/metal/colored_steel', [
        'tfc:metal/bucket/red_steel',
        'tfc:metal/bucket/blue_steel'
    ])
    event.add('tfc:buckets/metal', [
        '#tfc:buckets/metal/colored_steel',
        'minecraft:bucket'
    ])
    event.add('farmersdelight:nourishing/1x', [
        'pneumaticcraft:cod_n_chips',
        'pneumaticcraft:salmon_tempura',
        'firmalife:food/banana_split',

        'farmersdelight:bacon_and_eggs',
        'farmersdelight:ratatouille',
        'farmersrespite:blazing_chili'
    ])
    event.add('farmersdelight:nourishing/2x', [
        'farmersdelight:pasta_with_meatballs',
        'farmersdelight:pasta_with_mutton_chop',
        'farmersdelight:mushroom_rice',
        'farmersdelight:steak_and_potatoes',
        'farmersdelight:grilled_salmon',
        'farmersrespite:black_cod',
        'farmersrespite:tea_curry'
    ])
    event.add('farmersdelight:nourishing/3x', [
        'farmersdelight:roasted_mutton_chops',
        'farmersdelight:vegetable_noodles',
        'farmersdelight:squid_ink_pasta',
        'farmersdelight:roast_chicken',
        'farmersdelight:stuffed_pumpkin',
        'farmersdelight:honey_glazed_ham',
        'farmersdelight:shepherds_pie'
    ])
    event.add('farmersdelight:nourishing', ['#farmersdelight:nourishing/1', '#farmersdelight:nourishing/2', '#farmersdelight:nourishing/3'])

    event.remove('tfc:gem_powders', 'tfc:powder/lapis_lazuli')
    event.add('forge:dusts/amethyst', ['kubejs:clean_gem_dust/amethyst', 'kubejs:clean_amethyst_powder']) // Includes old amethyst powder for compatibility
    event.add('forge:dusts/opal', 'kubejs:clean_gem_dust/opal')
    event.add('forge:dusts/pyrite', 'kubejs:clean_gem_dust/pyrite')
    event.add('forge:dusts/ruby', 'kubejs:clean_gem_dust/ruby')
    event.add('forge:dusts/sapphire', 'kubejs:clean_gem_dust/sapphire')
    event.add('forge:dusts/topaz', 'kubejs:clean_gem_dust/topaz')

    event.removeAll('tfc:can_be_lit_on_torch')
    event.add('tfc:can_be_lit_on_torch', 'tfc:dead_torch')
    event.add('tfc:rock/bricks/slabs', /^tfc:rock\/bricks\/.+_slab$/)
    event.add('tfc:starts_fires_with_durability', [
        'minecraft:torch'
    ])

    //event.remove('curios:belt', 'toolbelt:belt')
    event.add('tfc:axes', ['tconstruct:hand_axe', 'tconstruct:broad_axe', 'tconstruct:mattock'])
    event.add('forge:prop_foods', [
        'supplementaries:pancake',
        /^kubejs:prop_foods\//
    ])
    event.add('supplementaries:cookies', ['kubejs:prop_foods/cookie'])
    event.remove('firmalife:foods/washable', 'firmalife:food/stinky_soup')
    event.add('tfc:dynamic_bowl_items', 'firmalife:food/stinky_soup')
    event.add('tfc:wooden_bowl_food', [
        'minecraft:rabbit_stew',
        'minecraft:beetroot_soup',
        'untamedwilds:food_turtle_soup',
        'untamedwilds:food_hemlock_stew',
        'farmersrespite:blazing_chili',
        'farmersrespite:tea_curry',
        'farmersrespite:black_cod',
        'farmersdelight:baked_cod_stew',
        'farmersdelight:squid_ink_pasta',
        'farmersdelight:chicken_soup',
        'farmersdelight:dog_food',
        'farmersdelight:fish_stew',
        'farmersdelight:fried_rice',
        'farmersdelight:pumpkin_soup',
        'farmersdelight:bone_broth',
        'farmersdelight:mushroom_rice',
        'farmersdelight:ratatouille',
        'farmersdelight:cooked_rice',
        'farmersdelight:noodle_soup',
        'farmersdelight:vegetable_soup',
        'farmersdelight:pasta_with_meatballs',
        'farmersdelight:pasta_with_mutton_chop',
        'farmersdelight:beef_stew',
        'farmersdelight:vegetable_noodles',
        'farmersdelight:fruit_salad',
        'farmersdelight:grilled_salmon',
        'farmersdelight:mixed_salad',
        'farmersdelight:steak_and_potatoes',
        'farmersdelight:roasted_mutton_chops',
        'farmersdelight:nether_salad',
        'farmersdelight:bacon_and_eggs',
        'farmersdelight:shepherds_pie_block',
        'farmersdelight:shepherds_pie',
        'farmersdelight:honey_glazed_ham_block',
        'farmersdelight:honey_glazed_ham',
        'farmersdelight:roast_chicken_block',
        'farmersdelight:roast_chicken',
        'farmersdelight:rice_roll_medley_block',
        'farmersdelight:stuffed_pumpkin'
    ])
    event.add('tfc:foods/usable_in_soup', [
        'minecraft:baked_potato',

        // grains
        '#firmalife:foods/flatbreads',
        '#firmalife:foods/slices',
        'firmalife:food/toast',
        'firmalife:food/corn_tortilla',
        'farmersdelight:raw_pasta',
        // dairy
        '#firmalife:foods/cheeses',
        'firmalife:food/shredded_cheese',
        'tfc:food/cooked_egg',
        'tfc:food/boiled_egg',
        'firmalife:food/butter',
        // misc
        'farmersdelight:dumplings'
    ])
    event.add('tfc:foods/usable_in_salad', [
        'minecraft:baked_potato',

        // grains
        '#firmalife:foods/flatbreads',
        '#firmalife:foods/slices',
        'firmalife:food/toast',
        'firmalife:food/corn_tortilla',
        // dairy
        '#firmalife:foods/cheeses',
        'firmalife:food/shredded_cheese',
        'tfc:food/cooked_egg',
        'tfc:food/boiled_egg'
    ])
    event.add('tfc:foods/fruits', 'farmersdelight:pumpkin_slice')
    event.add('kubejs:pollution_gasses', [
        // regex instead of string to prevent errors if adpother is not installed
        /^adpother:carbon$/,
        /^adpother:dust$/,
        /^adpother:sulfur$/
    ])

    // removeAllTagsFrom doesn't seem to work with regex :(
    global.items_to_remove = [
        '/^(tfc|firmalife|tfc_ie_addon):ore\/.+\//'
    ]
    for (let item of global.items_to_remove) {
        Ingredient.of(item).itemIds.forEach(id => event.removeAllTagsFrom(id))
    }
// // // ore blocks
    event.add('tfc:ores', /^(tfc|firmalife|tfc_ie_addon):ore\/.+\//)

    // minerals
    event.add('tfc:ores/minerals/coal/bituminous_coal', /^tfc:ore\/bituminous_coal\/.+/)
    event.add('tfc:ores/minerals/coal/lignite', /^tfc:ore\/lignite\/.+/)
    event.add('tfc:ores/minerals/kaolinite', /^tfc:ore\/kaolinite\/.+/)
    event.add('tfc:ores/minerals/gypsum', /^tfc:ore\/gypsum\/.+/)
    event.add('tfc:ores/minerals/graphite', /^tfc:ore\/graphite\/.+/)
    event.add('tfc:ores/minerals/sulfur', /^tfc:ore\/sulfur\/.+/)
    event.add('tfc:ores/minerals/redstone/cinnabar', /^tfc:ore\/cinnabar\/.+/)
    event.add('tfc:ores/minerals/redstone/cryolite', /^tfc:ore\/cryolite\/.+/)
    event.add('tfc:ores/minerals/saltpeter', /^tfc:ore\/saltpeter\/.+/)
    event.add('tfc:ores/minerals/sylvite', /^tfc:ore\/sylvite\/.+/)
    event.add('tfc:ores/minerals/borax', /^tfc:ore\/borax\/.+/)
    event.add('tfc:ores/minerals/halite', /^tfc:ore\/halite\/.+/)
    event.add('tfc:ores/coal', [
        '#tfc:ores/minerals/coal/bituminous_coal',
        '#tfc:ores/minerals/coal/lignite'
    ])
    event.add('tfc:ores/redstone', [
        '#tfc:ores/minerals/redstone/cinnabar',
        '#tfc:ores/minerals/redstone/cryolite'
    ])
    event.add('tfc:ores/minerals', [
        '#tfc:ores/minerals/coal/bituminous_coal',
        '#tfc:ores/minerals/coal/lignite',
        '#tfc:ores/minerals/kaolinite',
        '#tfc:ores/minerals/gypsum',
        '#tfc:ores/minerals/graphite',
        '#tfc:ores/minerals/sulfur',
        '#tfc:ores/minerals/redstone/cinnabar',
        '#tfc:ores/minerals/redstone/cryolite',
        '#tfc:ores/minerals/saltpeter',
        '#tfc:ores/minerals/sylvite',
        '#tfc:ores/minerals/borax',
        '#tfc:ores/minerals/halite'
    ])
    // gems
    event.add('tfc:ores/gems/amethyst', /^tfc:ore\/amethyst\/.+/)
    event.add('tfc:ores/gems/diamond', /^tfc:ore\/diamond\/.+/)
    event.add('tfc:ores/gems/emerald', /^tfc:ore\/emerald\/.+/)
    event.add('tfc:ores/gems/lapis', /^tfc:ore\/lapis_lazuli\/.+/)
    event.add('tfc:ores/gems/opal', /^tfc:ore\/opal\/.+/)
    event.add('tfc:ores/gems/pyrite', /^tfc:ore\/pyrite\/.+/)
    event.add('tfc:ores/gems/ruby', /^tfc:ore\/ruby\/.+/)
    event.add('tfc:ores/gems/sapphire', /^tfc:ore\/sapphire\/.+/)
    event.add('tfc:ores/gems/topaz', /^tfc:ore\/topaz\/.+/)
    event.add('tfc:ores/gems', [
        '#tfc:ores/gems/amethyst',
        '#tfc:ores/gems/diamond',
        '#tfc:ores/gems/emerald',
        '#tfc:ores/gems/lapis',
        '#tfc:ores/gems/opal',
        '#tfc:ores/gems/pyrite',
        '#tfc:ores/gems/ruby',
        '#tfc:ores/gems/sapphire',
        '#tfc:ores/gems/topaz'
    ])
    // metals
    event.add('tfc:ores/metals/copper/native_copper', /^tfc:ore\/(poor|normal|rich)_native_copper\/.+/)
    event.add('tfc:ores/metals/native_gold', /^tfc:ore\/(poor|normal|rich)_native_gold\/.+/)
    event.add('tfc:ores/metals/iron/hematite', /^tfc:ore\/(poor|normal|rich)_hematite\/.+/)
    event.add('tfc:ores/metals/native_silver', /^tfc:ore\/(poor|normal|rich)_native_silver\/.+/)
    event.add('tfc:ores/metals/cassiterite', /^tfc:ore\/(poor|normal|rich)_cassiterite\/.+/)
    event.add('tfc:ores/metals/bismuthinite', /^tfc:ore\/(poor|normal|rich)_bismuthinite\/.+/)
    event.add('tfc:ores/metals/garnierite', /^tfc:ore\/(poor|normal|rich)_garnierite\/.+/)
    event.add('tfc:ores/metals/copper/malachite', /^tfc:ore\/(poor|normal|rich)_malachite\/.+/)
    event.add('tfc:ores/metals/iron/magnetite', /^tfc:ore\/(poor|normal|rich)_magnetite\/.+/)
    event.add('tfc:ores/metals/iron/limonite', /^tfc:ore\/(poor|normal|rich)_limonite\/.+/)
    event.add('tfc:ores/metals/sphalerite', /^tfc:ore\/(poor|normal|rich)_sphalerite\/.+/)
    event.add('tfc:ores/metals/copper/tetrahedrite', /^tfc:ore\/(poor|normal|rich)_tetrahedrite\/.+/)
    event.add('tfc:ores/metals/chromite', /^firmalife:ore\/(poor|normal|rich)_chromite\/.+/)
    event.add('tfc:ores/metals/bauxite', /^tfc_ie_addon:ore\/(poor|normal|rich)_aluminum\/.+/)
    event.add('tfc:ores/metals/galena', /^tfc_ie_addon:ore\/(poor|normal|rich)_lead\/.+/)
    event.add('tfc:ores/metals/uraninite', /^tfc_ie_addon:ore\/(poor|normal|rich)_uranium\/.+/)
    event.add('tfc:ores/metals/copper', [
        '#tfc:ores/metals/copper/native_copper',
        '#tfc:ores/metals/copper/malachite',
        '#tfc:ores/metals/copper/tetrahedrite'
    ])
    event.add('tfc:ores/metals/iron', [
        '#tfc:ores/metals/iron/hematite',
        '#tfc:ores/metals/iron/magnetite',
        '#tfc:ores/metals/iron/limonite'
    ])
    event.add('tfc:ores/metals/gold',     ['#tfc:ores/metals/native_gold'])
    event.add('tfc:ores/metals/silver',   ['#tfc:ores/metals/native_silver'])
    event.add('tfc:ores/metals/tin',      ['#tfc:ores/metals/cassiterite'])
    event.add('tfc:ores/metals/bismuth',  ['#tfc:ores/metals/bismuthinite'])
    event.add('tfc:ores/metals/nickel',  ['#tfc:ores/metals/garnierite'])
    event.add('tfc:ores/metals/zinc',     ['#tfc:ores/metals/sphalerite'])
    event.add('tfc:ores/metals/chromium', ['#tfc:ores/metals/chromite'])
    event.add('tfc:ores/metals/aluminum', ['#tfc:ores/metals/bauxite'])
    event.add('tfc:ores/metals/lead',     ['#tfc:ores/metals/galena'])
    event.add('tfc:ores/metals/uranium',  ['#tfc:ores/metals/uraninite'])
    event.add('tfc:ores/metals', [
        '#tfc:ores/metals/copper/native_copper',
        '#tfc:ores/metals/native_gold',
        '#tfc:ores/metals/iron/hematite',
        '#tfc:ores/metals/native_silver',
        '#tfc:ores/metals/cassiterite',
        '#tfc:ores/metals/bismuthinite',
        '#tfc:ores/metals/garnierite',
        '#tfc:ores/metals/copper/malachite',
        '#tfc:ores/metals/iron/magnetite',
        '#tfc:ores/metals/iron/limonite',
        '#tfc:ores/metals/sphalerite',
        '#tfc:ores/metals/copper/tetrahedrite',
        '#tfc:ores/metals/chromite',
        '#tfc:ores/metals/bauxite',
        '#tfc:ores/metals/galena',
        '#tfc:ores/metals/uraninite'
    ])

//    //    // ore pieces
    // minerals
    event.add('tfc:ore_pieces/minerals/coal/bituminous_coal', /^tfc:ore\/bituminous_coal$/)
    event.add('tfc:ore_pieces/minerals/coal/lignite', /^tfc:ore\/lignite$/)
    event.add('tfc:ore_pieces/minerals/kaolinite', /^tfc:ore\/kaolinite$/)
    event.add('tfc:ore_pieces/minerals/gypsum', /^tfc:ore\/gypsum$/)
    event.add('tfc:ore_pieces/minerals/graphite', /^tfc:ore\/graphite$/)
    event.add('tfc:ore_pieces/minerals/sulfur', /^tfc:ore\/sulfur$/)
    event.add('tfc:ore_pieces/minerals/redstone/cinnabar', /^tfc:ore\/cinnabar$/)
    event.add('tfc:ore_pieces/minerals/redstone/cryolite', /^tfc:ore\/cryolite$/)
    event.add('tfc:ore_pieces/minerals/saltpeter', /^tfc:ore\/saltpeter$/)
    event.add('tfc:ore_pieces/minerals/sylvite', /^tfc:ore\/sylvite$/)
    event.add('tfc:ore_pieces/minerals/borax', /^tfc:ore\/borax$/)
    event.add('tfc:ore_pieces/minerals/halite', /^tfc:ore\/halite$/)
    event.add('tfc:ore_pieces/minerals/coal', [
        '#tfc:ore_pieces/minerals/coal/bituminous_coal',
        '#tfc:ore_pieces/minerals/coal/lignite'
    ])
    event.add('tfc:ore_pieces/minerals/redstone', [
        '#tfc:ore_pieces/minerals/redstone/cinnabar',
        '#tfc:ore_pieces/minerals/redstone/cryolite'
    ])
    event.add('tfc:ore_pieces/minerals', [
        '#tfc:ore_pieces/minerals/coal/bituminous_coal',
        '#tfc:ore_pieces/minerals/coal/lignite',
        '#tfc:ore_pieces/minerals/kaolinite',
        '#tfc:ore_pieces/minerals/gypsum',
        '#tfc:ore_pieces/minerals/graphite',
        '#tfc:ore_pieces/minerals/sulfur',
        '#tfc:ore_pieces/minerals/redstone/cinnabar',
        '#tfc:ore_pieces/minerals/redstone/cryolite',
        '#tfc:ore_pieces/minerals/saltpeter',
        '#tfc:ore_pieces/minerals/sylvite',
        '#tfc:ore_pieces/minerals/borax',
        '#tfc:ore_pieces/minerals/halite'
    ])
    // metals
    event.add('tfc:ore_pieces/metals/copper/native_copper', /^tfc:ore\/(small|poor|normal|rich)_native_copper$/)
    event.add('tfc:ore_pieces/metals/native_gold', /^tfc:ore\/(small|poor|normal|rich)_native_gold$/)
    event.add('tfc:ore_pieces/metals/iron/hematite', /^tfc:ore\/(small|poor|normal|rich)_hematite$/)
    event.add('tfc:ore_pieces/metals/native_silver', /^tfc:ore\/(small|poor|normal|rich)_native_silver$/)
    event.add('tfc:ore_pieces/metals/cassiterite', /^tfc:ore\/(small|poor|normal|rich)_cassiterite$/)
    event.add('tfc:ore_pieces/metals/bismuthinite', /^tfc:ore\/(small|poor|normal|rich)_bismuthinite$/)
    event.add('tfc:ore_pieces/metals/garnierite', /^tfc:ore\/(small|poor|normal|rich)_garnierite$/)
    event.add('tfc:ore_pieces/metals/copper/malachite', /^tfc:ore\/(small|poor|normal|rich)_malachite$/)
    event.add('tfc:ore_pieces/metals/iron/magnetite', /^tfc:ore\/(small|poor|normal|rich)_magnetite$/)
    event.add('tfc:ore_pieces/metals/iron/limonite', /^tfc:ore\/(small|poor|normal|rich)_limonite$/)
    event.add('tfc:ore_pieces/metals/sphalerite', /^tfc:ore\/(small|poor|normal|rich)_sphalerite$/)
    event.add('tfc:ore_pieces/metals/copper/tetrahedrite', /^tfc:ore\/(small|poor|normal|rich)_tetrahedrite$/)
    event.add('tfc:ore_pieces/metals/chromite', /^firmalife:ore\/(small|poor|normal|rich)_chromite$/)
    event.add('tfc:ore_pieces/metals/bauxite', /^tfc_ie_addon:ore\/(small|poor|normal|rich)_aluminum$/)
    event.add('tfc:ore_pieces/metals/galena', /^tfc_ie_addon:ore\/(small|poor|normal|rich)_lead$/)
    event.add('tfc:ore_pieces/metals/uraninite', /^tfc_ie_addon:ore\/(small|poor|normal|rich)_uranium$/)
    event.add('tfc:ore_pieces/metals/copper', [
        '#tfc:ore_pieces/metals/copper/native_copper',
        '#tfc:ore_pieces/metals/copper/malachite',
        '#tfc:ore_pieces/metals/copper/tetrahedrite'
    ])
    event.add('tfc:ore_pieces/metals/iron', [
        '#tfc:ore_pieces/metals/iron/hematite',
        '#tfc:ore_pieces/metals/iron/magnetite',
        '#tfc:ore_pieces/metals/iron/limonite'
    ])
    event.add('tfc:ore_pieces/metals/gold',     ['#tfc:ore_pieces/metals/native_gold'])
    event.add('tfc:ore_pieces/metals/silver',   ['#tfc:ore_pieces/metals/native_silver'])
    event.add('tfc:ore_pieces/metals/tin',      ['#tfc:ore_pieces/metals/cassiterite'])
    event.add('tfc:ore_pieces/metals/bismuth',  ['#tfc:ore_pieces/metals/bismuthinite'])
    event.add('tfc:ore_pieces/metals/nickel',  ['#tfc:ore_pieces/metals/garnierite'])
    event.add('tfc:ore_pieces/metals/zinc',     ['#tfc:ore_pieces/metals/sphalerite'])
    event.add('tfc:ore_pieces/metals/chromium', ['#tfc:ore_pieces/metals/chromite'])
    event.add('tfc:ore_pieces/metals/aluminum', ['#tfc:ore_pieces/metals/bauxite'])
    event.add('tfc:ore_pieces/metals/lead',     ['#tfc:ore_pieces/metals/galena'])
    event.add('tfc:ore_pieces/metals/uranium',  ['#tfc:ore_pieces/metals/uraninite'])
    event.add('tfc:ore_pieces/metals', [
        '#tfc:ore_pieces/metals/copper/native_copper',
        '#tfc:ore_pieces/metals/native_gold',
        '#tfc:ore_pieces/metals/iron/hematite',
        '#tfc:ore_pieces/metals/native_silver',
        '#tfc:ore_pieces/metals/cassiterite',
        '#tfc:ore_pieces/metals/bismuthinite',
        '#tfc:ore_pieces/metals/copper/malachite',
        '#tfc:ore_pieces/metals/iron/magnetite',
        '#tfc:ore_pieces/metals/iron/limonite',
        '#tfc:ore_pieces/metals/sphalerite',
        '#tfc:ore_pieces/metals/copper/tetrahedrite',
        '#tfc:ore_pieces/metals/chromite',
        '#tfc:ore_pieces/metals/bauxite',
        '#tfc:ore_pieces/metals/galena',
        '#tfc:ore_pieces/metals/uraninite'
    ])
    
//    //    // ore washing
    // rocky chunks
    event.add('forge:ores/rocky_chunks/minerals/redstone',[
        'tfcorewashing:rocky_chunks_cinnabar',
        'tfcorewashing:rocky_chunks_cryolite'
    ])
    event.add('forge:ores/rocky_chunks/minerals',[
        'tfcorewashing:rocky_chunks_cinnabar',
        'tfcorewashing:rocky_chunks_cryolite',
        'tfcorewashing:rocky_chunks_graphite',
        'tfcorewashing:rocky_chunks_sulfur'
    ])
    event.add('forge:ores/rocky_chunks/metals/copper',[
        'tfcorewashing:rocky_chunks_copper',
        'tfcorewashing:rocky_chunks_malachite',
        'tfcorewashing:rocky_chunks_tetrahedrite'
    ])
    event.add('forge:ores/rocky_chunks/metals/iron',[
        'tfcorewashing:rocky_chunks_hematite',
        'tfcorewashing:rocky_chunks_limonite',
        'tfcorewashing:rocky_chunks_magnetite'
    ])
    event.add('forge:ores/rocky_chunks/metals',[
        'tfcorewashing:rocky_chunks_bauxite',
        'tfcorewashing:rocky_chunks_bismuthinite',
        'tfcorewashing:rocky_chunks_cassiterite',
        'tfcorewashing:rocky_chunks_chromite',
        'tfcorewashing:rocky_chunks_copper',
        'tfcorewashing:rocky_chunks_galena',
        'tfcorewashing:rocky_chunks_garnierite',
        'tfcorewashing:rocky_chunks_gold',
        'tfcorewashing:rocky_chunks_hematite',
        'tfcorewashing:rocky_chunks_limonite',
        'tfcorewashing:rocky_chunks_magnetite',
        'tfcorewashing:rocky_chunks_malachite',
        'tfcorewashing:rocky_chunks_silver',
        'tfcorewashing:rocky_chunks_sphalerite',
        'tfcorewashing:rocky_chunks_tetrahedrite',
        'tfcorewashing:rocky_chunks_uraninite'
    ])
    event.add('forge:ores/rocky_chunks',[
        '#forge:ores/rocky_chunks/minerals',
        '#forge:ores/rocky_chunks/metals'
    ])
    // chunks
    event.add('forge:ores/chunks/minerals/redstone',[
        'tfcorewashing:chunks_cinnabar',
        'tfcorewashing:chunks_cryolite'
    ])
    event.add('forge:ores/chunks/minerals',[
        'tfcorewashing:chunks_cinnabar',
        'tfcorewashing:chunks_cryolite',
        'tfcorewashing:chunks_graphite',
        'tfcorewashing:chunks_sulfur'
    ])
    event.add('forge:ores/chunks/metals/copper',[
        'tfcorewashing:chunks_copper',
        'tfcorewashing:chunks_malachite',
        'tfcorewashing:chunks_tetrahedrite'
    ])
    event.add('forge:ores/chunks/metals/iron',[
        'tfcorewashing:chunks_hematite',
        'tfcorewashing:chunks_limonite',
        'tfcorewashing:chunks_magnetite'
    ])
    event.add('forge:ores/chunks/metals',[
        'tfcorewashing:chunks_bauxite',
        'tfcorewashing:chunks_bismuthinite',
        'tfcorewashing:chunks_cassiterite',
        'tfcorewashing:chunks_chromite',
        'tfcorewashing:chunks_copper',
        'tfcorewashing:chunks_galena',
        'tfcorewashing:chunks_garnierite',
        'tfcorewashing:chunks_gold',
        'tfcorewashing:chunks_hematite',
        'tfcorewashing:chunks_limonite',
        'tfcorewashing:chunks_magnetite',
        'tfcorewashing:chunks_malachite',
        'tfcorewashing:chunks_silver',
        'tfcorewashing:chunks_sphalerite',
        'tfcorewashing:chunks_tetrahedrite',
        'tfcorewashing:chunks_uraninite'
    ])
    event.add('forge:ores/chunks',[
        '#forge:ores/chunks/minerals',
        '#forge:ores/chunks/metals'
    ])
    // dirty dusts
    event.add('forge:ores/dirty_dusts/minerals/redstone',[
        'tfcorewashing:dirty_dust_cinnabar',
        'tfcorewashing:dirty_dust_cryolite'
    ])
    event.add('forge:ores/dirty_dusts/minerals',[
        'tfcorewashing:dirty_dust_cinnabar',
        'tfcorewashing:dirty_dust_cryolite',
        'tfcorewashing:dirty_dust_graphite',
        'tfcorewashing:dirty_dust_sulfur'
    ])
    event.add('forge:ores/dirty_dusts/metals/copper',[
        'tfcorewashing:dirty_dust_copper',
        'tfcorewashing:dirty_dust_malachite',
        'tfcorewashing:dirty_dust_tetrahedrite'
    ])
    event.add('forge:ores/dirty_dusts/metals/iron',[
        'tfcorewashing:dirty_dust_hematite',
        'tfcorewashing:dirty_dust_limonite',
        'tfcorewashing:dirty_dust_magnetite'
    ])
    event.add('forge:ores/dirty_dusts/metals',[
        'tfcorewashing:dirty_dust_bauxite',
        'tfcorewashing:dirty_dust_bismuthinite',
        'tfcorewashing:dirty_dust_cassiterite',
        'tfcorewashing:dirty_dust_chromite',
        'tfcorewashing:dirty_dust_copper',
        'tfcorewashing:dirty_dust_galena',
        'tfcorewashing:dirty_dust_garnierite',
        'tfcorewashing:dirty_dust_gold',
        'tfcorewashing:dirty_dust_hematite',
        'tfcorewashing:dirty_dust_limonite',
        'tfcorewashing:dirty_dust_magnetite',
        'tfcorewashing:dirty_dust_malachite',
        'tfcorewashing:dirty_dust_silver',
        'tfcorewashing:dirty_dust_sphalerite',
        'tfcorewashing:dirty_dust_tetrahedrite',
        'tfcorewashing:dirty_dust_uraninite'
    ])
    event.add('forge:ores/dirty_dusts',[
        '#forge:ores/dirty_dusts/minerals',
        '#forge:ores/dirty_dusts/metals'
    ])
    // dirty piles
    event.add('forge:ores/dirty_piles/minerals/redstone',[
        'tfcorewashing:dirty_pile_cinnabar',
        'tfcorewashing:dirty_pile_cryolite'
    ])
    event.add('forge:ores/dirty_piles/minerals',[
        'tfcorewashing:dirty_pile_cinnabar',
        'tfcorewashing:dirty_pile_cryolite',
        'tfcorewashing:dirty_pile_graphite',
        'tfcorewashing:dirty_pile_sulfur'
    ])
    event.add('forge:ores/dirty_piles/metals/copper',[
        'tfcorewashing:dirty_pile_copper',
        'tfcorewashing:dirty_pile_malachite',
        'tfcorewashing:dirty_pile_tetrahedrite'
    ])
    event.add('forge:ores/dirty_piles/metals/iron',[
        'tfcorewashing:dirty_pile_hematite',
        'tfcorewashing:dirty_pile_limonite',
        'tfcorewashing:dirty_pile_magnetite'
    ])
    event.add('forge:ores/dirty_piles/metals',[
        'tfcorewashing:dirty_pile_bauxite',
        'tfcorewashing:dirty_pile_bismuthinite',
        'tfcorewashing:dirty_pile_cassiterite',
        'tfcorewashing:dirty_pile_chromite',
        'tfcorewashing:dirty_pile_copper',
        'tfcorewashing:dirty_pile_galena',
        'tfcorewashing:dirty_pile_garnierite',
        'tfcorewashing:dirty_pile_gold',
        'tfcorewashing:dirty_pile_hematite',
        'tfcorewashing:dirty_pile_limonite',
        'tfcorewashing:dirty_pile_magnetite',
        'tfcorewashing:dirty_pile_malachite',
        'tfcorewashing:dirty_pile_silver',
        'tfcorewashing:dirty_pile_sphalerite',
        'tfcorewashing:dirty_pile_tetrahedrite',
        'tfcorewashing:dirty_pile_uraninite'
    ])
    event.add('forge:ores/dirty_piles',[
        '#forge:ores/dirty_piles/minerals',
        '#forge:ores/dirty_piles/metals'
    ])
    // clean dusts
    event.add('forge:ores/clean_dusts/minerals',[
        'minecraft:redstone',
        'tfc:powder/graphite',
        'tfc:powder/sulfur'
    ])
    event.add('forge:ores/clean_dusts/metals/copper',[
        'tfcorewashing:copper_powder',
        'tfc:powder/malachite',
        'tfcorewashing:tetrahedrite_powder'
    ])
    event.add('forge:ores/clean_dusts/metals/iron',[
        'tfc:powder/hematite',
        'tfc:powder/limonite',
        'tfcorewashing:magnetite_powder'
    ])
    event.add('forge:ores/clean_dusts/metals',[
        'tfcorewashing:bauxite_powder',
        'tfcorewashing:bismuthinite_powder',
        'tfcorewashing:cassiterite_powder',
        'tfcorewashing:chromium_powder',
        'tfcorewashing:copper_powder',
        'tfcorewashing:galena_powder',
        'tfcorewashing:garnierite_powder',
        'tfcorewashing:gold_powder',
        'tfc:powder/hematite',
        'tfc:powder/limonite',
        'tfcorewashing:magnetite_powder',
        'tfc:powder/malachite',
        'tfcorewashing:silver_powder',
        'tfcorewashing:sphalerite_powder',
        'tfcorewashing:tetrahedrite_powder',
        'tfcorewashing:uraninite_powder'
    ])
    event.add('forge:ores/clean_dusts',[
        '#forge:ores/clean_dusts/minerals',
        '#forge:ores/clean_dusts/metals'
    ])
    // pellets
    event.add('forge:ores/pellets/copper',[
        'tfcorewashing:pellet_copper',
        'tfcorewashing:pellet_malachite',
        'tfcorewashing:pellet_tetrahedrite'
    ])
    event.add('forge:ores/pellets/iron',[
        'tfcorewashing:pellet_hematite',
        'tfcorewashing:pellet_limonite',
        'tfcorewashing:pellet_magnetite'
    ])
    event.add('forge:ores/pellets',[
        'tfcorewashing:pellet_bauxite',
        'tfcorewashing:pellet_bismuthinite',
        'tfcorewashing:pellet_cassiterite',
        'tfcorewashing:pellet_chromium',
        'tfcorewashing:pellet_copper',
        'tfcorewashing:pellet_galena',
        'tfcorewashing:pellet_garnierite',
        'tfcorewashing:pellet_gold',
        'tfcorewashing:pellet_hematite',
        'tfcorewashing:pellet_limonite',
        'tfcorewashing:pellet_magnetite',
        'tfcorewashing:pellet_malachite',
        'tfcorewashing:pellet_silver',
        'tfcorewashing:pellet_sphalerite',
        'tfcorewashing:pellet_tetrahedrite',
        'tfcorewashing:pellet_uraninite'
    ])

    // briquettes
    event.add('forge:ores/briquettes/copper',[
        'tfcorewashing:briquet_copper',
        'tfcorewashing:briquet_malachite',
        'tfcorewashing:briquet_tetrahedrite'
    ])
    event.add('forge:ores/briquettes/iron',[
        'tfcorewashing:briquet_hematite',
        'tfcorewashing:briquet_limonite',
        'tfcorewashing:briquet_magnetite'
    ])
    event.add('forge:ores/briquettes',[
        'tfcorewashing:briquet_bauxite',
        'tfcorewashing:briquet_bismuthinite',
        'tfcorewashing:briquet_cassiterite',
        'tfcorewashing:briquet_chromium',
        'tfcorewashing:briquet_copper',
        'tfcorewashing:briquet_galena',
        'tfcorewashing:briquet_garnierite',
        'tfcorewashing:briquet_gold',
        'tfcorewashing:briquet_hematite',
        'tfcorewashing:briquet_limonite',
        'tfcorewashing:briquet_magnetite',
        'tfcorewashing:briquet_malachite',
        'tfcorewashing:briquet_silver',
        'tfcorewashing:briquet_sphalerite',
        'tfcorewashing:briquet_tetrahedrite',
        'tfcorewashing:briquet_uraninite'
    ])
    // sand piles
    event.add('forge:sand_piles', /^tfcorewashing:pile_.+_sand$/)
//    //    //


    event.add('tfc:apples/no_vanilla', [
        'tfc:food/green_apple',
        'tfc:food/red_apple'
    ])
    event.add('bodyhygiene:soap', [
        '#bodyhygiene:soap/weak',
        '#bodyhygiene:soap/strong',
        '#bodyhygiene:soap/reusable'
    ])
    event.add('bodyhygiene:soap/weak', ['supplementaries:soap'])
    event.add('bodyhygiene:soap/strong', [/^bodyhygiene:.+_soap$/])
    event.add('bodyhygiene:soap/reusable', ['kubejs:sanitizer_bottle'])
    
    event.add('compressedcreativity:blower_mesh', [
        'compressedcreativity:mesh_empty',
        'compressedcreativity:mesh_woven',
        'compressedcreativity:mesh_splashing',
        'compressedcreativity:mesh_splashing_frozen',
        'compressedcreativity:mesh_dense',
        'compressedcreativity:mesh_haunted'
    ])
    event.add('forge:uncut_gems', [
        'tfc:ore/amethyst',
        'tfc:ore/diamond',
        'tfc:ore/emerald',
        'tfc:ore/opal',
        'tfc:ore/pyrite',
        'tfc:ore/ruby',
        'tfc:ore/sapphire',
        'tfc:ore/topaz'
    ])
    event.add('tfc:minerals', [
        'tfc:ore/bituminous_coal',
        'tfc:ore/lignite',
        'tfc:ore/kaolinite',
        'tfc:ore/gypsum',
        'tfc:ore/graphite',
        'tfc:ore/sulfur',
        'tfc:ore/cinnabar',
        'tfc:ore/cryolite',
        'tfc:ore/saltpeter',
        'tfc:ore/sylvite',
        'tfc:ore/borax',
        'tfc:ore/halite'
    ])
    event.add('tfc:fluxstone/cobble', [
        'tfc:rock/cobble/dolomite',
        'tfc:rock/cobble/marble',
        'tfc:rock/cobble/chalk'
    ])

    // special materials, do not add to 'forge:rods' and 'forge:sheets'
    event.add('forge:rods/andesite_alloy', 'kubejs:misc_mats/andesite_alloy/rod')
    event.add('forge:rods/netherite', 'kubejs:misc_mats/netherite/rod')
    event.add('forge:sheets/andesite_alloy', 'kubejs:misc_mats/andesite_alloy/sheet')
    event.add('forge:sheets/netherite', 'createdeco:netherite_sheet')
    event.remove('forge:plates/netherite', 'createdeco:netherite_sheet')
    //

    event.add('compactmachines:compactmachines', [
        'compactmachines:machine_tiny',
        'compactmachines:machine_small',
        'compactmachines:machine_normal',
        'compactmachines:machine_large',
        'compactmachines:machine_giant',
        'compactmachines:machine_maximum'
    ])
    event.add('forge:double_sheets', [
        'kubejs:metal/double_sheet/electrum',
        'kubejs:metal/double_sheet/constantan',
        'kubejs:metal/double_sheet/aluminum',
        'kubejs:metal/double_sheet/lead',
        'kubejs:metal/double_sheet/uranium'
    ])
    event.add('tfc:metal_item/aluminum', ['kubejs:metal/double_sheet/aluminum'])
    event.add('forge:double_sheets/aluminum', ['kubejs:metal/double_sheet/aluminum'])
    event.add('tfc:metal_item/constantan', ['kubejs:metal/double_sheet/constantan'])
    event.add('forge:double_sheets/constantan', ['kubejs:metal/double_sheet/constantan'])
    event.add('tfc:metal_item/electrum', ['kubejs:metal/double_sheet/electrum'])
    event.add('forge:double_sheets/electrum', ['kubejs:metal/double_sheet/electrum'])
    event.add('tfc:metal_item/lead', ['kubejs:metal/double_sheet/lead'])
    event.add('forge:double_sheets/lead', ['kubejs:metal/double_sheet/lead'])
    event.add('tfc:metal_item/uranium', ['kubejs:metal/double_sheet/uranium'])
    event.add('forge:double_sheets/uranium', ['kubejs:metal/double_sheet/uranium'])
    event.add('tfc:metal_item/wrought_iron', ['kubejs:wrought_iron_spindle', 'kubejs:wrought_iron_spindle_head'])
    event.add('tfc:metal_item/wrought_iron_tools', ['kubejs:wrought_iron_spindle'])
    
    event.add('tfc:firepit_fuel', [
        'tfc:stick_bunch',
        '#forge:rods/wooden',
        '#forge:seed_tree',
        'farmersdelight:tree_bark'
    ])
    event.add('tfc:forge_fuel', [
        'tinycoal:tinycoal',
        'tinycoal:tinycharcoal'
    ])
    event.add('adpother:filters/dust/low', [
        "htm:plant_fabric"
    ])
    event.add('adpother:filters/dust/medium', [
        "minecraft:paper",
        "tfc:burlap_cloth"
    ])
    event.add('adpother:filters/dust/high', [
        "tfc:silk_cloth",
        "tfc:wool_cloth"
    ])
    event.add('adpother:filters/carbon/low', [
        "#minecraft:leaves"
    ])
    event.add('adpother:filters/carbon/medium', [
        "#forge:kelp"
    ])
    event.add('adpother:filters/carbon/high', [
        "coralstfc:coral_powder"
    ])
    //event.add('adpother:filters/sulfur/low', [
    //    "no items here but just in case we want any down the line"
    //])
    event.add('adpother:filters/sulfur/medium', [
        "minecraft:charcoal"
    ])
    event.add('adpother:filters/sulfur/high', [
        "#minecraft:wool"
    ])
    event.add('adpother:filters/dust', ["#adpother:filters/dust/low","#adpother:filters/dust/medium","#adpother:filters/dust/high"])
    event.add('adpother:filters/carbon', ["#adpother:filters/carbon/low","#adpother:filters/carbon/medium","#adpother:filters/carbon/high"])
    event.add('adpother:filters/sulfur', ["#adpother:filters/sulfur/low","#adpother:filters/sulfur/medium","#adpother:filters/sulfur/high"])
    event.add('adpother:filters', ["#adpother:filters/dust","#adpother:filters/carbon","#adpother:filters/sulfur"])
    event.add('forge:kelp', ['tfc:plant/leafy_kelp','tfc:plant/winged_kelp'])
    
    event.add('farmersdelight:tools/knives', ['htm:flint_knife'])

    event.add('minecraft:coals', ['immersivepetroleum:petcoke'])
    event.add('forge:dusts/coal_coke', ['immersivepetroleum:petcoke_dust'])
    event.remove('minecraft:carpets', ['farmersdelight:half_tatami_mat','farmersdelight:full_tatami_mat'])
    event.add('tfc:shears', ['htm:flint_shears'])
    event.add('createoreexcavation:high_tier_drills', ['createoreexcavation:diamond_drill','createoreexcavation:netherite_drill'])

    event.add('forge:sheetmetals_colored',[
        'immersiveengineering:sheetmetal_colored_white',
        'immersiveengineering:sheetmetal_colored_orange',
        'immersiveengineering:sheetmetal_colored_magenta',
        'immersiveengineering:sheetmetal_colored_light_blue',
        'immersiveengineering:sheetmetal_colored_yellow',
        'immersiveengineering:sheetmetal_colored_lime',
        'immersiveengineering:sheetmetal_colored_pink',
        'immersiveengineering:sheetmetal_colored_gray',
        'immersiveengineering:sheetmetal_colored_light_gray',
        'immersiveengineering:sheetmetal_colored_cyan',
        'immersiveengineering:sheetmetal_colored_purple',
        'immersiveengineering:sheetmetal_colored_blue',
        'immersiveengineering:sheetmetal_colored_brown',
        'immersiveengineering:sheetmetal_colored_green',
        'immersiveengineering:sheetmetal_colored_red',
        'immersiveengineering:sheetmetal_colored_black'])
    event.add('forge:sheetmetal_slabs_colored',[
        'immersiveengineering:slab_sheetmetal_colored_white',
        'immersiveengineering:slab_sheetmetal_colored_orange',
        'immersiveengineering:slab_sheetmetal_colored_magenta',
        'immersiveengineering:slab_sheetmetal_colored_light_blue',
        'immersiveengineering:slab_sheetmetal_colored_yellow',
        'immersiveengineering:slab_sheetmetal_colored_lime',
        'immersiveengineering:slab_sheetmetal_colored_pink',
        'immersiveengineering:slab_sheetmetal_colored_gray',
        'immersiveengineering:slab_sheetmetal_colored_light_gray',
        'immersiveengineering:slab_sheetmetal_colored_cyan',
        'immersiveengineering:slab_sheetmetal_colored_purple',
        'immersiveengineering:slab_sheetmetal_colored_blue',
        'immersiveengineering:slab_sheetmetal_colored_brown',
        'immersiveengineering:slab_sheetmetal_colored_green',
        'immersiveengineering:slab_sheetmetal_colored_red',
        'immersiveengineering:slab_sheetmetal_colored_black'])

    event.add('immersiveengineering:press_molds',[
        'immersiveengineering:mold_plate',
        'immersiveengineering:mold_gear',
        'immersiveengineering:mold_rod',
        'immersiveengineering:mold_bullet_casing',
        //'immersiveengineering:mold_wire',
        'immersiveengineering:mold_packing_4',
        //'immersiveengineering:mold_packing_9',
        'immersiveengineering:mold_unpacking'])

    event.add('forge:ingots/iron', ['tfc:metal/ingot/wrought_iron'])

    //event.remove('forge:tools/saws', '#forge:tools/axes')
    //event.add('forge:saw_blade', 'immersiveengineering:sawblade')
    event.add('forge:press_head', 'kubejs:press_head')
    event.add('tfc:compost_browns_low', ['tfc:straw', 'mekanism:bio_fuel'])
    event.add('tfc:compost_browns-high', ['kubejs:misc_mats/ceramic_shards'])
    event.add('tfc:compost_greens_low', ['kubejs:seed_biomass'])
    event.add('tfc:compost_greens', ['createaddition:biomass'])
    event.add('forge:barrels', '#tfcbarrels:barrels')
    event.add('forge:barrels/wooden', '#tfcbarrels:barrels')
    event.add('twilightforest:portal/activator', 'kubejs:magic_crystal')
    event.remove('twilightforest:portal/activator', ['#forge:gems/diamond'])
    event.add('forge:tools/knives', '#tfc:knives')
    event.add('forge:tools/hammers', '#tfc:hammers')
    event.add('forge:tools/saws', '#tfc:saws')
    event.add('forge:tools/axes', '#tfc:axes')
    event.add('forge:axes', '#tfc:axes')
    event.add('tfc:dog_food', 'farmersdelight:dog_food')
    event.add('tfc:horse_food', 'farmersdelight:horse_feed')
    event.add('tfc:mule_food', 'farmersdelight:horse_feed')
    event.add('tfc:donkey_food', 'farmersdelight:horse_feed')
    event.add('tfc:sandwich_bread', 'pneumaticcraft:sourdough_bread')
    event.add('forge:sugar', 'minecraft:sugar')
    event.add('forge:food/dried_kelp', 'tfc:food/dried_kelp')
    event.add('forge:food/diary/curd', ['firmalife:food/yak_curd', 'firmalife:food/goat_curd', 'firmalife:food/milk_curd'])
    event.add('forge:flour/wheat', '#tfc:foods/flour')
    event.add('forge:treated_wood', 'firmalife:treated_wood')
    event.add('forge:cogwheel_small', ['steampowered:steel_cogwheel','steampowered:cast_iron_cogwheel','steampowered:bronze_cogwheel', 'copycats:copycat_cogwheel'])
    event.add('forge:cogwheel_large', ['steampowered:steel_large_cogwheel','steampowered:cast_iron_large_cogwheel','steampowered:bronze_large_cogwheel', 'copycats:copycat_large_cogwheel'])
    event.add('forge:dusts/salt', 'tfc:powder/salt')
    event.add('forge:dusts/saltpeter', 'tfc:powder/saltpeter')
    event.add('forge:dusts/graphite', 'tfc:powder/graphite')
    event.add('forge:honey_jar', ['firmalife:honey_jar','minecraft:honey_bottle'])
    event.add('forge:raw_honey', ['firmalife:raw_honey','minecraft:honeycomb'])
    event.add('forge:thatch', [
        'firmaciv:thatch_roofing',
        'tfc:thatch',
        'mcwroofs:thatch_roof',
        'mcwroofs:thatch_top_roof',
        'mcwroofs:thatch_lower_roof',
        'mcwroofs:thatch_steep_roof',
        'mcwroofs:thatch_upper_lower_roof',
        'mcwroofs:thatch_upper_steep_roof',
        'mcw_tfc_aio:roofs/thatch_roofs/thatch_roof',
        'mcw_tfc_aio:roofs/thatch_roofs/thatch_top_roof',
        'mcw_tfc_aio:roofs/thatch_roofs/thatch_lower_roof',
        'mcw_tfc_aio:roofs/thatch_roofs/thatch_steep_roof',
        'mcw_tfc_aio:roofs/thatch_roofs/thatch_upper_lower_roof',
        'mcw_tfc_aio:roofs/thatch_roofs/thatch_upper_steep_roof',
        'minecraft:hay_block'
    ])
    //----------------
    event.add('tfc:huge_very_heavy', [
        '#travelersbackpack:custom_travelers_backpack',
        'createoreexcavation:drilling_machine',
        '#astikorcarts:animal_cart',
        '#astikorcarts:supply_cart',
        '#astikorcarts:plow',
        '#tfc:anvils',
        'smallships:cannon',
        'smallships:sail',
        '#compactmachines:compactmachines',
        'simple_hot_air_balloons:red_hot_air_balloon_item',
        'simple_hot_air_balloons:orange_hot_air_balloon_item',
        'simple_hot_air_balloons:yellow_hot_air_balloon_item',
        'simple_hot_air_balloons:lime_hot_air_balloon_item',
        'simple_hot_air_balloons:green_hot_air_balloon_item',
        'simple_hot_air_balloons:light_blue_hot_air_balloon_item',
        'simple_hot_air_balloons:cyan_hot_air_balloon_item',
        'simple_hot_air_balloons:blue_hot_air_balloon_item',
        'simple_hot_air_balloons:pink_hot_air_balloon_item',
        'simple_hot_air_balloons:magenta_hot_air_balloon_item',
        'simple_hot_air_balloons:purple_hot_air_balloon_item',
        'simple_hot_air_balloons:brown_hot_air_balloon_item',
        'simple_hot_air_balloons:white_hot_air_balloon_item',
        'simple_hot_air_balloons:light_gray_hot_air_balloon_item',
        'simple_hot_air_balloons:gray_hot_air_balloon_item',
        'simple_hot_air_balloons:black_hot_air_balloon_item',
        'butchersdelight:dead_cow',
        'butchersdelight:deadpig',
        'butchersdelight:deadsheep',
        'butchersdelight:deadgoat',
        'butchersdelight:deadhoglin',
        'butchersdelight:deadllama',
        'butchersdelight:deadstrider',
        'beyond_earth:rocket_t1',
        'beyond_earth:rocket_t2',
        'beyond_earth:rocket_t3',
        'beyond_earth:rocket_t4',
        'beyond_earth:rover',
        'beyond_earth:nasa_workbench',
        'mekanism:basic_bin',
        'mekanism:basic_fluid_tank',
        'mekanism:basic_chemical_tank',
        'mekanism:advanced_bin',
        'mekanism:advanced_fluid_tank',
        'mekanism:advanced_chemical_tank',
        'mekanism:elite_bin',
        'mekanism:elite_fluid_tank',
        'mekanism:elite_chemical_tank',
        'mekanism:ultimate_bin',
        'mekanism:ultimate_fluid_tank',
        'mekanism:ultimate_chemical_tank',
        'mob_grinding_utils:tank',
        'mob_grinding_utils:tank_sink',
        'mob_grinding_utils:jumbo_tank',
        'mob_grinding_utils:xpsolidifier',
        'pneumaticcraft:etching_tank',
        'pneumaticcraft:small_tank',
        'pneumaticcraft:medium_tank',
        'pneumaticcraft:large_tank',
        'pneumaticcraft:huge_tank',
        'tconstruct:seared_fuel_tank',
        'tconstruct:seared_fuel_gauge',
        'tconstruct:seared_ingot_tank',
        'tconstruct:seared_ingot_gauge',
        'tconstruct:scorched_fuel_tank',
        'tconstruct:scorched_fuel_gauge',
        'tconstruct:scorched_ingot_tank',
        'tconstruct:scorched_ingot_gauge',
        'create:water_wheel',
        'create:large_water_wheel',
        'create:crushing_wheel',
        'create:mechanical_press',
        'create:mechanical_mixer',
        'create:mechanical_drill',
        'create:mechanical_saw',
        'create:mechanical_harvester',
        'create:mechanical_plough',
        'create:mechanical_arm',
        'create:deployer',
        'create:flywheel',
        'securitycraft:cage_trap',
        'untamedwilds:trap_cage',
        'supplementaries:cage',
        'mekanismgenerators:advanced_solar_generator',
        'mekanismgenerators:wind_generator',
        'immersive_aircraft:hull',
        'immersive_aircraft:engine',
        'immersive_aircraft:sail',
        'immersive_aircraft:propeller',
        'immersive_aircraft:boiler',
        'immersive_aircraft:airship',
        'immersive_aircraft:biplane',
        'immersive_aircraft:gyrodyne',
        'immersive_aircraft:quadrocopter',
        'immersive_aircraft:enhanced_propeller',
        'immersive_aircraft:eco_engine',
        'immersive_aircraft:nether_engine',
        'immersive_aircraft:steel_boiler',
        'immersiveengineering:windmill',
        'immersiveengineering:watermill',
        'immersiveengineering:fluid_pump',
        'immersiveengineering:blastfurnace_preheater',
        'immersiveengineering:sample_drill',
        'immersiveengineering:cloche',
        'immersiveengineering:transformer',
        'immersiveengineering:transformer_hv',
        'immersiveengineering:crate',
        'immersiveengineering:reinforced_crate',
        'immersiveengineering:wooden_barrel',
        'immersiveengineering:metal_barrel',
        'mekanism:personal_barrel',
        'mekanism:personal_chest',
        'immersivepetroleum:speedboat',
        'kubejs:stack_treated_wood',
        'kubejs:big_stack_treated_wood',
        'kubejs:canoe',
        '#functionalstorage:drawer',
        '#tfc:barrels',
        'exnihilosequentia:stone_barrel',
        'functionalstorage:ender_drawer',
        'functionalstorage:compacting_drawer',
        'functionalstorage:simple_compacting_drawer',
        'functionalstorage:compacting_framed_drawer',
        'functionalstorage:fluid_1',
        'functionalstorage:fluid_2',
        'functionalstorage:fluid_4',
        'supplementaries:sack'
    ])
    event.add('tfc:large_medium', [
        'compressedcreativity:mesh_empty',
        'compressedcreativity:mesh_woven',
        'compressedcreativity:mesh_splashing',
        'compressedcreativity:mesh_splashing_frozen',
        'smallships:cannon_ball'
    ])
    event.add('tfc:very_large_heavy', [
        'kubejs:press_head',
        'kubejs:hardened_press_head',
        'kubejs:hardened_press_head_red',
        'create:steam_engine',
        /^animaltrap:.+_carcass$/,
        'immersiveengineering:treated_post',
        'immersiveengineering:alu_post',
        'immersiveengineering:steel_post',
        'create:metal_girder',
        '#paraglider:statues',
        'compressedcreativity:mesh_dense',
        'compressedcreativity:mesh_haunted',
        'compressedcreativity:rotational_compressor',
        'compressedcreativity:industrial_air_blower',
        'butchersdelight:deadchiken',
        'butchersdelight:deadrabbitbrown',
        'beyond_earth:solar_panel',
        'beyond_earth:coal_generator',
        'beyond_earth:oxygen_loader',
        'beyond_earth:oxygen_bubble_distributor',
        'create:cart_assembler',
        'create:basin',
        'create:empty_blaze_burner',
        'create:blaze_burner',
        'create:fluid_tank',
        'create:hose_pulley',
        'create:item_drain',
        'create:spout',
        'create:portable_fluid_interface',
        'create:portable_storage_interface',
        'create:gantry_carriage',
        'create:windmill_bearing',
        'create:mechanical_bearing',
        'create:rotation_speed_controller',
        'create:andesite_funnel',
        'create:brass_funnel',
        'create:brass_tunnel',
        'create:andesite_tunnel',
        'create:display_board',
        'createsifter:sifter',
        'minecraft:minecart',
        'minecraft:chest_minecart',
        'minecraft:furnace_minecart',
        'minecraft:tnt_minecart',
        'minecraft:hopper_minecart',
        'immersiveengineering:minecart_woodencrate',
        'immersiveengineering:minecart_woodenbarrel',
        'immersiveengineering:minecart_metalbarrel',
        'immersiveengineering:minecart_reinforcedcrate',
        'supplementaries:dispenser_minecart',
        'railways:benchcart',
        'railways:jukeboxcart'
    ])
    event.add('firmalife:foods/heatable', [
        'kubejs:shark_meat',
        'farmersdelight:minced_beef',
        'farmersdelight:chicken_cuts',
        'farmersdelight:mutton_chops',
        'farmersdelight:ham',
        'farmersdelight:bacon',
        'farmersdelight:cod_slice',
        'farmersdelight:salmon_slice',
        'minecraft:porkchop',
        'minecraft:mutton',
        'minecraft:chicken',
        'minecraft:beef',
        'tfc:food/potato',
        //'twilightdelight:raw_insect',
        //'twilightdelight:raw_venison_rib',
        //'twilightdelight:raw_meef_slice',
        //'twilightdelight:hydra_piece',
        'twilightforest:raw_venison',
        'twilightforest:raw_meef',
        'twilightforest:hydra_chop',
        'untamedwilds:food_bear_raw',
        'untamedwilds:food_turtle_raw',
        'untamedwilds:food_pachyderm_raw'
    ])
    event.add('firmalife:usable_in_stovetop_soup', [
        'minecraft:baked_potato',
        'kubejs:shark_meat',
        //'twilightdelight:raw_insect',
        //'twilightdelight:raw_venison_rib',
        //'twilightdelight:raw_meef_slice',
        //'twilightdelight:hydra_piece',
        'twilightforest:raw_venison',
        'twilightforest:raw_meef',
        'twilightforest:hydra_chop',
        'untamedwilds:food_bear_raw',
        'untamedwilds:food_turtle_raw',
        'untamedwilds:food_pachyderm_raw'
    ])
    event.add('tfc:foods', [
        'minecraft:baked_potato',
        '#tfc:wooden_bowl_food',
        'kubejs:shark_meat',
        'kubejs:shark_cooked_meat',
        'create:sweet_roll',
        'create:chocolate_glazed_berries',
        'create:honeyed_apple',
        'createaddition:cake_base',
        'createaddition:cake_base_baked',
        'farmersrespite:coffee_berries',
        'farmersrespite:green_tea_cookie',
        'farmersrespite:nether_wart_sourdough',
        'farmersrespite:black_cod',
        'farmersrespite:tea_curry',
        'farmersrespite:blazing_chili',
        'farmersrespite:coffee_cake',
        'farmersrespite:coffee_cake_slice',
        'farmersrespite:rose_hip_pie',
        'farmersrespite:rose_hip_pie_slice',
        'coffee_delight:coffee_pie_side',
        'coffee_delight:coffee_pie',
        'coffee_delight:quiche_side',
        //'twilightdelight:glowstew',
        //'twilightdelight:raw_venison_rib',
        //'twilightdelight:cooked_venison_rib',
        //'twilightdelight:hydra_piece',
        //'twilightdelight:raw_meef_slice',
        //'twilightdelight:cooked_meef_slice',
        //'twilightdelight:fiery_snakes',
        //'twilightdelight:raw_insect',
        //'twilightdelight:cooked_insect',
        //'twilightdelight:fried_insect',
        //'twilightdelight:torchberry_cookie',
        //'twilightdelight:glow_venison_rib_with_pasta',
        //'twilightdelight:thousand_plant_stew',
        //'twilightdelight:aurora_ice_cream',
        //'twilightdelight:grilled_ghast',
        //'twilightdelight:chocolate_wafer',
        //'twilightdelight:lily_chicken_block',
        //'twilightdelight:lily_chicken',
        //'twilightdelight:fiery_snakes_block',
        'twilightforest:raw_venison',
        'twilightforest:cooked_venison',
        'twilightforest:hydra_chop',
        'twilightforest:raw_meef',
        'twilightforest:cooked_meef',
        'twilightforest:meef_stroganoff',
        'twilightforest:maze_wafer',
        'twilightforest:experiment_115',
        'pneumaticcraft:sourdough_bread',
        'pneumaticcraft:chips',
        'pneumaticcraft:cod_n_chips',
        'pneumaticcraft:salmon_tempura',
        'butchersdelightfoods:beefribs',
        'butchersdelightfoods:legcow',
        'butchersdelightfoods:beeftenderloin',
        'butchersdelightfoods:sheepshank',
        'butchersdelightfoods:sheeprack',
        'butchersdelightfoods:sheeploin',
        'butchersdelightfoods:ham',
        'butchersdelightfoods:porkloin',
        'butchersdelightfoods:porkribs',
        'butchersdelightfoods:goat_shank',
        'butchersdelightfoods:goatrack',
        'butchersdelightfoods:goat_loin',
        'butchersdelightfoods:llama_leg',
        'butchersdelightfoods:llamma_ribs',
        'butchersdelightfoods:llama_loin',
        'untamedwilds:food_bear_raw',
        'untamedwilds:food_turtle_raw',
        'untamedwilds:food_pachyderm_raw',
        'untamedwilds:food_bear_cooked',
        'untamedwilds:food_turtle_cooked',
        'untamedwilds:food_pachyderm_cooked',
        '#tconstruct:cakes',
        '#tconstruct:cake_slices',
        '#create:cakes',
        '#create:cake_slices'
    ])
    event.add('tconstruct:cakes', [
        'tconstruct:earth_cake',
        'tconstruct:sky_cake',
        'tconstruct:magma_cake',
        'tconstruct:blood_cake',
        'tconstruct:ender_cake'
    ])
    event.add('tconstruct:cake_slices', [
        'kubejs:cake_slices/sky',
        'kubejs:cake_slices/earth',
        'kubejs:cake_slices/magma',
        'kubejs:cake_slices/blood',
        'kubejs:cake_slices/ender'
    ])
    event.add('create:cakes', [
        'createaddition:chocolate_cake',
        'createaddition:honey_cake'
    ])
    event.add('create:cake_slices', [
        'kubejs:cake_slices/chocolate',
        'kubejs:cake_slices/honey'
    ])
    event.add('tfc:foods/meats', [
        'kubejs:shark_meat',
        'kubejs:shark_cooked_meat',
        'butchersdelightfoods:beefribs',
        'butchersdelightfoods:legcow',
        'butchersdelightfoods:beeftenderloin',
        'butchersdelightfoods:sheepshank',
        'butchersdelightfoods:sheeprack',
        'butchersdelightfoods:sheeploin',
        'butchersdelightfoods:ham',
        'butchersdelightfoods:porkloin',
        'butchersdelightfoods:porkribs',
        'butchersdelightfoods:goat_shank',
        'butchersdelightfoods:goatrack',
        'butchersdelightfoods:goat_loin',
        'butchersdelightfoods:llama_leg',
        'butchersdelightfoods:llamma_ribs',
        'butchersdelightfoods:llama_loin',
        //'twilightdelight:raw_insect',
        //'twilightdelight:cooked_insect',
        //'twilightdelight:raw_venison_rib',
        //'twilightdelight:cooked_venison_rib',
        //'twilightdelight:raw_meef_slice',
        //'twilightdelight:cooked_meef_slice',
        //'twilightdelight:hydra_piece',
        'twilightforest:raw_venison',
        'twilightforest:cooked_venison',
        'twilightforest:raw_meef',
        'twilightforest:cooked_meef',
        'twilightforest:hydra_chop',
        'untamedwilds:food_bear_raw',
        'untamedwilds:food_bear_cooked',
        'untamedwilds:food_turtle_raw',
        'untamedwilds:food_turtle_cooked',
        'untamedwilds:food_pachyderm_raw',
        'untamedwilds:food_pachyderm_cooked',
        'minecraft:beef'
    ])
    event.add('tfc:foods/raw_meats', [
        'kubejs:shark_meat',
        'butchersdelightfoods:beefribs',
        'butchersdelightfoods:legcow',
        'butchersdelightfoods:beeftenderloin',
        'butchersdelightfoods:sheepshank',
        'butchersdelightfoods:sheeprack',
        'butchersdelightfoods:sheeploin',
        'butchersdelightfoods:ham',
        'butchersdelightfoods:porkloin',
        'butchersdelightfoods:porkribs',
        'butchersdelightfoods:goat_shank',
        'butchersdelightfoods:goatrack',
        'butchersdelightfoods:goat_loin',
        'butchersdelightfoods:llama_leg',
        'butchersdelightfoods:llamma_ribs',
        'butchersdelightfoods:llama_loin',
        //'twilightdelight:raw_insect',
        //'twilightdelight:raw_venison_rib',
        //'twilightdelight:raw_meef_slice',
        //'twilightdelight:hydra_piece',
        'twilightforest:raw_venison',
        'twilightforest:raw_meef',
        'twilightforest:hydra_chop',
        'untamedwilds:food_bear_raw',
        'untamedwilds:food_turtle_raw',
        'untamedwilds:food_pachyderm_raw',
        'minecraft:beef'
    ])
    event.add('tfc:foods/cooked_meats', [
        'tfc:food/cooked_turtle',
        'kubejs:shark_cooked_meat',
        'twilightforest:cooked_venison',
        'twilightforest:cooked_meef',
        //'twilightdelight:cooked_meef_slice',
        'untamedwilds:food_bear_cooked',
        'untamedwilds:food_turtle_cooked',
        'untamedwilds:food_pachyderm_cooked'
    ])
    event.add('tfc:foods/usable_in_soup', [
        'kubejs:shark_meat',
        'untamedwilds:food_bear_raw',
        'untamedwilds:food_turtle_raw',
        'untamedwilds:food_pachyderm_raw',
        //'twilightdelight:raw_insect',
        //'twilightdelight:raw_venison_rib',
        //'twilightdelight:raw_meef_slice',
        //'twilightdelight:hydra_piece',
        'twilightforest:raw_venison',
        'twilightforest:raw_meef',
        'twilightforest:hydra_chop'
    ])
    event.add('tfc:foods/usable_in_sandwich', [
        'kubejs:shark_cooked_meat',
        'untamedwilds:food_bear_cooked',
        'untamedwilds:food_turtle_cooked',
        'untamedwilds:food_pachyderm_cooked',
        'twilightforest:cooked_venison',
        'twilightforest:cooked_meef',
        //'twilightdelight:cooked_meef_slice'
    ])
    event.add('tfc:foods/usable_in_salad', [
        'kubejs:shark_cooked_meat',
        'untamedwilds:food_bear_cooked',
        'untamedwilds:food_turtle_cooked',
        'untamedwilds:food_pachyderm_cooked',
        //'twilightdelight:cooked_insect',
        'twilightforest:cooked_venison',
        'twilightforest:cooked_meef',
        //'twilightdelight:cooked_meef_slice'
    ])
    event.add('firmalife:foods/pizza_ingredients', [
        'kubejs:shark_cooked_meat',
        'untamedwilds:food_bear_cooked',
        'untamedwilds:food_turtle_cooked',
        'untamedwilds:food_pachyderm_cooked',
        'twilightforest:cooked_venison',
        'twilightforest:cooked_meef',
        //'twilightdelight:cooked_meef_slice'
    ])
    event.add('tfc:foods/can_be_salted', [
        'kubejs:shark_meat',
        'butchersdelightfoods:beefribs',
        'butchersdelightfoods:legcow',
        'butchersdelightfoods:beeftenderloin',
        'butchersdelightfoods:sheepshank',
        'butchersdelightfoods:sheeprack',
        'butchersdelightfoods:sheeploin',
        'butchersdelightfoods:ham',
        'butchersdelightfoods:porkloin',
        'butchersdelightfoods:porkribs',
        'butchersdelightfoods:goat_shank',
        'butchersdelightfoods:goatrack',
        'butchersdelightfoods:goat_loin',
        'butchersdelightfoods:llama_leg',
        'butchersdelightfoods:llamma_ribs',
        'butchersdelightfoods:llama_loin',
        //'twilightdelight:raw_insect',
        //'twilightdelight:raw_venison_rib',
        //'twilightdelight:raw_meef_slice',
        //'twilightdelight:hydra_piece',
        'twilightforest:raw_venison',
        'twilightforest:raw_meef',
        'twilightforest:hydra_chop',
        'untamedwilds:food_bear_raw',
        'untamedwilds:food_turtle_raw',
        'untamedwilds:food_pachyderm_raw',
        'minecraft:mutton',
        'minecraft:porkchop',
        'minecraft:beef',
        'minecraft:chicken',
        'minecraft:rabbit'
    ])
    event.add('tfc:foods/can_be_hung', [
        'kubejs:shark_meat',
        'butchersdelightfoods:beefribs',
        'butchersdelightfoods:legcow',
        'butchersdelightfoods:beeftenderloin',
        'butchersdelightfoods:sheepshank',
        'butchersdelightfoods:sheeprack',
        'butchersdelightfoods:sheeploin',
        'butchersdelightfoods:ham',
        'butchersdelightfoods:porkloin',
        'butchersdelightfoods:porkribs',
        'butchersdelightfoods:goat_shank',
        'butchersdelightfoods:goatrack',
        'butchersdelightfoods:goat_loin',
        'butchersdelightfoods:llama_leg',
        'butchersdelightfoods:llamma_ribs',
        'butchersdelightfoods:llama_loin',
        //'twilightdelight:raw_insect',
        //'twilightdelight:raw_venison_rib',
        //'twilightdelight:raw_meef_slice',
        //'twilightdelight:hydra_piece',
        'twilightforest:raw_venison',
        'twilightforest:raw_meef',
        'twilightforest:hydra_chop',
        'untamedwilds:food_bear_raw',
        'untamedwilds:food_turtle_raw',
        'untamedwilds:food_pachyderm_raw',
        'minecraft:mutton',
        'minecraft:porkchop',
        'minecraft:beef',
        'minecraft:chicken',
        'minecraft:rabbit'
    ])
    event.add('forge:pollution_blocks', [
        'tfc:grass/silt',
        'tfc:grass/loam',
        'tfc:grass/sandy_loam',
        'tfc:grass/silty_loam',
        'tfc:dirt/silt',
        'tfc:dirt/loam',
        'tfc:dirt/sandy_loam',
        'tfc:dirt/silty_loam',
        'tfc:clay/silt',
        'tfc:clay/loam',
        'tfc:clay/sandy_loam',
        'tfc:clay/silty_loam',
        'tfc:clay_grass/silt',
        'tfc:clay_grass/loam',
        'tfc:clay_grass/sandy_loam',
        'tfc:clay_grass/silty_loam'
    ])
    event.add('minecraft:leaves', [
        'tfc:plant/cherry_leaves',
        'tfc:plant/green_apple_leaves',
        'tfc:plant/lemon_leaves',
        'tfc:plant/olive_leaves',
        'tfc:plant/orange_leaves',
        'tfc:plant/peach_leaves',
        'tfc:plant/plum_leaves',
        'tfc:plant/red_apple_leaves'
    ])
    event.add('minecraft:dirt', [
        'tfc:grass/silt',
        'tfc:grass/loam',
        'tfc:grass/sandy_loam',
        'tfc:grass/silty_loam'
    ])
    event.add('forge:grain_crops', [
        'tfc:food/barley',
        'tfc:food/maize',
        'tfc:food/oat',
        'tfc:food/rye',
        'tfc:food/rice',
        'tfc:food/wheat'
    ])
    event.add('forge:slab/raw_stone', [
        'tfc:rock/raw/marble_slab',
        'tfc:rock/raw/gneiss_slab',
        'tfc:rock/raw/schist_slab',
        'tfc:rock/raw/phyllite_slab',
        'tfc:rock/raw/slate_slab',
        'tfc:rock/raw/quartzite_slab',
        'tfc:rock/raw/dacite_slab',
        'tfc:rock/raw/andesite_slab',
        'tfc:rock/raw/basalt_slab',
        'tfc:rock/raw/rhyolite_slab',
        'tfc:rock/raw/chalk_slab',
        'tfc:rock/raw/chert_slab',
        'tfc:rock/raw/dolomite_slab',
        'tfc:rock/raw/conglomerate_slab',
        'tfc:rock/raw/limestone_slab',
        'tfc:rock/raw/claystone_slab',
        'tfc:rock/raw/shale_slab',
        'tfc:rock/raw/gabbro_slab',
        'tfc:rock/raw/diorite_slab',
        'tfc:rock/raw/granite_slab',
        'tfc:rock/raw/granite_slab'
    ])
    event.add('forge:supports', [
        'tfc:wood/support/acacia',
        'tfc:wood/support/ash',
        'tfc:wood/support/aspen',
        'tfc:wood/support/birch',
        'tfc:wood/support/blackwood',
        'tfc:wood/support/chestnut',
        'tfc:wood/support/douglas_fir',
        'tfc:wood/support/hickory',
        'tfc:wood/support/kapok',
        'tfc:wood/support/maple',
        'tfc:wood/support/oak',
        'tfc:wood/support/palm',
        'tfc:wood/support/acacia',
        'tfc:wood/support/pine',
        'tfc:wood/support/rosewood',
        'tfc:wood/support/sequoia',
        'tfc:wood/support/spruce',
        'tfc:wood/support/sycamore',
        'tfc:wood/support/white_cedar',
        'tfc:wood/support/willow'
    ])
    event.add('forge:beams', ['#forge:supports'])
    event.add('tfc:pileable_ingots', [
        'minecraft:iron_ingot',
        'minecraft:netherite_ingot',
        'beyond_earth:desh_ingot',
        'beyond_earth:ostrum_ingot',
        'beyond_earth:calorite_ingot',
        'immersiveengineering:ingot_hop_graphite',
        'mekanism:ingot_refined_obsidian',
        'mekanism:ingot_refined_glowstone',
        'mekanism:ingot_osmium',
        'pneumaticcraft:ingot_iron_compressed',
        'twilightforest:ironwood_ingot',
        'twilightforest:fiery_ingot',
        'twilightforest:knightmetal_ingot',
        'tconstruct:cobalt_ingot',
        'tconstruct:slimesteel_ingot',
        'tconstruct:amethyst_bronze_ingot',
        'tconstruct:queens_slime_ingot',
        'tconstruct:manyullyn_ingot',
        'tconstruct:hepatizon_ingot'
    ])
    event.add('forge:colored_sleeping_bag', [
        'comforts:sleeping_bag_orange',
        'comforts:sleeping_bag_magenta',
        'comforts:sleeping_bag_light_blue',
        'comforts:sleeping_bag_yellow',
        'comforts:sleeping_bag_lime',
        'comforts:sleeping_bag_pink',
        'comforts:sleeping_bag_gray',
        'comforts:sleeping_bag_light_gray',
        'comforts:sleeping_bag_cyan',
        'comforts:sleeping_bag_purple',
        'comforts:sleeping_bag_blue',
        'comforts:sleeping_bag_brown',
        'comforts:sleeping_bag_green',
        'comforts:sleeping_bag_red',
        'comforts:sleeping_bag_black'
    ])
    event.add('forge:colored_hammock', [
        'comforts:hammock_orange',
        'comforts:hammock_magenta',
        'comforts:hammock_light_blue',
        'comforts:hammock_yellow',
        'comforts:hammock_lime',
        'comforts:hammock_pink',
        'comforts:hammock_gray',
        'comforts:hammock_light_gray',
        'comforts:hammock_cyan',
        'comforts:hammock_purple',
        'comforts:hammock_blue',
        'comforts:hammock_brown',
        'comforts:hammock_green',
        'comforts:hammock_red',
        'comforts:hammock_black'
    ])
    event.add('forge:seed_tree', [
        'dttfc:acacia_seed',
        'dttfc:ash_seed',
        'dttfc:aspen_seed',
        'dttfc:birch_seed',
        'dttfc:blackwood_seed',
        'dttfc:chestnut_seed',
        'dttfc:douglas_fir_seed',
        'dttfc:hickory_seed',
        'dttfc:kapok_seed',
        'dttfc:maple_seed',
        'dttfc:oak_seed',
        'dttfc:palm_seed',
        'dttfc:pine_seed',
        'dttfc:rosewood_seed',
        'dttfc:sequoia_seed',
        'dttfc:spruce_seed',
        'dttfc:sycamore_seed',
        'dttfc:white_cedar_seed',
        'dttfc:willow_seed'
    ])
    event.add('tfc:usable_on_tool_rack', [
        'kubejs:wrought_iron_spindle',
        'kubejs:gravedigger',
        'sewingkit:bone_sewing_needle',
        'sewingkit:iron_sewing_needle',
        'sewingkit:netherite_sewing_needle',
        'sewingkit:file',
        'firmalife:peel',
        'cgm:pistol',
        'cgm:shotgun',
        'cgm:rifle',
        'cgm:grenade_launcher',
        'cgm:bazooka',
        'cgm:mini_gun',
        'cgm:assault_rifle',
        'cgm:machine_pistol',
        'cgm:heavy_rifle',
        'create:wrench',
        'createoreexcavation:vein_finder',
        'minecraft:shears',
        'minecraft:lead',
        'minecraft:crossbow',
        'minecraft:trident',
        'minecraft:flint_and_steel',
        'minecraft:spyglass',
        'exnihilosequentia:wooden_crook',
        'exnihilosequentia:iron_crook',
        'exnihilosequentia:iron_hammer',
        'exnihilosequentia:netherite_hammer',
        'exnihilosequentia:stone_hammer',
        'immersiveengineering:hammer',
        'immersiveengineering:wirecutter',
        'immersiveengineering:screwdriver',
        'immersiveengineering:chemthrower',
        'immersiveengineering:railgun',
        'mcw_tfc_aio:roofing_hammer',
        'mcw_tfc_aio:pliers',
        'mcwroofs:roofing_hammer',
        'mcwwindows:hammer',
        'butchersdelight:cleaver',
        '#tconstruct:modifiable'
    ])
    event.add('tfc:plant/green', [
        'tfc:plant/bluegrass',
        'tfc:plant/bromegrass',
        'tfc:plant/fountain_grass',
        'tfc:plant/manatee_grass',
        'tfc:plant/orchard_grass',
        'tfc:plant/ryegrass',
        'tfc:plant/scutch_grass',
        'tfc:plant/timothy_grass',
        'tfc:plant/raddia_grass',
        'tfc:plant/arrowhead',
        'tfc:plant/coontail',
        'tfc:plant/duckweed',
        'tfc:plant/field_horsetail',
        'tfc:plant/gutweed',
        'tfc:plant/king_fern',
        'tfc:plant/lady_fern',
        'tfc:plant/licorice_fern',
        'tfc:plant/moss',
        'tfc:plant/ostrich_fern',
        'tfc:plant/pistia',
        'tfc:plant/sago',
        'tfc:plant/switchgrass',
        'tfc:plant/sword_fern',
        'tfc:plant/tall_fescue_grass',
        'tfc:plant/toquilla_palm',
        'tfc:plant/water_lily',
        'tfc:plant/water_taro',
        'tfc:plant/leafy_kelp'
    ])
    event.add('tfc:herbal_grass', [
        'tfc:plant/bluegrass',
        'tfc:plant/bromegrass',
        'tfc:plant/fountain_grass',
        'tfc:plant/manatee_grass',
        'tfc:plant/orchard_grass',
        'tfc:plant/ryegrass',
        'tfc:plant/scutch_grass',
        'tfc:plant/timothy_grass',
        'tfc:plant/raddia_grass',
        'tfc:plant/switchgrass',
        'tfc:plant/tall_fescue_grass',
        'tfc:plant/turtle_grass',
        'firmalife:plant/butterfly_grass',
        'tfc:plant/leafy_kelp',
        'tfc:plant/winged_kelp'
    ])
    event.add('tfc:plant/red', [
        'tfc:plant/anthurium',
        'tfc:plant/blood_lily',
        'tfc:plant/butterfly_milkweed',
        'tfc:plant/guzmania',
        'tfc:plant/heliconia',
        'tfc:plant/kangaroo_paw',
        'tfc:plant/poppy',
        'tfc:plant/rose',
        'tfc:plant/vriesea',
        'tfc:plant/snapdragon_red',
        'tfc:plant/tropical_milkweed',
        'tfc:plant/tulip_red'
    ])
    event.add('tfc:plant/white', [
        'tfc:plant/houstonia',
        'tfc:plant/meads_milkweed',
        'tfc:plant/oxeye_daisy',
        'tfc:plant/primrose',
        'tfc:plant/sacred_datura',
        'tfc:plant/snapdragon_white',
        'tfc:plant/trillium',
        'tfc:plant/tulip_white',
        'tfc:plant/yucca'
    ])
    event.add('tfc:tea_leaves', [
        'tfc:plant/labrador_tea',
        'tfc:plant/hibiscus',
        'twilightforest:mining_leaves'
    ])
    event.add('tfc:gem_dust/minor', [
        'kubejs:clean_gem_dust/amethyst',
        'kubejs:clean_gem_dust/opal',
        'kubejs:clean_gem_dust/ruby',
        'kubejs:clean_gem_dust/sapphire',
        'kubejs:clean_gem_dust/topaz',
        'kubejs:clean_gem_dust/pyrite'
    ])
    event.add('tfc:gem_dust', [
        '#tfc:gem_powders/slot',
        '#forge:dusts/diamond',
        '#forge:dusts/emerald'
    ])
    event.add('forge:sleeping_bags', [
        '#travelersbackpack:sleeping_bags',
        '#forge:colored_sleeping_bag',
        'comforts:sleeping_bag_white'
    ])
    event.add('forge:magma_block', [
        'minecraft:magma_block',
        'tfc:rock/magma/granite',
        'tfc:rock/magma/diorite',
        'tfc:rock/magma/gabbro',
        'tfc:rock/magma/rhyolite',
        'tfc:rock/magma/basalt',
        'tfc:rock/magma/andesite',
        'tfc:rock/magma/dacite'
    ])
    event.add('forge:farmlands', [
        'tfc:farmland/silt',
        'tfc:farmland/loam',
        'tfc:farmland/sandy_loam',
        'tfc:farmland/silty_loam'
    ])
    event.add('forge:axes/stone', [
        'tfc:stone/axe/igneous_extrusive',
        'tfc:stone/axe/igneous_intrusive',
        'tfc:stone/axe/metamorphic',
        'tfc:stone/axe/sedimentary'
    ])
    event.add('forge:hoes/stone', [
        'tfc:stone/hoe/igneous_extrusive',
        'tfc:stone/hoe/igneous_intrusive',
        'tfc:stone/hoe/metamorphic',
        'tfc:stone/hoe/sedimentary'
    ])
    event.add('forge:javelins/stone', [
        'tfc:stone/javelin/igneous_extrusive',
        'tfc:stone/javelin/igneous_intrusive',
        'tfc:stone/javelin/metamorphic',
        'tfc:stone/javelin/sedimentary'
    ])
    event.add('forge:hammers/stone', [
        'tfc:stone/hammer/igneous_extrusive',
        'tfc:stone/hammer/igneous_intrusive',
        'tfc:stone/hammer/metamorphic',
        'tfc:stone/hammer/sedimentary'
    ])
    event.add('forge:knifes/stone', [
        'tfc:stone/knife/igneous_extrusive',
        'tfc:stone/knife/igneous_intrusive',
        'tfc:stone/knife/metamorphic',
        'tfc:stone/knife/sedimentary'
    ])
    event.add('forge:shovels/stone', [
        'tfc:stone/shovel/igneous_extrusive',
        'tfc:stone/shovel/igneous_intrusive',
        'tfc:stone/shovel/metamorphic',
        'tfc:stone/shovel/sedimentary'
    ])
    event.add('tfc:metal/pickaxe_head/first_metal', [
        'tfc:metal/pickaxe_head/copper',
        'tfc:metal/pickaxe_head/bismuth_bronze',
        'tfc:metal/pickaxe_head/black_bronze',
        'tfc:metal/pickaxe_head/bronze'
    ])
    event.add('forge:shovels/stone', [
        'tfc:stone/shovel/igneous_extrusive',
        'tfc:stone/shovel/igneous_intrusive',
        'tfc:stone/shovel/metamorphic',
        'tfc:stone/shovel/sedimentary'
    ])
    event.add('forge:spindles', [
        'tfc:spindle',
        'kubejs:wrought_iron_spindle'
    ])
    event.add('tfc:tanned_hides', [
        'kubejs:hide_tanned_s',
        'kubejs:hide_tanned_m',
        'kubejs:hide_tanned_l'
    ])
    event.add('tfc:oiled_hides', [
        'kubejs:hide_oiled_s',
        'kubejs:hide_oiled_m',
        'kubejs:hide_oiled_l'
    ])
    event.add('tfc:finish_hides', [
        'kubejs:hide_finish_s',
        'kubejs:hide_finish_m',
        'kubejs:hide_finish_l'
    ])
    event.add('tfc:lamp_fuel', [
        'tfc:bucket/tallow',
        'tfc:bucket/olive_oil',
        'immersiveengineering:creosote_bucket'
    ])
    event.add('tfc:stripped_logs', [
        'tfc:wood/stripped_log/acacia',
        'tfc:wood/stripped_log/ash',
        'tfc:wood/stripped_log/aspen',
        'tfc:wood/stripped_log/birch',
        'tfc:wood/stripped_log/blackwood',
        'tfc:wood/stripped_log/chestnut',
        'tfc:wood/stripped_log/douglas_fir',
        'tfc:wood/stripped_log/hickory',
        'tfc:wood/stripped_log/kapok',
        'tfc:wood/stripped_log/maple',
        'tfc:wood/stripped_log/oak',
        'tfc:wood/stripped_log/palm',
        'tfc:wood/stripped_log/pine',
        'tfc:wood/stripped_log/rosewood',
        'tfc:wood/stripped_log/sequoia',
        'tfc:wood/stripped_log/spruce',
        'tfc:wood/stripped_log/sycamore',
        'tfc:wood/stripped_log/white_cedar',
        'tfc:wood/stripped_log/willow'
    ])
    event.add('tfc:planks', [
        'tfc:wood/planks/acacia',
        'tfc:wood/planks/ash',
        'tfc:wood/planks/aspen',
        'tfc:wood/planks/birch',
        'tfc:wood/planks/blackwood',
        'tfc:wood/planks/chestnut',
        'tfc:wood/planks/douglas_fir',
        'tfc:wood/planks/hickory',
        'tfc:wood/planks/kapok',
        'tfc:wood/planks/maple',
        'tfc:wood/planks/oak',
        'tfc:wood/planks/palm',
        'tfc:wood/planks/pine',
        'tfc:wood/planks/rosewood',
        'tfc:wood/planks/sequoia',
        'tfc:wood/planks/spruce',
        'tfc:wood/planks/sycamore',
        'tfc:wood/planks/white_cedar',
        'tfc:wood/planks/willow'
    ])
    event.add('tfc:tree_saplings', [
        'tfc:wood/sapling/acacia',
        'tfc:wood/sapling/ash',
        'tfc:wood/sapling/aspen',
        'tfc:wood/sapling/birch',
        'tfc:wood/sapling/blackwood',
        'tfc:wood/sapling/chestnut',
        'tfc:wood/sapling/douglas_fir',
        'tfc:wood/sapling/hickory',
        'tfc:wood/sapling/kapok',
        'tfc:wood/sapling/maple',
        'tfc:wood/sapling/oak',
        'tfc:wood/sapling/palm',
        'tfc:wood/sapling/pine',
        'tfc:wood/sapling/rosewood',
        'tfc:wood/sapling/sequoia',
        'tfc:wood/sapling/spruce',
        'tfc:wood/sapling/sycamore',
        'tfc:wood/sapling/white_cedar',
        'tfc:wood/sapling/willow'
    ])
    event.add('forge:arrow_head', [
        'minecraft:iron_nugget',
        'minecraft:flint',
        '#forge:nuggets/silver',
        '#forge:nuggets/tin',
        '#forge:nuggets/zinc',
        '#forge:nuggets/copper'
    ])
    event.add('forge:nuggets', [
        'createdeco:cast_iron_nugget'
    ])
    event.add('forge:dead_animal', [
        'butchersdelight:dead_cow',
        'butchersdelight:deadsheep',
        'butchersdelight:deadpig',
        'butchersdelight:deadgoat',
        'butchersdelight:deadhoglin',
        'butchersdelight:deadchiken',
        'butchersdelight:deadrabbitbrown',
        'butchersdelight:deadllama',
        'butchersdelight:deadstrider'
    ])
    event.add('tfc:drink_items', [
        'tfc:ceramic/jug',
        'waterflasks:leather_flask',
        'waterflasks:iron_flask'
    ])
    event.add('forge:hide', [
        'untamedwilds:hide_bigcat_snow_leopard'
    ])
    event.add('tfc:scrapable', [
        '#betteranimalsplus:pelts',
        'minecraft:rabbit_hide',
        'butchersdelight:cow_hide',
        'butchersdelight:hoglinskin',
        '#forge:hide',
        'kubejs:hide_oiled_s',
        'kubejs:hide_oiled_m',
        'kubejs:hide_oiled_l',
        'kubejs:hide_finish_s',
        'kubejs:hide_finish_m',
        'kubejs:hide_finish_l'
    ])
    event.add('forge:pelts', [
        '#betteranimalsplus:pelts',
        'butchersdelight:cow_hide',
        'butchersdelight:hoglinskin',
        '#forge:hide'
    ])
    event.add('forge:tallow_source', [
        'untamedwilds:material_blubber'
    ])
    event.add('forge:eggs', [
        'untamedwilds:egg_snake',
        'untamedwilds:egg_softshell_turtle',
        'untamedwilds:egg_tortoise',
        'untamedwilds:egg_large_snake',
        'untamedwilds:egg_monitor'
    ])
    event.add('forge:sandstone', [
        'tfc:raw_sandstone/yellow',
        'tfc:smooth_sandstone/yellow',
        'tfc:cut_sandstone/yellow',
        'tfc:raw_sandstone/red',
        'tfc:smooth_sandstone/red',
        'tfc:cut_sandstone/red'
    ])
    event.add('forge:nuggets/andesite_alloy', [
        '#forge:nuggets/iron',
        '#forge:nuggets/zinc',
        '#forge:nuggets/tin'
    ])
    event.add('forge:nuggets/knightmetal', [
        'twilightforest:armor_shard'
    ])
    event.add('forge:thatch', [
        'untamedwilds:carpet_straw',
        'tfc:thatch'
    ])
    event.add('forge:dirt', [
        '#tfc:dirt',
        '#minecraft:dirt'
    ])
    event.add('forge:wax', [
        'firmalife:beeswax'
    ])
    event.add('forge:wax/beeswax', [
        'firmalife:beeswax'
    ])
    event.add('forge:oil_seeds', [
        'tfc:seeds/melon',
        'tfc:seeds/pumpkin',
        'tfc:seeds/jute',
        'tfc:seeds/squash',
        'tfc:seeds/beet',
        'tfc:seeds/carrot',
        'tfc:seeds/cabbage',
        'tfc:seeds/rice',
        'tfc:seeds/wheat',
        'tfc:seeds/maize',
        'tfc:seeds/rye',
        'tfc:seeds/oat',
        'tfc:seeds/soybean',
        'tfc:seeds/barley',
        'immersiveengineering:seed'
    ])
    event.add('forge:double_sheets/compressed_iron', [
        'kubejs:compressed_double_sheet'
    ])
    event.add('forge:double_sheets', [
        'kubejs:compressed_double_sheet'
    ])
    event.add('forge:sheets/compressed_iron', [
        'kubejs:compressed_sheet'
    ])
    event.add('forge:sheets', [
        'kubejs:compressed_sheet'
    ])
    event.add('forge:wires/compressed_iron', [
        'kubejs:compressed_wire'
    ])
    event.add('forge:wires', [
        'kubejs:compressed_wire'
    ])
    event.add('forge:double_ingots/compressed_iron', [
        'kubejs:compressed_double_ingot'
    ])
    event.add('forge:double_ingots', [
        'kubejs:compressed_double_ingot'
    ])
    event.add('forge:ingots', [
        'refinedstorage:quartz_enriched_iron'
    ])
    event.add('forge:ingots/irons', [
        'minecraft:iron_ingot',
        'tfc:metal/ingot/wrought_iron'
    ])
    event.add('forge:ingots/bronze_any', [
        '#forge:ingots/bronze',
        '#forge:ingots/black_bronze',
        '#forge:ingots/bismuth_bronze'
    ])
    event.add('forge:rods/bronze_any', [
        '#forge:rods/bronze',
        '#forge:rods/black_bronze',
        '#forge:rods/bismuth_bronze'
    ])
    event.add('forge:sheets/bronze_any', [
        '#forge:sheets/bronze',
        '#forge:sheets/black_bronze',
        '#forge:sheets/bismuth_bronze'
    ])
    event.add('forge:double_sheets/bronze_any', [
        '#forge:double_sheets/bronze',
        '#forge:double_sheets/black_bronze',
        '#forge:double_sheets/bismuth_bronze'
    ])
    event.add('forge:ingots/glass', [
        'kubejs:primitive_glass_pane'
    ])
    event.add('forge:glass_panes', [
        'kubejs:primitive_glass_pane'
    ])
    event.add('forge:2panes', [
        'kubejs:primitive_glass_pane',
        'tconstruct:clear_glass_pane'
    ])
    event.add('forge:glass/bottle', [
        'minecraft:glass_bottle',
        'firmalife:empty_jar'
    ])
    event.add('forge:ingots/seared_stone', [
        'tconstruct:seared_brick'
    ])
    event.add('forge:rock_andesite_alloy', [
        'tfc:rock/loose/andesite'
    ])
    event.add('forge:rods', [
        'immersiveposts:stick_lead',
        'immersiveposts:stick_constantan',
        'immersiveposts:stick_electrum',
        'immersiveposts:stick_uranium',
        'immersiveengineering:stick_aluminum'
    ])
    event.add('forge:rods/iron', ['tfc:metal/rod/wrought_iron'])
    event.add('inventorio:pickaxes', ['#tconstruct:modifiable/harvest/stone', 'pneumaticcraft:jackhammer', 'immersiveengineering:drill'])
    event.add('inventorio:axes', ['#tconstruct:modifiable/melee/primary', 'immersiveengineering:buzzsaw'])
    event.add('inventorio:shovels', ['#tconstruct:modifiable/harvest/primary'])
    event.add('inventorio:hoes', ['#tconstruct:modifiable/harvest/primary', '#tfc:knives'])
    event.add('inventorio:swords', ['#tconstruct:modifiable/melee/sword','#tconstruct:modifiable/melee/parry'])
    event.add('forge:rods/compressed_iron', ['kubejs:compressed_rod'])
    event.add('forge:plates', [
        'kubejs:compressed_sheet',
        'tfc:metal/sheet/rose_gold',
        'tfc:metal/sheet/zinc',
        'tfc:metal/sheet/brass',
        'tfc:metal/sheet/bronze',
        'tfc:metal/sheet/tin'
    ])
    event.add('forge:canvas', ['farmersdelight:canvas'])
    event.add('forge:plates/compressed_iron', ['kubejs:compressed_sheet'])
    event.add('forge:plates/iron', ['tfc:metal/sheet/wrought_iron'])
    event.add('forge:plates/steel', ['tfc:metal/sheet/steel'])
    event.add('forge:plates/gold', ['tfc:metal/sheet/gold'])
    event.add('forge:plates/rose_gold', ['tfc:metal/sheet/rose_gold'])
    event.add('forge:plates/copper', ['tfc:metal/sheet/copper'])
    event.add('forge:plates/brass', ['tfc:metal/sheet/brass'])
    event.add('forge:plates/bronze', ['tfc:metal/sheet/bronze'])
    event.add('forge:plates/nickel', ['tfc:metal/sheet/nickel'])
    event.add('forge:plates/silver', ['tfc:metal/sheet/silver'])
    event.add('forge:plates/steel', ['tfc:metal/sheet/steel'])
    event.add('forge:plates/tin', ['tfc:metal/sheet/tin'])
    event.add('forge:plates/zinc', ['tfc:metal/sheet/zinc'])
    event.add('forge:plates/cast_iron', ['tfc:metal/sheet/cast_iron'])
    event.add('forge:plates/sterling_silver', ['tfc:metal/sheet/sterling_silver'])
    event.add('forge:plates/blue_steel', ['tfc:metal/sheet/blue_steel'])
    event.add('forge:plates/red_steel', ['tfc:metal/sheet/red_steel'])
    event.add('forge:plates/black_steel', ['tfc:metal/sheet/black_steel'])
    event.add('forge:plates/electrum', ['tfc_ie_addon:metal/sheet/electrum'])
    event.add('forge:plates/constantan', ['tfc_ie_addon:metal/sheet/constantan'])
    event.add('forge:plates/aluminum', ['tfc_ie_addon:metal/sheet/aluminum'])
    event.add('forge:plates/uranium', ['tfc_ie_addon:metal/sheet/uranium'])
    event.add('forge:plates/lead', ['tfc_ie_addon:metal/sheet/lead'])
    event.add('forge:cloth', ['tfc:silk_cloth', 'tfc:burlap_cloth','tfc:wool_cloth'])
    event.add('forge:dusts/charcoal', ['tfc:powder/charcoal'])
    event.add('forge:dusts/sulfur', ['tfc:powder/sulfur'])
    event.add('forge:dusts/ash', ['tfc:powder/wood_ash', 'bodyhygiene:ash'])
    event.add('forge:glue', ['tfc:glue', 'create:super_glue'])
    event.add('forge:bicoals', ['tfc:ore/bituminous_coal', 'minecraft:coal'])
    event.add('forge:raw_materials', ['kubejs:raw_platinum', 'createoreexcavation:raw_diamond', 'createoreexcavation:raw_emerald', 'createoreexcavation:raw_redstone', 'beyond_earth:raw_desh', 'beyond_earth:raw_ostrum', 'beyond_earth:raw_calorite'])
    event.add('forge:raw_materials/platinum', ['kubejs:raw_platinum'])
    event.add('forge:raw_materials/diamond', ['createoreexcavation:raw_diamond'])
    event.add('forge:raw_materials/emerald', ['createoreexcavation:raw_emerald'])
    event.add('forge:raw_materials/redstone', ['createoreexcavation:raw_redstone'])
    event.add('forge:tallow_source', ['tfc:blubber', 'minecraft:rotten_flesh'])
    event.add('forge:berries', [
        'tfc:food/cranberry',
        'tfc:food/bunchberry',
        'tfc:food/strawberry',
        'tfc:food/raspberry',
        'tfc:food/wintergreen_berry',
        'tfc:food/blackberry',
        'tfc:food/blueberry'
    ])
    event.add('forge:apples', [
        'tfc:food/green_apple',
        'tfc:food/red_apple'
    ])
    event.add('forge:sugar_source', [
        //'tfc:food/beet',
        'tfc:food/sugarcane'
    ])
    event.add('forge:ethanol_source', [
        'tfc:food/beet',
        'tfc:food/potato',
        'tfc:food/cranberry',
        'tfc:food/blackberry',
        'tfc:food/blueberry',
        'tfc:food/bunchberry',
        'tfc:food/raspberry',
        'tfc:food/green_apple',
        'tfc:food/red_apple',
        'tfc:food/sugarcane'
    ])
    event.add('tfc:small_fishing_bait', [
        'waterstrainer:worm',
        'exnihilosequentia:silkworm'
    ])
    event.add('forge:head_hardened_steel', [
        'tfc:metal/double_ingot/blue_steel',
        'tfc:metal/double_ingot/red_steel'
    ])
    event.add('forge:space_ores', [
        'beyond_earth:raw_desh',
        'beyond_earth:raw_ostrum',
        'beyond_earth:raw_calorite'
    ])
    event.removeAll('tfc:cat_food')
    event.add('tfc:cat_food', '#minecraft:fishes')
    // ==========  REMOVE

    event.remove('tfc:compost_greens_low', [
        'tfc:plant/hanging_vines',
        'tfc:plant/spanish_moss',
        'tfc:plant/liana',
        'tfc:plant/tree_fern',
        'tfc:plant/arundo',
        'tfc:plant/dry_phragmite',
        'tfc:plant/ivy',
        'tfc:plant/jungle_vines'
    ])
    event.remove('firmalife:oven_fuel', [
        'myrtrees:rubberwood_log'
    ])
    event.remove('forge:nuggets', ['tinycoal:tinycoal','tinycoal:tinycharcoal'])
    event.remove('balm:nuggets', ['tinycoal:tinycoal','tinycoal:tinycharcoal'])
    event.remove('forge:storage_blocks/copper', ['minecraft:cut_copper'])
    event.remove('forge:ingots/cast_iron', ['minecraft:iron_ingot'])
    event.remove('forge:dusts/coal_coke', ['tfc:powder/graphite'])
    event.remove('tfc:foods/raw_meats', ['tfc:food/cooked_turtle'])
    event.remove('forge:leather', [
        'butchersdelight:cow_hide',
        'butchersdelight:sheephide',
        'butchersdelight:hoglinskin',
        'untamedwilds:hide_bear_ashen',
        'untamedwilds:hide_bear_black',
        'untamedwilds:hide_bear_brown',
        'untamedwilds:hide_bear_white',
        'untamedwilds:hide_bigcat_jaguar',
        'untamedwilds:hide_bigcat_leopard',
        'untamedwilds:hide_bigcat_snow_leopard',
        'untamedwilds:hide_bigcat_lion',
        'untamedwilds:hide_bigcat_panther',
        'untamedwilds:hide_bigcat_puma',
        'untamedwilds:hide_bigcat_tiger'
    ])
/*  event.remove('tfc:cat_food', [  // didn't work for whatever reason
    'tfc:food/barley_grain',
    'tfc:food/maize_grain',
    'tfc:food/oat_grain',
    'tfc:food/rye_grain',
    'tfc:food/rice_grain',
    'tfc:food/wheat_grain',
    'tfc:food/cooked_beef',
    'tfc:food/cooked_pork',
    'tfc:food/cooked_chicken',
    'tfc:food/cooked_quail',
    'tfc:food/cooked_mutton',
    'tfc:food/cooked_bear',
    'tfc:food/cooked_horse_meat',
    'tfc:food/cooked_pheasant',
    'tfc:food/cooked_turkey',
    'tfc:food/cooked_grouse',
    'tfc:food/cooked_venison',
    'tfc:food/cooked_wolf',
    'tfc:food/cooked_rabbit',
    'tfc:food/cooked_hyena',
    'tfc:food/cooked_duck',
    'tfc:food/cooked_chevon',
    'tfc:food/cooked_camelidae',
    'tfc:food/cooked_gran_feline',
    'tfc:food/cooked_turtle',
    'twilightforest:cooked_venison',
    'twilightforest:cooked_meef',
    'untamedwilds:food_bear_cooked',
    'untamedwilds:food_turtle_cooked',
    'untamedwilds:food_pachyderm_cooked',
    'farmersdelight:beef_patty',
    'farmersdelight:cooked_bacon',
    'farmersdelight:cooked_mutton_chops',
    'farmersdelight:smoked_ham',
    'firmalife:food/yak_curd',
    'firmalife:food/goat_curd',
    'firmalife:food/milk_curd',
    'firmalife:food/cooked_bacon',
    'firmalife:food/cheddar',
    'firmalife:food/chevre',
    'firmalife:food/rajya_metok',
    'firmalife:food/gouda',
    'firmalife:food/feta',
    'firmalife:food/shosha',
    'firmalife:food/shredded_cheese',
    'firmalife:food/white_chocolate_blend',
    'firmalife:food/dark_chocolate_blend',
    'firmalife:food/milk_chocolate_blend',
    'htm:cooked_poultry_wing',
    'htm:cooked_poultry_leg',
    'htm:cooked_poultry_breast'
  ]) */
    event.removeAllTagsFrom(
        'minecraft:turtle_egg',
        'untamedwilds:food_turtle_raw',
        'untamedwilds:food_turtle_cooked',
        'untamedwilds:food_bear_raw',
        'untamedwilds:food_bear_cooked',
        'createoreexcavation:raw_diamond',
        'createoreexcavation:raw_emerald',
        'createoreexcavation:raw_redstone',
        'chiselsandbits:chisel_stone',
        'htm:hammer',
        'createdeco:zinc_sheet',
        'createdeco:cast_iron_ingot',
        'createdeco:cast_iron_sheet',
        'createdeco:netherite_nugget',
        'mekanism:sawdust',
        'pneumaticcraft:diesel',
        'pneumaticcraft:kerosene',
        'pneumaticcraft:gasoline',
        'pneumaticcraft:lubricant',
        'pneumaticcraft:ethanol',
        'mekanism:dust_obsidian',
        'mekanism:dust_sulfur',
        'immersiveengineering:dust_sulfur',
        'beyond_earth:iron_stick',
        'beyond_earth:iron_plate',
        'beyond_earth:steel_ingot',
        'beyond_earth:steel_block',
        'create:brass_ingot',
        'create:brass_sheet',
        'create:copper_sheet',
        'create:iron_sheet',
        'create:golden_sheet',
        'create:zinc_ingot',
        'create:wheat_flour',
        'htm:sawdust',
        'createaddition:electrum_ingot',
        'createaddition:electrum_nugget',
        'createaddition:electrum_sheet',
        'createaddition:electrum_wire',
        'createaddition:electrum_rod',
        'createaddition:brass_rod',
        'createaddition:copper_rod',
        'createaddition:iron_rod',
        'createaddition:gold_rod',
        'createaddition:zinc_sheet',
        'exnihilosequentia:copper_nugget',
        'exnihilosequentia:zinc_ingot',
        'exnihilosequentia:lead_ingot',
        'exnihilosequentia:silver_ingot',
        'exnihilosequentia:nickel_ingot',
        'exnihilosequentia:tin_ingot',
        'exnihilosequentia:platinum_ingot',
        'exnihilosequentia:aluminum_ingot',
        'exnihilosequentia:uranium_ingot',
        'exnihilosequentia:raw_lead',
        'exnihilosequentia:raw_silver',
        'exnihilosequentia:raw_nickel',
        'exnihilosequentia:raw_tin',
        'exnihilosequentia:raw_platinum',
        'exnihilosequentia:raw_aluminum',
        'exnihilosequentia:raw_uranium',
        'exnihilosequentia:raw_zinc',
        'immersiveengineering:plate_aluminum',
        'immersiveengineering:plate_lead',
        'immersiveengineering:plate_uranium',
        'immersiveengineering:plate_constantan',
        'immersiveengineering:plate_electrum',
        'immersiveengineering:plate_iron',
        'immersiveengineering:plate_gold',
        'immersiveengineering:plate_silver',
        'immersiveengineering:ingot_nickel',
        'immersiveengineering:ingot_silver',
        'immersiveengineering:ingot_steel',
        'immersiveengineering:dust_steel',
        'immersiveengineering:dust_gold',
        'immersiveengineering:dust_iron',
        'immersiveengineering:dust_lead',
        'immersiveengineering:dust_uranium',
        'immersiveengineering:plate_steel',
        'immersiveengineering:plate_nickel',
        'immersiveengineering:stick_steel',
        'immersiveengineering:stick_iron',
        'immersiveengineering:stick_stick',
        'immersiveengineering:nugget_copper',
        'immersiveengineering:dust_copper',
        'immersiveengineering:dust_saltpeter',
        'immersiveengineering:wire_copper',
        'immersiveengineering:plate_copper',
        'immersiveposts:stick_copper',
        'immersiveposts:stick_gold',
        'immersiveposts:stick_silver',
        'immersiveposts:stick_nickel',
        'mekanism:dust_charcoal',
        'mekanism:ingot_bronze',
        'mekanism:ingot_tin',
        'mekanism:ingot_lead',
        'mekanism:ingot_steel',
        'mekanism:nugget_steel',
        'mekanism:nugget_lead',
        'mekanism:raw_lead',
        'mekanism:ingot_uranium',
        'mekanism:raw_uranium',
        'mekanism:nugget_uranium',
        'mekanism:block_uranium',
        'mekanism:block_steel',
        'mekanism:block_lead',
        'mekanism:dust_diamond',
        'minecraft:copper_ingot',
        'minecraft:chest',
        'minecraft:glass',
        'minecraft:glass_pane',
        'minecraft:gold_ingot',
        'pneumaticcraft:wheat_flour',
        'tconstruct:pig_iron_ingot',
        'tconstruct:rose_gold_ingot',
        'tconstruct:copper_nugget',
        'farmersdelight:pumpkin_slice'
    )
})