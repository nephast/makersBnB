exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('spaces', function(table) {
      table.increments();
      table.string('address');
      table.boolean('availability');
      table.integer('price_per_night');
      table.string('phone_number');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('spaces');
};
