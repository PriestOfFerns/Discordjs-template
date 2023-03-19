const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('gpt4')
		.setDescription('Talk to gpt-4')
        .addStringOption(option =>
            option.setName('prompt')
                .setDescription('The prompt given to gpt4')
                .setRequired(true) ),
	async execute(interaction) {
        const prompt = interaction.options.getString("prompt")
        
		await interaction.reply("Your prompt was: "+prompt);
	},
};