const { Telegraf, Markup } = require("telegraf");
const TOKEN = "7797629643:AAEWHOonlUro9gfOHAM2F_TODPJQCWonzSw";
const bot = new Telegraf(TOKEN);
const express = require("express");
const app = express()
app.use(express.json())
const web_link = "https://monkeycity.netlify.app/";
const community_link = "https://t.me/monkeycity_community";
const user = ctx.message.from;
const userName = user.username ? `@${user.username}` : user.first_name;
    ctx.replyWithMarkdown(`*Hallo, ${userName}! Welcome to Monkey City, Be one of the citizens of Monkey town, and earn $MONKEY Reward Pool!

bot.start((ctx) => {
    const startPayload = ctx.startPayload;
    const urlSent = `${web_link}?ref=${startPayload}`;

Got friends, relatives, co-workers?
Bring them all into the game.
More squad power, more CDPtap tokens.`, {
        reply_markup: {
            inline_keyboard: [
              [{ text: "👋 Start now!", web_app: { url: urlSent } }],
              [{ text: "Contract Developer", url: community_link }]
            
            ],
            in: true
        },
    });
  });

  
  bot.launch();
  
app.listen(3000, () => {
    console.log("server is me and now running")
})
