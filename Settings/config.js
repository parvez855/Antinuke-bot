require("dotenv").config();
module.exports = {
    webhook: {
        error: "https://discord.com/api/webhooks/1392219021968933035/nSVOYhwW_2iXaZXqly-tDbNL-MGCf8rtrF6GFIkFgKcZ0IUMy2SdqKTibUFhkCoJ1PCQ" || process.env.error, //webhook link where error logs are sent
        join: "https://discord.com/api/webhooks/1392219021968933035/nSVOYhwW_2iXaZXqly-tDbNL-MGCf8rtrF6GFIkFgKcZ0IUMy2SdqKTibUFhkCoJ1PCQ" || process.env.join, //webhook link where join logs are sent
        leave: "https://discord.com/api/webhooks/1392219021968933035/nSVOYhwW_2iXaZXqly-tDbNL-MGCf8rtrF6GFIkFgKcZ0IUMy2SdqKTibUFhkCoJ1PCQ" || process.env.leave, //webhook link where leave logs are sent
    },

    TOKEN: "" || process.env.TOKEN, //Your Bot Token
    MONGO_URI: "mongodb+srv://vox:vox@cluster0.hpjyuwr.mongodb.net/?retryWrites=true&w=majority" || process.env.MONGO_URI, //Mongo Uri
    EMBED_COLOR: "" || process.env.EMBED_COLOR, //Embed Color
    DEV_ID: "1355170681330991145" || process.env.DEV_ID, //Developer ID
    OWNER_ID: "927208085515280425" || process.env.OWNER_ID, //Owner ID

}
