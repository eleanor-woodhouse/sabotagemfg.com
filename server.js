const path = require('path')
const express = require('express')

const server = express()
module.exports = server

const publicFolder = path.join(__dirname, 'public')
server.use(express.static(publicFolder))
server.use(express.urlencoded({ extended: false }))

server.get('/', (req, res) => {
    const homePath = path.join(__dirname, 'public', 'index.html')
    res.send(homePath)
})