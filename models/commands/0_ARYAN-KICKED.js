module.exports.config = {
	name: "kick",
	version: "1.0.1", 
	hasPermssion: 1,
	credits: "ARYAN KING",
	description: "THIS BOT WAS MADE BY MR ARYAN KING",
	commandCategory: "KICKED OF THE MEMBER", 
	usages: "PREFIX", 
	cooldowns: 0,
};

module.exports.languages = {
	"en": {
		"error": "𝐁𝐎𝐒𝐒 𝐊𝐔𝐂𝐇 𝐆𝐀𝐃 𝐁𝐀𝐃 𝐇𝐎 𝐑𝐀𝐇𝐈 𝐇𝐀𝐈🤔",
		"needPermssion": "𝐒𝐎𝐑𝐑𝐘 𝐁𝐎𝐒𝐒 𝐌 𝐆𝐑𝐎𝐔𝐏 𝐊𝐀 À𝐃𝐌𝐈𝐍 𝐍𝐀𝐇𝐈 𝐇𝐔 𝐍𝐄𝐄𝐃 𝐆𝐑𝐎𝐔𝐏 𝐀𝐃𝐌𝐈Ñ😐✌️",
		"missingTag": "𝐁𝐎𝐒𝐒 𝐉𝐈𝐒𝐊𝐎 𝐑𝐄𝐌𝐎𝐕𝐄 𝐊𝐀𝐑𝐍𝐀 𝐇𝐀𝐈 𝐔𝐒𝐊𝐎 𝐌𝐄𝐍𝐓𝐈𝐎𝐍 𝐊𝐀𝐑𝐎 😐✌️"
	}
}

module.exports.run = async function({ api, event, getText, Threads }) {
	var mention = Object.keys(event.mentions);
	try {
		let dataThread = (await Threads.getData(event.threadID)).threadInfo;
		if (!dataThread.adminIDs.some(item => item.id == api.getCurrentUserID())) return api.sendMessage(getText("needPermssion"), event.threadID, event.messageID);
		if(!mention[0]) return api.sendMessage("बॉस जिसको रिमूव करना है ग्रुप से उसको मेंशन करो साथ में 😐✌️",event.threadID);
		if (dataThread.adminIDs.some(item => item.id == event.senderID)) {
			for (const o in mention) {
				setTimeout(() => {
					api.removeUserFromGroup(mention[o],event.threadID) 
				},3000)
			}
		}
	} catch { return api.sendMessage(getText("error"),event.threadID) }
}
