const Discord = require("discord.js");
const fs = require("fs");
let coins = require("./../../coins.json");

module.exports.run = async (bot, message, args) => {
	//Command = ?coins <user>

	message.delete(1000);

	let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

	if (!args[0]) {
		if(!coins[message.author.id]) {
			coins[message.author.id] = {
				coins: 0
			};
		}
	
		let uCoins = coins[message.author.id].coins;
	
		let coinEmbed = new Discord.RichEmbed()
		.setAuthor(message.author.username)
		.setColor("#0000FF")
		.addField("💰", uCoins)
		
		message.channel.send(coinEmbed).then(message => {message.delete(5000)});
	
		fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
			if (err) console.log(err)
		});
	} else {
		if(!coins[user.id]) {
			coins[user.id] = {
				coins: 0
			};
		}
	
		let uCoins = coins[user.id].coins;
	
		let coinEmbed = new Discord.RichEmbed()
		.setAuthor(user.displayName)
		.setColor("#0000FF")
		.addField("💰", uCoins)
		
		message.channel.send(coinEmbed).then(message => {message.delete(5000)});
	
		fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
			if (err) console.log(err)
		});
	}
}

module.exports.help = {
	name: "coins"
}