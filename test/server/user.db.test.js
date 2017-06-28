var test = require('ava')

var configureDatabase = require('./helpers/database-config')
configureDatabase(test)

var db = require('../../server/db/users')

test('getById returns correct user', t => {
  return db.getById(1, t.context.connection)
    .then((result) => {
      t.is(result[0].id, 1)
      t.is(result.length, 1)
    })
})

test('getByName returns correct user', t => {
  return db.getByName('goodman', t.context.connection)
    .then((result) => {
      t.is(result[0].id, 1)
      t.is(result.length, 1)
    })
})

test('create succesfully creates new user', t => {
  let user = {
    username: 'testy test test',
    password: 'testing'
  }
  return db.create(user, t.context.connection)
    .then((result) => {
      return db.getByName('testy test test', t.context.connection)
    })
    .then((result) => {
      t.is(result[0].username, 'testy test test')
    })
})

test('create succesfully fails if user exists', t => {
  let user = {
    username: 'goodman',
    password: 'testing',
  }
  return db.create(user, t.context.connection)
    .catch(err => {
      t.is(err.errno, 19)
    })
})

test("exists returns false if user doesn't exist", t => {
  return db.exists('im not exist', t.context.connection)
    .then((result) => {
      t.is(result, false)
    })
})

test('exists returns true if user does exist', t => {
  return db.exists('goodman', t.context.connection)
    .then((result) => {
      t.is(result, true)
    })
})
