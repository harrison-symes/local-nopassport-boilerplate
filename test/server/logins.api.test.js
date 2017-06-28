import test from 'ava'
import request from 'supertest'
const decode = require('jwt-decode')

import server from '../../server/server'

let configureDatabase = require('./helpers/database-config')
configureDatabase(test, server)

test.cb('POST /login ', t => {
  process.env.JWT_SECRET = 'secret'
  const goodman = {
    username: 'goodman',
    password: 'password'
  }

  request(t.context.server).post('/api/v1/login')
    .send(goodman)
    .expect(200)
    .end((err, res) => {
      t.ifError(err)
      t.is(decode(res.body.token).username, 'goodman')
      t.end()
  })
})

test.cb('POST /login + outbursts', t => {
  process.env.JWT_SECRET = 'secret'
  const goodman = {
    username: 'goodman',
    password: 'password'
  }

  request(t.context.server)
    .post('/api/v1/login')
    .send(goodman)
    .expect(200)
    .end((err, res) => {
      t.ifError(err)
      t.is(decode(res.body.token).username, 'goodman')
      request(t.context.server)
        //test private outbursts
      .get('/api/v1/outbursts')
      .set('Authorization', `Bearer ${res.body.token}`)
      .expect(200)
      .end((err, res) => {
        t.ifError(err)
        t.is(res.body.length, 6)
        t.end()
    })
  })
})


test.cb('POST /register ', t => {
  process.env.JWT_SECRET = 'secret'
  const newUser = {
    username: 'testuser',
    password: 'testpassword'
  }

  const originalCount = 1

  request(t.context.server)
    .post('/api/v1/register')
    .send(newUser)
    .expect(200)
    .end((err, res) => {
      if (err) throw err
      t.context.connection('users')
      .then((members) => {
        t.is(members.length, originalCount + 1)
        t.end()
      })
    })
})
