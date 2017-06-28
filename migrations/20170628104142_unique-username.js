exports.up = knex => knex.schema.alterTable('users', table => {
  table.unique('username')
})

exports.down = function(knex, Promise) {
  return knex.schema.table('users', table => {
    table.dropUnique('username')
  })
}
