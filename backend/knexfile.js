require('dotenv').config();
// Update with your config settings. refer to env.sample
module.exports = {
  development: {
    client: 'pg',
    connection: {
      password: process.env.POSTGRES_PASSWORD,
      user: process.env.POSTGRES_USER,
      database: process.env.POSTGRES_DB
    },
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  }
};
