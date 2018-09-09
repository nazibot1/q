const Discord = require("discord.js");
const fs = require("fs");
let coins = require("./../../coins.json");

module.exports.run = (bot, message, args) => {
	// Command ?givecoins <user> <amount>

	message.delete();

	let user = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
	let amount = parseInt(args[1]);

	if(!args[0]) {
		message.channel.send(":x: You need to type a user.");
	} else if (!args[1]) {
		message.channel.send(":x: You need to type a number.");
	} else if (!message.member.hasPermission("MANAGE_GUILD")) {
		message.channel.send(":x: You dont have permission to use this command.");
	} else if (!user) {
		message.channel.send(":x: Could not find that user.");
	} else {
		coins[user.id] = {
			coins: coins[user.id].coins + amount
		}

		message.channel.send(`The server gave ${amount} coins to ${user}`).then(message => {message.delete(5000)});

		fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
			if (err) console.log(err)
		});
	}
}

module.exports.help = {
	name: "givecoins"
}