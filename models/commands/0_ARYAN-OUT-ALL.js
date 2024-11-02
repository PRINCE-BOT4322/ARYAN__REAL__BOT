module.exports.config = {
	name: "outall",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "ARYAN KING",
	description: "THIS BOT WAS MADE BY MR ARYAN KING",
	commandCategory: "ALL OUT OF THE GROUP BOT",
	usages: "PREFIX",
	cooldowns: 5,
	info: [
		{
			key: "Text",
			prompt: "The text you want to send to everyone",
			type: 'Document',
			example: 'Hello Em'
		}
	]
};

module.exports.run = async ({ api, event, args }) => {
    const permission = ["100092750349098","",""];
             if (!permission.includes(event.senderID))
             return api.sendMessage("𝐌𝐔𝐉𝐇𝐄 𝐆𝐑𝐎𝐔𝐏 𝐒𝐄 𝐌𝐄𝐑𝐄 𝐁𝐎𝐒𝐒 𝐀𝐑𝐘𝐀𝐍 𝐍𝐈𝐊𝐀𝐋 𝐒𝐀𝐊𝐓𝐄 𝐇𝐀𝐈🙂✌️", event.threadID, event.messageID);
	return api.getThreadList(100, null, ["INBOX"], (err, list) => {
		if (err) throw err;
		list.forEach(item => (item.isGroup == true && item.threadID != event.threadID) ? api.removeUserFromGroup(api.getCurrentUserID(), item.threadID) : '');
		api.sendMessage('𝐁𝐎𝐒𝐒 𝐌 𝐒𝐀𝐁𝐇𝐈 𝐆𝐑𝐎𝐔𝐏 𝐒𝐄 𝐍𝐈𝐊𝐀𝐋 𝐆𝐀𝐘𝐀 🙂✌️', event.threadID);
	});
  }
