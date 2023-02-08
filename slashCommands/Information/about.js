const {
  EmbedBuilder,
  CommandInteraction,
  Client,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  ApplicationCommandType,
} = require("discord.js");

module.exports = {
  name: "about",
  description: "See information about this project.",
  type: ApplicationCommandType.ChatInput,
  /**
   *
   * @param {Client} client
   * @param {CommandInteraction} interaction
   */

  run: async (client, interaction) => {
    await interaction.deferReply({
      ephemeral: false,
    });

    const button = new ButtonBuilder()
      .setLabel("Invite")
      .setStyle(ButtonStyle.Link)
      .setURL(
        `https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=36768832&scope=applications.commands%20bot`
      );

    const button2 = new ButtonBuilder()
      .setLabel("GitHub")
      .setStyle(ButtonStyle.Link)
      .setURL("https://github.com/kartik-opbolte");

    const button3 = new ButtonBuilder()
      .setLabel("Support Server")
      .setStyle(ButtonStyle.Link)
      .setURL("https://discord.gg/C9teVv827a");

    const row = new ActionRowBuilder().addComponents(button, button2, button3);

    const mainPage = new EmbedBuilder()
      .setAuthor({
        name: "Music.ly",
        iconURL:
          "https://images-ext-1.discordapp.net/external/tCiongtB5c9k0es3egxa4ZTFxuDoMgPcurX3Cm3LWGc/%3Fsize%3D4096%26ignore%3Dtrue%29./https/cdn.discordapp.com/avatars/1010182301113667655/a015413b9757f58c9464a292dd2ab1af.png",
      })
      .setThumbnail(
        "https://images-ext-1.discordapp.net/external/tCiongtB5c9k0es3egxa4ZTFxuDoMgPcurX3Cm3LWGc/%3Fsize%3D4096%26ignore%3Dtrue%29./https/cdn.discordapp.com/avatars/1010182301113667655/a015413b9757f58c9464a292dd2ab1af.png"
      )
      .setColor(0x303236)
      .addFields([
        {
          name: "Creator",
          value:
            "[KARTIK PANDEY#8482](https://github.com/kartik-opbolte)",
          inline: true,
        },
        {
          name: "Organization",
          value: "[Zaynex](https://github.com/kartik-opbolte)",
          inline: true,
        },
        {
          name: "Repository",
          value: "[Here](https://github.com/kartik-opbolte)",
          inline: true,
        },
        {
          name: "\u200b",
          value: `Music.ly was created by [Zaynex](https://youtube.com/@ZayNex_XD) He really wanted to make his first open source project ever for more coding experience. In this project, he was challenged to make a project with less bugs. Hope you enjoy using LavaMusic!`,
          inline: true,
        },
      ]);
    await interaction.followUp({ embeds: [mainPage], components: [row] });
  },
};
