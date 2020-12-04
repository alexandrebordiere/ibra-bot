import { User, VoiceChannel } from 'discord.js';

export enum CommandType {
  AUDIO = 'audio',
  TEXT = 'text'
}

export type Command = {
  signature: string
  type: CommandType
  description: string
  exec: (user: User, voiceChannel: VoiceChannel) => void
}
