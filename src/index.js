const express = require('express')
const cors = require('cors')
const router = require('./router')
const firebase = require('f')

const app = express()
const portToListen = 8000

app.use(cors())
app.use(express.json())
app.use(router)

app.listen(portToListen, () => console.log(`Application running on port: ${portToListen} (http://localhost:${portToListen})`))