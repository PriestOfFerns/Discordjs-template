const Discord = require('discord.js-selfbot-v13');
const bot = new Discord.Client()
const fs = require('fs')
require("dotenv").config()

require("dotenv")
bot.once("ready",()=>{
    console.log("Ready")
})




const CharacterAI = require('node_characterai');
const characterAI = new CharacterAI();

let chat;

(async() => {
    await characterAI.authenticateWithToken(process.env.CHARACTERAI_TOKEN);
    

    const characterId = "nsNSSecuvDk-sBVbGNvr7FjmHDn8Ir4Fiieu2jFyajI" // Turismo

    chat = await characterAI.createOrContinueChat(characterId);
    console.log("Chat is ready")
    console.log(chat)
    
    // use response.text to use it in a string.
})();

bot.on("messageCreate", msg=>{
    if (msg.channelId == "593535519263293460"&&msg.author.id !="394037472625164299") {
        


        chat.sendAndAwaitResponse(msg.content, true).then(resp=>{
       
            msg.reply(resp.text)
        })

        
       
        
    }
})






bot.login("Mzk0MDM3NDcyNjI1MTY0Mjk5.GoLY-1.g6jB3Ty6BRA-TMf5KG8ZdtTn-KWghzIjtjZPoU")