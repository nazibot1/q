const Discord = require("discord.js");
const fs = require("fs");
let coins = require("./../../coins.json");

module.exports.run = async (bot, message, args) => {
	// Command ?pay <user> <amount>

	message.delete(2000);

	let payUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
	let payAmount = parseInt(args[1]);

	
	if(!args[0]) {
		message.channel.send(":x: You need to type a user to pay.");
	} else if(!args[1]) {
		message.channel.send(":x: You need to type a amount to pay.");
	} else if(!payUser) {
		message.channel.send(":x: Could not find that user.");
	} else if(!coins[message.author.id]) {
		coins[message.author.id] = {
			coins: 0
		}
		message.channel.send(":x: You dont have any coins to pay.");
	} else if(coins[message.author.id].coins < payAmount) {
		message.channel.send(`:x: You dont have ${payAmount} coins`);
		return;
	} else {
		coins[message.author.id] = {
			coins: coins[message.author.id].coins - payAmount
		}
		coins[payUser.id] = {
			coins: coins[payUser.id].coins + payAmount
		}

		message.channel.send(`${message.author} just gave **${payAmount}** coins to ${payUser}`).then(message => {message.delete(5000)});

		fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
			if (err) console.log(err)
		});
	}
}

module.exports.help = {
	name: "pay"
}