exports.up = knex => knex.schema.alterTable('outbursts', table => {
  table.boolean('is_public').defaultTo(false)
})

exports.down = function(knex, Promise) {
  return knex.schema.table('outbursts', table => {
    table.dropColumn('is_public')
  })
}
