import test from 'ava'
import request from 'supertest'
const decode = require('jwt-decode')

import server from '../../server/server'

let configureDatabase = require('./helpers/database-config')
configureDatabase(test, server)


test.cb('GET public outbursts', t => {
      request(t.context.server)
        //test private outbursts
      .get('/api/v1/outbursts')
      .expect(200)
      .end((err, res) => {
        t.ifError(err)
        t.is(res.body.length, 1)
        t.end()
    })
})
