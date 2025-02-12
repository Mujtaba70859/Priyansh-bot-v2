const fs = require("fs");
module.exports.config = {
        name: "autoreact",
  version: "1.0.0",
        hasPermssion: 0,
        credits: "Minami Tatsuo",
        description: "\u0041\u0075\u0074\u006f \u0072\u0065\u0061\u0063\u0074\u0069\u006f\u006e \u006d\u0061\u0064\u0065 \u0062\u0079 \u004d\u0069\u006e\u0061\u006d\u0069 \u0054\u0061\u0074\u0073\u0075\u006f",
        commandCategory: "no prefix",
        usages: "noprefix",
    cooldowns: 0,
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
 let haha = event.body.toLowerCase();
  if (this.config.credits != '\u004d\u0069\u006e\u0061\u006d\u0069 \u0054\u0061\u0074\u0073\u0075\u006f') {
        console.log('\x1b[33m[ WARN ]\x1b[37m » \u0043\u0072\u0065\u0064\u0069\u0074\u0073 \u0068\u0061\u0073 \u0062\u0065\u0065\u006e \u0063\u0068\u0061\u006e\u0067\u0065\u0064\u0021 \u0053\u0074\u006f\u0070 \u004e\u006f\u0077\u0021'+ global.config.BOTNAME + ' đổi credits modules "' + this.config.name + '"');
        return api.sendMessage('[ WARN ] \u0053\u0054\u004f\u0050 \u0043\u0048\u0041\u004e\u0047\u0049\u004e\u0047 \u0043\u0052\u0045\u0044\u0049\u0054\g \u0049\u0044\u0049\u004f\u0054 ' , event.threadID, event.messageID);
      }
  if (haha.includes("lol") || haha.includes("😂") || haha.includes("haha") || haha.includes("pagal") || haha.includes("mental") || haha.includes("oye") || haha.includes("love") || haha.includes("jani") || haha.includes("bc") || haha.includes("group") || haha.includes("kis") || haha.includes("kuta") || haha.includes("jan") || haha.includes("oh")){                 
    return api.setMessageReaction("😂", event.messageID, (err) => {}, true)
    api.markAsSeen(1, (err) => {});
  }
    if (haha.includes("death") || haha.includes("mar") || haha.includes("udas") || haha.includes("☹️") || haha.includes("hurt") || haha.includes("please") || haha.includes("😢") || haha.includes("😔") || haha.includes("🥺") || haha.includes("sad")){
      return  api.setMessageReaction("😢", event.messageID, (err) => {}, true);
}
  if (haha.includes("🥵") || haha.includes("umah") || haha.includes("💋") || haha.includes("kiss") || haha.includes("babu") || haha.includes("wow") || haha.includes("wah") || haha.includes("relationship") || haha.includes("gf") || haha.includes("baby") || haha.includes("omg")){
    return api.setMessageReaction("😘", event.messageID, (err) => {}, true)
        }
  if (haha.includes("BABU") || haha.includes("JANU")){
    api.setMessageReaction("OYE", event.messageID, (err) => {}, true)
    api.sendMessage("G BABU BOLO AP KY ANA SY MUH PY SMILE AH GAI 😂 LAKN HO AP CHABAL", event.threadID,event.messageID);
  }
  if (haha.includes("Hi") || haha.includes("Hy")){
    api.sendMessage("SALAM BABU , KIA HAIL HAI <3 ", event.threadID, event.messageID)
  }
  if (haha.includes("acha") || haha.includes("ok")){
    api.sendMessage("han g babu", event.threadID, event.messageID)
  }
  if (haha.includes("good morning") || haha.includes("morning")){
    api.sendMessage("good morning aby ab konsa morning ja mera mood kharab hai", event.threadID, event.messageID)
  }
if (haha.includes("good night") || haha.includes("night")){
    api.sendMessage("aby so ja good night mobile rakh ky so ja werna ma ah jaou ga", event.threadID, event.messageID)
}
if (haha.includes("ib") || haha.includes("inbox")){
    api.sendMessage("ma bhi aou kia chupka chupka kyu bola rha us ko", event.threadID, event.messageID)
}
  if (haha.includes("kon") || haha.includes("KON")){
    api.sendMessage("ACHA ACHA TUM TO WOHI HO NAH JIS KO KOI NHI JANTA 😂 CHAL KOI NAH MA HU NA , MA BHI NHI JANTA", event.threadID, event.messageID)
      }
}
        module.exports.run = function({ api, event, client, __GLOBAL }) {
      }
