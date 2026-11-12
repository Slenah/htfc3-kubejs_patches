// priority: 0
onForgeEvent("net.minecraftforge.client.event.ClientChatReceivedEvent", (event) => {
    if (event.getMessage().getContents().includes("TFC Homestead INFO")) {
        event.setCanceled(true)
    }
})