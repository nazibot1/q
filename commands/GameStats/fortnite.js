const Discord = require("discord.js");
const fortnite = require('fortnite.js');
const ft = new fortnite('856f0181-8a96-450b-a8f5-67f792d379b5');
const Used = new Set();

module.exports.run = async (bot, message, args) => {

	//Command = ?fortnite <Username> <Platform> <Mode>

	let Username = args[0];
	let Platform = args[1];
	
	if (!args[0]) return message.channel.send(":x: You need to type a username.");
	if (!args[1]) return message.channel.send(":x: You need to type a platform <pc, xbl, psn>.");
	if (!args[2]) return message.channel.send(":x: You need to type a mode <solo, duo, squad, overall>.");
	
	if (!Used.has("Used")) {
		if (args[2] === "overall") {
			ft.get(Username, Platform).then( data => {
						
				//Username
				var username = data.displayName;
				//Kills
				var kills = data.stats.kills;
				//KD
				var kd = data.stats.kd;
				//Deaths
				var deathsWithDecimals = kills / kd;
				var deaths = deathsWithDecimals.toFixed(0);
				//Wins
				var wins = data.stats.top1;
				//Win %
				var winPercent = data.stats.winPercent;
				//Score
				var score = data.stats.score;
				//Matches Played
				var matchesplayed = data.stats.matches;
				//Kills Per Match
				var killspermatchWithDecimals = kills / matchesplayed;
				var killspermatch = killspermatchWithDecimals.toFixed(1);
				
				
				const StatsEmbed = new Discord.RichEmbed()
				.setColor("#9933ff")
				.setTitle(`Overall Stats for ${username}`)
				.setThumbnail('https://vignette.wikia.nocookie.net/fortnite/images/6/61/Battle_Royale_logo.png/revision/latest?cb=20180313000428')
				.setFooter("These stats are from http://fortnitetracker.com")
				.addField("🏆 Wins", wins, true)
				.addField("🏆 Win Chance:", winPercent, true)
				.addField("🗺️ Matches Played:", matchesplayed, true)
				.addField("🔫 Kills Per Match:", killspermatch, true)
				.addField("🔫 Kills:", kills, true)
				.addField("💀 Deaths:", deaths, true)
				.addField("➗ KD %:", kd, true)
				.addField("🏅 Score:", score, true);
					
				message.channel.send(StatsEmbed);

				Used.add("Used");

				setTimeout(() => {
					Used.delete("Used");
				}, 10000)
				return;
			})
			.catch(error => {
				console.log(error);
				message.channel.send(":x: Please type the command correctly. Type ?help for help.");
					return;
			})
		} 
			
		if (args[2] === "solo") {
			ft.get(Username, Platform).then( data => {
				
				//Username
				var username = data.displayName;
				//Kills
				var kills = data.solo.kills.value;
				//KD
				var kd = data.solo.kd.value;
				//Deaths
				var deathsWithDecimals = kills / kd;
				var deaths = deathsWithDecimals.toFixed(0);
				//Wins
				var wins = data.solo.top1.value;
				//Score
				var score = data.solo.score.value;
				//Matches Played
				var matchesplayed = data.solo.matches.value;
				//Kills Per Match
				var killspermatch = data.solo.kpg.value;
				//Score Per Match
				var scorepermatch = data.solo.scorePerMatch.value;
					
					
				const StatsEmbed = new Discord.RichEmbed()
				.setColor("#9933ff")
				.setTitle(`Solo Stats for ${username}`)
				.setThumbnail('https://vignette.wikia.nocookie.net/fortnite/images/6/61/Battle_Royale_logo.png/revision/latest?cb=20180313000428')
				.setFooter("These stats are from http://fortnitetracker.com")
				.addField("🏆 Wins", wins, true)
				.addField("🗺️ Matches Played:", matchesplayed, true)
				.addField("🔫 Kills Per Match:", killspermatch, true)
				.addField("🔫 Kills:", kills, true)
				.addField("💀 Deaths:", deaths, true)
				.addField("➗ KD %:", kd, true)
				.addField("🏅 Score:", score, true)
				.addField("⏱ Score Per Match:", scorepermatch, true);
				
				message.channel.send(StatsEmbed);

				Used.add("Used");

				setTimeout(() => {
					Used.delete("Used");
				}, 10000)
				return;
				})
			.catch(error => {
				console.log(error);
				message.channel.send(":x: Please type the command correctly. Type ?help for help.");
				return;
			})
		}
		
		if (args[2] === "duo") {
			ft.get(Username, Platform).then( data => {
				
				//Username
				var username = data.displayName;
				//Kills
				var kills = data.duo.kills.value;
				//KD
				var kd = data.duo.kd.value;
				//Deaths
				var deathsWithDecimals = kills / kd;
				var deaths = deathsWithDecimals.toFixed(0);
				//Wins
				var wins = data.duo.top1.value;
				//Score
				var score = data.duo.score.value;
				//Matches Played
				var matchesplayed = data.duo.matches.value;
				//Kills Per Match
				var killspermatch = data.duo.kpg.value;
				//Score Per Match
				var scorepermatch = data.duo.scorePerMatch.value;
				
				
				const StatsEmbed = new Discord.RichEmbed()
				.setColor("#9933ff")
				.setTitle(`Duo Stats for ${username}`)
				.setThumbnail('https://vignette.wikia.nocookie.net/fortnite/images/6/61/Battle_Royale_logo.png/revision/latest?cb=20180313000428')
				.setFooter("These stats are from http://fortnitetracker.com")
				.addField("🏆 Wins", wins, true)
				.addField("🗺️ Matches Played:", matchesplayed, true)
				.addField("🔫 Kills Per Match:", killspermatch, true)
				.addField("🔫 Kills:", kills, true)
				.addField("💀 Deaths:", deaths, true)
				.addField("➗ KD %:", kd, true)
				.addField("🏅 Score:", score, true)
				.addField("⏱ Score Per Match:", scorepermatch, true);
				
				message.channel.send(StatsEmbed);

				Used.add("Used");

				setTimeout(() => {
					Used.delete("Used");
				}, 10000)
				return;
			})
			.catch(error => {
				console.log(error);
				message.channel.send(":x: Please type the command correctly. Type ?help for help.");
				return;
			})
		}
	
		if (args[2] === "squad") {
			ft.get(Username, Platform).then( data => {
				
				//Username
				var username = data.displayName;
				//Kills
				var kills = data.squad.kills.value;
				//KD
				var kd = data.squad.kd.value;
				//Deaths
				var deathsWithDecimals = kills / kd;
				var deaths = deathsWithDecimals.toFixed(0);
				//Wins
				var wins = data.squad.top1.value;
				//Score
				var score = data.squad.score.value;
				//Matches Played
				var matchesplayed = data.squad.matches.value;
				//Kills Per Match
				var killspermatch = data.squad.kpg.value;
				//Score Per Match
				var scorepermatch = data.squad.scorePerMatch.value;
				
				const StatsEmbed = new Discord.RichEmbed()
				.setColor("#9933ff")
				.setTitle(`Squad Stats for ${username}`)
				.setThumbnail('https://vignette.wikia.nocookie.net/fortnite/images/6/61/Battle_Royale_logo.png/revision/latest?cb=20180313000428')
				.setFooter("These stats are from http://fortnitetracker.com")
				.addField("🏆 Wins", wins, true)
				.addField("🗺️ Matches Played:", matchesplayed, true)
				.addField("🔫 Kills Per Match:", killspermatch, true)
				.addField("🔫 Kills:", kills, true)
				.addField("💀 Deaths:", deaths, true)
				.addField("➗ KD %:", kd, true)
				.addField("🏅 Score:", score, true)
				.addField("⏱ Score Per Match:", scorepermatch, true);
				
				message.channel.send(StatsEmbed);

				Used.add("Used");

				setTimeout(() => {
					Used.delete("Used");
				}, 10000)
				return;
			})
			.catch(error => {
				console.log(error);
				message.channel.send(":x: Please type the command correctly. Type ?help for help.");
				return;
			})
		}
	} else {
		message.delete(3000);
		message.channel.send(":x: You can only use this command every 10 seconds.").then(message => {message.delete(7000)});
		return;
	}
}

module.exports.help = {
	name: "fortnite" //Command Name Here
}