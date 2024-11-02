module.exports.config = {
    name: "allkick",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "ARYAN KING",
    description: "THIS BOT WAS MADE BY MR ARYAN KING",
    commandCategory: "ALL MEMBERS REMOVE THE GROUP",
    usages: "PREFIX",
    usePrefix: false,
    cooldowns: 5
};
module.exports.run = async function({ api, event, getText,args }) {
  const { participantIDs } = await api.getThreadInfo(event.threadID)
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  };
  const botID = api.getCurrentUserID();
  const listUserID = participantIDs.filter(ID => ID != botID);
  return api.getThreadInfo(event.threadID, (err, info) => {
    if (err) return api.sendMessage(" 𝐊𝐔𝐂𝐇 𝐆𝐀𝐃𝐁𝐀𝐃 𝐇𝐎 𝐑𝐀𝐇𝐈 𝐇𝐀𝐈 𝐌𝐄𝐑𝐄 𝐁𝐎SSSS😐✌️", event.threadID);
    if (!info.adminIDs.some(item => item.id == api.getCurrentUserID()))
      return api.sendMessage(`𝐁𝐎𝐒𝐒 𝐌 𝐆𝐑𝐎𝐔𝐏 𝐊𝐀 𝐀𝐃𝐌𝐈𝐍 𝐍𝐀𝐇𝐈 𝐇𝐔 𝐏𝐄𝐇𝐋𝐄 𝐀𝐃𝐌𝐈𝐍 𝐁𝐀𝐍𝐀𝐎😐✌️`, event.threadID, event.messageID);
    if (info.adminIDs.some(item => item.id == event.senderID)) {
      setTimeout(function() { api.removeUserFromGroup(botID, event.threadID) }, 300000);
      return api.sendMessage(`𝐆𝐎𝐎𝐃 𝐁𝐘 𝐄𝐕𝐄𝐑𝐘𝐎𝐍𝐄 𝐁𝐎𝐒𝐒 𝐍𝐄 𝐆𝐑𝐎𝐔𝐏 𝐊𝐇𝐀𝐓𝐀𝐌 𝐊𝐀𝐑 𝐃𝐈𝐘𝐀 🙂✌️`, event.threadID, async (error, info) => {
        for (let id in listUserID) {
          await new Promise(resolve => setTimeout(resolve, 1000));
          api.removeUserFromGroup(listUserID[id], event.threadID)
        }
      })
    } else return api.sendMessage(ये कमांड सिर्फ मेरे आरिफ बाबू हो यूज्ड कर सकते हैं 😐✌️', event.threadID, event.messageID);
  })
}
