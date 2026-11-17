# Installation guide
1. Hit the green 'Code' button in the top right corner of the menu with a bunch of folders
2. Select 'Download ZIP'
3. Delete the contents of your instance's/server's `kubejs` folder
4. Extract the zip file you just downloaded into the now empty `kubejs` folder
5. Yay!

If something goes wrong, please feel free to reach out to me (Air) and ask for help!

> [!note]
> **Just to make it clear, this is only for singleplayer or for your private server! Not for public servers.**  
> Some of the changes are clientside, some are serverside, and some are both. If you don't have this installed on both the client and the server you will not be able to join :(



# Changelogs / differences from 1.6.3
### Important changes ("TL;DR")
• Fixed Lapis, Diamond and Emerald veins not spawning surface samples
• Fixed making Compressed Iron Ingots with explosions having lower success rate than what is displayed  
• Falling blocks (like dirt or gravel or cobble) will no longer destroy Mekanism and PNC machinery when falling on top of them  
• Added lategame Mekanism processing for all metal types. This was previously only available to specific metals!  
• Nutritional Paste now works with TFC's hunger system. You can now mostly forgo eating normal food in lategame now!  
• Various small changes to smooth balancing in some areas  
• Lots of small improvements and tons of small fixes, as per usual  

---
Full changelogs (each section is roughly ordered by modpack progression):
### New things
• Added a Wrought Iron Spindle, a more durable version of the normal ceramic Spindle  
• Added Liquid Smoke, a midgame alternative to smoking foods over a Firepit  
• Made lots of TFC fruits and vegetables work as ammo for Create's Potato Cannon  
• Added recipes for vanilla Chainmail Armor  
• Added Molten Fire Clay, letting you recycle fire clay items with TC smelting  
• Added Mekanism processing to TFC-specific metal types  
• Re-introduced Nutritional Paste  

### Documentation / Meta
• Various bug fixes for the Quests tab  
• Changed the default TFC Client configs to display the health bar as TFC health instead of vanilla hearts. This means that nutrition's effects (average nutrients and not unique foods) will be displayed!  
• Reorganized tags for blocks that tornadoes can pull through. You can now search `$tornado_grab` in JEI to get a full list! Previously that would only display some of the blocks that are affected by tornadoes  
• Renamed the vanilla Loom to "Banner Loom" to reduce ambiguity with TFC looms  
• Added JEI info pages for Bloomeries and Blast Furnaces containing additional info and tips  
• Removed JEI entries for TC's potion buckets  

### Quality of Life
• Lowered required temperature for some TFC pot water boiling recipes from like 500C to 100C, making them work with Peat and making them trigger earlier  
• Players no longer randomly emit pollution after eating food  
• Made pollution pass through more non-solid blocks than just trapdoors (search `$pollution_passthrough` in JEI!)  
• Made metal Powder and Pellets melt a little faster, so that they do not have the same melting speed as Briquettes. They are still the best, but now melting Powder or Pellets is not as punishing  
• Made it possible to reignite Dead Torches with a Permanent Torch in hand (previously you had to specifically hold a non-permanent TFC Torch)  
• Made it possible to ignite Dead Torches by right-clicking a fueled Blaze Burner with them in hand  
• Made all recipes that want only Glue or only Slime Balls accept either of the two  
• Added additional TFC alloying recipes for some complex metals to help reduce conflicts (like making Black Bronze accept Electrum instead of specifically Gold and Silver)  
• Made various cakes not eatable directly, instead having you cut a slice off, to kind of combat block food not restoring any hunger  
• Tweaked the Grout mixer recipe to not consume excessive amounts of basalt gravel. Now, instead of needing any gravel and basalt gravel, it needs any non-basalt gravel and basalt gravel  
• Added IE Crusher recipes to make Flux from blocks of Cobblestone  
• Made a custom implementation for Explosion Crafting to combat a bug in base PNC where output rates are rounded down and otherwise wrong  
• Made Liquid Blaze Burners a valid heat source for PNC machines. Previously, only the non-liquid variant was valid  
• Added TFC armor resistance values to the Pneumatic Suit and the Mekasuit  
• Made all PNC and Mekanism blocks resistant to falling blocks  
• Made Ethylene from Immersive Petroleum and Mekanism cross-compatible  

### Balancing
• Made the Supplementaries Soap recipe accept more blubber  
• Disabled FD's Pumpkin Slices and replaced all recipe usages with TFC's Pumpkin Chunks  
• Made Manure compostable  
• Changed recipe for Hose Nozzles to require anvil work  
• Removed a Jute Fiber recipe that used Flax  
• Made the Cake recipe also accept Cherries alongside Cranberries  
• Added vanilla fuel values to lignite and bituminous coal, making it possible to burn them in a TC solid fuel heater  
• Added TC and/or TFC melting recipes for some vanilla tools and armor that had none previously, as well as for Compressed Iron Armor  
• Made the extra Redstone Torch recipes (that were intended for lategame) produce a lot more torches  
• Added an extra Arc Furnace recipe for wrought iron. You can now make raw blooms from charcoal, if you can't use coke coal to make wrought iron ingots directly!  
• Added recipes for TC Slime Vines for building/decoration purposes  

### Fixes
• Fixed some ore veins not spawning surface samples due to having typos in registry definition  
• Fixed some recipes allowing rotten ingredients  
• Fixed recipes for repairing Water Flasks being a shaped recipe instead of a shapeless one  
• Fixed some sluicing recipes for Crushed Gemstones missing output items  
• Made item despawn protection for sluices more reliable: closing and re-opening the world in singleplayer (or the server restarting in multiplayer) no longer removes protection from dropped items. Just as a reminder, items that can be sluiced and that are on top of a sluice never despawn! Sluicing outputs still despawn, and need something like a hopper.  
• Fixed Supplementaries' Ash not being a valid alternative to TFC's Wood Ash  
• Disabled duplicate Bamboo-related blocks from Macaw's TFC AIO  
• Fixed applying respirator filters via crafting table causing a crash  
• Fixed some TC tool parts melting into more metal than what they are made from  
• Fixed sequenced recipes for metal AdChimneys blocks, RS processors  
• Fixed some IE sawmill recipes giving more lumber than intended  
• Removed a wild Empty Bullet Casing recipe that accidentally made its way into the modpack  
• Made the Chicken Feeds from Mob Grinding Utils work with TFC chickens  