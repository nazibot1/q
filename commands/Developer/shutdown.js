const Discord = require('discord.js');
const botconfig = require('./../../botconfig.json');
const errros = require('./../../utlis/errros.js');

module.exports.run = async (client, message, args) => {
  if (message.author.id !== `${botconfig.owner1}`) return errors.ownersOnly(message);

  if (message.author.id == `${botconfig.owner1}`){
    let embed = new Discord.RichEmbed()
    .setTitle('Shutting Down...')
    .setColor(botconfig.red);

    message.channel.send(embed)
    .then(message => client.destroy())
  }
}

module.exports.help = {
  name: 'shutdown'
 
};
