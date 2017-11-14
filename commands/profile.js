const Discord = require('discord.js');

exports.run = function(client, message, args) {
    if(message.mentions.users.size == 0) {
        return message.channel.send(`**${message.author} You need to mention a user! 🤦**`)
    }
    if(message.mentions.users.size > 1) {
        return message.channel.send(`**${message.author} You can only mention one person! 😧**`)
    }
    const embed = new Discord.RichEmbed();
    embed.setTitle(`__Profile for ${message.mentions.members.first().user.tag}__`)
    .addField("Username", message.mentions.members.first().user.username, true)
    .addField("ID", message.mentions.members.first().user.id, true)
    .addField("Created At", message.mentions.members.first().user.createdAt, true)
    .setThumbnail(message.mentions.members.first().user.avatarURL)
    .setColor("#068BFD")
    message.channel.send({embed});
}
