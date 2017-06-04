const ayarlar = require('../ayarlar.json');

let badWords = [
    "badword",
    "badword2",
    "badword3"
];

module.exports = message => {
  if(!message.guild) {
	return;
  }
  if(badWords[message.content]) {
    if (!message.member.hasPermission("BAN_MEMBERS")) {
      return message.delete();
	}
  }
  if(message.content.includes('annen  anan  amk  yarak  yarrak  oç  sikis  sikti  sikme sokus  sokma  domal  amcik  anal  analcum  asshole  azdirici  azgin  bakire  biseksuel  bitch boob  cenabet  ciplak  cock  suck  crap  dick  dump  emme  ensest  erotic  erotig erotik  esbian  escinsel  escort  fetish  fuck  gay  gerdek  gogus  got  hentai  homoseksüel hot  jigolo  kalca  kaltak  kerhane  kulot  lesbian  lezbiyen  liseli  lolita  mastirbas masturbasyon  mature  meme  mom  naughty  nubile  nude  nudist  olgun  oral  orgazm orospu  panty  penis  pervert  pezevenk  popo  porn  pussy  seks  sevisme  sex  sik sperm surtuk  swinger  taciz  tecavuz  teen  travesti  vagina  vajina  virgin  xnxx a.p  a.q  adult  amcık  ateşli  atesli  azdırıcı  azgın  boşalmak  bosalmak  cukpenis  cunub cünüp  cünup  daşşak  daşşağ  esrar  etek  fahise  fahişe  gey  geciktirici  göğüs  göt homoseksuel  kalça  kancik  kancık  külot  lezbien  mastırbas  mastürbasyon  mastürbas  pic  piç pkk  sapik  sevişme  amq  wtcn  uruspu  taşşak  çük  akp  chp  hdp  mhp  CcC cCc  Rte  kılıçdaroglu  kılıçtaroglu  csgolive  hellcase.com  csgo500.com')) {
    if (!message.member.hasPermission("BAN_MEMBERS")) {
      return message.delete() }
  }
};
