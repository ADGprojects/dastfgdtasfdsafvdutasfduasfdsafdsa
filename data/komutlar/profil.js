const Discord = require('discord.js'); 
const db = require('quick.db'); 
const ayarlar = require('../ayarlar.json')
exports.run = async (client, message, args) => { 







var para = db.fetch(`${message.author.id}_para`)
var cips = db.fetch(`${message.author.id}_araba`)



const sayfa = [`${message.author}'nın Profili \n Parası: ${para} TL \n Araba Sayısı: ${cips}`]
const sj = new Discord.MessageEmbed() 
.setColor(0xffd100) 
.setTitle(`Profil`)
.setDescription(sayfa)
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
  name: "profil",
  description: "para",
  usage: "profil"
};