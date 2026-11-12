// Joint client script supporting 'kubejs/server_scripts/misc_interactions.js'.
// *Most* of this is not necessary but helps prevent desync and make things a little nicer!

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

const cakes = [
    'createaddition:chocolate_cake',
    'createaddition:honey_cake',
    'tconstruct:ender_cake',
    'tconstruct:magma_cake',
    'tconstruct:earth_cake',
    'tconstruct:sky_cake',
    'tconstruct:blood_cake'
]

onEvent('block.right_click', event => {
    // Silence the torch placing sound
    if ((event.block.id == 'create:blaze_burner' || event.block.id == 'createaddition:liquid_blaze_burner')
        && event.item.id == 'tfc:dead_torch') event.cancel()

    // Sync upgrades getting consumed on client
    if (/^functionalstorage:fluid_/.test(event.block.id) && event.item.id != 'minecraft:air') event.cancel()

    // Disable sound when right clicking tanner with shears
    if (event.item.id == 'minecraft:shears' && /^butchersdelight:rack/.test(event.block.id)) event.cancel()

    // Sync block place cancelling
    const isPlaceableSequenceItem = (item) => item && item.nbt && item.nbt.SequencedAssembly && item.isBlock()
    let mainHand = event.player.mainHandItem
    let offHand = event.player.offHandItem
    if (
        isPlaceableSequenceItem(event.item)
        || (
            mainHand.getId() == offHand.getId()
            && ((isPlaceableSequenceItem(mainHand)) || isPlaceableSequenceItem(offHand))
        )
    ) event.cancel()
    if (blocksToNotPlace.includes(event.item.id)) event.cancel()
    
    // Sync cake cutting
    if (cakes.includes(event.block.id)) event.cancel()
})

onEvent('item.right_click', event => {
    // Sync emptying prevention
    if ([
        'tfc:ceramic/jug',
        'waterflasks:leather_flask',
        'waterflasks:iron_flask'
    ].includes(event.item.id) && event.player.crouching) event.cancel()
    // Sync wooden bucket cancellation
    if (event.item.id == 'tfc:wooden_bucket' && event.player.crouching
        && event.player.rayTrace().block.id == 'tfc:pot'
    ) event.cancel()
})