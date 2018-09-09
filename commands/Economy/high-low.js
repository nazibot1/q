const Discord = require("discord.js");
const fs = require("fs");
let coins = require("./../../coins.json");

module.exports.run = (bot, message, args) => {
	//Command ?high-low <bet amount / help> <high or low>

	if (args[0] === "help") {
		gameEmbed = new Discord.RichEmbed()
		.setTitle("Gamemode | High Or Low")
		.setFooter("There is not going to be any refunds if you miss click or whatever you did.")
		.addField("The game itself:", "You need to choose either Low or High. Then a dice will be rolled. \nYou can win **2x** the amount you betted.")
		.addField("Low Numbers:", "1 - 3")
		.addField("High Number:", "4 - 6")

		message.channel.send(gameEmbed);
	} else {
		let betAmount = args[0];
		let isNumber = isFinite(betAmount);
		let ChoosedHighOrLow = args[1].toLowerCase();

		if (!args[0]) {
			message.channel.send(":x: You need to provide a number of coins you will bet.");
		} else if (!args[1]) {
			message.channel.send(":x: You need to pick either (High) or (Low).");
		} else if (isNumber === false) {
			message.channel.send(":x: You need to provide a number.");
		} else if (!coins[message.author.id]) {
			coins[message.author.id] = {
				coins: 0
			};
			message.channel.send(":x: You dont have any coins to gamble.");
		} else if (coins[message.author.id].coins < betAmount) {
			message.channel.send(":x: You dont have enough coins to bet that amount.");
		} else if (!(ChoosedHighOrLow === "high" || ChoosedHighOrLow === "low")) {
			message.channel.send(":x: You need to either type (High) or (Low)");
		} else {
			coins[message.author.id] = {
				coins: coins[message.author.id].coins - betAmount
			}

			randomNumber = Math.floor(Math.random() * 6) + 1

			if (randomNumber >= 4) {
				winName = "high";
			} else if (randomNumber <= 3) {
				winName = "low";
			}

			if(ChoosedHighOrLow === winName) {
				FinalAmount = betAmount * 2;

				coins[message.author.id] = {
					coins: coins[message.author.id].coins + FinalAmount
				}

				message.channel.send(`${message.author} Just won **${FinalAmount}** coins, on the number: **${randomNumber}**`);

				fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
					if (err) console.log(err)
				});
			} else {
				message.channel.send(`Sorry ${message.author}. You lost **${betAmount}** coins. The number was **${randomNumber}**`);
			}
		}
	}

}

module.exports.help = {
	name: "high-low"
}