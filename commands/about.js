const Discord = require('discord.js');

exports.run = function(client, message, args) {
	const embed = new Discord.RichEmbed();
	embed.setTitle("About AphelionBot")
	.addField("What is AphelionBot?", "AphelionBot is a moderation and fun to use bot made by Dan.#2518 for the Aphelion Discord Server, and is coded in discord.js.")
	.addField("Why does AphelionBot exist?", "This bot exists because it was requested by the big <@239713499528298498>, so I made it.")
	.addField("OMG THIS COMMAND DON'T WORK DAN FIX IT YOU DONKEY!!", "Calm your tits, this bot is still in development, so expect commands to be broken sometimes.")
	.setColor("#add8e6")
	.setThumbnail("https://cdn.discordapp.com/attachments/376064658085249024/376071624664809473/Aphelion_logo.png")
	message.channel.send({embed});
}