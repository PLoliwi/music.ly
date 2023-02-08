const MusicBot = require("./structures/Client");
const client = new MusicBot();
const express = require('express');
const app = express();
const port = 3000;
app.listen(port, () => console.log(`Bot running on http://localhost:${port}`));

client.connect()

process.on('unhandledRejection', (reason, p) => {
    console.log(reason, p);
});

process.on('uncaughtException', (err, origin) => {
    console.log(err, origin);
});

process.on('uncaughtExceptionMonitor', (err, origin) => {
    console.log(err, origin);
});


module.exports = client;
