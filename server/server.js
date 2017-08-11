var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')

const cors = require('cors')

const auth = require('./lib/auth')

var logins = require('./routes/logins')
var outbursts = require('./routes/outbursts')

const corsOptions = {
  origin: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  credentials: true
}

var server = express()
server.use(cors(corsOptions))

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use(express.static('public'))

server.use('/api/v1', logins)
server.use('/api/v1', outbursts)

module.exports = server
