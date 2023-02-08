const {
  EmbedBuilder,
  ButtonBuilder,
  ActionRowBuilder,
  ButtonStyle,
} = require("discord.js");

module.exports = {
  name: "about",
  category: "Information",
  aliases: ["botinfo", "info"],
  description: "See information about this project.",
  args: false,
  usage: "",
  userPerms: [],
  owner: false,
  execute: async (message, args, client, prefix) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setLabel("Invite")
        .setStyle(ButtonStyle.Link)
        .setURL(
          `https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=36768832&scope=applications.commands%20bot`
        ),
      new ButtonBuilder()
        .setLabel("GitHub")
        .setStyle(ButtonStyle.Link)
        .setURL("https://github.com/kartik-opbolte"),
      new ButtonBuilder()
        .setLabel("Support")
        .setStyle(ButtonStyle.Link)
        .setURL("https://discord.gg/C9teVv827a")
    );

    const mainPage = new EmbedBuilder()
      .setAuthor({
        name: "Music.ly",
        iconURL:
          "https://images-ext-1.discordapp.net/external/tCiongtB5c9k0es3egxa4ZTFxuDoMgPcurX3Cm3LWGc/%3Fsize%3D4096%26ignore%3Dtrue%29./https/cdn.discordapp.com/avatars/1010182301113667655/a015413b9757f58c9464a292dd2ab1af.png",
      })
      .setThumbnail(
        "https://images-ext-1.discordapp.net/external/tCiongtB5c9k0es3egxa4ZTFxuDoMgPcurX3Cm3LWGc/%3Fsize%3D4096%26ignore%3Dtrue%29./https/cdn.discordapp.com/avatars/1010182301113667655/a015413b9757f58c9464a292dd2ab1af.png"
      )
      .setColor(client.embedColor)
      .addFields([
        {
          name: "Creator",
          value:
            "[KARTIK PANDEY#8482](https://github.com/kartik-opbolte)",
          inline: true,
        },
        {
          name: "Repository",
          value: "[Here](https://github.com/kartik-opbolte)",
          inline: true,
        },
        {
          name: "\u200b",
          value: 'Music.ly was created by [Zaynex](https://youtube.com/@ZayNex_XD) He really wanted to make his first open source project ever for more coding experience. In this project, he was challenged to make a project with less bugs. Hope you enjoy using LavaMusic!',
           inline: true, 
         },
       ]);
    await interaction.followUp({ embeds: [mainPage], components: [row] });
  },
};
