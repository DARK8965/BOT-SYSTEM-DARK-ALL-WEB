const { MessageAttachment, MessageEmbed } = require('discord.js');
const DIG = require("discord-image-generation");
const db = require('quick.db');

module.exports = {
    name: "trash",
    description: "Your Frend Is Trash",
    cooldown: 5,
    aliases: [""],

    run: async(client, message, args) => {
        let Blacklist = await db.fetch(`Blacklist_${message.author.id}`);
        if (Blacklist === "on") return message.channel.send(new MessageEmbed()
            .setColor(client.build.colors.err)
            .setDescription(client.build.emojis.err + " **You Got Blacklisted!**"));
        var prefix = await db.fetch(`prefix_${message.guild.id}`);
        if (prefix == null) prefix = client.config.bot.setting.main_prefix;
        let user = message.mentions.users.first();
        if (!user) return message.channel.send(new MessageEmbed()
            .setDescription(client.build.emojis.warn + " Please mention sameone!")
            .setColor(client.build.colors.warn)
            .setColor(client.build.emojis.warn));
        const avatar2 = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Trash().getImage(`${avatar2}`);

        let attach = new MessageAttachment(img, "Trash.png");;

        message.channel.send(attach)
    }
};