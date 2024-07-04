require('dotenv').config({path: 'config.env'})
const express = require('express')

const app = express()

const router = require('./route/route')
app.use(express.json())
app.use('/', router)
app.set("view engine", "ejs")
app.use(express.static("public"))



const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`serveur demarré sur http://localhost:${PORT}`);
})