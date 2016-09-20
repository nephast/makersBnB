exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('booking', function(table) {
      table.increments();
      table.date('date_start');
      table.date('date_end');
      table.integer('duration');
      table.boolean('confirmation');
      table.integer('guests');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('booking');
};
