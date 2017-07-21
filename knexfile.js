const config = require('config');

module.exports = config['knex'] || {
  connection: {
    database: 'process.env.DATABASE_URL',
    user: 'process.env.Heroku_user',
    password: 'process.env.Heroku_password'
  },
  debug: false,
  pool: {
    min: 2,
    max: 10
  }
};
