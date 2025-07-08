const { Client, Collection } = require('discord.js');
const mongoose = require('mongoose');

class MainClient extends Client {
  constructor() {
    super({
      shards: 'auto',
      allowedMentions: { parse: ['users', 'roles'] },
      intents: 32767,
    });

    this.config = require('./Settings/config.js');
    this.owner = this.config.OWNER_ID;
    this.dev = this.config.DEV_ID;
    this.color = this.config.EMBED_COLOR;
    if (!this.token) this.token = this.config.TOKEN;

    process.on('unhandledRejection', error => console.error('Unhandled Rejection:', error));
    process.on('uncaughtException', error => console.error('Uncaught Exception:', error));

    ['slash', 'premiums'].forEach(x => this[x] = new Collection());
    ['Command', 'Antinuke', 'errLogger', 'Events', 'Database'].forEach(handler => {
      require(`./Handler/${handler}`)(this);
    });
  }

  async connect() {
    try {
      console.log('Connecting to MongoDB...');
      await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('MongoDB connected!');

      await super.login(this.token);
      console.log('Discord client logged in!');
    } catch (error) {
      console.error('Connection error:', error);
    }
  }
}

module.exports = MainClient;
