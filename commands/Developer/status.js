const Discord = require('discord.js');
const botconfig = require('./../../botconfig.json')

module.exports.run = async (bot, message, args) => {

if(message.author.id !== `${botconfig.owner1}`) return message.channel.send("You may not use this command because you are not a developer");
 
if(args[0] == "online") return bot.user.setStatus("online");

if(args[0] == "invisible") return bot.user.setStatus("invisible");

if(args[0] == "dnd") return bot.user.setStatus("dnd")

if(args[0] == "idle") return bot.user.setStatus("idle");

}

module.exports.help = {
    name: "status"
	}
