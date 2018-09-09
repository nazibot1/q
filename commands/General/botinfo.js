const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	//Getting the bot avatar
	let boticon = bot.user.displayAvatarURL;
	//Making the bot embed
	let botembed = new Discord.RichEmbed()
	.setDescription("Bot Information")
	.setColor("#15f153")
	.setThumbnail(boticon)
	.addField("Bot Name", bot.user.username)
	.addField("Created On", bot.user.createdAt);
	
	//Sending the bot embed
	message.channel.send(botembed);
	return;
}

module.exports.help = {
	name: "botinfo" //Command Name Here
}