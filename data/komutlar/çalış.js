const Discord = require('discord.js'); 
const db = require('quick.db'); 
const ayarlar = require('../ayarlar.json')
exports.run = async (client, message, msg, args) => { 

 

  
  
  


    var sayı = [Math.floor(Math.random() * 100)];


const sayfa = [`Tebrikler  ${sayı} TL para kazandınız`]
db.add(`${message.author.id}_para`,`${sayı}`)
const sj = new Discord.MessageEmbed() 
.setColor(0xffd100) 
.setTitle(`Çalıştın`)
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
  name: "çalış",
  description: "para",
  usage: "çalış"
};