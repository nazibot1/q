const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
	//Command ?clear 15

	if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":x: You dont have permission to use this command");

	if(!args[0]) return message.channel.send(":x: Please type a number of messages who will be deleted.");

	message.channel.bulkDelete(args[0]+1).then(() => {
		message.channel.send(`Cleared ${args[0]} messages.`).then(message => message.delete(5000));
	});
}

module.exports.help = {
	name: "clear"
}