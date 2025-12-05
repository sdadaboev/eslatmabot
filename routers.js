import bot from "./bot.js";
import { COMMANDS } from "./constants.js";
import infoPage from "./pages/infoPage.js";

async function Routers (chatId, request) {

    switch(request) {


        case COMMANDS.INFO: infoPage(chatId)
        break 

       


    }

}

export default Routers