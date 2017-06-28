exports.up = function(knex, Promise) {
  return knex.schema.createTable('outbursts',(table) => {
    table.increments('id').primary
    table.integer('user_id')
    table.string('name').defaultTo('OUTBURST')
    table.string('description').defaultTo("AUTOMATICALLY GENERATED DESCRIPTION")
    table.timestamp('incident_date').defaultTo(knex.fn.now());

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('outbursts')
};
