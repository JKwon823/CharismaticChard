const config = require('config');

module.exports = config['knex'] || {
  client: 'pg',
  connection: process.env.DATABASE_URL,
  debug: false,
  pool: {
    min: 2,
    max: 10
  }
};
