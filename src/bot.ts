import { Client } from 'discord.js';

import { findOrCreatePocebloEmoji, resolveCommand, shouldReactWithPoceBloEmoji } from './utils';

const bot = new Client;

bot.on('message', async message => {
  if (!message?.guild) {
    return;
  }

  resolveCommand(message);

  if (shouldReactWithPoceBloEmoji()) {
    message.react(await findOrCreatePocebloEmoji(message.guild));
  }
});

// Destroy the client "properly" when the process is being terminated.
process.on('exit', () => bot.destroy());
process.on('SIGINT', () => process.exit());

export default bot;
