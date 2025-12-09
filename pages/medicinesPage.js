import  bot from '../bot.js' 
import CallBackListener from '../callbackListener.js'
import { CALLBACK_DATA } from '../constants.js'

async function MedicinesPage(chatId, message) {

    await bot.sendMessage(chatId, "Qaysi vaqt dorilari kerak?", {
        "reply_markup": {
            inline_keyboard: [
                [{ text: 'Nonushta', callback_data: CALLBACK_DATA.BREAKFAST }],
                [{ text: 'Tushlik', callback_data:  CALLBACK_DATA.LUNCH  }],
                [{ text: 'Kechki ovqat', callback_data:  CALLBACK_DATA.DINNER  }]
            ]
        }
    })
}


export default MedicinesPage