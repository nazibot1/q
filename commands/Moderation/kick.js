const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	//Command = !kick @Jens Reason Here!
		
	//Grapping the user
	let kickUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
	if(!kickUser) return message.channel.send(":x: Could not find the user.");
	let kickReason = args.join(" ").slice(22);

	//Checking if the user has MANAGE_MESSAGES permission
	if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":x: You dont have permission to use this command!");

	//Checking if the user has permission, if yes he wont be kicked.
	if(kickUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":x: That person can not be kicked!");

	//Making the embed
	let kickEmbed = new Discord.RichEmbed()
	.setDescription("~Kick~")
	.setColor("#15f153")
	.addField("Kicked User", `${kickUser} With ID: ${kickUser.id}`)
	.addField("Kicked By", `${message.author} With ID: ${message.author.id}`)
	.addField("Channel", message.channel)
	.addField("Time", message.createdAt)
	.addField("Reason", `${kickReason}`);
		
	//Finding the log channel
	let logchannel = message.guild.channels.find(`name`, "🤖-bot-testing-log");
	if(!logchannel) return message.channel.send(":x: Could not find the log channel");

	//Kicking the member with reason
	message.guild.member(kickUser).kick(kickReason);

	//Sending the kick embed to the log channel
	logchannel.send(kickEmbed);

	return;
}

module.exports.help = {
	name: "kick" //Command Name Here
}