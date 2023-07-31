const Discord = require('discord.js');
const intents = new Discord.IntentsBitField(3276799)
const client = new Discord.Client({intents});
const config = require('config.json');

const consoleCmd = new Discord.SlashCommandBuilder().setName("console").setDescription("Cette commande vous permez d'éxécuter une commande sur votre console de votre serveur FiveM").setStringOption(options => options.setName("commande").setDescription("La commande que vous voulez éxécuter sur votre serveur FiveM".setRequired(true)).setDMPermission(true)

client.on("ready", () => {
	console.log(`${client.user.tag} est connecter`)
	
	client.application.command.create(consoleCmd)
})

client.on("interactionCreate", interaction =>{
   if(!interaction.isCommand) return;
   if(interaction.user.id !== config.owner) return;
   
   if(interaction.commandName === "console") {
        const cmd = interaction.options.getString("commande")
        
        ExecuteCommand(cmd)
        
        interaction.reply("La commande a bien été envoyer et éxécuter dans la console de votre serveur FiveM")
   }
}

client.login(config.token)
