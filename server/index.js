const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const User = require("./models/Signup.models.js")
const cors = require('cors');




const app = express()
const port = process.env.PORT

app.use(cors());

app.use(express.json());


app.get('/', (req, res) => res.send('Hello World!'))

app.post('/api/user', async (req, res) => {
    try {
        const user = await User.create(req.body)
        res.status(200).json(user)
    }
    catch (error) {
        res.status(500).json({message : error.message})
    }
})

app.get("/api/user", async (req, res) => {
    try {
        const user = await User.find({});
        res.status(200).json(user)
    }
    catch (error){
        res.status(500).json({message : error.message})
    }
})

mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log("Databse is connected")
    app.listen(port, () => console.log(`Example app listening on port ${port}!`))
})
.catch((error) => {
    console.error("not cannected", error)
})