const config = require('../../knexfile')[process.env.NODE_ENV || 'development']
const knex = require('knex')(config)

const crypto = require('../lib/crypto')

module.exports = {
  create,
  exists,
  getById,
  getByName
}

function create (user, testDb) {
  const hash = crypto.getHash(user.password)
  const connection = testDb || knex
  let newUser = Object.assign({}, user, {hash: hash})
  delete newUser.password
  return connection('users')
    .insert(newUser)
}

function exists (username, testDb) {
  const connection = testDb || knex
  return connection('users')
    .count('id as n')
    .where('username', username)
    .then(count => {
      return count[0].n > 0
    })
}

function getById (id, testDb) {
  const connection = testDb || knex
  return connection('users')
    .select('*')
    .where('id', id)
}

function getByName (username, testDb) {
  const connection = testDb || knex
  return connection('users')
    .select()
    .where('username', username)
}
