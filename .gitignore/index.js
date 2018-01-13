const discord = require('discord.js'),
client = new discord.Client();
const token = (process.env.TOKEN);
var prefix = "/";
client.on("ready", () => {
client.user.setPresence({ game: { name: ' /help ', type: 0}});
console.log('|Le bot est en ligne.|');
});

client.login(token)

client.on('guildMemberAdd', member => {
let role = member.guild.roles.find("name","--=[Visiteur]=--");
const channel = member.guild.channels.find("name", "accueil").send(`Bonjour et bienvenue sur le discord de DreamsCraft ${member.user} ! :smiley: `)
member.addRole(role)
});

client.on('guildMemberRemove', member => {
const channel = member.guild.channels.find('name', 'accueil').send(` ${member.user} a quitté le discord de DreamsCraft !`);
});

client.on('message', message =>{
if (message.content === ("/help")) {
 message.channel.send("", {
embed: {
color: 4400734,
author: message.author.name,
title: ' Voici les commandes du DreamsCraft BOT :',
description: ' ',
fields: [{
name: '``:help``',
value: "``Affiche les commandes du DreamsCraft BOT``",
inline: true
}, {
name: '``:dc``',
value: "``Donne les informations concernant le serveur.``",
inline: true
}, {
name: '**:partenaires**',
value: "``Donne la liste de nos partenaires officiels.``",
inline: false
}
],
thumbnail: {
url: message.client.iconURL
},
footer: {
text: 'Pour toute autres demande, le staff de DreamsCraft se tient à votre disposition.',
}
}
});
}});

client.on('message', message => {
if(message.content == ("/partenaires")){
message.reply("Voici la liste des serveurs partenaires de DreamsCraft : DisneyWorldParks -  UniversParks  - McDreams  !");
}
if(message.content == ("/dc")){
message.reply("L'ip de DreamsCraft est : DreamsCraft.minecraft-mania.fr en version 1.12.2 de minecraft premium !");
}
});
