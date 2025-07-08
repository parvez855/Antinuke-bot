require('dotenv').config(); // Load env variables immediately

const MainClient = require('./bot.js');
const client = new MainClient();

client.connect();

module.exports = client;
