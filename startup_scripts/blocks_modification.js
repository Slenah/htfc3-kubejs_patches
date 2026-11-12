const samples = [
    'amethyst',
    'bismuthinite',
    'bituminous_coal',
    'borax',
    'cassiterite',
    'cinnabar',
    'copper',
    'cryolite',
    'diamond_sample',
    'emerald_sample',
    'garnierite',
    'golds', // This is correct, it is defined as such in the mod unfortunately
    'graphite',
    'gypsum',
    'halite',
    'hematite',
    'kaolinite',
    'lapislazuli',
    'lignite',
    'limonite',
    'magnetite',
    'malachite',
    'saltpeter',
    'silver',
    'sphalerite',
    'sulfur',
    'sylvite',
    'tetrahedrite',
    'vulcanic_sulfur'
]

onEvent('block.modification', event => {
    // Drastically reduce durability of mineral samples
    samples.forEach((name) => {
        event.modify('hardrock_samples:' + name, block => {
            block.destroySpeed = 0.5
        })
    })

    // Make end portal frames destructible
    event.modify('minecraft:end_portal_frame', block => {
        block.destroySpeed = 40
    })



    const grades = ['poor', 'normal', 'rich']
    const ores = {
        'tfc_ie_addon': ['aluminum', 'lead', 'uranium'],
        'firmalife': ['chromite']
    }

    const rockCategories = {
        sedimentary: {
            rocks: ['shale', 'claystone', 'limestone', 'conglomerate', 'dolomite', 'chert', 'chalk'],
            hardness: 6.5 - 0.4
        },
        metamorphic: {
            rocks: ['quartzite', 'slate', 'phyllite', 'schist', 'gneiss', 'marble'],
            hardness: 6.5 - 0.2
        },
        igneous_extrusive: {
            rocks: ['rhyolite', 'basalt', 'andesite', 'dacite'],
            hardness: 6.5
        },
        igneous_intrusive: {
            rocks: ['granite', 'diorite', 'gabbro'],
            hardness: 6.5 + 0.2
        }
    }
    // Steer hardness of IE and Firmalife ores to match TFC ores
    Object.values(rockCategories).forEach(category => {
        let { rocks, hardness } = category
        rocks.forEach(rock => {
            Object.entries(ores).forEach(([namespace, oreList]) => {
                oreList.forEach(oreType => {
                    grades.forEach(grade => {
                        event.modify(`${namespace}:ore/${grade}_${oreType}/${rock}`, block => {
                            block.destroySpeed = hardness
                        })
                    })
                })
            })
        })
    })
})