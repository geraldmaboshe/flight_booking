const knex = require('knex');
require('dotenv').config({ path: '../.env' });

// Update with your config settings. refer to env.sample
module.exports = knex({
  client: 'pg',
  connection: {
    password: process.env.POSTGRES_PASSWORD,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB
  },
  debug: true
});
