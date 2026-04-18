// Example commands for the bot

const commands = {
    greet: function(name) {
        return `Hello, ${name}!`;  
    },
    farewell: function(name) {
        return `Goodbye, ${name}!`;  
    },
};

const responses = [
    "I'm here to assist you!",  
    "What can I do for you today?"
];

const formatDate = (date) => {
    return date.toISOString().slice(0, 19).replace('T', ' ');
};

const currentDateTime = formatDate(new Date());
console.log(currentDateTime);

module.exports = { commands, responses };