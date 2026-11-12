const $ForgeSpawnEggItem = java('net.minecraftforge.common.ForgeSpawnEggItem')

onEvent('block.right_click', event => {
    const cakes = [
        'createaddition:chocolate_cake',
        'createaddition:honey_cake',
        'tconstruct:ender_cake',
        'tconstruct:magma_cake',
        'tconstruct:earth_cake',
        'tconstruct:sky_cake',
        'tconstruct:blood_cake'
    ]
    const cakeSliceIdFromWholeCake = (cakeBlockId) => {
        const cakeType = cakeBlockId.slice(cakeBlockId.search(':') + 1).replace('_cake', '')
        return `kubejs:cake_slices/${cakeType}`
    }
    // Enables cutting these cakes above when they're placed in the world with a knife, the same way as the coffee cake
    if (cakes.includes(event.block.id)) {
        event.cancel() // Don't eat them directly

        if (event.item.hasTag('forge:tools/knives')) { // Grab a slice
            let bites = Number(event.block.properties.bites)
            bites++
            event.player.give(cakeSliceIdFromWholeCake(event.block.id))
            if (bites >= 7) {
                event.block.set('air') // yum
            } else {
                event.block.set(event.block.id, { 'bites': `${bites}` })
            }
        }
        else {
            event.player.setStatusMessage('You need a knife to grab a slice!')
        }
    }

    // Allow lighting torches from blaze burners
    if ((event.block.id == 'create:blaze_burner' || event.block.id == 'createaddition:liquid_blaze_burner')
        && event.item.id == 'tfc:dead_torch') {
        event.cancel() // Cancel usual interactions, mainly placing the torch
        if (event.block.properties.blaze == 'smouldering') {
            event.player.setStatusMessage('This Blaze Burner is not fueled!')
            return
        }
        let torchCount = event.item.count
        event.item.count = 0
        event.player.giveInHand(`${torchCount}x tfc:torch`)
        event.player.server.runCommandSilent(`execute as ${event.player} at @s run playsound minecraft:entity.blaze.shoot block @a ~ ~ ~ ${0.25 + torchCount/48} ${1.5 + Math.random()/2}`)
    }

    // Fix bug/exploit interaction with Fluid Drawers and fluid containers and make it impossible to upgrade them
    if (/^functionalstorage:fluid_/.test(event.block.id) && event.item.id != 'minecraft:air') event.cancel()

    // Disable uncrafting tables completely
    if (event.block.id == 'twilightforest:uncrafting_table') event.cancel()

    // Prevent mechanical belt dupe involving this specific wrench
    if (event.item.id == 'refinedstorage:wrench' && event.block.id == 'create:belt') event.cancel()

    // Prevent tanner exploit that lets you turn raw hide directly into leather
    if (event.item.id == 'minecraft:shears' && /^butchersdelight:rack/.test(event.block.id)) event.cancel()

    // Heat frame + Depot QOL
    if (event.item.id == 'pneumaticcraft:heat_frame' && event.block.id == 'create:depot' && !event.player.crouching) {
        event.player.setStatusMessage('Drop the heat frame onto the depot for use in recipes')
        event.cancel()
    }

    // Remove functionality from paraglider statues
    if (event.block.hasTag('paraglider:statues')) {
        if (event.item.id == 'minecraft:air' || event.block.id == 'paraglider:cursed_statue') event.cancel()
        else if (!(
            (event.block.id == 'paraglider:goddess_statue' && (
                event.item.id == 'sewingkit:leather_sheet'
                || event.item.hasTag('forge:ingots/gold')
                || event.item.hasTag('minecraft:flowers')
            ))
            || (event.player.mainHandItem.hasTag('tfc:chisels') && event.player.offHandItem.hasTag('tfc:hammers') && event.player.crouching)
        )) event.cancel()
    }

    // Fix straw interaction with blaze burners
    if (event.item.id == 'createaddition:straw' && event.block.id == 'create:blaze_burner') {
        if (event.player.creativeMode) {
            event.item.count++
        } else {
            event.item.count--
            if (event.item.count == 0) { // There is some. really weird stuff happening.
                event.block.set(Block.id('createaddition:liquid_blaze_burner'))
            }
        }
    }

    // Make string meshes for Create Sifters unusable
    if (event.item.id == 'createsifter:string_mesh' && event.block.id == 'createsifter:sifter') {
        event.player.setStatusMessage('This block only accepts Brass Meshes!')
        event.cancel()
    }
    event.player.rayTrace().block
})

onEvent('player.inventory.opened', event => {
    // Last resort cases if blacklisted things still open a GUI despite failsafes
    if (/StatueBargainContainer/.test(event.inventoryContainer.toString()))
        event.player.closeInventory()
})

onEvent('item.right_click', event => {
    // Prevent shift-right-clicking a flask from emptying it in favor of custom crafting grid recipes
    if ([
        'tfc:ceramic/jug',
        'waterflasks:leather_flask',
        'waterflasks:iron_flask'
    ].includes(event.item.id) && event.player.crouching) event.cancel()

    // Fix Wooden Buckets being able to drain from active Pots without stopping the recipe
    if (event.item.id == 'tfc:wooden_bucket' && event.player.crouching
        && event.player.rayTrace().block.id == 'tfc:pot'
    ) event.cancel()
})

onEvent('item.entity_interact', event => {
    // Grinding Utils chicken feeds
    if (event.target.type == 'tfc:chicken') {
        if (event.target.fullNBT.gender != 0 || event.target.fullNBT.Age < 0 || event.target.fullNBT.oldDay > -1) return

        let eggToSpawn
        if (event.item.id == 'mob_grinding_utils:gm_chicken_feed_cursed')
            eggToSpawn = Item.of('mob_grinding_utils:rotten_egg')
        else if (event.item.id == 'mob_grinding_utils:nutritious_chicken_feed')
            eggToSpawn = Item.of('mob_grinding_utils:golden_egg')
        else if (event.item.id == 'mob_grinding_utils:gm_chicken_feed')
            eggToSpawn = Item.of($ForgeSpawnEggItem.fromEntityType(event.item.nbt.mguMobName))
        else
            return // Not a chicken feed

        if (!event.player.isCreativeMode) event.item.count--

        event.player.server.runCommandSilent(`execute as ${event.player} at ${event.target.id} run particle minecraft:explosion ~ ~ ~`)
        event.player.server.runCommandSilent(`execute as ${event.player} at @s run playsound minecraft:entity.item.pickup block @a ~ ~ ~ 100 ${1.5 + Math.random()/2}`)
        event.target.minecraftLivingEntity.spawnAtLocation(eggToSpawn)
        event.target.minecraftLivingEntity.spawnAtLocation(Item.of('minecraft:feather', 1 + Math.round(2 * Math.random())))
        event.target.remove()
    }
})

onEvent('item.food_eaten', event => {
    // Fix greedy player chewing down pie pans
    if (['minecraft:pumpkin_pie', 'firmalife:food/cooked_pie'].includes(event.item.id)) {
        event.player.giveInHand('firmalife:pie_pan')
    }
})

const blocksToNotPlace = [
    'animaltrap:chicken_carcass',
    'animaltrap:rabbit_carcass',
    'animaltrap:duck_carcass',
    'animaltrap:grouse_carcass',
    'animaltrap:pheasant_carcass',
    'animaltrap:quail_carcass',
    'animaltrap:turkey_carcass',
    'animaltrap:turtle_carcass'
]
onEvent('block.place', event => {
    // Prevent items with sequenced recipe data from being placeable
    const isSequenceItem = (item) => item && item.nbt && item.nbt.SequencedAssembly
    let mainHand = event.entity.mainHandItem
    let offHand = event.entity.offHandItem

    if (isSequenceItem(mainHand) || isSequenceItem(offHand)) {
        // There is no way to get the hand the the block was placed with this event.
        // We try to infer the hand by comparing the block's ID to the item IDs of items held in both hands.
        if ((mainHand.getId() == event.block.id) && (offHand.getId() == event.block.id)) {
            // If both hands could be valid, we can't know for sure if the item being placed has sequence data,
            // so we send feedback to the player in case they are confused why they can't place a block they expect to.
            event.entity.server.runCommandSilent(`execute as ${event.entity} at @s run playsound minecraft:block.note_block.bass player @s ~ ~ ~ 1 0`)
            event.entity.setStatusMessage('An item in one of your hands contains Sequenced Recipe data')
            event.cancel()
        } else if (
            // Normal behavior is silent
            (mainHand.getId() == event.block.id) && (isSequenceItem(mainHand))
            || (offHand.getId() == event.block.id) && (isSequenceItem(offHand))
        ) event.cancel()
    }
    
    // Make it impossible to place small carcasses
    if (blocksToNotPlace.includes(event.block.id)) event.cancel()
})


// These blocks will by default void all of their contents when broken, likely due to a coding oversight.
// This is obviously not supposed to happen :p
const dropInventoryWhenBroken = [
    'sewingkit:storing_sewing_station',
    'tfcchannelcasting:mold_table',

]

onEvent('block.break', event => {
    if (dropInventoryWhenBroken.includes(event.block.id)) {
        let storage = event.block.entityData?.Items?.Items
            || event.block.entityData?.inventory?.Items

        storage.forEach(stack => {
            if (!stack.ForgeCaps) event.block.popItem(Item.of(stack.id, stack.Count, stack.tag))
            else {   // Manual pop that lets us assign ForgeCaps data
                let itemEntity = event.level.createEntity('item')
                itemEntity.fullNBT = `{Item:${stack}}`
                itemEntity.x = event.block.x + 0.5
                itemEntity.y = event.block.y + 0.5
                itemEntity.z = event.block.z + 0.5
                itemEntity.motionX = (Math.random() * 0.1) - 0.05
                itemEntity.motionY = 0.2
                itemEntity.motionZ = (Math.random() * 0.1) - 0.05
                itemEntity.spawn()
            }
        })
    }

    // Prevent ice from spawning water when broken with a saw
    if (event.block.id == 'minecraft:ice' && !event.player.isCreativeMode()) {
        if (event.player.mainHandItem.hasTag('forge:tools/saws')) {
            event.block.set('minecraft:air')        // Usual loot table drops seem to stop working
            event.block.popItem('minecraft:ice')    // when replacing the block with air
        }
    }
    // TFC's Ice Piles seem to not drop any items even if their loot table is modified
    if (event.block.id == 'tfc:ice_pile' && !event.player.isCreativeMode()) {
        if (event.player.mainHandItem.hasTag('forge:tools/saws')) {
            event.block.set('minecraft:air')
            event.block.popItem('minecraft:ice')
            return
        } else if (
            event.player.mainHandItem.hasTag('forge:tools/hammers')
            || event.player.mainHandItem.hasTag('exnihilosequentia:hammer')
        ) {
            event.block.popItem('firmalife:ice_shavings')
            if (Math.random() > 0.5) event.block.popItem('firmalife:ice_shavings')
        }
    }

    // Destroy end portal blocks around broken frames
    if (event.block.id == 'minecraft:end_portal_frame') {
        // Couldn't get a proper loot table to work :p
        if (!event.player.creativeMode && event.getLevel().getDimension() != 'minecraft:the_end') { // The End has structures with portal frames, we don't want those to be collectable
            event.block.popItem('minecraft:end_portal_frame')
            if (event.block.properties.eye == 'true') event.block.popItem('minecraft:ender_eye')
        }

        let { x, y, z } = event.block.pos
        for (let direction in portalOffsets) { // Iterate over all four adjacent blocks for safety, as opposed to only the one the frame is facing
            let offsets = portalOffsets[direction]
            if (event.level.getBlock(x + offsets.check[0], y, z + offsets.check[1]).id == 'minecraft:end_portal') {
                removePortals(
                    x + offsets.bounds[0][0], z + offsets.bounds[0][1],
                    x + offsets.bounds[1][0], z + offsets.bounds[1][1]
                )
            }
        }
    }
    function removePortals(x1, z1, x2, z2) {
        const xMin = Math.min(x1, x2), xMax = Math.max(x1, x2)
        const zMin = Math.min(z1, z2), zMax = Math.max(z1, z2)
        for (let x = xMin; x <= xMax; x++) {
            for (let z = zMin; z <= zMax; z++) {
                let block = event.level.getBlock(x, event.block.pos.y, z)
                if (block.id == 'minecraft:end_portal') block.set(Block.id('minecraft:air'))
            }
        }
    }

    if (/^tfc:rock\/raw/.test(event.block.id)) {
        if (event.player.mainHandItem.id == 'immersiveengineering:buzzsaw' && event.player.mainHandItem.hasEnchantment('minecraft:silk_touch', 1)) {
            event.block.set('minecraft:air')
            event.block.popItem(event.block.id)
        }
    }

})
const portalOffsets = {
    east: { check: [1, 0], bounds: [[1, -2], [3, 2]] },
    west: { check: [-1, 0], bounds: [[-3, -2], [-1, 2]] },
    south: { check: [0, 1], bounds: [[-2, 1], [2, 3]] },
    north: { check: [0, -1], bounds: [[-2, -3], [2, -1]] },
}