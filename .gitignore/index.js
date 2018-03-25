const discord = require('discord.js'),
client = new discord.Client();
const token = (process.env.TOKEN);
client.on("ready", () => {
});

client.on("ready", () => {
client.user.setPresence({ game: { name: ' #Pirate ou #Princesse ! ', type: 0}});
});

client.login(token)

client.on('message', message => {

var TeamPirates = client.guilds.get(message.guild.id).roles.find("name", "Team Pirates");
var TeamPrincesses = client.guilds.get(message.guild.id).roles.find("name", "Team Princesses");

const PirateEmoji = client.emojis.find("name", "Emoji_Props_Universal1L");
const PrincesseEmoji = client.emojis.find("name", "EmojiBlitzJasmine");

if(message.content.toLocaleLowerCase() == ("#pirate")){
 message.channel.send(`Tu es maintenant dans la team Pirates ${message.author} ${PirateEmoji} !`);
 message.guild.member(message.author).addRole(TeamPirates);
 message.guild.member(message.author).removeRole(TeamPrincesses);
 }

 if(message.content.toLocaleLowerCase() == ("#princesse")){
 message.channel.send(`Tu es maintenant dans la team Princesses ${message.author} ${PrincesseEmoji} !`);
 message.guild.member(message.author).addRole(TeamPrincesses);
 message.guild.member(message.author).removeRole(TeamPirates);
 }

});
