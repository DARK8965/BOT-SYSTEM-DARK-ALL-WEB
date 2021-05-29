const { MessageEmbed } = require('discord.js');
const db = require('quick.db');
const chalk = require('chalk');



/**
 * if (lang2 == "arabic") {}
 * if (lang2 == "english") {}
 */

module.exports = {
    name: "invite",
    cooldown: 5,
    aliases: ["inv"],

    run: async(client, message, args) => {
        var prefix = await db.fetch(`prefix_${message.guild.id}`);
        if (prefix == null) prefix = client.config.bot.setting.main_prefix;
        let Blacklist = await db.fetch(`Blacklist_${message.author.id}`);
        if (Blacklist === "on") {
            message.channel.send(new MessageEmbed()
                .setColor(client.build.colors.err)
                .setDescription(client.build.emojis.err + " **You Got Blacklisted!**"))
            return;
        }
        let embed = new MessageEmbed()

        .setTitle(" **`🛠(^-^)دعوة البوتات ل سيرفررك`**")

         .addField(`> (__BOT SYSTEM__)`,`**[(INVITE)](https://discord.com/api/oauth2/authorize?client_id=842865033695985715&permissions=8&scope=bot)**^-^**[(SUPPORT SERVER)](https://discord.gg/wGrrF3CRe2)**`,)

       //_______________(بطل العب يا حبيبي عشان محدش يحطوا في طيزك وكمان رعد يجي يطوا في طيزك)______________________//

         .addField(`> (__BOT PROTECTION__)`,`**[(INVITE)](https://discord.com/api/oauth2/authorize?client_id=842253910940975124&permissions=8&scope=bot)**^-^**[(SUPPORT SERVER)](https://discord.gg/wGrrF3CRe2)**`,)            
       //_______________(بطل العب يا حبيبي عشان محدش يحطوا في طيزك وكمان رعد يجي يطوا في طيزك)______________________//

         .addField(`> (__BOT INVITE__)`,`**[(INVITE)](https://discord.com/api/oauth2/authorize?client_id=842943024002498561&permissions=8&scope=bot)**^-^**[(SUPPORT SERVER)](https://discord.gg/wGrrF3CRe2)**`,)            
       //_______________(بطل العب يا حبيبي عشان محدش يحطوا في طيزك وكمان رعد يجي يطوا في طيزك)______________________//
       
         .addField(`> (__BOT TAX__)`,`**[(INVITE)](https://discord.com/api/oauth2/authorize?client_id=842243665236721694&permissions=8&scope=bot)**^-^**[(SUPPORT SERVER)](https://discord.gg/wGrrF3CRe2)**`,)            
       //_______________(بطل العب يا حبيبي عشان محدش يحطوا في طيزك وكمان رعد يجي يطوا في طيزك)______________________//
                 
         .addField(`> (__BOT EMOJIS__)`,`**[(INVITE)](https://discord.com/api/oauth2/authorize?client_id=839209876022231040&permissions=8&scope=bot)**^-^**[(SUPPORT SERVER)](https://discord.gg/wGrrF3CRe2)**`,)            
       //_______________(بطل العب يا حبيبي عشان محدش يحطوا في طيزك وكمان رعد يجي يطوا في طيزك)______________________//
.setTimestamp()
.setFooter("R3AD")
.setThumbnail(`https://cdn.discordapp.com/attachments/822300177124818964/845551584997670912/standard.gif`)
            .setColor(client.build.colors.warn)      
            .setColor(`#0000ff`)
            

        return message.channel.send(embed)
    }
};
