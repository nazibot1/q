const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

	// Command = ?question <question here>

	let question = args.slice(0).join(" ");

	if (!args[0]) {
		message.channel.send(":x: You need to ask a question.");
		return;
	}

	let questionEmbed = new Discord.RichEmbed()
	.setTitle("~Question~")
	.setColor("#15f153")
	.setThumbnail(message.author.avatarURL)
	.addField("The question:", `${message.author.username} has asked: ${question}`)
	.addField("To vote:", "Press the ✅ to vote yes. \n Press the ❌ to vote no.")
	.setFooter(" - All votes starts with 1 yes and no mark. This is so you can vote easier to vote... Just click on them! \n - A question will be up for 5 minutes.")

	try {
		await message.author.send(`Your vote where you ask the question: (${question}) has successfully been created! \nThe vote will be only be visible for 5 minutes. And keep you dm's open because you will get the reuslt here.`);
	} catch(e) {
		message.channel.send(`${message.author} We have now created your question. Could not dm you because your dm's are locked. \nIf you want the result, you need to open your dm's.`)
		.then(message => {
			message.delete(7000);
		})
	}
	let sendMessage = await message.channel.send(questionEmbed)

	await sendMessage.react('✅');
	await sendMessage.react('❌');
		
	let yesEmoji = "✅";
	let noEmoji = "❌";
	
	let reactions = await sendMessage.awaitReactions(reaction => reaction.emoji.name === yesEmoji || reaction.emoji.name === noEmoji, {time: 300000});
	
	sendMessage.delete(1000);
	let answerEmbed = new Discord.RichEmbed()
	.setTitle("~Question - Answers~")
	.setColor("#15f153")
	.setThumbnail(message.author.avatarURL)
	.addField("You asked:", `${question}`)
	.addField("The votes:", `\n✅ = ${reactions.get(yesEmoji).count-1} \n❌ = ${reactions.get(noEmoji).count-1}`)
	.setFooter(" - A question will be up for 5 minutes, and will be deleted after the 5 minutes")

	message.author.send(answerEmbed);
}

module.exports.help = {
	name: "question"
}