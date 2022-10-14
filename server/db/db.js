const mongoose = require("mongoose")
const db = {
    async connect() {
        const mongoCon = await mongoose.connect(process.env.MONGO_URL, {
            dbName: process.env.DB_NAME,
            user: precess.env.DB_USER,
            pass: process.env.DB_PASS,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
        console.log(mongoCon)
    }
}

module.exports = db