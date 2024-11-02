const fs = require("fs");
const request = require("request");
module.exports.config = {
	name: "groupinfo",
	version: "1.0.0", 
	hasPermssion: 1,
	credits: "ARYAN KING",
	description: "THIS BOT WAS MADE BY MR ARYAN KING",
	commandCategory: "GROUP INFORMETION", 
	usages: "PREFIX", 
	cooldowns: 0,
	dependencies: [] 
};

module.exports.run = async function({ api, event, args }) {
	let threadInfo = await api.getThreadInfo(event.threadID);
	var memLength = threadInfo.participantIDs.length;
	let threadMem = threadInfo.participantIDs.length;
	var nameMen = [];
    var gendernam = [];
    var gendernu = [];
    var nope = [];
     for (let z in threadInfo.userInfo) {
     	var gioitinhone = threadInfo.userInfo[z].gender;
     	var nName = threadInfo.userInfo[z].name;
        if(gioitinhone == "MALE"){gendernam.push(z+gioitinhone)}
        else if(gioitinhone == "FEMALE"){gendernu.push(gioitinhone)}
            else{nope.push(nName)}
    };
	var nam = gendernam.length;
    var nu = gendernu.length;
	let qtv = threadInfo.adminIDs.length;
	let sl = threadInfo.messageCount;
	let u = threadInfo.nicknames;
	let icon = threadInfo.emoji;
	let threadName = threadInfo.threadName;
	let id = threadInfo.threadID;
	let sex = threadInfo.approvalMode;
			var pd = sex == false ? 'TURNED OFF' : sex == true ? 'TURNED ON' : 'NOTHING';
			var callback = () =>
				api.sendMessage(
					{
						body: `🌺 𝐆𝐑𝐎𝐔𝐏 𝐈𝐍𝐅𝐎 𒁍 ${threadName}\n🌺 𝐆𝐑𝐎𝐔𝐏 𝐔𝐈𝐃 𒁍 ${id}\n🌺 𝐆𝐑𝐎𝐔𝐏 𝐀𝐏𝐏𝐑𝐎𝐕𝐀𝐋 𒁍 ${pd}\n🌺 𝐆𝐑𝐎𝐔𝐏 𝐄𝐌𝐎𝐉𝐈 𒁍 ${icon}\n🌺 𝐓𝐎𝐓𝐀𝐋 𝐍𝐔𝐌𝐁𝐄𝐑 𒁍 ${threadMem}\n🌺 𝐓𝐎𝐓𝐀𝐋 𝐌𝐀𝐋𝐄 𒁍 ${nam}\n🌺 𝐓𝐎𝐓𝐀𝐋 𝐅𝐄𝐌𝐀𝐋𝐄 𒁍 ${nu}\n🌺 𝐓𝐎𝐓𝐀𝐋 𝐆𝐑𝐎𝐔𝐏 𝐀𝐃𝐌𝐈𝐍 𒁍 ${qtv}\n🌺 𝐓𝐎𝐓𝐀𝐋 𝐆𝐑𝐎𝐔𝐏 𝐌𝐄𝐒𝐒À𝐆𝐄S𒁍 ${sl}\n\n════════════════════════ ❁\n╔╬⓼★⓼╃───────➣™
🄼🅁 🄱🄾🅃 🄾🅆🄽🄴🅁 🄰🅁🅈🄰🄽𝄠━─━Ⓔ⧐
╰✾✾®️╀✿✿╀─━ↈⓇ⧐ 🙂✌️`,
						attachment: fs.createReadStream(__dirname + '/cache/1.png')
					},
					event.threadID,
					() => fs.unlinkSync(__dirname + '/cache/1.png'),
					event.messageID
				);
			return request(encodeURI(`${threadInfo.imageSrc}`))
				.pipe(fs.createWriteStream(__dirname + '/cache/1.png'))
				.on('close', () => callback());
	    }
