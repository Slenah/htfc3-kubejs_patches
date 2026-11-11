// This script is meant to add a way to prevent some user-specified types of mobs from spawning!
// This is meant as an accessibility feature and is fully customizable.

// Change this to true to enable the script:
const enableScript = false

// Below is a list of all entities that should not be allowed to exist! It will only work if the script is enabled above.
// It is pre-filled with various spider types, but you can add or remove entity types as you please.
// An easy way to find an ID for a mob is to start typing the '/summon' command in-game,
// and letting autocomplete help you find the mob you are looking for.
// Adding two slashes (//) before a type will comment it out, deactivating it and making it not count for the blacklist.
// Each type needs to have a comma at the very end.
// You can use an editor like VSCode to make sure you don't mess the formatting up, but a simple notepad will also do.
// If you need any help with this, please contact Air over at the Hardrock discord!

// Edit this to customize what entities you want to be disabled:
const entityBlacklist = [
    'minecraft:spider',
    'minecraft:cave_spider',
    'untamedwilds:tarantula',
    //'twilightforest:hedge_spider',
    //'twilightforest:king_spider',
    'twilightforest:swarm_spider'
]

// Below is the main logic for the script.
// It should not be modified unless you know what you are doing.
onEvent('entity.spawned', event => {
    if (!enableScript) return
    if (entityBlacklist.includes(event.entity.type)) {
        event.cancel()
    }
})