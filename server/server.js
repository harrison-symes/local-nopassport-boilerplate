var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
const passport = require('passport')
const LocalStrategy = require('passport-local')

const cors = require('cors')

const auth = require('./lib/auth')

var logins = require('./routes/logins')
var account = require('./routes/account')
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
server.use(passport.initialize())

server.use('/api/v1', logins)
server.use('/api/v1', outbursts)

passport.use(new LocalStrategy(auth.verify))

module.exports = server
