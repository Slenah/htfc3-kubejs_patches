// Note: technically this has no business being in the server_scripts folder as this uses startup script logic,
//       but this is where all of my other custom KJS items are so I thought it'd fit here.

const $ClipContext = java('net.minecraft.world.level.ClipContext')
const BLOCK_VISUAL = $ClipContext.Block.VISUAL
const FLUID_ANY = $ClipContext.Fluid.ANY

const rayTraceNonSolid = (player, level) => {
	if (level.minecraftLevel.isClientSide()) return { block: null, id: null }

	let mcPlayer = player.minecraftPlayer

	let eyePos = mcPlayer.getEyePosition(0)
	let lookVec = mcPlayer.getLookAngle()

	let reach = player.reachDistance || 5.0

	let hitResult = level.minecraftLevel.clip(
		new $ClipContext(
			eyePos,
			eyePos.add(lookVec.x() * reach, lookVec.y() * reach, lookVec.z() * reach),
			BLOCK_VISUAL,
			FLUID_ANY,
			mcPlayer
		)
	)
	let block = level.getBlock(hitResult.getBlockPos())

	return {
		block: block,
		blockPos: hitResult.getBlockPos()
	}
}

global.mopUse = (level, player, hand) => {
	if (level.minecraftLevel.isClientSide()) return false

	let mop = player.minecraftPlayer.getItemInHand(hand)

	// Get the targeted block
	const { block } = rayTraceNonSolid(player, level)
	if (['minecraft:water', 'tfc:fluid/river_water'].includes(block.id)) {
		
		if ((mop?.tag?.CustomModelData || 0) < 1000) {
			mop.getOrCreateTag().putInt('CustomModelData', 1000)
			player.playSound('minecraft:item.bottle.fill', 1, 1)
			player.setStatusMessage(`${mop.tag.CustomModelData}mb of water remaining`)
			return false // Don't do the draw animation
		}
	}


	// Print some helpers for newer players, not sure if those will be very useful
	if (block.id == 'adpother:carbon') player.setStatusMessage('This is Carbon! mops only work on dust.')
	if (block.id == 'adpother:sulfur') player.setStatusMessage('This is Sulfur! mops only work on dust.')
	
	if (block.id != 'adpother:dust') return true

	// Check that the mop has enough water
	if ((mop?.tag?.CustomModelData || 0) < 100) {
		player.setStatusMessage('Not enough water!')
		return false
	}
	return true
}

global.mopFinishUsing = (itemstack, level, player) => {
	if (level.minecraftLevel.isClientSide()) return itemstack

	// Confirm that we are discharging at a dust block
	const { block, blockPos } = rayTraceNonSolid(player, level)
	if (block.id != 'adpother:dust') return itemstack
	// Juuuust in case, verify that there is enough water for a second time
	if ((itemstack?.nbt?.CustomModelData || 0) < 100) {
		player.setStatusMessage('Not enough water!')
		return itemstack
	}

	// Remove the dust block
	level.minecraftLevel.destroyBlock(blockPos, false)
	itemstack.nbt.CustomModelData -= 100
	player.playSound('minecraft:item.bottle.empty', 1, 1)
	player.setStatusMessage(`${itemstack.nbt.CustomModelData}mb of water remaining`)



	return itemstack
}