# Node Cheat Sheet, covering:
* quick start set up of a node application
* using node module [express-generator](https://expressjs.com/en/starter/generator.html) for MVC design
* using [EJS](http://www.embeddedjs.com/) for templates/views
* setting up an ORM for node, routing it to a PostgreSQL DB
* using Mocha, Chai and Zombie for testing

_note: this is a work in progress, please improve it_

## Get Node

* check if you already have node installed by running `node --version` or `which node` to locate it
* if not, install it [here](https://nodejs.org/en/download/)

## Set up the repo for your app
_note: skip to next step if you're not using github_

* make a new github repo for your project with the default .gitignore offered (this will ignore a huge node_modules directory you'll need in your project root)
* locally clone that repo and `cd` into it

## Set up with express-generator

* run `sudo npm install -g express-generator` in terminal
* if you have a project directory (the github repo you cloned) run `express -e` inside it to initalise it with express framework
* if not, run `express -e ./path_to_project/project_name && cd ./path_to_project/project_name` to make one with the express initialisation
* the `-e` flag specifies we want to use EJS as our templating engine to override express' default, Jade
* you should see lots of folders and files have been created by express-generator
* check out the `package.json` file, it lists dependencies; check out `app.js`, it requires them plus other config
* next, run `npm install` to ensure dependencies are installed
* check out your local server by running `DEBUG=project_name:* npm start`

## Set up a PostgreSQL DB and a driver for node

* first ensure you have PostgreSQL and created two databases for your project, test and dev ones, if not [follow this](https://github.com/makersacademy/course/blob/master/bookmark_manager/walkthroughs/03_mac.md)
* run `npm install pg`, the driver for Postgres (PG)
* make sure it's required etc. in necessary places (app.js)

## Connect Bookshelf(Knex) to PG and configure test and dev environments

* run `sudo npm install -g knex` and `npm install bookshelf --save`
* `mkdir models` and then `cd` into it
* run `knex init` which will make a knexfile.js similar to below, tweak it so it looks exactly this:
```
// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'project_name_development'
    },
    migrations: {
      directory: __dirname + '/migrations'
    }
  },

  test: {
    client: 'pg',
    connection: {
      database: 'project_name_test',
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: __dirname + '/migrations'
    }
  },

};

```
* create a new file `touch models/knex.js` and add environment config:
```
var environment = process.env.NODE_ENV || 'development';
var config = require('./knexfile.js')[environment];

module.exports = require('knex')(config);
```
* run `knex migrate:make setup` which will create a directory called `migrations` with a skeleton schema
* update this schema to reflect a desired database table, for example:
```
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
```
* run `knex migrate:latest --env test` or `knex migrate:latest --env development` to update the DB to reflect your schema
* [RTFM](http://bookshelfjs.org/#examples)

## Using Mocha and Chai for testing

* get Mocha and Chai `npm install mocha chai --save-dev`
