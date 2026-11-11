const emptyableFlasks = [
    'tfc:ceramic/jug',
    'waterflasks:leather_flask',
    'waterflasks:iron_flask'
]

const repairableFlasks = {
    leather: {
        primaryItem: 'waterflasks:leather_flask',
        brokenItem: 'waterflasks:broken_leather_flask',
        repairMaterials: ['waterflasks:bladder'],
        repairTools: []
    },
    iron: {
        primaryItem: 'waterflasks:iron_flask',
        brokenItem: 'waterflasks:broken_iron_flask',
        repairMaterials: ['waterflasks:bladder', 'tfc:burlap_cloth'],
        repairTools: ['#tfc:knives']
    }
}

onEvent('recipes', event => {
    // Emptying recipe
    emptyableFlasks.forEach(flaskItem => {
        event.shapeless(
            Item.of(flaskItem, `{display:{Lore:['{"text":"Empties flask","color":"aqua","italic":false}']}}`),
            [Item.of(flaskItem).ignoreNBT()]
        ).id(`kubejs:flask_emptying/${flaskItem.replace(':', '/').replace('#', 'tag/')}`)
            .replaceIngredient(
                Item.of(flaskItem).ignoreNBT(),
                Item.of('minecraft:air')
            )
            .modifyResult((grid, result) => {
                let item = grid.find(Item.of(flaskItem).ignoreNBT())
                if (!item?.nbt?.fluid && !item?.nbt?.Fluid) return
                item.nbt.remove('fluid')
                item.nbt.remove('Fluid')
                return item
            })
    })

    // Flask repairing
    Object.entries(repairableFlasks).forEach(([materialName, info]) => {
        // Damaged flask
        event.shapeless(
            Item.of(info.primaryItem, `{display:{Lore:['{"text":"Restores full durability","color":"green","italic":false}']}}`),
            [Item.of(info.primaryItem).ignoreNBT()]
            .concat(info.repairMaterials, info.repairTools)
        ).id(`kubejs:flask_repairing/${materialName}`)
        .modifyResult((grid, result) => {
            let item = grid.find(Item.of(info.primaryItem).ignoreNBT())
            if (!item?.nbt?.Damage) return
            item.nbt.Damage = 0
            return item // Reset durability
        })
        .replaceIngredient(Item.of(info.primaryItem).ignoreNBT(), 'minecraft:air')

        // Fully broken flask
        event.shapeless(
            Item.of(info.primaryItem, `{display:{Lore:['{"text":"Restores full durability","color":"green","italic":false}']}}`),
            [Item.of(info.brokenItem)]
            .concat(info.repairMaterials, info.repairTools)
        ).id(`kubejs:flask_repairing/${materialName}_broken`)
        .modifyResult((grid, result) => {
            let item = grid.find(Item.of(info.brokenItem).ignoreNBT())
            if (!item) return
            return Item.of(info.primaryItem) // Make a new repaired flask
        })

        // I really really really wanted to merge these two repairing recipes into one but it just wouldn't work ;-;
    })
})