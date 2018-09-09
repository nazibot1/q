const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	//Grapping the user
	let reportUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
	if(!reportUser) return message.channel.send(":x: Could not fin that user.");
	//The reason Args
	let Reportreason = args.join(" ").slice(22);

	//Making the embed
	let reportEmbed = new Discord.RichEmbed()
	.setDescription("Reports")
	.setColor("#15f153")
	.addField("Reported User", `${reportUser} With ID: ${reportUser.id}`)
	.addField("Reported By", `${message.author} With ID: ${message.author.id}`)
	.addField("Channel", message.channel)
	.addField("Time", message.createdAt)
	.addField("Reason", Reportreason);

	//Finding the reports channel
	let reportchannel = message.guild.channels.find(`name`, "🤖-bot-testing-log");
	if(!reportchannel) return message.channel.send(`Could not find the reports channel`);

	//Deleting the message so it cant be seeing
	message.delete().catch(O_o=>{});

	//Sending the embed to the selected channel!
	reportchannel.send(reportEmbed);

	return;
}

module.exports.help = {
	name: "report" //Command Name Here
}