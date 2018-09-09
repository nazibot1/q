const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
		
	//Command = !ban @Jens Reason Here!
		
	//Grapping the user
	let banUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
	if(!banUser) return message.channel.send(`Could not find the user ${banUser}`);
	let banReason = args.join(" ").slice(22);

	//Checking if the user has MANAGE_MEMBERS permission
	if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send(":x: You dont have permission to use this command.");

	//Checking if the user has permission, if yes he wont be banned.
	if(banUser.hasPermission("MANAGE_MEMBERS")) return message.channel.send(":x: That person can not be banned!");

	//Making the embed
	let banEmbed = new Discord.RichEmbed()
	.setDescription("~Ban~")
	.setColor("#15f153")
	.addField("Banned User", `${banUser} With ID: ${banUser.id}`)
	.addField("Banned By", `${message.author} With ID: ${message.author.id}`)
	.addField("Channel", message.channel)
	.addField("Time", message.createdAt)
	.addField("Reason", `${banReason}`);
		
	//Finding the log channel
	let logchannel = message.guild.channels.find(`name`, "🤖-bot-testing-log");
	if(!logchannel) return message.channel.send(`Could not find the log channel`);

	//Banned the member with reason
	message.guild.member(banUser).ban(banReason);

	//Sending the ban embed to the log channel
	logchannel.send(banEmbed);

	return;
}

module.exports.help = {
	name: "ban" //Command Name Here
}