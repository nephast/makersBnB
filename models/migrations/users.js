exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('users', function(table) {
      table.increments();
      table.string('name');
      table.string('email');
      table.string('password');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
