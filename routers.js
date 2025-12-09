
import { COMMANDS } from "./constants.js";
import InfoPage from "./pages/infoPage.js";
import MedicinesPage from "./pages/medicinesPage.js";

async function Routers (chatId, message) {

    switch(message) {


        case COMMANDS.INFO: InfoPage(chatId); 
        break; 

        case COMMANDS.MEDICINES: MedicinesPage(chatId, message)
        break

        
    }

   

}
export default Routers