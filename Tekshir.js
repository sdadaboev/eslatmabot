import bot from "./bot.js";


import { checkAuthorization } from "./authorization.js";
import { Authorization } from "./authorization.js";
import Routers from "./routers.js";
import CallBackListener from "./callbackListener.js";
import { setChatIdForNotification } from "./notifications/Notifications.js";

async function Tekshir () {
    bot.on("message", async (msg) => {
        const chatId = msg.chat.id
        setChatIdForNotification(chatId)
        
        try {
            
            const authorized = await checkAuthorization(chatId)

            
            if(authorized) {
                Routers(chatId, msg.text)
            }else {
             
                await Authorization(chatId, msg.text)
            }
            
            
        } catch (error) {
            console.log(error);
        }


    })

    CallBackListener()




}

export default Tekshir