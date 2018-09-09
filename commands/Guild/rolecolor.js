const Discord = require("discord.js");
const botconfig = require("./../../botconfig.json");

module.exports.run = async (bot, message, args) => {
	
	//Command ?rolecolor <role> <color>

	if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(botconfig.NoPermission);

	let role = message.guild.roles.find(`name`, args[0]);
	let color = args[1];

	if(!role) return message.channel.send(":x: Could not find that role! ?rolecolor <role> <color>");
	if(!color) return message.channel.send(":x: Type a color! ?rolecolor <role> <color>");

	role.setColor(color)
	.then(updated => message.channel.send(`You have not set the color of the role ${role} to ${color}`))
	.catch(console.error).then(message => message.channel.send());
}

module.exports.help = {
	name: "rolecolor"
}
