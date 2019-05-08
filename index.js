require("dotenv").config() //untuk membaca .env pada saat index.js dijalankan

const PORT = process.env.PORT
const express = require("express")
const bodyParser = require("body-parser")

const app = express()

//parse application
app.use(bodyParser.json()) // this is syntax from body parser documentation
app.use(bodyParser.urlencoded({ extended: false })) // this is syntax from body parser documentation

// express router
const users = require("./api/users.js")
app.use("/users", users)

app.listen(PORT, () => console.log(`App running on port ${PORT}`))
