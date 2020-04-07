const Discord = require('discord.js');
const bot = new Discord.Client();

var cli = new Discord.Client({autoReconnect:true});
var date = new Date();
var jour = date.getDay();
var heure = date.getHours();
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
function actualisation(){
    var date = new Date();
    var jour = date.getDay();
    var heure = date.getHours();
    var minutes = date.getMinutes();
};
const sleepito = async () => {
    while(1){
        actualisation
        await sleep(2000)
    }
}
bot.on('message', message => {
    if(jour === 2){
        if(heure === 18){
            if(minutes === 4){
                if(secondes === 0){
                    Discord.client.channels.get('697131247201288253').send('Il est 19h57(test)')
                }
            }
        }
    }
});
bot.login(process.env.BOT_TOKEN);
