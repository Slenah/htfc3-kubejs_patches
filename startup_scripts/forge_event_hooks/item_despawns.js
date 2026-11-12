// https://lexxie.dev/forge/1.18.2/net/minecraftforge/event/entity/item/ItemExpireEvent.html
onForgeEvent('net.minecraftforge.event.entity.item.ItemExpireEvent', (event) => global.itemDespawnPass(event))

// Config for despawning items on top of a sluice.
// Zero means never despawn item.
let hoursUntilDespawn = 0

const NO_DESPAWN_TAG = '#hardrock:dont_despawn'
const SLUICE_BLOCK_CLASS = 'net.dries007.tfc.common.blocks.devices.SluiceBlock'
const $Sluiceable = java('net.dries007.tfc.util.Sluiceable')

global.itemDespawnPass = event => {
    const entity = event.getEntityItem()
    if (!entity || !entity.isAlive()) return
    const stack = entity.getItem()
    if (!stack || stack.isEmpty()) return

    // Test if item has the no-despawn item tag
    if (Ingredient.of(NO_DESPAWN_TAG).test(stack)) {
        cancelDespawn(event)
        return
    }

    // Check if the item is sluiceable and has a sluice below
    if (hasSluicingRecipe(stack) && hasSluiceBlockBelow(entity)) {
        cancelDespawn(event)
        return
    }

}

function hasSluicingRecipe(stack) {
    return $Sluiceable.get(stack) != null
}

function hasSluiceBlockBelow(itemEntity) {
    const top = itemEntity.getFeetBlockState()
    const bottom = itemEntity.getLevel().getBlockState(itemEntity.blockPosition().below())

    return isSluiceBlock(top.getBlock()) || isSluiceBlock(bottom.getBlock())
}

function isSluiceBlock(block) {
    return block.getClass().toString().endsWith(SLUICE_BLOCK_CLASS)
}

function cancelDespawn(event) {
    event.setExtraLife(60 * 20) // sixty seconds, exact number is not of much importance
    event.setCanceled(true)
}