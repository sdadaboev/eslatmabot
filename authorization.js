import bot from "./bot.js";


const isAuthorizedUsers = new Set()
export async function Authorization (chatId, text) {
const botPass = process.env.bot_password


    try {
          if(text ==="/start" ) {
            bot.sendMessage(chatId, "Parol kiriting") 
          }else if(text === botPass) {
            isAuthorizedUsers.add(chatId)
            bot.sendMessage(chatId, "Parol tog'ri") 
          }else {
           bot.sendMessage(chatId, "Parol hato , qayta kiriting") 
          }
          
        
    } catch (error) {
        console.log(error)
    }
}

export function checkAuthorization(chatId) {
    if(!(isAuthorizedUsers.has(chatId))) {
        return false
    }else {
        return true
    }

    
}