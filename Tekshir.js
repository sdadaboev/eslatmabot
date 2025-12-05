import bot from "./bot.js";
import infoPage from "./pages/infoPage.js";
import { COMMANDS } from "./constants.js";
import { checkAuthorization } from "./authorization.js";
import { Authorization } from "./authorization.js";
import Routers from "./routers.js";

async function Tekshir () {
    bot.on("message", async (msg) => {
        const chatId = msg.chat.id
        try {
           
            const authorized = await checkAuthorization(chatId)

            console.log("authorized", authorized);
            if(authorized) {
                Routers(chatId, msg.text)
            }else {
                console.log("elsedaman")
                await Authorization(chatId, msg.text)
            }
            
            
        } catch (error) {
            console.log(error);
        }


})
}

export default Tekshir