const qrcode = require("qrcode-terminal");
const { Client, LocalAuth } = require("whatsapp-web.js");
const { exec } = require('child_process');
const prefix = '!';

const client = new Client({
  authStrategy: new LocalAuth()
});

client.on('qr', qr => {
  qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
  console.log('Client is ready!');
});

client.on('message', message => {
  if(message.type!='chat')return 
  if(message.from!='5493483466390@c.us')return message.reply('Acceso denegado')
  const messageArray = message.body.split(" ");
  const command = messageArray[0];
  if(command=='!ping'){
    message.reply('pong! 🏓');
  };
  if(command=='!apagar'){
    message.reply('Apagando . . .');
    exec('shutdown /s');
  };

});

client.initialize();