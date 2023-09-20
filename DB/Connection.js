const mongoose = require("mongoose")

mongoose.connect(process.env.MONGODB_URL);

mongoose.connection.on('connected', () => {
    console.log("MonGoDB Connected!");
})
mongoose.connection.on('disconnected', () => {
    console.log("MonGoDB not Connected!");
})