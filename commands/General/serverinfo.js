const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	//Getting the server icon
	let servericon = message.guild.iconURL;
	//Making the bot embed
	let serverembed = new Discord.RichEmbed()
	.setDescription("Server Information")
	.setColor("#15f153")
	.setThumbnail(servericon)
	.addField("Server Name", message.guild.name)
	.addField("Created On", message.guild.createdAt)
	.addField("You Joined", message.member.joinedAt)
	.addField("Total Members", message.guild.memberCount);

	//Sending the bot embed
	message.channel.send(serverembed);

	return;
}

module.exports.help = {
	name: "serverinfo" //Command Name Here
}