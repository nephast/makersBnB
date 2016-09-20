var knex = require('knex')({
  client: 'pg',
  connection: {
    host : 'localhost',
    user : 'group',
    password : 'anything',
    database : 'postgres://localhost/makersbnb_'
  }
});

var bookshelf = require('bookshelf')(knex);

var User = bookshelf.Model.extend({
  tableName: 'users',
});

var Spaces = bookshelf.Model.extend({
  tableName: 'spaces',
});
