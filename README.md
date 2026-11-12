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
• Added lategame Mekanism processing for all metal types. This was previously only available to specific metals!  
• Nutritional Paste now works with TFC's hunger system. You can now mostly forgo eating normal food in lategame now!  
• Falling blocks (like dirt or gravel or cobble) will no longer destroy Mekanism and PNC machinery when falling on top of them  
• Lots of small improvements and tons of small fixes, as per usual  

---
Full changelogs:
### New things
• Added Mekanism processing to TFC-specific metal types  
• Re-introduced Nutritional Paste  
• Added Molten Fire Clay, letting you recycle fire clay items with TC smelting  
• Made lots of TFC fruits and vegetables work as ammo for Create's Potato Cannon  
• Added recipes for vanilla Chainmail Armor  
• Added a Wrought Iron Spindle, a more durable version of the normal ceramic Spindle  
• Added Liquid Smoke, a midgame alternative to smoking foods over a Firepit  

### Documentation / Meta
• Various bug fixes for the Quests tab  
• Added JEI info pages for Bloomeries and Blast Furnaces containing additional info and tips  
• Removed JEI entries for TC's potion buckets  
• Reorganized tags for blocks that tornadoes can pull through. You can now search `$tornado_grab` in JEI to get a full list! Previously that would only display some of the blocks that are affected by tornadoes  
• Changed the default TFC Client configs to display the health bar as TFC health instead of vanilla hearts. This means that nutrition's effects (average nutrients and not unique foods) will be displayed!  
• Renamed the vanilla Loom to "Banner Loom" to reduce ambiguity with TFC looms  

### Quality of Life
• Made all PNC and Mekanism blocks resistant to falling blocks  
• Players no longer randomly emit pollution after eating food  
• Made pollution pass through more non-solid blocks than just trapdoors (search `$pollution_passthrough` in JEI!)  
• Made metal Powder and Pellets melt a little faster, so that they do not have the same melting speed as Briquettes. They are still the best, but now melting Powder or Pellets is not as punishing  
• Made all recipes that want only Glue or only Slime Balls accept either of the two  
• Tweaked the Grout mixer recipe to not consume excessive amounts of basalt gravel. Now, instead of needing any gravel and basalt gravel, it needs any non-basalt gravel and basalt gravel  
• Added IE Crusher recipes to make Flux from blocks of Cobblestone  
• Made it possible to reignite Dead Torches with a Permanent Torch in hand (previously you had to specifically hold a non-permanent TFC Torch)  
• Made it possible to ignite Dead Torches by right-clicking a fueled Blaze Burner with them in hand  
• Made Liquid Blaze Burners a valid heat source for PNC machines. Previously, only the non-liquid variant was valid  

### Balancing
• Added TC and/or TFC melting recipes for some vanilla tools and armor that had none previously, as well as for Compressed Iron Armor  
• Added recipes for TC Slime Vines for building/decoration purposes  
• Removed a Jute Fiber recipe that used Flax  
• Disabled FD's Pumpkin Slices and replaced all recipe usages with TFC's Pumpkin Chunks  
• Made Manure compostable  
• Made the Cake recipe also accept Cherries alongside Cranberries  
• Changed recipe for Hose Nozzles to require anvil work  
• Made the Supplementaries Soap recipe accept more blubber  
• Added vanilla fuel values to lignite and bituminous coal, making it possible to burn them in a TC solid fuel heater  

### Fixes
• Fixed applying respirator filters via crafting table causing a crash  
• Fixed recipes for repairing Water Flasks being a shaped recipe instead of a shapeless one  
• Fixed cutting up poultry occasionally giving half-decayed or rotten food  
• Fixed some sluicing recipes for processing Crushed Gemstones not working correctly and resulting in item loss  
• Made item despawn protection for sluices more reliable: closing and re-opening the world in singleplayer (or the server restarting in multiplayer) no longer removes protection from dropped items. Just as a reminder, items that can be sluiced and that are on top of a sluice never despawn! Sluicing outputs still despawn, and need something like a hopper.  
• Made the Chicken Feeds from Mob Grinding Utils work with TFC chickens  
• Removed a wild Empty Bullet Casing recipe that accidentally made its way into the modpack  
• Fixed sequenced recipes for metal AdChimneys blocks, RS processors  
• Fixed some TC tool parts melting into more metal than what they are made from  
• Fixed some IE sawmill recipes giving more lumber than intended  
• Fixed some recipes allowing rotten ingredients  
• Fixed Supplementaries' Ash not being a valid alternative to TFC's Wood Ash  
• Made various cakes not eatable directly, instead having you cut a slice off, to kind of combat block food not restoring any hunger  
• Disabled duplicate Bamboo-related blocks from Macaw's TFC AIO  