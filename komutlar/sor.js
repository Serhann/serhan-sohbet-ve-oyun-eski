const Discord = require('discord.js');
const client = new Discord.Client();
const Cleverbot = require('cleverbot-node');
const clbot = new Cleverbot;

exports.run = (client, message, args) => {
    Cleverbot.prepare(() => {
      clbot.write(message.content, (response) => {
        message.channel.startTyping();
        setTimeout(() => {
          message.reply(response.message).catch(console.error);
          message.channel.stopTyping();
        }, Math.random() * (1 - 3) + 1 * 1000);
      });
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['s', 'konuş', 'sohbet', 'ask'],
  permLevel: 0
};

exports.help = {
  name: 'sor',
  description: 'Soru sormaya yarar.',
  usage: 'sor <soru>'
};
