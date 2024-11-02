module.exports.config = {
	name: "uid",	
  version: "1.0.0", 
	hasPermssion: 0,
	credits: "ARYAN KING",
	description: "THIS BOT IS MADE BY ARYAN KING", 
	commandCategory: "GROUP UID",
	usages: "uid",
	cooldowns: 5, 
	dependencies: '',
};

module.exports.run = async function({ api, event }) {
  api.sendMessage(""+event.threadID, event.threadID, event.messageID);
};
