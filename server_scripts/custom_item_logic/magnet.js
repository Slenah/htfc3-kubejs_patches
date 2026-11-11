// I may have gone a little overzealous with the comments but I wanted to make this script
// easier to understand for people with less coding experience.
//
// If you're making changes, please keep in mind that 'kubejs/client_scripts/magnet.js'
// contains a client-side version that will also need to be tweaked!
//
// Air <3

// Magnet tier declaration
const magnetTiers = {
    tier1: {
        items: ['kubejs:magnet/copper'],
        range: 4.5,
        applyMagnetPull: (item, distance, range, dx, dy, dz) => {
            if (!item.persistentData.metallic) return // Only attract metallic items!

            let directionX = dx / distance;   let directionY = dy / distance;   let directionZ = dz / distance

            if (item.persistentData.huge_very_heavy) range /= 2   // Very heavy items recieve a large range penalty
            let speed = 0.125 * Math.min(1 - (distance / range), 0.5)
            if (item.persistentData.huge_very_heavy) speed /= 5   // and an extremely large speed penalty


            if (distance > range) return   // Re-determine if we're outside of range in case range was modified

            if (distance <= 0.5 && !item.persistentData.huge_very_heavy) { // Lock-on logic
                lockOn(item, true)
                item.setMotion(
                    item.motionX * (0.75 + distance / 2) + directionX * speed,
                    item.motionY * (0.75 + distance / 2) + directionY * speed * 1.25,
                    item.motionZ * (0.75 + distance / 2) + directionZ * speed
                )
            } else {   // Normal logic
                lockOn(item, false)
                item.setMotion(
                    item.motionX * 0.97 + directionX * speed,
                    item.motionY * 0.97 + directionY * speed * 2,
                    item.motionZ * 0.97 + directionZ * speed
                )
            }
        }
    },
    tier2: {
        items: ['kubejs:magnet/colored_steel', 'kubejs:magnet/colored_steel_alt'],
        range: 5,
        applyMagnetPull: (item, distance, range, dx, dy, dz) => {
            let directionX = dx / distance;   let directionY = dy / distance;   let directionZ = dz / distance

            if (item.persistentData.huge_very_heavy) range /= 2
            if (!item.persistentData.metallic) range /= 1.125   // Range cannot be increased because of how entities get scanned,
                                                                // so it is instead decreased with an inverted condition.
            let speed = 0.125 * Math.min(1 - (distance / range), 0.5)
            if (item.persistentData.huge_very_heavy) speed /= 5
            if (item.persistentData.metallic) speed *= 1.125    // Metallic items get a small buff in speed and range.


            if (distance > range) return
            if (distance <= 0.5 && !item.persistentData.huge_very_heavy) {
                lockOn(item, true)

                item.setMotion( // I haven't tested these thoroughly but this has additional checks for high velocity items!
                    (Math.abs(item.motionX / 200)) > (Math.abs(dx * 0.05)) ? item.motionX + directionX * speed     : dx * 0.05,
                    (Math.abs(item.motionY / 200)) > (Math.abs(dy * 0.10)) ? item.motionY + directionY * speed * 2 : dy * 0.10,
                    (Math.abs(item.motionZ / 200)) > (Math.abs(dz * 0.05)) ? item.motionZ + directionZ * speed     : dz * 0.05
                )
            } else {
                lockOn(item, false)
                item.setMotion(
                    item.motionX * 0.95 + directionX * speed,
                    item.motionY * 0.95 + directionY * speed * 2,
                    item.motionZ * 0.95 + directionZ * speed
                )
            }
        }
    },
    tier3: {
        items: ['kubejs:magnet/hdpe'],
        range: 6,
        applyMagnetPull: (item, distance, range, dx, dy, dz) => {
            // This tier uses a slightly different handling pattern,
            // as it uses a drastically different approach to attracting items.
            // The goal for this tier is to provide very high control,
            // higher than that of the now disabled Create SA copper magnet.

            if (item.persistentData.huge_very_heavy) range /= 2
            if (distance > range) return

            // Lockon has no special movement logic, but still disables gravity.
            lockOn(item, (distance <= 1 && !item.persistentData.huge_very_heavy))

            if (item.persistentData.huge_very_heavy) {
                // Speed up items as they get closer, similar to previous magnets
                let factor = (1 - distance / range) * 0.05
                item.setMotion(
                    item.motionX * 0.75 + factor * dx,
                    item.motionY * 0.65 + factor * dy * 2,
                    item.motionZ * 0.75 + factor * dz
                )
            } else {
                // Slow down items as they get closer, inverse of the usual logic for extra control
                let factor = (distance*0.25 / range + 1) * 0.05
                item.setMotion(
                    item.motionX * 0.75 + factor * dx,
                    item.motionY * 0.65 + factor * dy * 2,
                    item.motionZ * 0.75 + factor * dz
                )
            }
        }
    },
    tier4: {
        items: ['kubejs:magnet/polonium', 'kubejs:magnet/polonium_alt'],
        get range() { return magnetTiers.tier3.range},
        applyMagnetPull: (item, distance, range, dx, dy, dz) => {
            // Tier 4 is identical to tier 3, but has a special right click interaction
            return magnetTiers.tier3.applyMagnetPull(item, distance, range, dx, dy, dz)
        }
    }
}



// Grab all existing items in a square box slightly larger than range on diagonals.
// Contains all items that are *potentially* close enough to get pulled,
// they are later properly weeded out by distance to turn this into a sphere area.
function getNearbyItems(level, position, range) {
    let aabb = AABB.of(
        position[0] - range, position[1] - range, position[2] - range,
        position[0] + range, position[1] + range, position[2] + range
    )
    let items = level.getEntitiesWithin(aabb).filter(entity => entity.type == 'minecraft:item')
    return items
}

// A function for safely toggling off gravity.
// Usually called when an item is very close to the player and is unlikely to move much,
// as that does wonders for clientside sync.
// 
function lockOn(item, bool, time) {
    time = time || 1   // Ticks until gravity is re-enabled
    if (bool) {
        item.setNoGravity(true)

        // Easily accessible flag to check if item is marked as "locked on".
        // It is important to use it instead of reading the NoGravity NBT value to get the status,
        // as constantly reading NBT data will quickly compromise performance.
        if (!item.persistentData.magnetized) item.persistentData.magnetized = true
        
        // Additional tracker set with timer for use outside of 'player.tick' (see 'server.tick' at the bottom of the script!)
        magnetizedItems.set(String(item.id), { entity: item, timer: time })
    } else {
        item.setNoGravity(false)
        magnetizedItems.delete(item.id)
        item.persistentData.remove('magnetized')
    }
}


let playerLastChunk = {} // Cache!

// Thank you so much KostromDam for posting this in the kubejs discord! (https://discord.com/channels/303440391124942858/1206749004444995715)
// This function checks if you are in a claimed chunk and if you are an ally of its team.
function isInProtectedArea(player) {
    // The code was modified to make it work in 1.18 and to attach a client event sender.
    // I cut out the parts responsible for held item re-sync as that appears to not be an issue.
    // I also inverted its output and renamed the function name to be more fit with my script.
    const $BlockPos = java('net.minecraft.core.BlockPos')
    const $ChunkPos = java('net.minecraft.world.level.ChunkPos')
    const $FTBChunksAPI = java('dev.ftb.mods.ftbchunks.data.FTBChunksAPI')
    const $ChunkDimPos = java('dev.ftb.mods.ftblibrary.math.ChunkDimPos')

    // Early quit if ftbchunks is not present
    if (!Platform.isLoaded("ftbchunks")) return false

    let claimedChunksManager = $FTBChunksAPI.manager
    let chunk = new $ChunkPos(new $BlockPos(player.x, player.y, player.z))

    // Get the last checked chunk position
    let lastChunk = playerLastChunk[player.id]
    if (lastChunk && lastChunk.x === chunk.x && lastChunk.z === chunk.z) {
        // If the player is still in the same chunk, return the last known status
        return player.persistentData.isInProtectedArea
    }
    // Cache player chunk position
    playerLastChunk[player.id] = { x: chunk.x, z: chunk.z }
    
    let player_ftb_chunk = new $ChunkDimPos(player.minecraftEntity)
    let block_ftb_chunk = player_ftb_chunk.offset(chunk.x - player_ftb_chunk.x, chunk.z - player_ftb_chunk.z)
    let claimedChunk = claimedChunksManager.getChunk(block_ftb_chunk)

    let isInProtectedArea = claimedChunk != null &&
        !claimedChunk.teamData.isTeamMember(player.id) &&
        !claimedChunk.teamData.isAlly(player.id) &&
        !claimedChunksManager.getBypassProtection(player.id)

    // Save data to player-anchored data
    if (!('isInProtectedArea' in player.persistentData) || player.persistentData.isInProtectedArea !== isInProtectedArea) {
        player.persistentData.isInProtectedArea = isInProtectedArea
        player.sendData('protectedAreaStatus', {protectedAreaStatus: isInProtectedArea})
        return isInProtectedArea
    }
}



let protectedAreaPopupTimer = -1   // Little flag to help make the message disappear immediately
let tier4_protectedAreaPopup = false
// Core magnet logic
onEvent('player.tick', event => {
    let player = event.player

    let activeTier = Object.values(magnetTiers).find(tier =>   // Try to match player's hand items with a magnet
        tier.items.some(item => player.isHoldingInAnyHand(item))
    )
    
    if (protectedAreaPopupTimer > -1) protectedAreaPopupTimer--
    if (protectedAreaPopupTimer == 0 && !tier4_protectedAreaPopup) player.server.runCommandSilent(`title ${player} actionbar [""]`)

    if (!activeTier) return   // Stop if not holding a magnet

    let { range, applyMagnetPull } = activeTier   // Grab range and attraction logic
    let items = getNearbyItems(event.level, [player.x, player.y, player.z], range)

    if (isInProtectedArea(player) && items.length > 0) {   // Stop if player does not have access
        if (activeTier == magnetTiers.tier4 && tier4_protectedAreaPopup)  {
            player.server.runCommandSilent(`title ${player} actionbar {"text":"Cannot warp items in protected area","color":"red"}`)
        } else {
            player.server.runCommandSilent(`title ${player} actionbar {"text":"Cannot use magnet in protected area","color":"red"}`)
        }
        protectedAreaPopupTimer = 2   // Set flag to quickly clear the message
        return
    }


    // Collect some common data and cast the magnet's main logic
    items.forEach(item => {
        let dx = player.x - item.x
        let dy = player.y + player.getEyeHeight() / 2 - item.y
        let dz = player.z - item.z
        let squaredDistance = dx * dx + dy * dy + dz * dz

        if (squaredDistance > range * range) return   // Re-check distance to get a sphere area

        let distance = squaredDistance ** 0.5

        if (!('metallic' in item.persistentData)) item.persistentData.metallic = Ingredient.of("#kjs:metallic").test(item.fullNBT.Item.id)
        if (!('very_heavy' in item.persistentData)) item.persistentData.huge_very_heavy = Ingredient.of("#tfc:huge_very_heavy").test(item.fullNBT.Item.id)

        applyMagnetPull(item, distance, range, dx, dy, dz)
    })
})



// Custom right click warp interaction for polonium tier magnet.
// Pollonium acts as Tier 3, but has an additional item ability!
onEvent("item.right_click", (event) => {
    if (event.item.id == 'kubejs:magnet/polonium') {
        let user = event.player

        if (isInProtectedArea(user)) {
            user.server.runCommandSilent(`title ${user} actionbar {"text":"Cannot warp items in protected area","color":"red"}`)
            tier4_protectedAreaPopup = true
            event.server.scheduleInTicks(30, event.server, ctx => {
                tier4_protectedAreaPopup = false
            })
            return
        }

        let items = getNearbyItems(user.level, [user.x, user.y, user.z], 15)
        if (items.length < 1) {
            user.server.runCommandSilent(`title ${user} actionbar {"text":"No items nearby","color":"red"}`)
            return
        }
        let level = user.level

        user.server.runCommandSilent(`title ${user} actionbar {"text":"Pulling ${items.length} item stacks","color":"white"}`)
        user.addItemCooldown('kubejs:magnet/polonium', 400)   // 20-second cooldown
        user.server.runCommandSilent(`execute at ${user} run playsound minecraft:entity.guardian.hurt player @a ~ ~ ~ 0.75 1`)

        items.forEach(item => {
            // Small particle cloud at item
            // (goes from color [0.5, 1, 1] to color [0.45, 0.78, 0.9], is size 0.75, spawns 25 particles with speed 1 and has a 0.125*2 block spread in all directions)
            item.server.runCommandSilent(`execute at ${item.id} run particle minecraft:dust_color_transition 0.5 1 1 0.75 0.45 0.78 0.9 ~ ~.25 ~ 0.125 0.125 0.125 1 25`)
            
            // Grab direction to item for the next particle
            let distX = item.x - user.x;   let distY = item.y - user.y - user.getEyeHeight() / 2;   let distZ = item.z - user.z
            let distance = (distX*distX + distY*distY + distZ*distZ) ** 0.5
            let dir = [distX/distance,   distY/distance,   distZ/distance]

            // Directed particle from player to item
            // (starts from user's eye height, directed towards particle at speed 2, count being set to 0 allows using delta as travel direction)
            item.server.runCommandSilent(`execute at ${user} run particle minecraft:enchanted_hit ~ ~${user.getEyeHeight()} ~ ${dir[0]} ${dir[1]} ${dir[2]} 2 0`)

            // Lift up item into the air for 10 ticks
            lockOn(item, true, 10)
            item.motionY += 0.05 + Math.random()/16
        })

        // 12 ticks after initial casting:
        event.server.scheduleInTicks(12, event.server, ctx => {
            user.server.runCommandSilent(`title ${user} actionbar {"text":"Pulling ${items.length} item stacks","color":"aqua"}`)
            user.server.runCommandSilent(`execute at ${user} run playsound minecraft:entity.ender_dragon.hurt player @a ~ ~ ~ 0.75 0.5`)
            items.forEach(item => {
                // Set to player coordinates and reset motion, slight randomization to everything
                item.setPosition(
                    0.25 - Math.random()/2 + user.x,
                    0.25 - Math.random()/2 + user.y + user.getEyeHeight() / 2,
                    0.25 - Math.random()/2 + user.z
                )
                item.setMotion(
                    0.0625 - Math.random()/8,
                    0.0625 - Math.random()/8,
                    0.0625 - Math.random()/8
                )
                // Particle smoke cloud at player, scales with item count
                item.server.runCommandSilent(`execute at ${item.id} run particle minecraft:dust_color_transition 0.5 1 1 0.75 0.45 0.78 0.9 ~ ~.25 ~ 0.125 0.25 0.125 1 15`)
            }
            )
        })
    }
})



// Some magnets apply a no gravity tag to items to prevent clientside jitter.
// Player tick logic only runs when a magnet is being held for performance reasons.
// This should keep items with no gravity in check outside of that logic!
let magnetizedItems = new Map()
onEvent('server.tick', event => {
    for (let [uuid, data] of magnetizedItems) {
        // Cleanup if entity stops existing
        if (!data.entity || !data.entity.isAlive()) {
            magnetizedItems.delete(uuid)
            continue
        }
        // Tick down timer until gravity is re-enabled
        if (data.timer <= 0) {
            data.entity.persistentData.remove('magnetized')
            data.entity.setNoGravity(false)
            magnetizedItems.delete(uuid)
        } else {
            data.timer--
        }
    }
})


// Despite the name, this event is also called when an old entity is re-loaded.
// This should cover all chunk loading/unloading cases,
// or cases where the magnetizedItems data is lost, like during a restart.
onEvent('entity.spawned', event => {
    let entity = event.entity
    if (entity.type == 'minecraft:item') {
        if (entity.persistentData.magnetized) {
            entity.setNoGravity(false)
            entity.persistentData.remove('magnetized')
        }
    }
})
