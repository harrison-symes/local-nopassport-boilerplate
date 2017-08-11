var express = require('express')
var router = express.Router()
var auth = require('../lib/auth')
var verifyJwt = require('express-jwt')
var outburstsDB = require('../db/outbursts')

router.get('/outbursts',
  verifyJwt({
    credentialsRequired: false,
    secret: getSecret
  }),
  (req, res) => {
    console.log(req);
    let db = req.app.get('db')
    if (req.user) {
           outburstsDB.getUserOutbursts(req.user.id, db)
          .then((outbursts) => {res.json(outbursts)})
    }
    else {
      outburstsDB.getPublicOutbursts(db)
     .then((outbursts) => {res.json(outbursts)})
    }
  }
)

function getSecret (req, payload, done) {
  done(null, process.env.JWT_SECRET)
}

module.exports = router
