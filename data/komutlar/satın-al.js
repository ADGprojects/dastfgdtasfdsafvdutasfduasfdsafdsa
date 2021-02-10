const Discord = require('discord.js'); 
const db = require('quick.db'); 
const ayarlar = require('../ayarlar.json')
exports.run = async (client, message, args) => { 


var para = db.fetch(`${message.author.id}_para`)

if (args[0] === 'araba')
if (para < 500) {
    const sj = new Discord.MessageEmbed() 
.setColor(0xffd100)
.setTitle('Market')
.setDescription(`Maalasef Paranız Yetersiz Şuanki Paranız: ${para}`)
.setTimestamp() 
message.channel.send(sj) 
}
if (para > 500) {
      const sj = new Discord.MessageEmbed() 
.setColor(0xffd100)
.setTitle('Market')
.setDescription(`Satın Alma Başarılı Kalan Paranız: ${para}`)
.setTimestamp() 
db.add(`${message.author.id}_araba`,`1`)    
db.add(`${message.author.id}_para`,`-500`) 
message.channel.send(sj) 
}  
  
  if (args[0] === 'bisiklet')
if (para < 100) {
    const sj = new Discord.MessageEmbed() 
.setColor(0xffd100)
.setTitle('Market')
.setDescription(`Maalasef Paranız Yetersiz Şuanki Paranız: ${para}`)
.setTimestamp() 
message.channel.send(sj) 
}
if (para > 100) {
      const sj = new Discord.MessageEmbed() 
.setColor(0xffd100)
.setTitle('Market')
.setDescription(`Satın Alma Başarılı Kalan Paranız: ${para}`)
.setTimestamp() 
db.add(`${message.author.id}_bisiklet`,`1`)    
db.add(`${message.author.id}_para`,`-100`) 
message.channel.send(sj) 
}  

    if (args[0] === 'biligisayar')
if (para < 1200) {
    const sj = new Discord.MessageEmbed() 
.setColor(0xffd100)
.setTitle('Market')
.setDescription(`Maalasef Paranız Yetersiz Şuanki Paranız: ${para}`)
.setTimestamp() 
message.channel.send(sj) 
}
if (para > 1200) {
      const sj = new Discord.MessageEmbed() 
.setColor(0xffd100)
.setTitle('Market')
.setDescription(`Satın Alma Başarılı Kalan Paranız: ${para}`)
.setTimestamp() 
db.add(`${message.author.id}_bilgisayar`,`1`)    
db.add(`${message.author.id}_para`,`-1200`) 
message.channel.send(sj) 
}  
}; 


module.exports.conf = {
  aliases: [],
  permLevel: 0,
  enabled: true,
  guildOnly: true
};
 
module.exports.help = {
  name: "satın-al",
  description: "pat pat",
  usage: "satın-al"
};