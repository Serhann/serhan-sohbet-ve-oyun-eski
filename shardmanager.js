const Discord = require('discord.js');
const client = new Discord.Client();
const Manager = new Discord.ShardingManager('./bot.js');
Manager.spawn(2);

Manager.on('launch', function(shard) {
	shard.fetchClientValue('guilds.size').then(count => {
	  console.log(`SHARD${shard.id}: Bölümünde ${count} adet sunucu bulunmakta.`);
	}).catch(console.error);
});