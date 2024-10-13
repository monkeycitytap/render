const { Telegraf, Markup } = require("telegraf");
const express = require("express");
require('dotenv').config(); // Untuk membaca variabel lingkungan

const TOKEN = process.env.BOT_TOKEN; // Simpan token di .env
const bot = new Telegraf(TOKEN);
const app = express();
app.use(express.json());

const web_link = "https://monkeycity.netlify.app/";
const community_link = "https://t.me/monkeycity_community";

bot.start((ctx) => {
    const startPayload = ctx.startPayload || 'default';
    const urlSent = `${web_link}?ref=${startPayload}`;
    const user = ctx.message.from;
    const userName = user.username ? `@${user.username}` : user.first_name;

    // Kirim foto terlebih dahulu
    ctx.replyWithPhoto({ url: 'https://imgur.com/a/GgSjtHN' }, {
        caption: `Hey, ${userName}! it's Monkey! 🌟 Your go-to app for crypto trading - all the cool coins and tokens, right in your pocket!📱

Now we're rolling out our Telegram mini app! Start farming points now, and who knows what cool stuff you'll snag with them soon! 🚀

Got friends? Bring 'em in! The more, the merrier! 🌱

Remember: Monkey City is where growth thrives and endless opportunities bloom! 🌼`,
        reply_markup: Markup.inlineKeyboard([
            [Markup.button.webApp("🕹️ Let'go!", urlSent)],
            [Markup.button.url("Join Community", community_link)]
        ])
    }).catch(err => {
        console.error("Error sending message:", err);
    });
});

bot.launch()
    .then(() => {
        console.log("Bot is running...");
    })
    .catch(err => {
        console.error("Error launching bot:", err);
    });

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
