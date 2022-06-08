const qrcode = require("qrcode-terminal");
const { Client, LocalAuth } = require("whatsapp-web.js");
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
  const messageArray = message.body.split(" ");
  const command = messageArray[0].slice(prefix.length);
  if(!command.startsWith(prefix))return 
  // console.log(messageArray);
  
  if(command=='help'){
    message.reply('comando *help*');
  };

});

client.initialize();