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
fonction
bot.on('ready', () =>{
    bot.user.setPresence({ game: {name: " le cours @Adelixxe", type: 2}});
});
function actualisation(){
    var date = new Date();
    var jour = date.getDay();
    var heure = date.getHours();
    var minutes = date.getMinutes();
};
while(1){
    actualisation
    await sleep(5000);
}
bot.on('message', message => {
    if(jour === 2){
        if(heure === 17){
            if(minutes === 56){
                Discord.client.channels.get('697131247201288253').send('Il est 19h43(test)')
                }
            }
        }
});
bot.login(process.env.BOT_TOKEN);
