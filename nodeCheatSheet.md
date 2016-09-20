# Node Cheat Sheet, covering:
* quick start set up of a node application
* using node module express-generator for MVC design
* using EJS for templates/views
* setting up an ORM for node, routing it to a PostgreSQL DB
* using Mocha, Chai and Zombie for testing

## Get Node

* check if you already have node installed by running `node --version` or `which node` to locate it
* if not, run `bower node install` and check again

## Set up the repo for your app

- note: skip to next step if you're not using github

* make a new github repo for your project with the default .gitignore offered (this will ignore a huge node_modules directory you'll need in your project root)
* locally clone that repo and `cd` into it

## Set up with express-generator

* run `sudo npm install -g express-generator` in terminal
* if you have a project directory (the github repo you cloned) run `express -e` inside it
* if not, run `express -e ./path_to_project/project_name && cd ./path_to_project/project_name`
* the `-e` flag specifies we want to use EJS as our templating engine to override express' default, Jade
* you should see lots of folders and files have been created by express-generator
* check out the `package.json` file, it lists dependencies; check out `app.js`, it requires dependencies
* next, run `npm install` to ensure dependencies are installed
* then check out your server by running `DEBUG=project_name:* npm start`

## Set up a PostgreSQL DB and connect to node with Sequelize

* first ensure you have PostgreSQL and created a database for your project, if not [follow this](https://github.com/makersacademy/course/blob/master/bookmark_manager/walkthroughs/03_mac.md)
* run `npm install pg`, the driver for Postgres
* make sure it's required in necessary places
* in the root directory of your project `touch models/database.js`
* inside `database.js` write the following code we'll configure our ORM to talk with PostgreSQL
