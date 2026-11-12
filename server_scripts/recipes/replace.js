// priority: 10
onEvent('recipes', event => {
    event.replaceInput('minecraft:crafting_table', '#forge:workbenches')
    event.replaceInput('tfc:powder/wood_ash', '#forge:dusts/ash')
    event.replaceInput('farmersdelight:pumpkin_slice', 'firmalife:food/pumpkin_chunks')
    // mods
    event.replaceInput({mod: 'createdeco'}, '#forge:plates/netherite', '#forge:sheets/netherite')
    event.replaceInput({mod: 'securitycraft'}, 'minecraft:iron_ingot', '#forge:plates/iron')
    event.replaceInput({mod: 'railways'}, 'minecraft:campfire', 'tfc:torch')
    event.replaceInput({mod: 'dynamictrees'}, 'minecraft:dirt', '#forge:dirt')
    event.replaceInput({mod: 'comforts'}, 'minecraft:white_wool', '#forge:cloth')
    event.replaceInput({mod: 'chiselsandbits'}, 'minecraft:smooth_stone_slab', '#forge:smooth_stone_slab')
    event.replaceInput({mod: 'immersiveposts'}, 'minecraft:stone_bricks', '#tfc:rock/bricks')
    event.replaceInput({mod: 'firmalife'}, 'minecraft:glass', '#forge:2panes')
    event.replaceInput({mod: 'glassential'}, 'minecraft:glass', '#forge:glass')
    event.replaceInput({mod: 'farmersdelight'}, 'minecraft:beetroot', 'tfc:food/beet')
    //general shaped
    event.replaceInput({type: 'minecraft:crafting_shaped'}, 'immersiveengineering:lantern', 'tfc:metal/lamp/copper')
    event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:torch', 'tfc:torch')
    event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:kelp', 'tfc:plant/leafy_kelp')
    event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:cake', 'tfc:cake')
    event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:glass_pane', 'tconstruct:clear_glass_pane')
    event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:glass', 'tconstruct:clear_glass')
    event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:shears', '#tfc:shears')
    event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:stone_button', '#minecraft:buttons')
    event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:stone', '#tfc:rock/raw')
    event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:stone_slab', '#forge:slab/raw_stone')
    event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:furnace', 'minecraft:blast_furnace')
    event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:chest', '#forge:chests')
    event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:wheat', 'tfc:food/wheat')
    event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:dried_kelp', 'tfc:food/dried_kelp')
    event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:iron_ingot', '#forge:ingots/irons')
    event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:gold_ingot', '#forge:ingots/gold')
    event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:copper_ingot', '#forge:ingots/copper')
    event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:barrel', '#tfcbarrels:barrels')
    event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:sand', '#forge:sand')
    event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:fishing_rod', '#forge:fishing_rods')
    event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:cocoa_beans', 'firmalife:food/cocoa_beans')
    event.replaceInput({type: 'minecraft:crafting_shaped'}, 'minecraft:composter', 'tfc:composter')
    event.replaceInput({type: 'minecraft:crafting_shaped'}, 'mekanism:dust_charcoal', 'tfc:powder/charcoal')
    event.replaceInput({type: 'minecraft:crafting_shaped'}, 'create:zinc_ingot', '#forge:ingots/zinc')
    // general shapeless
    event.replaceInput({type: 'minecraft:crafting_shapeless'}, 'minecraft:glass_pane', 'tconstruct:clear_glass_pane')
    event.replaceInput({type: 'minecraft:crafting_shapeless'}, 'minecraft:stone', '#tfc:rock/raw')
    event.replaceInput({type: 'minecraft:crafting_shapeless'}, 'minecraft:sand', '#forge:sand')
    event.replaceInput({type: 'minecraft:crafting_shapeless'}, 'minecraft:fishing_rod', '#forge:fishing_rods')
    // tfc shapeless
    event.replaceInput({type: 'tfc:advanced_shapeless_crafting'}, 'tfc:spindle', '#forge:spindles')
    // replacing inputs that use specific glue types to use forge:glue tag
    const glueLike = ['#forge:slimeballs', '#bookshelf:slime_balls']
    glueLike.forEach((tag) => event.replaceInput({ not: { id: /^tconstruct/ } }, tag, '#forge:glue'))
    event.replaceInput({id: 'minecraft:hardrock/cr_mixing/ichor_dirt'}, '#forge:glue', 'tconstruct:ichor_slime_ball') // fixing ichor dirt mixing because it's not included in tconstruct recipe id
    event.replaceInput({id: 'tconstruct:common/slime/lead'}, '#bookshelf:slime_balls', '#forge:glue') // meanwhile tinkers had their own lead crafting recipe that only takes bookshelf:slime_balls


    //replace output
    event.replaceOutput({}, 'minecraft:gold_ingot', 'tfc:metal/ingot/gold')
    event.replaceOutput({}, 'minecraft:copper_ingot', 'tfc:metal/ingot/copper')
})