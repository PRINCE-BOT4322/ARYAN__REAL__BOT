module.exports.config = {
	name: "groupname",
	version: "1.0.0", 
	hasPermssion: 0,
	credits: "ARYAN KING",
	description: "THIS BOT WAS MADE BY MR ARYAN KING",
	commandCategory: "CHANGE GROUP NAME", 
	usages: "PREFIX", 
	cooldowns: 0,
	dependencies: [] 
};

module.exports.run = async function({ api, event, args }) {
	var name = args.join(" ")
	if (!name) api.sendMessage("💐𝐌𝐄𝐋𝐈 𝐉𝐀𝐀𝐍 𝐆𝐑𝐎𝐔𝐏 𝐊𝐀 𝐍𝐀𝐌𝐄 𝐋𝐈𝐊𝐇𝐎 𝐉𝐎 𝐋𝐈𝐊𝐇𝐀𝐍𝐀 𝐇𝐀𝐈💐😐✌️", event.threadID, event.messageID)
	else api.setTitle(name, event.threadID, () => api.sendMessage(`💐𝐆𝐑𝐎𝐔𝐏 𝐊𝐀 𝐍𝐀𝐌𝐄 𝐂𝐇À𝐍𝐆𝐄 𝐇𝐎 𝐆𝐀𝐘𝐀 𝐌𝐄𝐑𝐈 𝐉𝐀𝐀𝐍💐 👉 ${name}\n━━━━━━━━━━━━━━━━━━━━━━━\nOWNER  𒁍 ╔╬⓼★⓼╃───────➣™
🄼🅁 🄱🄾🅃 🄾🅆🄽🄴🅁 🄰🅁🅈🄰🄽𝄠━─━Ⓔ⧐
╰✾✾®️╀✿✿╀─━ↈⓇ⧐ 🌺`, event.threadID, event.messageID));
}
