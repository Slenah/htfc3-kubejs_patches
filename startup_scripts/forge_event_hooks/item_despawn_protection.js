// This implementation still has a potential issue.
//
// Let's say there's a bunch of items on top of a sluice, and they have, say, 10 seconds left.
// If a player breaks the sluice, or moves the items with a magnet, they will despawn
// unexpectedly early because these protection checks only happen at the moment of despawning.
//
// A potential way to address this could be to add intermediary checks, make it so sluiceable
// item entities are tracked on tick, and keep topping their timer up without waiting
// for them to despawn, e.g. if it dips below 4 minutes you raise it back to 5.
//
// This kind of thing could potentially introduce a tiny bit of lag, especially because
// creating obscene amounts of item entities is not unusual during normal gameplay.
// This would probably be not super significant though.
//
// With all of this said, I think that that is an uncommon edge case.
// I (Air) wanted to make a mod to add item protection for 1.21.1, extending this thing
// to also protect output items too, so hoppers are not strictly required.
// I'm gonna cover the edge case in said mod.

const $Sluiceable = java('net.dries007.tfc.util.Sluiceable')

onForgeEvent('net.minecraftforge.event.entity.item.ItemExpireEvent', (event) => global.protectDespawningItems(event))
// Event docs: https://lexxie.dev/forge/1.18.2/net/minecraftforge/event/entity/item/ItemExpireEvent.html
global.protectDespawningItems = event => {
	const itemEntity = event.getEntityItem()
	const itemStack = itemEntity.getItem()

	if (
		hasHardrocksNoDespawnTag(itemStack)
		|| (canBeSluiced(itemStack) && isOnTopOfSluice(itemEntity))
	) {
		event.setExtraLife(5 * 60 * 20) // Five minutes? Can be set to any number really
		event.setCanceled(true)
	}
}

function hasHardrocksNoDespawnTag(stack) {
	return (Ingredient.of('#hardrock:dont_despawn').test(stack))
}

function canBeSluiced(stack) {
	return ($Sluiceable.get(stack) != null)
}

function isOnTopOfSluice(entity) {
	const level = entity.getLevel()
	let blockPos = entity.blockPosition()

	return (isSluice(level, blockPos) || isSluice(level, blockPos.below()))
}

function isSluice(level, blockPos) {
	const blockEntity = level.getBlockEntity(blockPos)
	if (!blockEntity) return false
	return blockEntity.toString().includes('SluiceBlockEntity')
}