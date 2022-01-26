const express = require('express')
const path = require("path")
require("dotenv").config()
const port = process.env.PORT||process.env.SERVER_PORT

const app = express()

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'../index.html'))
})

app.use(express.json())

app.use('/js', express.static(path.join(__dirname, 'public/main.js')))
app.use('/styles', express.static(path.join(__dirname, '../styles.css')))
app.use('/reset', express.static(path.join(__dirname, '../reset.css')))


app.listen(port, ()=>{
    console.log("Listening on port "+port)
})
