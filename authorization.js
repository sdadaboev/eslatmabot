import bot from "./bot.js";
import { AUTHORIZATION_MESSAGE } from "./constants.js";

const isAuthorizedUsers = new Set()
export async function Authorization (chatId, text) {
const botPass = process.env.bot_password


    try {
          if(text ==="/start" ) {
            bot.sendMessage(chatId, AUTHORIZATION_MESSAGE.TYPE_PASSWORD) 
          }else if(text === botPass) {
            isAuthorizedUsers.add(chatId)
            bot.sendMessage(chatId, AUTHORIZATION_MESSAGE.PASSWORD_CORRECT) 
          }else {
           bot.sendMessage(chatId, AUTHORIZATION_MESSAGE.PASSWORD_INCORRECT) 
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