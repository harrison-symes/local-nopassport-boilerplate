var test = require('ava')

var configureDatabase = require('./helpers/database-config')
configureDatabase(test)

var db = require('../../server/db/outbursts')

test('getUserOutbursts returns all user outbursts', t => {
  return db.getUserOutbursts(1,t.context.connection)
    .then((result) => {
      t.is(result[0].id, 1)
      t.not(result.length, 0)
    })
})

test('getPublicOutbursts returns all public outbursts', t => {
  return db.getUserOutbursts(t.context.connection)
    .then((result) => {
      t.is(result[0].id, 1)
      t.not(result.length, 0)
    })
})


test('addOutburst correctly adds outburst', t => {
  return t.context.connection('outbursts')
    .then((result) => {
      var originalLength = result.length
      return db.addOutburst({user_id: 1, name: 'test outburst'},t.context.connection)
      .then(() => {
        return t.context.connection('outbursts')
      })
      .then((result) => {
        t.is(result.length, originalLength + 1)
      })
    })
})


test('deleteOutburst correctly adds outburst', t => {
  return t.context.connection('outbursts')
    .then((result) => {
      var originalLength = result.length
      return db.deleteOutburst(1,t.context.connection)
      .then(() => {
        return t.context.connection('outbursts')
      })
      .then((result) => {
        t.is(result.length, originalLength - 1)
      })
    })
})
