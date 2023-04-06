const fs = require('fs')

global.fotomenfess = fs.readFileSync("./menfess.jpg")
global.owner = ["6285840104297"]

global.help = {
Menu(pushname){
  return `Halo Kakk ${pushname}

Saya adalah Bot WhatsApp Confess 👋 ketik .confess untuk memulai chat.

Powered by https://wahyudiid.w3spaces.com
`
}
}