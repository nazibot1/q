const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	// Command ?roulette <opponent>

	if(!args[0]) {
		message.channel.send(":x: You need to type a user you will battle.");
	}
	let opponent = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
	if(!opponent) return message.reply(":x: Could not find that user.");

	message.channel.send(`**Battle:** ${message.author} has challenged ${opponent}. Let's see who is winning!`);

	setTimeout(function(){
		randomnumber = Math.floor(Math.random() * 2) + 1
	
		if (randomnumber === 1) {
			message.channel.send(`**Battle:** ${message.author} and ${opponent} had a battle and ${opponent} lost!`);
		} else if (randomnumber === 2) {
			message.channel.send(`**Battle:** ${message.author} and ${opponent} had a battle and ${message.author} lost!`);
		}
    }, 5000);

}

module.exports.help = {
	name: "roulette"
}