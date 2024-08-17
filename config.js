//RCD code
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0hMZHAycUVYV0paZlFFaEVDSklpNlkvOUJoNjBPSWVyeC9kYUowNVpsdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaFQwTUIxcmE0YkhiQmlBSy9zdG9PZXRjeGkvSHhJN09ncUUyb1QvQUV3WT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlRFRSSlJFQUlRV0FwcFF3N1V0d0E1K0dmZ3UyWWhJQTBZUXZMUjRoQVhZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5dm5UdTJRNkwzQzBuRVgzS0tXMVUyZjlGM2pOZnlOZGtmQUhtM3lWQ0RRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdOU3E2ZUlHRUxEUzl1M1hEQzBGYTd3cFBjQU9WNDU0TmN4WlJyTUtSMDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJxUnAyZFcyOE1CYXpWWHF3dUVHaFZvSEhXNUZLMTJxQU11TEJGWFdpUVk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUtyM3I3dmhZdWVuaUlyT1BsL1FkellXZnVPc1hKTzRwMG5kQzB1ZWpFcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRE1WUGdEN05TV0ZTdU9VbCsrNzl4Rmw1LzZPY3BOWGdDQVdWWG1wWHV4QT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9sYXkvcDZFd2llSGU2RnNQM0YvQmJlL1N2T2NnZThNY1dwYUdkTnVLeFBxb3BieUYrQlJoV3RZeEF3d3Y2MHhyQkhTTnpCSG1wb29RdWw3alhKY2hBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTcwLCJhZHZTZWNyZXRLZXkiOiJDcXZHdWl6WHYxOFFEN0NmdlVwN1JZUExMU0tCQko2TFhQUExHalZyYy84PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkxOTQ3MDY2MDI2M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJDRUMwMzU5NDAzNTc4MDBGQ0Y0RDc4QjYyMzc3NzkyNyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIzOTA3NTQ1fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MTk0NzA2NjAyNjNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiOTRGOTUxMkYyNjBGQkU5RTQ1QjBDMjc0MjQ5MTE2QTcifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMzkwNzU0NX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiUEs4eXVUQVdRT1cxZTlIVkxSOWh3QSIsInBob25lSWQiOiI5YzVkY2Y3OS02OWJjLTRiM2EtYjQ4Zi1jYTEwODRkNDRlNmEiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT28wRVJFeEpUYTB5MndLbVlxY3BIUGVTL1lFPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iitwd0szbzNuWjdFVFdMd1BUeVNBd2p1K0x3TT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJKQUo1Q00xRSIsIm1lIjp7ImlkIjoiOTE5NDcwNjYwMjYzOjJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi4Y+G4bSb4bSA4bSEaGkg4Y+M4bSEaGnhtIRo4bSAIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKSE5qWWdFRU12N2dyWUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJCYzNWdFFnYWxLNVdlbDA2U21FSkg4MG5UekpGRG5COXV1RnFOSDJxQ1ZrPSIsImFjY291bnRTaWduYXR1cmUiOiJORGZjOERlNEEyQk5hVVBXQlJwdDhobU51VjdJM0tEb0lYTHp6ODFMTTM4K00vN1luaVYzb1ZpZHVkTzJVVG5kQ2J4Z2N4NHAxcEEyUFFPdFNFK0lEUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiTDduSFlhM0JJSEF3cTBuN1ZwRzlvRm5IcmVVelRhS29KOTRJWnlISmF5V01JTWxGbW5UWlpWTURGZ050a0c4YjR4YUdTdzdRQVRNbVVBanBuUVJxakE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MTk0NzA2NjAyNjM6MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJRWE4xYlVJR3BTdVZucGRPa3BoQ1IvTkowOHlSUTV3ZmJyaGFqUjlxZ2xaIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIzOTA3NTQ0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUUzbSJ9";
global.MONGODB = process.env.MONGODB_URI || "mongodb+srv://projectvenomOh95187WpIbtfDwx@cluster0.chfluc5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "")
  : "null";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "")
  : "919470660263";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://i.postimg.cc/FssKzLK7/20240622-140407.jpg,https://i.postimg.cc/FssKzLK7/20240622-140407.jpg";
global.userImages =
  process.env.USER_IMAGES ||
  "https://i.postimg.cc/3wrf9ccK/IMG-20240804-WA0000.jpg";
///===========[global iMPORTS]====================//

module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`RCD-MD`",
  author: process.env.PACK_AUTHER || "RCD-MD",
  packname: process.env.PACK_NAME || "RCD",
  botname: process.env.BOT_NAME || "RCD-MD",
  ownername: process.env.OWNER_NAME || "RCD",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WhatsApp").toUpperCase(),
};
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DEXTER-BOTS/RCD-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u/161";
global.website = process.env.GURL || "https://chat.whatsapp.com/Cry8eSzZqW27t9H8uOcRIR";
global.devs = "919576936522 919470660263";
global.msg_style = process.env.STYLE || "4";
global.session_reset = process.env.SS_RESET || "false";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";
global.read_status = process.env.AUTO_READ_STATUS || "ture";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "null";
global.read_status_from = process.env.READ_STATUS_FROM || "null";
global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://mainv2-f66485a0f702.herokuapp.com/";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
