// Inactive, left as a learning resource or for deep modpack customization.
// To make changes, start by setting this to false:
let scriptDisabled = true

// This is the script that was used to generate the '#kjs:metallic' item tag.
// It works by starting off of a base (which is contained within the 'tags.items' event hook below),
// which is then grown based on the recipe usages of those items.

// The generated part of the tag is stored in 'kubejs/data/kjs/tags/items/metallic.json'.
// The blacklist takes priority over the generated data.

// You can make changes to the tags event right below these comments,
// which lets you add in your own items and blacklist anything unwanted.
// If removing existing strings from 'event.add',
// you should probably delete the 'metallic.json' file to clean the old cache.

// The script obtains recipe from the server export file due to the limitations
// of kubejs' forEachRecipe() call. It is located in 'kubejs/exported/kubejs-server-export.json'.
// Delete it and run '/kubejs export' to refresh the recipe cache.


onEvent('tags.items', event => {
    event.add('kjs:metallic', [ // initial items before propagation
        /(copper|bronze|iron|steel|netherite|electrum|constantan|alumin|lead|uran|osmium)/,
        /(bismuth|brass|nickel|rose_gold|silver|gold)/,
        /(knightmetal|cobalt|queens_slime|manyullyn|hepatizon)/,
        /(desh|ostrum|calorite)/,
        /(garnierite|magnetite|limonite|hematite|tetrahedrite|malachite|bauxite|galena|cassiterite|sphalerite)/,
        /(^|:|\/|_)(tin)($|:|\/|_)/,
        /(metal)/,
        'create:blaze_burner',
    ])
    event.remove('kjs:metallic', itemBlacklist)
})
let itemBlacklist = [
    /^.+:plant\/.+/,
    /^minecraft:.+dye$/,
    /fishing_rod/,
    /silverfish/,
    /(^|:|\/|_)(dye|cart|plow)($|:|\/|_)/,
    'minecraft:lead',
    'minecraft:ender_chest',
    'mob_grinding_utils:golden_egg',
    'castirongrill:cast_iron_grill_firepit',
    /crafting_table/,
    /^create:.+_filter$/,
    'create:andesite_alloy',
    'create:speedometer',
    /^create_sa:andesite.+/,
    /^create_hc:gear.+/,
    'createdeco:andesite_sheet_metal',
    'createaddition:diamond_grit_sandpaper',
    /^railways:.+_conductor_cap$/,
    /^functionalstorage:(void|redstone)_upgrade$/,
    /^supplementaries:.+sign/,
    'supplementaries:slingshot',
    /^adpother:.+vacuum_bag/,
    /^adpother:.+respirator/,
    'rsgauges:sensitive_glass_block',
    'rsgauges:stained_sensitiveglass',
    'immersiveengineering:strip_curtain',
    'immersiveengineering:windmill',
    'immersiveengineering:watermill',
    'immersiveengineering:workbench',
    'immersiveengineering:insulating_glass',
    'immersiveengineering:blueprint',
    'immersiveengineering:fluorescent_tube',
    'pneumaticcraft:plastic',
    'naturescompass:naturescompass',
    'fluxnetworks:flux_block',
    /\/jarbnet\//,
    'mob_grinding_utils:solid_xp_baby',
    'doggytalents:super_treat',
]
let propagationItemBlacklist = [
    'htm:hatchet',
    'create:super_glue',
    'functionalstorage:framed_1',
    'functionalstorage:framed_2',
    'functionalstorage:framed_4',
    'minecraft:tripwire_hook',
    'create:ornate_iron_window_pane',
]
let propagationTagBlacklist = [
    'tfc:axes',
    'bookshelf:axes',
    'forge:axes',
    'tfc:axes_that_log',

    'tfc:shears',
    'bookshelf:shears',
    'forge:shears',

    'tfc:saws',
    'tfc:hammers',
    'tfc:chisels',
    'tfc:knives',
]
let recipeTypeBlacklist = new Set([ // general recipe type blacklits
    'tfc:damage_inputs_shaped_crafting',
    'tfc:damage_inputs_shapeless_crafting',
    'createoreexcavation:drilling',
    'tconstruct:casting_table',
    'exnihilosequentia:sieve',
    'tfc:landslide',
    'createsifter:sifting',
    'tfc:barrel_instant',
    'tfc:barrel_instant_fluid',
    'tfc:barrel_sealed',
    'tconstruct:molding_table',
    'tconstruct:molding_basin',
    'beyond_earth:alien_trading_itemstack',
    'immersiveengineering:cloche'
])




let jsonOutputPath = 'kubejs/data/kjs/tags/items/metallic.json'

onEvent('server.datapack.first', event => {
    if (scriptDisabled) return
    if (!JsonIO.read(jsonOutputPath) && JsonIO.read('kubejs/exported/kubejs-server-export.json')) {
        event.getServer().tell(Text.of("[KubeJS] Initializing script for metallic item tag generation.").red())
        event.getServer().tell(Text.of("[KubeJS] Resource loading will take significantly longer than usual.").gold())
        event.getServer().tell(Text.of("[KubeJS] Run '/reload' afterwards for the tag to take effect.").gold())

        console.log(`Metallic tag: Marked for generation`)
    }
})

onEvent('recipes', event => {
    if (scriptDisabled) return
    if (JsonIO.read(jsonOutputPath) != null) return
    let metallicItemsQueue = new Set()
    let lastSize = -1

    // ...there is not really a better way of handling this, is there?
    // we are reading the server export for recipe data. yeah.
    let rawRecipeData = JsonIO.read('kubejs/exported/kubejs-server-export.json')
    if (!rawRecipeData || !rawRecipeData.recipes) {
        console.log(`Metallic tag: Failed to load recipe data from 'kubejs/exported/kubejs-server-export.json'`)
        return
    }


    // extract valid recipes into an array to later iterate over
    let recipesCache = []
    for (let id in rawRecipeData.recipes) {
        let fullRecipe = rawRecipeData.recipes[id]
        if (fullRecipe?.recipe?.type && !recipeTypeBlacklist.has(String(fullRecipe.recipe.type)) && fullRecipe?.outputs?.length > 0) {
            if (!fullRecipe?.inputs) {
                let inputs = []
                for (let itemKey in fullRecipe.recipe.key) {
                    let ingredient = fullRecipe.recipe.key[itemKey]
                    if (ingredient && (ingredient.item)) {
                        inputs.push({ "item": ingredient.item })
                    } else if (ingredient && (ingredient.tag)) {
                        inputs.push({ "tag": ingredient.tag })
                    }
                }
                fullRecipe.inputs = inputs
            }
            recipesCache.push(fullRecipe)
        }
    }
    console.log(`Metallic tag: Finished parsing recipe export data`)

    let debugLogs = new Set()

    function isInputBlacklisted(input) {
        if (input.item) {
            return propagationItemBlacklist.includes(String(input.item)) ||
                propagationTagBlacklist.some(blacklistEntry => Ingredient.of(`#${blacklistEntry}`).test(input.item))
        }
        if (input.tag) {
            return propagationItemBlacklist.some(blacklistEntry => Ingredient.of(`#${input.tag}`).test(blacklistEntry)) ||
                propagationTagBlacklist.some(blacklistEntry => Ingredient.of(`#${blacklistEntry}`).test(input.tag))
        }
        return false
    }
    function isOutputBlacklisted(item) {
        return itemBlacklist.some(pattern => {
            if (typeof pattern === 'string') {
                return item === pattern
            } else if (pattern instanceof RegExp) {
                return pattern.test(item)
            }
            return false
        })
    }

    // first pass based on existing tag
    recipesCache = recipesCache.filter(recipe => {
        let outputId = String(recipe?.outputs[0]?.item) || ''
        if (!outputId || isOutputBlacklisted(outputId)) return false

        let hasMetallicInput = false
        let reason = null
        for (let input of (recipe.inputs || [])) {
            if (isInputBlacklisted(input)) continue
            if (input?.item && Ingredient.of('#kjs:metallic').test(input.item)) {
                reason = `Item ${input.item} is initially in #kjs:metallic`
                hasMetallicInput = true
                break
            } else if (input?.tag && Ingredient.of('#kjs:metallic').test(`#${input.tag}`)) {
                reason = `Tag ${input.tag} has entries in #kjs:metallic`
                hasMetallicInput = true
                break
            }
        }
        if (hasMetallicInput) {
            metallicItemsQueue.add(outputId)
            debugLogs.add({
                "item": outputId,
                "reason": reason,
                "recipeType": recipe.recipe.type
            })
            return false
        }
        return true
    })

    console.log(`Metallic tag: Found ${metallicItemsQueue.size} metallic items based on initial tags`)

    // iterate to grow data from initial tag
    function propagateTag() {
        let newItems = new Set()

        recipesCache = recipesCache.filter(recipe => {
            let outputId = String(recipe?.outputs[0]?.item) || ''
            if (!outputId || metallicItemsQueue.has(outputId) || isOutputBlacklisted(outputId)) return false

            let hasMetallicInput = false
            let reason = null
            for (let input of (recipe.inputs || [])) {
                if (isInputBlacklisted(input)) continue
                if (input?.item && metallicItemsQueue.has(String(input.item))) {
                    hasMetallicInput = true
                    reason = `Item ${input.item} is magnetic`
                    break
                } else if (input?.tag) {
                    for (let item of metallicItemsQueue) {
                        if (Ingredient.of(`#${input.tag}`).test(item)) {
                            hasMetallicInput = true
                            reason = `Tag ${input.tag} found to contain magnetic ${item}`
                            break
                        }
                    }
                }
            }
            if (hasMetallicInput) {
                newItems.add(outputId)
                debugLogs.add({
                    "item": outputId,
                    "reason": reason,
                    "recipeType": recipe.recipe.type
                })
                return false
            }
            return true
        })

        newItems.forEach(item => metallicItemsQueue.add(item))
        console.log(`Metallic tag: Propogated with ${newItems.size} new metallic items (loops left: ${maxLoops})`)
    }
    let maxLoops = 5
    console.log(`Metallic tag: Growing based on recipe usages (loops left: ${maxLoops})`)
    while (maxLoops > 0 && metallicItemsQueue.size !== lastSize) {
        maxLoops--
        lastSize = metallicItemsQueue.size
        propagateTag()
    }

    console.log(`Metallic tag: Done with ${metallicItemsQueue.size} metallic items in total`)

    // save propagation data
    let jsonFile = {
        "__comment__": "Generated by kubejs/server_scripts/metallic_tag.js. Visit the script for more info.",
        "replace": false,
        "values": Array.from(metallicItemsQueue)
    }
    JsonIO.write(jsonOutputPath, jsonFile)
    let debugLogStruct = {
        "info": Array.from(debugLogs)
    }
    JsonIO.write('kubejs/data/kjs/tags/items/metallic_debug_logs.json', debugLogStruct)
    console.log(`Metallic tag: Saved ${metallicItemsQueue.size} items to ${jsonOutputPath}`)
})