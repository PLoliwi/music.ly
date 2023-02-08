require("dotenv").config();

module.exports = {
  token: process.env.TOKEN, // your bot token
  clientID: process.env.CLIENT_ID, // your bot client id
  prefix: process.env.PREFIX || "m+", // bot prefix
  ownerID: process.env.OWNERID, //your discord id
  SpotifyID: process.env.SPOTIFYID,
  SpotifySecret: process.env.SPOTIFYSECRET,
  mongourl: process.env.MONGO_URI, // MongoDb URL
  embedColor: process.env.COlOR || 0x303236, // embed colour
  logs: process.env.LOGS, // channel id for guild create and delete logs
  links: {
    img:
      process.env.IMG ||
      "https://media.discordapp.net/attachments/1049713931339440181/1056058949150965820/Picsart_22-12-24_09-30-43-031.jpg", //setup system background image
    support: process.env.SUPPORT || "https://discord.gg/aYT5dHDkab", //support server invite link
    invite:
      process.env.INVITE, //bot invite link
  },
  nodes: [
    {
      host: process.env.NODE_HOST || "lavalink.clxud.lol",
      port: parseInt(process.env.NODE_PORT || "2333"),
      password: process.env.NODE_PASSWORD || "youshallnotpass",
      secure: parseBoolean(process.env.NODE_SECURE || "false"),
    },
  ],
};

function parseBoolean(value) {
  if (typeof value === "string") {
    value = value.trim().toLowerCase();
  }
  switch (value) {
    case true:
    case "true":
      return true;
    default:
      return false;
  }
}
