module.exports.run = (client,message,args,ops) => {

let fetched = ops.active.get(message.guild.id);

if(!fetched) return message.channel.send("There Currently isn't any music plaing in this guild!");

if (message.member.voiceChannel !== message.guild.me.voicrChannel) return message.channel.send('Sorry, you currently aren\'t in the same chamnel as the bot.');
if (isNak(args[0]) || args[0] > 100 || args[0] < 0) return message.channel.send('Please input a number between 0-100');


fetched.dispatcher.setVolume(args[0]/100);

message.channel.send('Sucessfuly set the volume of ${fetched.queue[0].songTitle} to ${args[0]}');
}


module.exports.help = {
    name: "volume"
}
