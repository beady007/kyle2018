const Discord = require('discord.js);
const bot = nw Discord.Client();

var prefix = ("*");

bot.on('ready', fuction() [
    bot.user.setGame ("command: *help");
    console.log("Connectedç");
]);

bot.login("NDUxNzYyOTg4ODMyMjYwMTA2.DfGgyw.lLsehr7-6YtlbohWv9awv2cfJYQ");


bot.on('message', message => [
    if (message.content === prefix + "help")[
        message.channel.sendMessage("liste des commandes: \n -*help");
    ]

    if (message.content === "Salut")¨[
        message.reply("Bien le boonjour. :)");
        console.log("Commande Salut effectué");
    ]
]);
