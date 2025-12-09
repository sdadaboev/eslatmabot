import bot from '../bot.js'
import cron from 'node-cron'


let chatId = null 
let myWife = process.env.myWife

export function setChatIdForNotification(newChatId) {
    chatId = newChatId
    console.log('Chat ID set for notifications:', chatId);
}


// Dorilarni eslatish (Medication reminders)

    // 07:00 - Nonushta payti dorilarini berish
    cron.schedule("0 7 * * *", () => {
        if (!chatId) return;
        bot.sendMessage(chatId, `💊 ${myWife}! Oyimga ertalabki dorilarini bervoring iltimos ${COMMANDS.NONUSHTA}`);
    }, { timezone: "Asia/Tashkent" });

    // 08:00 - Nonushta dorilari ichildimi tekshirish
    cron.schedule("0 8 * * *", () => {
        if (!chatId) return;
        bot.sendMessage(chatId, `✅ ${myWife}! Oyimni ertalabki dorilari ichildimi? Tekshirvoring iltimos ${COMMANDS.NONUSHTA}`);
    }, { timezone: "Asia/Tashkent" });

    // 13:00 - Tushlik dorilari eslatmasi
    cron.schedule("0 13 * * *", () => {
        if (!chatId) return;
        bot.sendMessage(chatId, `💊 ${myWife}! Oyimga tushlik dorilarini bervoring iltimos ${COMMANDS.TUSHLIK}`);
    }, { timezone: "Asia/Tashkent" });

    // 15:00 - Tushlik dorilari ichildimi tekshirish
    cron.schedule("0 15 * * *", () => {
        if (!chatId) return;
        bot.sendMessage(chatId, `✅ ${myWife}! Oyimni tushlik dorilari ichildimi? Tekshirvoring iltimos ${COMMANDS.TUSHLIK}`);
    }, { timezone: "Asia/Tashkent" });

    // 19:00 - Kechki ovqat dorilari eslatmasi
    cron.schedule("0 19 * * *", () => {
        if (!chatId) return;
        bot.sendMessage(chatId, `💊 ${myWife}! Oyimga kechki ovqat dorilarini bervoring iltimos ${COMMANDS.KECHKI_OVQAT}`);
    }, { timezone: "Asia/Tashkent" });

    // 20:00 - Kechki ovqat dorilari ichildimi tekshirish
    cron.schedule("0 20 * * *", () => {
        if (!chatId) return;
        bot.sendMessage(chatId, `✅ ${myWife}! Oyimni kechki ovqat dorilari ichildimi? Tekshirvoring iltimos ${COMMANDS.KECHKI_OVQAT}`);
    }, { timezone: "Asia/Tashkent" });




    // Kiyimlarni yuvish (Laundry reminders)

    // 11:00 da kiyimlarni yuvishni eslatish
    cron.schedule("0 11 * * *", () => {
        if (!chatId) return;
        bot.sendMessage(chatId, `✅ ${myWife}! Kiyimlar yuvilmagan bosa yuvoring iltimos`);
    }, { timezone: "Asia/Tashkent" });

    // 12:40 da kiyimlarni osishni eslatish
    cron.schedule("40 12 * * *", () => {
        if (!chatId) return;
        bot.sendMessage(chatId, `✅ ${myWife}! Agar Kiyimlarni yuvgan bosez osvoring iltimos`);
    }, { timezone: "Asia/Tashkent" });



    

 // Juma kuni (Friday reminders)

    // soat 11:30 da Kahf surasini eslatish
    cron.schedule("30 11 * * 5", () => {
        bot.sendMessage(chatId, `✅ ${myWife}! Jonim, Juma muborak bolsin🕋🌷 \n Kahf surasi -> https://t.me/Mahmud_Halil_Husoriy/26`);
    }, { timezone: "Asia/Tashkent" });

    