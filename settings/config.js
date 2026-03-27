// IKUTI PETUNJUK INI AGAR KALIAN BISA AKSES BOTNYA, JIKA SUDAH MENGUBAH BAGIAN SINI, LANGKAH KE 2 KALIAN MASUK KE BAGIAN FILE : justinofficial, LALU MASUK KE BAGIAN lib, LALU MASUK KE BAGIAN database, DAN MASUK KEBAGIAN owner.json, DISITU KALIAN TINGGAL UBAH NOMERNYA PAKE NOMER KALIAN, JANGAN LUPA AWALI DENGAN 628 ✓ , 08 X

//Don't Delete Credit : By JustinOfficial
// YOUTUBE : JustinOfficial-ID


const fs = require('fs')

const config = {
    owner: "923344414986", //GANTI NOMER KALIAN AGAR BISA AKSES BOT
    botNumber: "923344414986", //GANTI NOMER KALIAN AGAR BISA AKSES BOT
    setPair: "JUSTIN24",
    thumbUrl: "https://files.catbox.moe/q00p88.jpg",
    session: "sessions",
    status: {
        public: true, //UBAH KE false JIKA INGIN BOT KALIAN KE MODE self
        terminal: false, //JANGAN DI UBAH, JIKA UBAH KE false MAKA AKAN MENGGUNAKAN QR CODE
        reactsw: false, //BEBAS UBAH KE true, AGAR AUTO REACT SW
    },
    message: {
        owner: "*｢ 𝐀𝐂𝐂𝐄𝐒 𝐃𝐄𝐍𝐈𝐄𝐃 ｣*",
        group: "Ketiknya Didalam Group Yang Mau Di Bug Bego.",
        admin: "*｢ 𝐀𝐂𝐂𝐄𝐒 𝐃𝐄𝐍𝐈𝐄𝐃 ｣*",
        private: "this is specifically for private chat"
    },
    settings: {
        title: "TikTok @JustinAndiar",
        packname: 'TikTok @JustinAndiar',
        description: "This Script Was Created By JustinOfficial",
        author: 'https://www.tiktok.com/@justinandiar',
        footer: "YouTube JustinOfficial-ID"
    },
    newsletter: {
        name: "Information JustinOfficial",
        id: "120363424020283759@newsletter"
    },
    socialMedia: {
        YouTube: "https://youtube.com/@justinofficial-id",
        GitHub: "https://github.com/kiuur",
        Telegram: "https://t.me/justinoffc",
        ChannelWA: "https://whatsapp.com/channel/0029Vb74uViD38CaImFUrc44"    
    }
}

module.exports = config;

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
