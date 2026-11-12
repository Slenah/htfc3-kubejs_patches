onEvent('jei.information', event => {
    event.add([/^tfc:drying_bricks\//, /^tfc:mud_brick\//], [
        "Mud bricks can be dried by placing them on the ground and waiting for a full day.",
        "See the TFC Guidebook for more info!"
    ])
    event.add(/^adpother:.+_respirator$/, [
        "A filter item can be applied on a vanilla anvil.",
        "Multiple different filters can be active at once.",
        "Type '$filter' into JEI for a list of filter items!"
    ])
    event.add(/^adpother:.+_vacuum_bag$/, [
        "A filter item can be applied on a vanilla anvil.",
        ["Unlike with respirators, you need to put ", Text.of('two filter items').underlined(), " into the anvil slot instead of one."],
        "Type '$filter' into JEI for a list of filter items!"
    ])
    event.add([
        'beyond_earth:oxygen_mask',
        'beyond_earth:netherite_oxygen_mask',
        'create:netherite_diving_helmet',
        'mekanism:hazmat_mask',
        'mekanism:scuba_mask',
        'mekanism:mekasuit_helmet',
        'pneumaticcraft:pneumatic_helmet'
    ], [
        "A filter item can be applied in the crafting grid or on a vanilla anvil.",
        "Multiple different filters can be active at once.",
        "Type '$filter' into JEI for a list of filter items!"
    ])
    event.add([
        'toolbelt:belt',
        'toolbelt:pouch'
    ], [
        "A toolbelt starts with just two slots, but you can increase that to up to 9!",
        ["The more slots you add, however, ", Text.of('the stronger the needle must be').underlined(), '.'],
        ["The first upgrade only needs a bone needle, the second (bringing the total up to 4 slots) requires an ", Text.of('iron needle').underlined(), ", and the last five (up to 9 total slots) require a ", Text.of('netherite needle').underlined(), '.']
    ])
    event.add('create:belt_connector', [
        "Mechanical belts are unfortunately not very well optimized, which becomes a significant issue on very large servers, such as our official public servers!",
        ["Please avoid using them unless you ", Text.of('absolutely').italic(), " have to."],
        "Belts are fine in singleplayer or on smaller servers."
    ])
    event.add(['minecraft:ice', 'tfc:ice_pile', 'minecraft:packed_ice', 'minecraft:blue_ice'], [
        "Ice blocks can be obtained as an item by breaking them with a saw."
    ])
    event.add(['minecraft:diamond', 'minecraft:emerald'], [
        "There are two main ways of obtaining diamonds and emeralds:",
        "First, you have the option of crushing and then washing their uncut variants, and then melting the grit in a TConstruct smeltery. For diamonds, this requires blazing blood.",
        "A simpler option, albeit one that relies on some luck, is to find a villager willing to trade away cut diamonds or emeralds, which you can then polish and use.",
        "Amethyst can be similarly obtained from trading or from ore, but it can also be sourced from quartz ores with a foundry."
    ])
    event.add('minecraft:amethyst_shard', [
        "Amethyst can be obtained from villager trading or from processing ore, similar to how diamonds and emeralds are obtained.",
        "But, unlike those, it can also be sourced from nether quartz ore using a foundry."
    ])
    event.add('kubejs:gravedigger', [
        "Takes 25 durability for each body.",
        "Can be repaired with cast iron ingots using a vanilla anvil."
    ])
    event.add(['farmersdelight:brown_mushroom_colony', 'farmersdelight:red_mushroom_colony'], [
        "Grown by planting a mushroom on Rich Soil.",
        "Shears can optionally be used to collect the entire colony, instead of individual mushrooms!"
    ])
    event.add(['immersiveengineering:treated_post', 'immersiveengineering:alu_post', 'immersiveengineering:steel_post'], [
        "The top block can be right clicked with an Engineer\'s Hammer to create a horizontal section."
    ])
    event.add('tfc:ceramic/ingot_mold', [
        "Has a 10% chance to break when extracting an ingot."
    ])
    event.add('tfc:ceramic/fire_ingot_mold', [
        "Unlike regular Ingot Molds, these ones never break!"
    ])
    event.add(['myrtrees:latex', 'myrtrees:wooden_bucket', 'myrtrees:tree_tap', 'myrtrees:rubberwood_sapling'], [
        "Latex is obtained by tapping into Rubberwood Trees.",
        ["A rubberwood sapling can be obtained from sieving dirt. ", Text.of('They can only be planted on dirt that has no grass!').italic()],
        ' ',
        ["Place a ", Text.of('Tree Tap').underlined(), " on a rubberwood tree, as well as a ", Text.of('Bucket for Latex').underlined(), " right below. Latex liquid should then start collecting. You can right click the bucket to see how much is currently stored inside."],
        ' ',
        "Each 1000mb of fluid equals to one latex item. Each tree can produce up to 10 latex (which is 10,000mb of fluid) before it runs dry.",
        ' ',
        "Rubberwood Trees follow the vanilla tree growth logic. This means that they grow really quickly!"
    ])
    event.add(['exnihilosequentia:silkworm', 'exnihilosequentia:infesting_leaves','exnihilosequentia:infested_leaves'], [
        ["Once a block of leaves is fully white, silkworms will very, ", Text.of('very').italic(), " slowly spread to nearby blocks."],
        "Since breaking infested leaves with a crook always yields at least one silkworm, it can be better to spread the worms manually instead of letting them do it on their own.",
        ' ',
        "Still, if you would prefer that over the manual approach, you can set up wooden or metal supports to prevent the leaves from falling down to the ground. This will help keep everything going!"
    ])
    event.add('immersivepetroleum:coker_unit', [
        ["To collect item outputs, you can place ", Text.of('vanilla').underlined(), " hoppers below the coal chutes underneath the machine. There are orange markings where you have to place them!"],
        ' ',
        "Alternatively, you can use a Smart Chest with Magnet Upgrades placed outside of the structure to collect the dropped petcoke from a distance."
    ])
    event.add('minecraft:charcoal', [
        ["Charcoal is obtained through making ", Text.of('Charcoal Pits').underlined(), ". This involves placing lots of logs down, completely covering them from air, and lighting them on fire."],
        ' ',
        "Please see the TFC guidebook entry for more info!",
        "You can hover over the charcoal item and hold Ctrl for a few seconds to open the TFC guidebook page that is tied to it."
    ])
    event.add('minecraft:glowstone', [
        "Sometimes found for sale on Amadron!"
    ])
    event.add(/^minecraft:(?!.*dead).+_coral/, [
        ["Corals have two spawning requirements: being in a ", Text.of('Coral Reef biome').underlined(), ", and the average temperature being above ", Text.of('+10C').underlined(), '.'],
        ' ',
        "The biomes can be found rather easily with a Nature's Compass.",
        "If you're not in a warm enough climate, be sure to travel further down South!"
    ])
    event.add('tfc:bloomery', [
        "The simplest input item for bloomeries is briquettes made from powder of an iron ore.",
        "These are each worth 80mb of fluid, meaning if you fill the bloomery with all 24, you will get 24x80=1920mb, or 19 blooms!",
        ' ',
        "You can melt the briquettes in a crucible or in a charcoal forge using a Bellows or a strong fuel like Coke Coal.",
        "This lets you make brown-colored cast iron ingots, which are a nice, even 100mb of metal each! Those will convert into blooms 1:1, instead of 5:4 like with briquettes.",
        ' ',
        "If you want to push your bloomeries further, try making double sheets of cast iron! They are 400mb each, and if you fill a bloomery with all 24, you will get a whopping 96 blooms in one go!"
    ])
    event.add(['tfc:blast_furnace'], [
        "Unlike bloomeries, which use a flat 15-minute timer, blast furnaces do actual heating logic, similar to a charcoal forge but with the details hidden!",
        "This means that the denser an item is, the longer it will take to heat up and melt.",
        "Because of this, denser items (like double sheets vs ingots) are not strictly better, because they will take longer to reach melting temperature!",
        ' ',
        "A very good way to improve the performance of a blast furnace is pre-heating your inputs in a separate crucible first.",
        "Blast furnaces are slow and burn through a lot of fuel, so lighting up a crucible with charcoal to get your cast iron close to melting temperature before transferring it to a blast furnace will help out with both speed and saving fuel!"
    ])
    event.add('supplementaries:flax_seeds', [
        "Flax Seeds are an uncommon drop from naturally-spawning urns found in caves! Such urns may drop a number of different items, or sometimes none at all.",
        ' ',
        "Flax is a very potent source of string, although silkworm farming is still plenty for most purposes."
    ])
})