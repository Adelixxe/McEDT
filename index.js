const Discord = require('discord.js');
const bot = new Discord.Client();

var cli = new Discord.Client({autoReconnect:true});
var date = new Date();
var jour = date.getDay();
var heure = date.getHours();
var minutes = date.getMinutes();

bot.commands = new Discord.Collection();
bot.on("error", (e) => console.error(e));
bot.on("warn", (e) => console.warn(e));
bot.on("debug", (e) => console.info(e));
bot.on('ready', function() {
    console.log(" McEDT")
});

bot.on('ready', () =>{
    bot.user.setPresence({ game: {name: " le cours @Adelixxe", type: 2}});
});
bot.on('message', message => {
    if(jour === 2){
        if(heure === 19){
            if(minutes === 40){
                Discord.client.channels.get('697131247201288253').send('Il est 19h40 (test)')
                }
            }
        }
});
bot.login(process.env.BOT_TOKEN);
