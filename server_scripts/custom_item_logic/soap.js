onEvent('item.right_click', event => {
    function clean(setCleanlinessTo, cooldown, sound, effectDuration) {
        // Default function parameters are unfortunately not supported by kubejs. '??' operator has some issues as well.
        sound = (sound == null) ? true : sound
        effectDuration = (effectDuration == null) ? cooldown * 4 : effectDuration

        let cleanlinessLevel = event.player.fullNBT.ForgeCaps['bodyhygiene:bodyhygiene_properties'].bodyhygiene
        event.player.server.runCommandSilent(`bodyhygiene set ${setCleanlinessTo} ${event.player}`)
        if (cooldown > 0) event.player.addItemCooldown(event.item.id, cooldown)
        if (sound) event.player.server.runCommandSilent(`playsound minecraft:block.honey_block.slide player @a ${event.player.x} ${event.player.y} ${event.player.z} 0.75`)
        if (effectDuration > 0) event.player.potionEffects.add('bodyhygiene:soapy', effectDuration)
    }

    if (!event.item.hasTag('bodyhygiene:soap')) return
    // Check if bodyhygiene is installed :p
    if (!event.player.fullNBT.ForgeCaps['bodyhygiene:bodyhygiene_properties']) {
        event.player.server.runCommandSilent(`title ${event.player} actionbar {"text":"Error: Missing bodyhygiene player data"}`)
        return
    }

    // Grab current clean meter
    let cleanlinessLevel = event.player.fullNBT.ForgeCaps['bodyhygiene:bodyhygiene_properties'].bodyhygiene
    if (cleanlinessLevel == 10) {
        event.player.server.runCommandSilent(`title ${event.player} actionbar {"text":"You are already very clean!"}`)
        if (/^bodyhygiene:.+_soap$/.test(event.item.id)) event.cancel() // Cancel hardcoded interaction
        return
    }

    // Execute cleaning procedures
    if (event.item.hasTag('bodyhygiene:soap/weak')) {
        let setCleanlinessTo = Math.min(10, cleanlinessLevel + 5)
        clean(setCleanlinessTo, 30)
        event.player.server.runCommandSilent(`title ${event.player} actionbar {"text":"Restored ${setCleanlinessTo - cleanlinessLevel} points! (now ${setCleanlinessTo})"}`)
        event.item.count--
    }
    else if (event.item.hasTag('bodyhygiene:soap/strong')) {
        if (event.player.potionEffects.isActive('bodyhygiene:soapy')) {
            // Bodyhygiene soap is hardcoded to not be usable when you are soapy.
            // Adding my own interaction turned out to be buggy,
            // as the soap bar would disappear when it would go from 2 remaining uses to 1.
            // As this interaction is very rare, I think it is fine to just say no instead of adding proper support.
            event.player.server.runCommandSilent(`title ${event.player} actionbar {"text":"You are too soapy!"}`)
            event.cancel()
            return
        }
        clean(10, 200, true, 0)
        // Using this manual effect override to shorten the hardcoded duration of ~45 seconds to only 10
        event.server.scheduleInTicks(1, (c) => {
            event.player.server.runCommandSilent(`effect clear ${event.player} bodyhygiene:soapy`) // Kubejs has no "remove effect" method :(
            event.player.potionEffects.add('bodyhygiene:soapy', 200, 0, true, false)
            // Delay status message due to bodyhygiene sending one when you try to use soap with the soapy effect active
            event.player.server.runCommandSilent(`title ${event.player} actionbar {"text":"Restored ${10 - cleanlinessLevel} points!"}`)
        })
    }
    else if (event.item.hasTag('bodyhygiene:soap/reusable')) {
        let fluidAmount = event.item?.nbt?.CustomModelData || 0
        let mbPerUse = 10
        if (fluidAmount < mbPerUse) {
            event.player.server.runCommandSilent(`title ${event.player} actionbar {"text":"Not enough sanitizer fluid!"}`)
            return
        }
        // Calculate how much we can restore while respecting the amount of fluid in the bottle
        let amountToRestore = Math.min(Math.floor(fluidAmount / mbPerUse), 10 - cleanlinessLevel)
        clean(cleanlinessLevel + amountToRestore, 7, false, 0)
        // Summon particles manually as we don't apply the soapy effect
        event.player.server.runCommandSilent(`particle minecraft:snowflake ${event.player.x} ${event.player.y + event.player.getEyeHeight() / 1.5} ${event.player.z} 0.25 ${event.player.getEyeHeight() / 3.5} 0.25 0 ${Math.floor(6 * (amountToRestore ** 0.5) * event.player.getEyeHeight())}`)
        event.player.server.runCommandSilent(`playsound pneumaticcraft:short_hiss player @a ${event.player.x} ${event.player.y} ${event.player.z} ${0.5 + amountToRestore / 20} ${1.5 + (Math.random() / 2)}`)
        event.player.server.runCommandSilent(`title ${event.player} actionbar {"text":"Restored ${amountToRestore} points! (${event.item.nbt.CustomModelData - mbPerUse * amountToRestore}mb left)"}`)
        event.item.nbt.CustomModelData -= mbPerUse * amountToRestore
    }
})

onEvent('block.right_click', event => {
    if (!event.block.hasTag('bodyhygiene:soap_blocks')) return

    if (!event.player.fullNBT.ForgeCaps['bodyhygiene:bodyhygiene_properties']) return

    let cleanlinessLevel = event.player.fullNBT.ForgeCaps['bodyhygiene:bodyhygiene_properties'].bodyhygiene
    if (cleanlinessLevel == 10) {
        event.player.server.runCommandSilent(`title ${event.player} actionbar {"text":"You are already very clean!"}`)
        event.cancel()
        return
    }
    if (event.player.potionEffects.isActive('bodyhygiene:soapy')) {
        // Figuring out how to read and modify a blockstate seems to not be worth the time,
        // so we will just skip this as well lol
        event.player.server.runCommandSilent(`title ${event.player} actionbar {"text":"You are too soapy!"}`)
        event.cancel()
        return
    }
    event.player.server.runCommandSilent(`bodyhygiene set 10 ${event.player}`)
    event.player.server.runCommandSilent(`playsound minecraft:block.honey_block.slide player @a ${event.player.x} ${event.player.y} ${event.player.z} 0.75`)
    event.server.scheduleInTicks(1, (c) => {
        event.player.server.runCommandSilent(`effect clear ${event.player} bodyhygiene:soapy`) // Kubejs has no "remove effect" method :(
        event.player.potionEffects.add('bodyhygiene:soapy', 200, 0, true, false)
        event.player.server.runCommandSilent(`title ${event.player} actionbar {"text":"Restored ${10 - cleanlinessLevel} points!"}`)
    })
})