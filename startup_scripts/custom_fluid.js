// priority: 0

console.info('Registering KJS Fluids...')

onEvent('fluid.registry', event => {
    event.create("molten_iron_quartz")    .thickTexture(0xdedede).bucketColor(0xdedede).displayName("Molten Quartz Enriched Iron")     .noBlock() 
    event.create("andesite_alloy")        .thickTexture(0x669999).bucketColor(0x669999).displayName("Molten Andesite Alloy")           .noBlock()
    event.create("andesite_stone")        .thickTexture(0x666666).bucketColor(0x666666).displayName("Molten Andesite Stone")           .noBlock()
    event.create("purified_water")        .thinTexture(0x003366) .bucketColor(0x003366).displayName("Purified Water")                  .noBlock()
    event.create("boiled_water")          .thinTexture(0x6699cc) .bucketColor(0x6699cc).displayName("Boiled Water")                    .noBlock()
    event.create("herbal_water")          .thinTexture(0x336666) .bucketColor(0x336666).displayName("Herbal Water")                    .noBlock()
    event.create("mineral_water")         .thinTexture(0x3399ff) .bucketColor(0x3399ff).displayName("Mineral Water")                   .noBlock()
    event.create("active_redstone")       .thinTexture(0xcc0000) .bucketColor(0xcc0000).displayName("Active Molten Redstone")          .noBlock()
    event.create("seed_oil_water")        .thinTexture(0x936e52) .bucketColor(0x936e52).displayName("Tree Seed Oil Water")             .noBlock() 
    event.create("goat_milk_vinegar")     .thinTexture(0xcbd4d6) .bucketColor(0xcbd4d6).displayName("Goat Milk Vinegar")               .noBlock()
    event.create("yak_milk_vinegar")      .thinTexture(0xf2efe1) .bucketColor(0xf2efe1).displayName("Yak Milk Vinegar")                .noBlock()
    event.create("oat_slurry")            .thinTexture(0xe7e0c8) .bucketColor(0xe7e0c8).displayName("Oat Slurry")                      .noBlock()
    event.create("lumpy_oat_milk")        .thinTexture(0xeae0c5) .bucketColor(0xeae0c5).displayName("Lumpy Oat Milk")                  .noBlock()
    event.create("unsweetened_oat_milk")  .thinTexture(0xebe2c7) .bucketColor(0xebe2c7).displayName("Unsweetened Oat Milk")            .noBlock()
    event.create("oat_milk")              .thinTexture(0xebe2ca) .bucketColor(0xebe2ca).displayName("Oat Milk")                        .noBlock()
    event.create("liquid_smoke")          .thinTexture(0xb0b0b0) .bucketColor(0xb0b0b0).displayName("Liquid Smoke")                    .noBlock()
    event.create("molten_fire_clay")      .thickTexture(0xb0885d).bucketColor(0xb0885d).displayName("Molten Fire Clay")                .noBlock()
})
