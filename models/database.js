// var pg = require('pg');
// var connectionString = process.env.DATABASE_URL || "postgres://localhost/makersbnb_";
// var Pool = require('pg').Pool;
// var pool = new Pool({
//   user: 'group',
//   password: 'anything',
//   host: 'localhost',
//   database: 'makersbnb_',
//   max: 5
// });
//
// pool.on('error', function(e, client) {
//     throw error;
// });
//
// pool.query
//
//
//
// var client = new pg.Client(connectionString);
// client.connect();
// var query = client.query('CREATE TABLE users(id SERIAL PRIMARY KEY, email VARCHAR(40) not null, password VARCHAR(40) not null, first_name VARCHAR(40) not null, last_name VARCHAR(40) not null, phone_number VARCHAR(20) not null)');
// query.on('end', function() { client.end(); });
//
// client.connect();
// var query = client.query('CREATE TABLE spaces(id SERIAL PRIMARY KEY, user_id INTEGER REFERENCES users(id), address VARCHAR(40) not null, availability BOOLEAN, price_per_night MONEY, description VARCHAR(140)');
// query.on('end', function() { client.end(); });
//
// client.connect();
// var query = client.query('CREATE TABLE booking(id SERIAL PRIMARY KEY, date DATERANGE, duration INTEGER, price MONEY, confirmation BOOLEAN, number_of_guests INTEGER');
// query.on('end', function() { client.end(); });
//


// var pg = require('knex')({
//   client: 'pg',
//   connection: process.env.makersbnb_,
//   searchPath: 'knex,public'
// });

// // var knex = require('knex');
// // (dbConfig);
// module.exports = require('bookshelf')(pg);
//
//
// var knex = require('knex')({client: 'pg', connection: process.env.makersbnb_ });
// var bookshelf = require('bookshelf')(knex);
//
// var User = bookshelf.Model.extend({
//   tableName: 'users'
//   // posts: function() {
//   //   return this.hasMan;
//   // }
// });
// var pg = require('pg');

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
  // }
});

// var Spaces = bookshelf.Model.extend({
//   tableName: 'spaces',
//   tags: function() {
//     return this.belongsToMany(User);
//   }
// });
