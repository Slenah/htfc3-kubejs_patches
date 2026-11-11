// A list of items to add crafting grid filter application recipes to.
// These recipes server as alternatives to using an anvil.
// Data must be first defined in 'config/adpother/Respirators/'.
const respirators = [
    // These three use hardcoded interactions and unfortunately do not work.
    //'adpother:iron_respirator',
    //'adpother:gold_respirator',
    //'adpother:diamond_respirator',
//    'beyond_earth:oxygen_mask',
//    'beyond_earth:netherite_oxygen_mask',
//    'create:netherite_diving_helmet',
    'mekanism:hazmat_mask',
    'mekanism:scuba_mask',
    'mekanism:mekasuit_helmet',
//    'pneumaticcraft:pneumatic_helmet'
]

onEvent('recipes', event => {
    // Generate respirator filter application recipes
    respirators.forEach(respirator => {
        ['dust', 'carbon', 'sulfur'].forEach(pollutant => {
            event.shapeless(
                Item.of(respirator, `{Fullness: {${pollutant}: 0}}`),
                [
                    Item.of(respirator).ignoreNBT(),
                    `#adpother:filters/${pollutant}`,
                    '#forge:string',
                    '#sewingkit:needles'
                ]
            ).id(`kubejs:add_filter/${respirator.replace(':', '/')}/${pollutant}`)
                .modifyResult((grid, result) => {
                    let item = grid.find(Item.of(respirator).ignoreNBT())
                    if (item?.nbt?.Fullness && item.nbt.Fullness[pollutant] == 0) return // Check if this filter type is already maxed out

                    if (!item.nbt) item.nbt = '{}'
                    item.nbt.merge(`{Fullness: {${pollutant}: 0}}`)
                    return item
                })
                .damageIngredient('#sewingkit:needles')
        })
    })
})