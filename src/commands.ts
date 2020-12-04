import { Command, CommandType } from './types';
import { playFile } from './utils';

const commands: Command[] = [
  {
    signature: '!ibra bonjour',
    type: CommandType.AUDIO,
    description: 'Bonjour le mondeeee',
    exec(_, voiceChannel) {
      playFile(voiceChannel, 'bonjour-le-monde.mp3');
    }
  },
  {
    signature: '!ibra aurevoir',
    type: CommandType.AUDIO,
    description: 'Au revoir les kheys',
    exec(_, voiceChannel) {
      playFile(voiceChannel, 'au-revoir.mp3');
    }
  },
  {
    signature: '!ibra poceblo',
    type: CommandType.AUDIO,
    description: 'Lache poce blo',
    exec(_, voiceChannel) {
      playFile(voiceChannel, 'poce-blo.mp3');
    }
  },
  {
    signature: '!ibra help',
    type: CommandType.TEXT,
    description: 'Liste toutes les commandes',
    exec(user) {
      user.send(
        commands.map(c => `**${c.signature}**: ${c.description}`).join('\n')
      );
    }
  }
];

export default commands;
