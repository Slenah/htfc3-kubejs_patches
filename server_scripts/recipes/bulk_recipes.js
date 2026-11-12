const rock_types = [
    'granite', 'diorite', 'gabbro', 'shale', 'claystone', 'limestone', 'conglomerate',
    'dolomite', 'chert', 'chalk', 'rhyolite', 'basalt', 'andesite', 'dacite',
    'quartzite', 'slate', 'phyllite', 'schist', 'gneiss', 'marble'
]

const minerals = [
    'bituminous_coal', 'lignite', 'kaolinite', 'gypsum',
    'graphite', 'sulfur', 'cinnabar', 'cryolite',
    'saltpeter', 'sylvite', 'borax', 'halite',

    'amethyst', 'diamond', 'emerald', 'lapis_lazuli',
    'opal', 'pyrite', 'ruby', 'sapphire', 'topaz'
]
const metals = [
    'native_copper', 'native_gold', 'hematite', 'native_silver',
    'cassiterite', 'bismuthinite', 'garnierite', 'malachite',
    'magnetite', 'limonite', 'sphalerite', 'tetrahedrite'
]
const non_tfc_metals = [
    ['chromite',    'firmalife'],
    ['aluminum',    'tfc_ie_addon'],
    ['lead',        'tfc_ie_addon'],
    ['uranium',     'tfc_ie_addon']
]
const ore_grades = ['poor', 'normal', 'rich']
const gravel_ores = ['native_copper', 'native_gold', 'native_silver', 'cassiterite']
const wood_types = ['acacia', 'ash', 'aspen', 'birch', 'blackwood', 'chestnut',
                    'douglas_fir', 'hickory', 'kapok', 'maple', 'oak', 'palm', 'pine',
                    'rosewood', 'sequoia', 'spruce', 'sycamore', 'white_cedar', 'willow']

let artificial_ore = (event, rock_type, ore_item, output, recipe_id) => {
    event.recipes.create.compacting(output,
        [
            Item.of(ore_item),
            Item.of(ore_item),
            Item.of(`tfc:rock/raw/${rock_type}`),
            Item.of(`tfc:rock/raw/${rock_type}`),
            Item.of('tfc:mortar'), Item.of('tfc:mortar'), Item.of('tfc:mortar'), Item.of('tfc:mortar')
        ]
    ).superheated().id(`kubejs:artificial_ores/basin/${recipe_id}`)
    event.recipes.mekanismCombining(`2x ${output}`, `3x ${ore_item}`, `2x tfc:rock/raw/${rock_type}`)
        .id(`kubejs:artificial_ores/combiner/${recipe_id}`)
    
    // Crushing ore blocks back into ore
    event.recipes.immersiveengineeringCrusher(ore_item, output, [Item.of(`tfc:rock/loose/${rock_type}`), Item.of(`tfc:rock/loose/${rock_type}`).withChance(0.5)])
        .id(`kubejs:ore_block_crushing/ie/${recipe_id}`)
    event.recipes.mekanismCrushing(ore_item, output).id(`kubejs:ore_block_crushing/mekanism/${recipe_id}`)
}

let gravel_deposit = (event, rock_type, ore_item, output, recipe_id) => {
    event.recipes.create.mixing(output,
        [
            Item.of(ore_item),
            Item.of(ore_item),
            Item.of(`tfc:rock/gravel/${rock_type}`),
            Item.of(`tfc:rock/gravel/${rock_type}`),
            Item.of('tfc:mortar'),
            Item.of('tfc:mortar')
        ]
    ).id(`kubejs:gravel_deposit/basin/${recipe_id}`)
    event.recipes.mekanismCombining(`2x ${output}`, `3x ${ore_item}`, `2x tfc:rock/gravel/${rock_type}`)
        .id(`kubejs:gravel_deposit/combiner/${recipe_id}`)
}

onEvent('recipes', event => {
    rock_types.forEach(rock => {
        minerals.forEach(mineral => {
            artificial_ore(event, rock,
                `tfc:ore/${mineral}`,
                `tfc:ore/${mineral}/${rock}`,
                `${mineral}/${rock}`
            )
        })
        gravel_ores.forEach(metal => {
            gravel_deposit(event, rock,
                `tfc:ore/small_${metal}`,
                `tfc:deposit/${metal}/${rock}`,
                `${metal}/${rock}`
            )
        })
        ore_grades.forEach(grade => {
            metals.forEach(metal => {
                artificial_ore(event, rock,
                    `tfc:ore/${grade}_${metal}`,
                    `tfc:ore/${grade}_${metal}/${rock}`,
                    `${metal}_${grade}/${rock}`
                )
            })
            non_tfc_metals.forEach(([metal, mod]) => {
                artificial_ore(event, rock,
                    `${mod}:ore/${grade}_${metal}`,
                    `${mod}:ore/${grade}_${metal}/${rock}`,
                    `${metal}_${grade}/${rock}`
                )
            })
        })
    })

    wood_types.forEach(wood => {
        event.remove({id: `tfc_ie_addon:sawmill/${wood}/trapdoor`})
        event.recipes.immersiveengineeringSawmill(`2x tfc:wood/lumber/${wood}`, `tfc:wood/planks/${wood}_trapdoor`, 'immersiveengineering:dust_wood')
        .id(`tfc_ie_addon:sawmill/${wood}/trapdoor`)
    })
})
