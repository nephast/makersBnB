// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'makersbnb_development'
    },
    migrations: {
      directory: __dirname + '/migrations'
    }
  },

  test: {
    client: 'pg',
    connection: {
      database: 'makersbnb_test',
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
