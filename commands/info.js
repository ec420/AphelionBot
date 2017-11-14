const Discord = new require('discord.js');

exports.run = function(client, message, args) {
	const embed = new Discord.RichEmbed();
	embed.setTitle(`__Server Info for ${message.guild.name}__`)
	.addField("Name", message.guild.name, true)
	.addField("ID", message.guild.id, true)
	.addField("Location", message.guild.region, true)
	.addField("Owner", message.guild.owner.user.username, true)
	.addField("Owner ID", message.guild.ownerID, true)
	.addField("Member Count", message.guild.memberCount, true)
	.addField("Created At", message.guild.createdAt, true)
	.setThumbnail(message.guild.iconURL, true)
	.setColor("068BFD")
    .setFooter("Aphelion bot by Dan. and EC20")
	message.channel.send({embed});
}
