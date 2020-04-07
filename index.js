const Discord = require('discord.js');
const bot = new Discord.Client();

var cli = new Discord.Client({autoReconnect:true});
var date = new Date();
var jour = date.getDay();
var heure = date.getHours() + 2;
var minutes = date.getMinutes();
var secondes = date.getSeconds();

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
    if (message.content === "*edt"){
        var date = new Date();
        var jour = date.getDay();
        var heure = date.getHours() + 2;
        var minutes = date.getMinutes();
        var secondes = date.getSeconds();
        message.channel.send("Il est "+heure+":"+secondes)
    }
});
bot.login(process.env.BOT_TOKEN);
