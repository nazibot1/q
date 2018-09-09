const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {
	//Command s!help
	

	HelpEmbed = new Discord.RichEmbed()
	.setColor("#34A5EA")
	.addField("***Help:***", "**There are some command that takes args. The commands that do has a `<>` where the args goes.**")
	.addField("**Commands Status:**", "Check If The Commands Are Working")
	//.addField(`<:483872427940511744:>`, "Offline")
	//.addField("**Offline**", "offline") 
	message.author.send(HelpEmbed);


	//Economy Commands
	EconomyEmbed = new Discord.RichEmbed()
	.setColor("#34A5EA")
	.addField("***Economy commands:***", "*These command is common used on the server.*", )
	.addField("**s!coins** <User>", "*Getting the amount of coins that a user has.*")
	.addField("**s!daily**", "*Giving you 25 daily coins to spend of things.*")
	.addField("**s!pay** <User> <Amount>", "*Pays a user a amount of coins to them.*")
	.addField("**s!high-low** <Amount> <High/Low>", "*Play the gamemode high or low.*")
	message.author.send(EconomyEmbed);
	

	//Other Commands or General Commands
	GeneralEmbed = new Discord.RichEmbed()
	.setColor("#34A5EA")
	.addField("***General commands:***", "*These are just some other commands.*", )
	.addField("**s!botinfo**", "*This displays the bots information about it.*")
	.addField("**s!serverinfo**", "*Getting the server information.*")
	message.author.send(GeneralEmbed)
	
	//Game Stats
	GameEmbed = new Discord.RichEmbed()
	.setColor("#34A5EA")
	.addField("***Gamestats commands:***", "*Get Info About Your Games.*", )
	message.author.send(GameEmbed);
	
	//Fun Commands
	FunEmbed = new Discord.RichEmbed()
	.setColor("#34A5EA")
	.addField("***Fun commands:***", "*These are just some other commands.*", )
	.addField("**s!roulette** <User>", "*Starts a battle between 2 users for nothing... (In the future battle for coins).*")
	.addField("**s!question** <Question>", "*Ask a YES or NO question to the server.*")
      message.author.send(FunEmbed);
	  
	//Audio Commands
	AudioEmbed = new Discord.RichEmbed()
	.setColor("#34A5EA")
	.addField("***Audio commands:***", "*Listen To Your Favorite Music.*", )
	.addField("**s!play:**", "*Listen To Your Favorite Music.*" )
	.addField("**s!stop**", "*Stop The Music.*" )
	.addField("**s!skip**", "*Skip Current Music.*" )
	  
	  message.author.send(AudioEmbed);


//Admin Commands
	if (message.member.hasPermission("MANAGE_GUILD")) {
		AdminEmbed = new Discord.RichEmbed()
		.setColor("#FF0000")
		.addField("***Admin commands:***", "*Can only be used by the admins of the Guild.*")
		.addField("**s!addrole** <User> <Role Name>", "*Adds a user to a role on the server*.")
		.addField("**s!removerole** <User> <Role Name>", "*Removes a role from a user.*")
		.addField("**s!clear** <Number Of Messages>", "*Clear numbers of messages in the channel.*")
		.addField("**s!rolecolor** <Role Name> <Hex Color Code>", "*Changes the color of the role.*")
		.addField("**s!givecoins** <User> <Amount>", "*Gives the amount of coins to a user.*")
		.addField("**s!takecoins** <User> <Amount>", "*Takes a amount of coins from a user.*")
		.addField("**s!ban** <User> <Reason>", "*Bans a user with a reason.*")
		.addField("**s!kick** <User> <Reason>", "*Kicking a user with a reason.*")
		.addField("**s!tempmute** <User> <Time> <Reason>", "*Muting a user for a specific time and a reason.*")

		message.author.send(AdminEmbed);
	}
}

module.exports.help = {
	name: "help"
}