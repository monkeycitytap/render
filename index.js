const { Telegraf, Markup } = require("telegraf");
const TOKEN = "7797629643:AAEWHOonlUro9gfOHAM2F_TODPJQCWonzSw";
const bot = new Telegraf(TOKEN);
const express = require("express");
const app = express();
app.use(express.json());
const web_link = "https://monkeycity.netlify.app/";
const community_link = "https://t.me/monkeycity_community";

// URL atau file ID gambar
const imageURL = "https://imgur.com/a/GgSjtHN"; // Ganti dengan URL gambar yang ingin kamu kirim

bot.start((ctx) => {
    const startPayload = ctx.startPayload;
    const urlSent = ${web_link}?ref=${startPayload};
    const user = ctx.message.from;
    const userName = user.username ? @${user.username} : user.first_name;
    
    // Mengirim gambar terlebih dahulu
    ctx.replyWithPhoto(imageURL, {
        caption: *Hey, ${userName}! it's Monkey! 🌟 Your go-to app for crypto trading - all the cool coins and tokens, right in your pocket!📱,
        parse_mode: "Markdown",
        reply_markup: {
            inline_keyboard: [
              [{ text: " 🕹️ Let'go!", web_app: { url: urlSent } }],
              [{ text: "Join Community", url: community_link }]
            ]
        }
    });
});

bot.launch();

app.listen(3000, () => {
    console.log("server is running on port 3000");
});
