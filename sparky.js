

/* A Multifuctional Discord Bot For Everyone

Version: 1.0.0

Author:Anish Shobith
Contributors:iona Dev

Discord Contact

@Anish Shobith#3265
@iona Dev#8394
*/

//Bot Program Starts Here

const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client();

bot.commands = new Discord.Collection();

//Command Handler
const fs = require("fs");

let coins = require("./coins.json");

//Loading Developer Commands

fs.readdir("./commands/Developer/", (err, files) => {

	if(err) console.log(err);

	let jsfile = files.filter(f => f.split(".").pop() === "js")
	if(jsfile.length <= 0) {
		console.log("Could not find commands.");
		return;
	}

	jsfile.forEach((f, i) => {
		let props = require(`./commands/Developer/${f}`);
		console.log(`${f} loaded!`);
		bot.commands.set(props.help.name, props);
	});
});

//Loading Fun Commands

fs.readdir("./commands/Fun/", (err, files) => {

	if(err) console.log(err);

	let jsfile = files.filter(f => f.split(".").pop() === "js")
	if(jsfile.length <= 0) {
		console.log("Could not find commands.");
		return;
	}

	jsfile.forEach((f, i) => {
		let props = require(`./commands/Fun/${f}`);
		console.log(`${f} loaded!`);
		bot.commands.set(props.help.name, props);
	});
});

//Loading Economy Commands

fs.readdir("./commands/Economy/", (err, files) => {

	if(err) console.log(err);

	let jsfile = files.filter(f => f.split(".").pop() === "js")
	if(jsfile.length <= 0) {
		console.log("Could not find commands.");
		return;
	}

	jsfile.forEach((f, i) => {
		let props = require(`./commands/Economy/${f}`);
		console.log(`${f} loaded!`);
		bot.commands.set(props.help.name, props);
	});
});

//Loading GameStats Commands

fs.readdir("./commands/GameStats/", (err, files) => {

	if(err) console.log(err);

	let jsfile = files.filter(f => f.split(".").pop() === "js")
	if(jsfile.length <= 0) {
		console.log("Could not find commands.");
		return;
	}

	jsfile.forEach((f, i) => {
		let props = require(`./commands/GameStats/${f}`);
		console.log(`${f} loaded!`);
		bot.commands.set(props.help.name, props);
	});
});

//Loading Guild Commands

fs.readdir("./commands/Guild/", (err, files) => {

	if(err) console.log(err);

	let jsfile = files.filter(f => f.split(".").pop() === "js")
	if(jsfile.length <= 0) {
		console.log("Could not find commands.");
		return;
	}

	jsfile.forEach((f, i) => {
		let props = require(`./commands/Guild/${f}`);
		console.log(`${f} loaded!`);
		bot.commands.set(props.help.name, props);
	});
});

//Loading General Commands

fs.readdir("./commands/General/", (err, files) => {

	if(err) console.log(err);

	let jsfile = files.filter(f => f.split(".").pop() === "js")
	if(jsfile.length <= 0) {
		console.log("Could not find commands.");
		return;
	}

	jsfile.forEach((f, i) => {
		let props = require(`./commands/General/${f}`);
		console.log(`${f} loaded!`);
		bot.commands.set(props.help.name, props);
	});
});

//Loading Moderation Commands

fs.readdir("./commands/Moderation/", (err, files) => {

	if(err) console.log(err);

	let jsfile = files.filter(f => f.split(".").pop() === "js")
	if(jsfile.length <= 0) {
		console.log("Could not find commands.");
		return;
	}

	jsfile.forEach((f, i) => {
		let props = require(`./commands/Moderation/${f}`);
		console.log(`${f} loaded!`);
		bot.commands.set(props.help.name, props);
	});
});

//Loading Audio Commands

fs.readdir("./commands/Audio/", (err, files) => {

	if(err) console.log(err);

	let jsfile = files.filter(f => f.split(".").pop() === "js")
	if(jsfile.length <= 0) {
		console.log("Could not find commands.");
		return;
	}

	jsfile.forEach((f, i) => {
		let props = require(`./commands/Audio/${f}`);
		console.log(`${f} loaded!`);
		bot.commands.set(props.help.name, props);
	});
});

//End Of Loading Commands


//BOT Status

bot.on("ready", async () => {

  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
  
  });

   setInterval(function() {
        bot.user.setPresence({ game: { name: botconfig.prefix + "help | " + bot.guilds.size + " Servers! | " + bot.users.size + " Users!"} });
    //Update every 60 seconds
    }, 60 * 1000);


// End Of Bot Status


bot.on("message", async message => {
	if(message.author.bot) return;
	if(message.channel.type === "dm") return;

	let prefix = botconfig.prefix;
	let messageArray = message.content.split(" ");
	let command = messageArray[0];
	let args = messageArray.slice(1);

if (!message.content.startsWith(prefix)) return;

    let commandfile = bot.commands.get(command.slice(prefix.length));
    if(commandfile) commandfile.run(bot,message,args);
	
	if(message.content.toLowerCase() === '<@486232921078890501>'){
    let embed = new Discord.RichEmbed()
    .setTitle("Sparky")
    .addField("Prefix", `\`${prefix}\``, true)
    .addField("Help", `\`${prefix}help\``, true)
    .setThumbnail(bot.user.displayAvatarURL)
    .setColor(`${message.guild.me.displayHexColor!=='#000000' ? message.guild.me.displayHexColor : 0xffffff}`);
    message.channel.send(embed);
  };
	
	//COIN SYSTEM
	if (!message.content.startsWith("?")) {
		if(!message.author.bot) {
			if(!coins[message.author.id]) {
				coins[message.author.id] = {
					coins: 0
				};
			}
		
			let coinAmt = Math.floor(Math.random() * 10) + 1;
	
			if(coinAmt === 5) {
				coins[message.author.id] = {
					coins: coins[message.author.id].coins + coinAmt
				};
				fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
					if (err) console.log(err)
				});
				let coinEmbed = new Discord.RichEmbed()
				.setAuthor(message.author.username)
				.setColor("#0000FF")
				.addField("💰", `${coinAmt} coins added`)
		
				message.channel.send(coinEmbed).then(message => {message.delete(5000)})
			}
		}
	}
});

//Login The Bot Using This 
bot.login(botconfig.token);

//End Of Index.js
