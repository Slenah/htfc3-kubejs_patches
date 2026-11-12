onEvent("lootjs", (event) => {
    event.addLootTypeModifier(LootType.ENTITY, LootType.BLOCK, LootType.CHEST, LootType.FISHING, LootType.GIFT)
        .replaceLoot("minecraft:wheat_seeds", "tfc:seeds/wheat", true)
        .replaceLoot("minecraft:potato", "tfc:seeds/potato", true)
        .replaceLoot("minecraft:carrot", "tfc:seeds/carrot", true)
        .replaceLoot("minecraft:beetroot_seeds", "tfc:seeds/beet", true)
        .replaceLoot("minecraft:melon_seeds", "tfc:seeds/melon", true)
        .replaceLoot("minecraft:pumpkin_seeds", "tfc:seeds/pumpkin", true)
        .replaceLoot('minecraft:iron_ingot', 'tfc:metal/ingot/wrought_iron', true)
        .replaceLoot('minecraft:gold_ingot', 'tfc:metal/ingot/gold', true)
    event.addLootTableModifier("minecraft:gameplay/cat_morning_gift")
        .removeLoot(ItemFilter.ALWAYS_TRUE)
        .pool((pool) => {
            pool.rolls(1)
            pool.addWeightedLoot([
                Item.of("butchersdelight:deadrabbitbrown").withChance(1),
                Item.of("minecraft:string").withChance(5),
                Item.of("minecraft:stick").withChance(5),
                Item.of("tfc:small_raw_hide").withChance(5),
                Item.of("minecraft:feather").withChance(5),
                Item.of("exnihilosequentia:silkworm").withChance(3),
                Item.of("tfc:food/cod").withChance(5),
                Item.of("tfc:wool").withName("Hairball").withChance(10)
            ]);
        })
    /*.addWeightedLoot([
      Item.of("butchersdelight:deadrabbitbrown").withChance(2),
      Item.of("minecraft:string").withChance(10),
      Item.of("minecraft:stick").withChance(10),
      Item.of("tfc:small_raw_hide").withChance(10),
      Item.of("minecraft:feather").withChance(10),
      Item.of("exnihilosequentia:silkworm").withChance(10),
      Item.of("tfc:food/cod").withChance(10),
      Item.of("tfc:wool").withChance(20),
      Item.of("untamedwilds:spawn_snake").withChance(10).addNBT({})
    ])*/
})