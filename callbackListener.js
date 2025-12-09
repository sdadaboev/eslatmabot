import bot from "./bot.js";

import { CALLBACK_DATA, MEDICINE_MESSAGE } from "./constants.js";


async function CallBackListener() {
    bot.on('callback_query', async (query) => {
            const chatId = query.message.chat.id

            if(query.data === CALLBACK_DATA.BREAKFAST) {
            await bot.sendMessage(chatId, MEDICINE_MESSAGE.BREAKFAST_MEDICINES)
            }

            if(query.data === CALLBACK_DATA.LUNCH) {
                await    bot.sendMessage(chatId, MEDICINE_MESSAGE.LUNCH_MEDICINES)
            }
            if(query.data === CALLBACK_DATA.DINNER) {
            await bot.sendMessage(chatId, MEDICINE_MESSAGE.DINNER_MEDICINES)
            }
    });
}

export default CallBackListener


