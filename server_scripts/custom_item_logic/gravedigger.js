onEvent('item.entity_interact', event => {
    if (event.item.id != 'kubejs:gravedigger' || event.target.type != 'corpse:corpse') return
    event.cancel() // Cancel usual behavior, like opening the corpse item screen
    if (event.player.hasCooldown('kubejs:gravedigger')) return

    let corpseData = event.target.fullNBT.Death // Adding a validity check seems to not be necessary.
                                                // Corpse seems to automatically assign a blank Death object,
                                                // so invalid corpses get corrected automatically
    function isEmpty(inv) { return inv.length == 0 || inv.every(item => item.Count == 0 && item.id == 'minecraft:air') }
    if (
        isEmpty(corpseData.ArmorInventory) &&
        isEmpty(corpseData.Items) &&
        isEmpty(corpseData.MainInventory) &&
        isEmpty(corpseData.OffHandInventory)
    ) {
        event.server.runCommandSilent(`execute at ${event.target.id} run playsound minecraft:entity.guardian.attack player @a ~ ~ ~ 1 1.25`)
        event.server.runCommandSilent(`execute at ${event.target.id} run particle minecraft:smoke ~ ~.125 ~ 0.25 0.125 0.25 0 5`)
        event.target.motionY += 0.35
        event.player.addItemCooldown('kubejs:gravedigger', 20)
        if (!event.item.nbt.CustomModelData) event.item.nbt.CustomModelData = 0
        event.item.nbt.CustomModelData++
        event.player.damageHeldItem(event.hand, 25)
        event.server.scheduleInTicks(5, (c) => {
            event.server.runCommandSilent(`execute at ${event.target.id} run particle minecraft:smoke ~ ~ ~ 0.5 0.25 0.5 0 25`)
            event.server.runCommandSilent(`execute at ${event.target.id} run particle minecraft:dust_color_transition 0 0 0 1 0.5 0 0 ~ ~ ~ 0.5 0.25 0.5 0 75`)
            event.server.runCommandSilent(`execute at ${event.target.id} run playsound minecraft:block.respawn_anchor.set_spawn player @a ~ ~ ~ 0.75 1.25`)
            event.target.kill()
        })
    } else {
        event.player.server.runCommandSilent(`title ${event.player} actionbar {"text":"This corpse still has items in it!"}`)
    }
})