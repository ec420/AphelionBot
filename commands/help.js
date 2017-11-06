const Discord = require('discord.js');

exports.run = function(client, message, args) {
	const embed = new Discord.RichEmbed();
	embed.setTitle("Help for AphelionBot")
	.addField("ping", "Pings the bot, checks your connection in milliseconds.")
	.addField("about", "Shows an embed with some basic information about the bot.")
	.setColor("#ffa500")
	.setThumbnail("https://cdn.discordapp.com/attachments/376064658085249024/376071624664809473/Aphelion_logo.png")
	message.channel.send({embed});
}