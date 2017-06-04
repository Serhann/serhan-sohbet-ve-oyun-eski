const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("dnd");
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Oyun ismi ayarlandı!`);
  /* client.channels.get("290706510374371329").sendMessage("Görevli başlatıldı.").then(message => console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Gönderilen mesaj: ${message.content}`)).catch(console.error);
  client.channels.get("290706510374371329").sendMessage("BİLGİ: Görevli şu an " + client.channels.size + " adet kanala, " + client.guilds.size + " adet sunucuya ve " + client.users.size + " adet kullanıcıya hizmet veriyor!").then(message => console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Gönderilen mesaj: ${message.content}`)).catch(console.error);
  client.channels.get("290706510374371329").sendMessage("BİLGİ: Görevli'nin sürümü v" + ayarlar.surum + "").then(message => console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Gönderilen mesaj: ${message.content}`)).catch(console.error);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Mesaj gönderildi!`); */
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Şu an ` + client.channels.size + ` adet kanala, ` + client.guilds.size + ` adet sunucuya ve ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullanıcıya hizmet veriliyor!`);
};
