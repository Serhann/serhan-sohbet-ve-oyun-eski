const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = member => {
    let username = member.user.username;
    member.sendMessage('Hoş geldin **' + username + '**! Buraya arkadaşlarını davet edebilir ve onlarla oyun oynayabilir, yeni arkadaşlar edinip onlarla oyunlar oynayıp sohbet edebilirsin!');
};
