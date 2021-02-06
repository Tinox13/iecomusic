const {VoiceConnection} = require('discord.js');
const { Command, CommandoMessage } = require(`discord.js-commando`);
const ytdl = require(`ytdl-core-discord`);

module.exports = class PlayCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'pause',
            group: 'music',
            memberName: 'pause',
            description: 'A mis en pause ma musique.',
        });
    }
    /**
     * 
     * @param {CommandoMessage} message 
     * @param {String} query 
     */
    async run(message) {
        console.log(message.member.voice.channel);
        if (!message.member.voice.channel) {
            return message.say(':x: tu dois être dans un salon vocal pour pouvoir utilisé cette commande.');
        }

        if (!message.client.voice.connections.first()) {
            return message.say(':x: je ne suis pas connectè dans un salon bip bip ieco bot youtube arrive tres vites. Tape `-join`');
        }

        if (message.client.server.dispatcher) {
            server.dispatcher.pause();
        }

        return message.say(":pause_boutton: Pause :thundsup:");
    }
}