const Discord = require("discord.js");
const botconfig = require("./../../botconfig.json");

exports.run = async (bot, message, args, color, prefix) => {
    if (message.author.id !== `${botconfig.owner1}` && message.author.id !== `${botconfig.owner2}`) return;
    try {
        let codein = args.join(" ");
        let code = eval(codein);

        if (typeof code !== 'string')
            code = require('util').inspect(code, { depth: 0 });
        let embed = new Discord.RichEmbed()
        .setAuthor('Evaluate')
        .setColor('RANDOM')
        .addField(':inbox_tray: Input', `\`\`\`js\n${codein}\`\`\``)
        .addField(':outbox_tray: Output', `\`\`\`js\n${code}\n\`\`\``)
        message.channel.send(embed)
    } catch(e) {
        message.channel.send(`\`\`\`js\n${e}\n\`\`\``);
    }
}

exports.help = {
    name: 'eval'

}
