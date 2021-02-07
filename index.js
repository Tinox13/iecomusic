const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const bot = new Discord.Client();
const PREFIX = "!"

bot.on('ready', function () {
    console.log("Félicitations votre bot Discord a été correctement initialisé !")
});

bot.on("message", message => {
    if (message.content.startsWith(PREFIX + "play")) {
        if (message.member.voice.channel) {
            message.member.voice.channel.join().then(connection => {
                let args = message.content.split(" ");

                let dispatcher = connection.play(ytdl(args[1], { quality: "highestaudio" }));

                dispatcher.on("finish", () => {
                    dispatcher.destroy();
                    connection.disconnect();
                });

                dispatcher.on("error", err => {
                    console.log("erreur de dispatcher : " + err);
                });
            }).catch(err => {
                message.reply("Erreur lors de la connection : " + err);
            });
        }
        else {
            message.reply("Vous n'etez pas connecté en vocal!");
        }
    }
});   

bot.login(`ODA3NzAxMTcxODc5MDE4NTc3.YB70VQ.fTDEra8mB6bzUVrEl_YhcFx1Iqc`);