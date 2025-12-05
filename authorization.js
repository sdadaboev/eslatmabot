import bot from "./bot.js";
import Router from "./Tekshir.js";

const isAuthorizedUsers = new Set()
export async function Authorization (chatId, text) {
const botPass = process.env.bot_password
console.log("authorizationdaman")

    try {
          if(text === "/start") {
            await bot.sendMessage(chatId, "Parol kiriting")
          }else if(text === botPass) {
            await isAuthorizedUsers.add(chatId)
            await bot.sendMessage(chatId, "tizimga kirildi");
          }else{
            await bot.sendMessage(chatId, "Parol hato");
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