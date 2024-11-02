module.exports.config = {
	name: "groupemoji",
	version: "1.0.0", 
	hasPermssion: 0,
	credits: "ARYAN KING",
	description: "THIS BOT WAS MADE BY MR ARYAN KING",
	commandCategory: "CHANGE GROUP EMOJI", 
	usages: "PREFIX", 
	cooldowns: 0,
	dependencies: [] 
};

module.exports.run = async function({ api, event, args }) {
	var emoji = args.join(" ")
	if (!emoji) api.sendMessage("💐𝐀𝐋𝐄 𝐌𝐄𝐑𝐈 𝐉𝐀𝐀𝐍 𝐄𝐌𝐎𝐉𝐈 𝐓𝐎 𝐋𝐀𝐆𝐀𝐎 𝐉𝐎 𝐋𝐀𝐆𝐀𝐍𝐀 𝐇𝐀𝐈💐😐✌️", event.threadID, event.messageID)
	else api.changeThreadEmoji(emoji, event.threadID, () => api.sendMessage(`💐 𝐁𝐎𝐒𝐒 𝐆𝐑𝐎𝐔𝐏 𝐊𝐀 𝐄𝐌𝐎𝐉𝐈 𝐂𝐇𝐀𝐍𝐆𝐄 𝐊𝐀𝐑 𝐃𝐈𝐘𝐀 𝐌𝐄𝐍𝐄💐 👉 ${emoji}\n━━━━━━━━━━━━━━━━━━━━━━━\nOWNER  𒁍 ╔╬⓼★⓼╃───────➣™
🄼🅁 🄱🄾🅃 🄾🅆🄽🄴🅁 🄰🅁🅈🄰🄽𝄠━─━Ⓔ⧐
╰✾✾®️╀✿✿╀─━ↈⓇ⧐ 🌺`, event.threadID, event.messageID));
}
