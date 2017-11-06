const Discord = require('discord.js');

exports.run = function(client, message, args) {
	const embed1 = new Discord.RichEmbed();
	const embed2 = new Discord.RichEmbed();
	let reason = message.content.split(/\s+/g).slice(2).join(" ");
	 if (!message.member.hasPermission("VIEW_AUDIT_LOG")) return message.channel.sendMessage("**:raised_hand: You don't have permission to use this command!**");
	if(message.mentions.users.size === 0) {
		message.channel.send(`**${message.author} You need to mention a user!  :angry:**`);
	}
	if(message.mentions.users.size > 1) {
		message.channel.send(`**${message.author} You can only mention one user! :bangbang:**`);
	}
	if(reason.length === 0) {
		message.channel.send(`**${message.author} You need to include a reason next time! :facepalm:**`);
	}
	embed1.setTitle("__User Striked__")
	.setDescription(`${message.mentions.members.first().user.username} has been striked! :hammer:`)
	.setColor("#ff0000")
	message.channel.send({embed: embed1});

	embed2.setTitle("__You've been striked!__")
	.setDescription(`It looks like you've been striked by ${message.author.tag} on ${message.guild.name}! :hammer:\n Reason: ${reason}`)
	.setColor("#ff0000")
	message.mentions.members.first().send({embed: embed2});
}