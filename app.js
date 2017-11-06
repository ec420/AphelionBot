const Discord = require('discord.js')
const client = new Discord.Client();
const settings = require('./settings.json');
require('./util/eventLoader')(client);

client.login(settings.token);