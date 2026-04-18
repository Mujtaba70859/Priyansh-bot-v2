// Optimized bot.js code with requested modifications

const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

// Command handling
client.on('messageCreate', message => {
    if (message.author.bot) return;

    const content = message.content.trim();

    // Check for empty message
    if (!content) {
        message.reply('براہ کرم کچھ بھیجیں۔'); // Please send something.
        return;
    }

    // Respond to commands
    if (content === '!hello') {
        message.reply('ہیلو!'); // Hello!
    } else if (content === '!time') {
        const now = new Date();
        const formattedTime = now.toISOString().replace('T', ' ').substring(0, 19);
        message.reply(`موجودہ وقت: ${formattedTime}`); // Current time:
    }
    // Add more commands and their responses as needed
});

// Client login
client.login('YOUR_TOKEN');