const Discord = require('discord.js'); 
const db = require('quick.db'); 
const ayarlar = require('../ayarlar.json')
exports.run = async (client, message, args) => { 





const sj = new Discord.MessageEmbed() 
.setColor(0xffd100)
.setTitle('Market')
.setDescription(`Ürünler: \n\n Araba Fiyatı: 500 TL \n\n\n __**Satın Almak İçin !satın-al <ürün>**__`)
.setTimestamp() 
message.channel.send(sj) 
}; 


module.exports.conf = {
  aliases: [],
  permLevel: 0,
  enabled: true,
  guildOnly: true
};
 
module.exports.help = {
  name: "market",
  description: "pat pat",
  usage: "market"
};