import bot from "../bot.js";

async function InfoPage (chatId) {
   await bot.sendMessage(chatId, "from info page")
}

export default InfoPage