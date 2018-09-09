const Discord = require("discord.js");
const fs = require("fs");
let coins = require("./../../coins.json");
let dailyCoins = 25;
const TakenDaily = new Set();

module.exports.run = (bot, message, args) => {
	// Command ?daily

	if (TakenDaily.has(message.author.id)) {
		message.channel.send(":x: You have already got your daily coins.").then(message => {message.delete(5000)});
	} else {
		TakenDaily.add(message.author.id);

		if (!coins[message.author.id]) {
			coins[message.author.id] = {
				coins: 0
			};
		}

		coins[message.author.id] = {
			coins: coins[message.author.id].coins + dailyCoins
		}

		message.channel.send("You have now taken you daily coins").then(message => {message.delete(5000)});

		setTimeout(() => {
			TakenDaily.delete(message.author.id);
		}, 86400000)
	}
}

module.exports.help = {
	name: "daily"
}