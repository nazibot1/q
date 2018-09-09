const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

    //Command = ?tempmute @user 1s/m/h/d <reason>
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":x: You dont have permission to use this command!");

    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!tomute) return message.reply(":x: Could not find that user.");
    if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply(":x: You cant mute that person.");
    let muterole = message.guild.roles.find(`name`, "Muted");

    let Mutereason = args.slice(2).join(" ");

    //start of create role
    if(!muterole){
      	try{
        	muterole = await message.guild.createRole({
          	name: "Muted",
          	color: "#fc2222",
          	permissions:[]
        })
        	message.guild.channels.forEach(async (channel, id) => {
          	await channel.overwritePermissions(muterole, {
            	SEND_MESSAGES: false,
            	ADD_REACTIONS: false
        	});
        });
      	}catch(e){
        	console.log(e.stack);
      	}
    }
    //end of create role
    
    let mutetime = args[1];
    if(!mutetime) return message.reply(":x: You need to type a time for the mute.");
  
    await(tomute.addRole(muterole.id));

    //Making the embed
	let muteEmbed = new Discord.RichEmbed()
    .setDescription("~Temp Mute~")
    .setColor("#15f153")
    .addField("Muted User", `${tomute} With ID: ${tomute.id}`)
    .addField("Muted By", `${message.author} With ID: ${message.author.id}`)
    .addField("Channel", message.channel)
	.addField("Time", message.createdAt)
	.addField("Time Muted", mutetime)
    .addField("Reason", Mutereason);

    let mutechannel = message.guild.channels.find(`name`, "🤖-bot-testing-log");
	if(!mutechannel) return message.channel.send(`Could not find the reports channel`);

    message.channel.send(`<@${tomute.id}> got muted for ${ms(ms(mutetime))} by ${message.author}`);

    mutechannel.send(muteEmbed);
  
    setTimeout(function(){
    	tomute.removeRole(muterole.id);
    	message.channel.send(`<@${tomute.id}> is now unmuted!`);
    }, ms(mutetime));
  
  
//end of module
}
  
module.exports.help = {
	name: "tempmute"
}