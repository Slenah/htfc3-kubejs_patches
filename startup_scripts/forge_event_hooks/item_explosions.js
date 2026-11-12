// Event docs: https://lexxie.dev/forge/1.18.2/net/minecraftforge/event/world/ExplosionEvent.Detonate.html
onForgeEvent('net.minecraftforge.event.world.ExplosionEvent$Detonate', (event) => global.explosionPass(event))

global.explosionPass = event => {
    let entityIterator = event.getAffectedEntities().iterator()

    while (entityIterator.hasNext()) {
        let entity = entityIterator.next()

        if (isItemEntity(entity)) {
            compressIron(entity, entityIterator)
            filterOutImmuneItems(entity, entityIterator)
        }
    }
}

function compressIron(entity, entityIterator) {
    const LOSS_RATE = 1/3
    if (!testTag(entity, '#forge:double_ingots/wrought_iron')) return

    let initialCount = entity.getItem().getCount()
    let newCount = 0
    for (let i = 0; i < initialCount; i++) {
        if (Math.random() > LOSS_RATE) newCount++
    }

    let compressedIron = Item.of('pneumaticcraft:ingot_iron_compressed', newCount)
    entity.setItem(compressedIron)
    //entityIterator.remove() // should get covered by filterOutImmuneItems()
}

function filterOutImmuneItems(entity, entityIterator) {
    if (testTag(entity, '#hardrock:explosion_immune')) {
        entityIterator.remove() // Remove item from list of affected entities
    }
}

function isItemEntity(entity) {
    return entity.getType().toString() === 'entity.minecraft.item' && entity.isAlive()
}

function getIdString(itemEntity) {
    return itemEntity.getItem().getItem().getId()
}

function testTag(itemEntity, tagString) {
    return Ingredient.of(tagString).test(getIdString(itemEntity))
}