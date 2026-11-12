onEvent('recipes', event => {
    event.recipes.createoreexcavation.extracting(Fluid.of('kubejs:mineral_water', 500), '{"text": "Mineral Deep Water"}', 10, 10000).alwaysFinite().id("mineral_water");
    event.recipes.createoreexcavation.extracting(Fluid.of('kubejs:purified_water', 5), '{"text": "Purified Deep Water"}', 10, 1000).alwaysInfinite().id("pure_water");
    event.recipes.createoreexcavation.extracting(Fluid.of('immersivepetroleum:crudeoil', 4000), '{"translate":"block.immersivepetroleum.fluid_crude_oil"}', 10, 10000).drill('createoreexcavation:netherite_drill').alwaysFinite().id("crude_oil");
})