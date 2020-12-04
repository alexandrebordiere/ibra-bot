import * as path from 'path';
import { Guild, Message, VoiceChannel } from 'discord.js';

import commands from './commands';

function getAssetsPath(file: string) {
  return path.join(__dirname, '..', 'assets', file);
}

export async function findOrCreatePocebloEmoji(server: Guild) {
  const pocebloEmoji = server.emojis.cache.find(e => e.name === 'poceblo');

  if (pocebloEmoji) {
    return pocebloEmoji;
  }

  return server.emojis.create(getAssetsPath('/images/poceblo.png'), 'poceblo');
}

export async function playFile(voiceChannel: VoiceChannel, file: string) {
  const connection = await voiceChannel.join();

  return connection.play(getAssetsPath(`sounds/${file}`));
}

export function resolveCommand(message: Message) {
  const command = commands.find(c => c.signature === message.content.trim());

  if (!command) {
    return;
  }

  if (!message.member?.voice.channel) {
    message.member?.user.send('Vous devez être dans un salon vocal pour pouvoir effectuer cette action.');

    return;
  }

  command.exec(message.member.user, message.member.voice.channel);
}

export function shouldReactWithPoceBloEmoji() {
  const max = 6;

  return Math.floor((Math.random() * max) + 1) === 1;
}
