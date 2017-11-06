const Discord = require('discord.js');

exports.run = function(client, message, args) {
	 const embed = new Discord.RichEmbed();
    	embed.setTitle("")
    	.setColor("#1d54f9")
    	.addField('Pong! :ping_pong:', `${Math.floor(client.ping)}ms`)
  		message.channel.send({embed});
}