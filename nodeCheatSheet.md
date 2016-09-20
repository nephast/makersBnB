# Node Cheat Sheet, covering:
* quick start set up of a node application
* using node module [express-generator](https://expressjs.com/en/starter/generator.html) for MVC design
* using [EJS](http://www.embeddedjs.com/) for templates/views
* setting up an ORM for node, routing it to a PostgreSQL DB
* using Mocha, Chai and Zombie for testing

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

* first ensure you have PostgreSQL and created a database for your project, if not [follow this](https://github.com/makersacademy/course/blob/master/bookmark_manager/walkthroughs/03_mac.md)
* run `npm install pg`, the driver for Postgres (PG)
* make sure it's required etc. in necessary places (app.js)

## Connect Bookshelf(Knex) to PG

* run `npm install knex --save` and `npm install bookshelf --save`
* touch `/models/database.js` a file to connect Bookshelf/Knex to PG
* initialising bookshelf requires an initialised Knex so something like:

`var knex = require('knex')({client: 'mysql', connection: process.env.DATABASE_URL || "postgres://localhost/project_name" });

var bookshelf = require('bookshelf')(knex);
`

* create tables in your database with relations like so:

`var User = bookshelf.Model.extend({
  tableName: 'users',
  posts: function() {
    return this.hasMany(Posts);
  }
});
`

* [RTFM](http://bookshelfjs.org/#examples)
