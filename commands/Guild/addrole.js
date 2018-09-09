const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	//Command = !addrole @Jens <Role name>

	if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send(":x: You dont have permission to use this command.");
	let roleMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
	if(!roleMember) return message.channel.send(":x: Could not find that user");
	let role = args.join(" ").slice(22);
	if(!role) return message.channel.send(":x: Specify a role!");
	let guildRole = message.guild.roles.find(`name`, role);
	if(!guildRole) return message.channel.send(":x: Could not find the role.");

	if(roleMember.roles.has(guildRole.id)) return message.channel.send(":x: They already have the role!");

	
	await(roleMember.addRole(guildRole.id));

	try {
		await roleMember.send(`Congrats, you have been given the role ${guildRole.name} on the server ${message.guild.name}`);
	} catch(e) {
		message.channel.send(`Congrats to <@${roleMember.id}>, you have been given the role ${guildRole}. We tried to DM them but their DMs are locked.`);
	}
}

module.exports.help = {
	name: "addrole" //Command Name Here
}