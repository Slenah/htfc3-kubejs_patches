// Have you ever found it a little strong that the player respawns with 100% food and water?
// Fear not! You can use this script to tweak that.

// First, set this to true!
const SCRIPT_ENABLED = false

// Second, set the values that you want the food and water to become!
    // The food bar ranges from 0-20, and the water bar ranges from 0-100.
    // This means that 20 is full food, and 100 is full water.
    // (You have to use full numbers, you can't do decimals here)
// I set both of these to 50% here, please change that if you'd like:
const FOOD_AFTER_RESPAWN = 10
const WATER_AFTER_RESPAWN = 50

// Now you're done! Simply restart your game, and these should all apply.
// If you run into issues, please let us know in the discord!
// Below is the actual code that makes this work, you should not touch it.





// Event docs: https://lexxie.dev/forge/1.18.2/net/minecraftforge/event/entity/player/PlayerEvent.PlayerRespawnEvent.html
onForgeEvent('net.minecraftforge.event.entity.player.PlayerEvent$PlayerRespawnEvent', (event) => global.makePlayerHungry(event))

global.makePlayerHungry = event => {
    if (event.isEndConquered()) return // Does this refer to exiting an end portal?

    // Grab thing
    const player = event.getPlayer()
    if (!player) return
    const foodData = player.getFoodData()
    if (!foodData) return

    // Set things
    foodData.setFoodLevel(FOOD_AFTER_RESPAWN)
    foodData.setThirst(WATER_AFTER_RESPAWN)
}