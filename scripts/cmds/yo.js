module.exports = {
    config: {
        name: "yo",
        version: "1.0",
        author: "Dàññy",
        countDown: 5,
        role: 0,
        shortDescription: "No Prefix",
        longDescription: "No Prefix",
        category: "reply",
    },
onStart: async function(){}, 
onChat: async function({
    event,
    message,
    getLang
}) {
    if (event.body && event.body.toLowerCase() == "yo") return message.reply("sup buddy ;-) ");
}
};
