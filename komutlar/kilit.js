const ms = require('ms');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix

exports.run = (client, msg, args) => {
  if (!msg.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(msg.author.username, msg.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`kilit` adlı komutu özel mesajlarda kullanamazsın.')
  return msg.author.sendEmbed(ozelmesajuyari); }
  if (!client.lockit) client.lockit = [];
  let time = args.join(' ');
  let validUnlocks = ['release', 'unlock'];
  if (!time) return msg.reply('Doğru kullanım: ' + prefix + 'kilit <süre örneğin: 2 min>');

  if (validUnlocks.includes(time)) {
    msg.channel.overwritePermissions(msg.guild.id, {
      SEND_msgS: null
    }).then(() => {
      msg.channel.sendmsg('Kanal kilidi açıldı.');
      clearTimeout(client.lockit[msg.channel.id]);
      delete client.lockit[msg.channel.id];
    }).catch(error => {
      console.log(error);
    });
  } else {
    msg.channel.overwritePermissions(msg.guild.id, {
      SEND_msgS: false
    }).then(() => {
      msg.channel.sendmsg(`Kanal kilitlendi. ${ms(ms(time), { long:true })}`).then(() => {

        client.lockit[msg.channel.id] = setTimeout(() => {
          msg.channel.overwritePermissions(msg.guild.id, {
            SEND_msgS: null
          }).then(msg.channel.sendmsg('Kanalın kilidi açıldı.')).catch(console.error);
          delete client.lockit[msg.channel.id];
        }, ms(time));

      }).catch(error => {
        console.log(error);
      });
    });
  }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['ld'],
  permLevel: 2
};

exports.help = {
  name: 'kilit',
  description: 'Kanalı istediğiniz kadar süreyle kitler.',
  usage: 'kilit <süre>'
};
