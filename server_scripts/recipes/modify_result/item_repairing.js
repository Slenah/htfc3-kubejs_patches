const TOOLS = {
    none: [],
    needleShears: ['#sewingkit:needles', '#forge:shears'],
    hammer: ['#forge:tools/hammers'],
    hammerScrewdriver: ['#forge:tools/hammers', '#forge:tools/screwdrivers'],
    knife: ['#tfc:knives'],
}

// List of all repairable items: { 'repairable_item': [durabilityToRestore, [materialsUsed], [toolsUsed]] }
// `materialsUsed` and `toolsUsed` must be arrays, even if they are empty.
const repairables = {
    // Create things
    'create_sa:copper_jetpack_chestplate':   [80,  [   '#forge:sheets/copper',  'create:cogwheel'],                             TOOLS.hammer],
    'create_sa:andesite_jetpack_chestplate': [120, ['3x create:andesite_alloy', '#forge:rods/zinc',      'create:encased_fan'], TOOLS.hammerScrewdriver],
    'create_sa:brass_jetpack_chestplate':    [160, [   '#forge:sheets/brass',   'create:andesite_alloy', 'create:propeller'],   TOOLS.hammerScrewdriver],
    'create_jetpack:jetpack':           [60,  ['#forge:double_sheets/brass',    'create:precision_mechanism',    'create:chute'],       TOOLS.hammerScrewdriver],
    'create_jetpack:netherite_jetpack': [420, ['create_sa:brass_cube',       '2x create:precision_mechanism', '2x create:smart_chute'], TOOLS.hammerScrewdriver],
    'create_sa:copper_exoskeleton_chestplate':   [160, ['#forge:storage_blocks/copper',         'create:fluid_tank',             '#forge:ingots/andesite_alloy'],             TOOLS.hammer],
    'create_sa:andesite_exoskeleton_chestplate': [240, ['#forge:storage_blocks/andesite_alloy', 'create:belt_connector',         '#forge:ingots/zinc', '#forge:ingots/zinc'], TOOLS.hammer],
    'create_sa:brass_exoskeleton_chestplate':    [320, ['#forge:storage_blocks/brass',          '#forge:double_sheets/brass', '2x #forge:ingots/andesite_alloy'],             TOOLS.hammer],

    // Clothing
    'tfcambiental:wool_hat':     [1750, ['tfc:wool_cloth',                            '#forge:string'], TOOLS.needleShears],
    'tfcambiental:wool_sweater': [1000, ['tfc:wool_cloth',                         '2x #forge:string'], TOOLS.needleShears],
    'tfcambiental:wool_pants':   [1250, ['tfc:wool_cloth',                         '2x #forge:string'], TOOLS.needleShears],
    'tfcambiental:wool_boots':   [1750, ['tfc:wool_cloth', 'sewingkit:leather_strip', '#forge:string'], TOOLS.needleShears],
    'tfcambiental:silk_cowl':  [1000, [   'tfc:silk_cloth',                            '#forge:string'],  TOOLS.needleShears],
    'tfcambiental:silk_shirt': [1250, ['2x tfc:silk_cloth',                         '2x #forge:string'],  TOOLS.needleShears],
    'tfcambiental:silk_pants': [1500, ['2x tfc:silk_cloth',                         '2x #forge:string'],  TOOLS.needleShears],
    'tfcambiental:silk_shoes': [1000, [   'tfc:silk_cloth', 'sewingkit:leather_strip', '#forge:string'], TOOLS.needleShears],
    'tfcambiental:burlap_cowl':  [1000, [   'tfc:burlap_cloth',                            '#forge:string'], TOOLS.needleShears],
    'tfcambiental:burlap_shirt': [1250, ['2x tfc:burlap_cloth',                         '2x #forge:string'], TOOLS.needleShears],
    'tfcambiental:burlap_pants': [1500, ['2x tfc:burlap_cloth',                         '2x #forge:string'], TOOLS.needleShears],
    'tfcambiental:burlap_shoes': [1000, [   'tfc:burlap_cloth', 'sewingkit:leather_strip', '#forge:string'], TOOLS.needleShears],
    'tfcambiental:insulated_leather_hat':   [1500, [   'sewingkit:leather_sheet',                            'htm:plant_fabric',    '#forge:string'], TOOLS.needleShears],
    'tfcambiental:insulated_leather_tunic': [1000, ['2x sewingkit:leather_sheet', 'sewingkit:leather_strip', 'htm:plant_fabric', '2x #forge:string'], TOOLS.needleShears],
    'tfcambiental:insulated_leather_pants': [1250, ['2x sewingkit:leather_sheet', 'sewingkit:leather_strip', 'htm:plant_fabric', '2x #forge:string'], TOOLS.needleShears],
    'tfcambiental:insulated_leather_boots': [1500, [   'sewingkit:leather_sheet', 'sewingkit:leather_strip', 'htm:plant_fabric',    '#forge:string'], TOOLS.needleShears],
    'tfcambiental:leather_apron': [600, ['2x sewingkit:leather_sheet', 'sewingkit:leather_strip', '2x #forge:string'], TOOLS.needleShears],
}

onEvent('recipes', event => {
    // Regular repairing
    Object.entries(repairables).forEach(([repairableItem, [repairAmount, repairMaterials, repairTools]]) => {
        const recipe = event.shapeless(
            Item.of(repairableItem, `{Damage:${repairAmount},display:{Lore:['{"text":"Restores ${(repairAmount == -1) ? 'full' : repairAmount} durability","color":"green","italic":false}']}}`),
            [Item.of(repairableItem).ignoreNBT()].concat(repairMaterials, repairTools)
        ).id(`kubejs:repairing/${repairableItem.replace(':', '/').replace('#', 'tag/')}`)
            .modifyResult((grid, result) => {
                let item = grid.find(Item.of(repairableItem).ignoreNBT())
                if (!item?.nbt?.Damage) return
                item.nbt.Damage = (repairAmount == -1) ? 0 : Math.max(0, item.nbt.Damage - repairAmount)
                return item
            })

        // Make tools lose durability instead of getting consumed
        repairTools.forEach(tool => {
            recipe.damageIngredient(tool)
        })
    })
})