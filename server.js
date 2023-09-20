const express = require("express")
const cors = require("cors")
require("dotenv").config();
const bodyParser = require("body-parser")
const app = express()
const Routes = require("./routes/route.js")
require('./DB/Connection.js')

const PORT = process.env.PORT;

app.use(bodyParser.json({ limit: '10mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))

app.use(express.json({ limit: '10mb' }))
app.use(cors())

app.use('/', Routes);

app.listen(PORT, () => {
    console.log(`Server is Listening on port ${PORT}`)
})