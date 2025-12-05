import bot from "../bot.js";

async function infoPage (chatId) {
   await bot.sendMessage(chatId, "from info page")
}

export default infoPage