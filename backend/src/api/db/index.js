const knex=require('knex');

// Update with your config settings. refer to env.sample
module.exports=knex({
    client: 'pg',
    //add to .env
    connection: {
        password: process.env.POSTGRES_PASSWORD,
        user: process.env.POSTGRES_USER,
        database: process.env.POSTGRES_DB
    },
    debug: true,
});