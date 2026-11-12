onEvent('item.modification', event => {
    // Durability changes
    event.modify('exnihilosequentia:wooden_crook', item => { item.maxDamage = 64 })
    event.modify('exnihilosequentia:iron_crook', item => { item.maxDamage = 1024 })
    event.modify('exnihilosequentia:stone_hammer', item => { item.maxDamage = 128 })
    event.modify('exnihilosequentia:iron_hammer', item => { item.maxDamage = 2048 })
    event.modify('immersiveengineering:screwdriver', item => { item.maxDamage = 16 })

    // Rarity changes
    event.modify('immersiveengineering:alu_post', item => { item.rarity = 'uncommon' })
    event.modify('create:metal_girder', item => { item.rarity = 'uncommon' })

    // Furnace fuel changes
    event.modify('minecraft:lava_bucket', item => { item.burnTime = 0 })

    // Various food tweaks
    event.modify('minecraft:golden_carrot', item => { item.foodProperties = food => { food.alwaysEdible() } })
    event.modify('untamedwilds:food_turtle_soup', item => { item.maxStackSize = 32 })

    // Fix glass bottle / wooden bowl dupe
    event.modify([
        'farmersdelight:apple_cider',
        'farmersdelight:melon_juice',
        'farmersdelight:hot_cocoa',
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
        'farmersdelight:roast_chicken',
        'farmersdelight:shepherds_pie',
        'farmersdelight:honey_glazed_ham',
        'farmersdelight:stuffed_pumpkin'
    ], item => { item.craftingRemainder = null })



    // Nourishment fix (TODO: rework from the ground up)
    event.modify([
        'pneumaticcraft:cod_n_chips',
        'pneumaticcraft:salmon_tempura',
        'firmalife:food/banana_split',

        'farmersdelight:bacon_and_eggs',
        'farmersdelight:ratatouille',
        'farmersrespite:blazing_chili'
    ], item => {
        item.foodProperties = food => {
            food.removeEffect('farmersdelight:nourishment')
            food.effect('farmersdelight:nourishment', 150, 0, 1)
        }
    })

    event.modify([
        'farmersdelight:pasta_with_meatballs',
        'farmersdelight:pasta_with_mutton_chop',
        'farmersdelight:mushroom_rice',
        'farmersdelight:steak_and_potatoes',
        'farmersdelight:grilled_salmon',
        'farmersrespite:black_cod',
        'farmersrespite:tea_curry'
    ], item => {
        item.foodProperties = food => {
            food.removeEffect('farmersdelight:nourishment')
            food.effect('farmersdelight:nourishment', 300, 0, 1)
        }
    })
    event.modify([
        'farmersdelight:roasted_mutton_chops',
        'farmersdelight:vegetable_noodles',
        'farmersdelight:squid_ink_pasta',
        'farmersdelight:roast_chicken',
        'farmersdelight:stuffed_pumpkin',
        'farmersdelight:honey_glazed_ham',
        'farmersdelight:shepherds_pie'
    ], item => {
        item.foodProperties = food => {
            food.removeEffect('farmersdelight:nourishment')
            food.effect('farmersdelight:nourishment', 450, 0, 1)
        }
    })
})