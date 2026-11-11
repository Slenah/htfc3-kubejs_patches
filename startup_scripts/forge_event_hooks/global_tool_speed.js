// Something that Hardrock does versus base TFC is make everything twice as tough to break!
// This used to be done with a special mod called Tool and Placement Tweaks,
// but that thing does not play well with TFC's tool speed bonuses that come from forging.
const hardrocksCompleteGlobalMiningSpeedMultiplier = 0.5

onForgeEvent('net.minecraftforge.event.entity.player.PlayerEvent$BreakSpeed', (event) => global.applyGlobalToolSpeedMultiplier(event))
// Event docs: https://lexxie.dev/forge/1.18.2/net/minecraftforge/event/entity/player/PlayerEvent.BreakSpeed.html
global.applyGlobalToolSpeedMultiplier = event => {
	const player = event.getPlayer()

	// Apply global tool speed reduction
	let finalMiningSpeed = event.getNewSpeed() * hardrocksCompleteGlobalMiningSpeedMultiplier

	// Apply nutrition boost
	const foodData = player.getFoodData()
	if (foodData) {
		const averageNutrition = foodData.getNutrition().getAverageNutrition()
		if (averageNutrition >= 0.4) {
			// Linearly remap [0.4, 0.9] to [1.0, 1.25]
			finalMiningSpeed *= 1.0 + ((Math.min(averageNutrition, 0.9) - 0.4) / 0.5) * 0.25
		}
	}
	event.setNewSpeed(finalMiningSpeed)
}