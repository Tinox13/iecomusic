const { CommandoClient } = require(`discord.js-commando`);
const path = require(`path`);

const client = new CommandoClient({
    commandPrefix: `-`,
    owner: "505166303842140186",
    invite: "https://discord.gg/aYG9MVpG"
});

client.registry
    .registerDefaultTypes()
    .registerDefaultGroups()
    .registerDefaultCommands()
    .registerGroup("music", "Music")
    .registerCommandsIn(path.join(__dirname, "commands"));

client.server = {
    queue:[],
    currentVideo: {title: "", url: "" },
    dispatcher: null
};


client.once("ready", () => {
    console.log(`Bot bien initialisé ${client.user.tag} -  (${client.user.id})`);
})

client.on("error", (error) => console.error(error));

client.login(`ODA3NzAxMTcxODc5MDE4NTc3.YB70VQ.bwwoChhxQGZkRD2Sb_ffrfcZjro`);