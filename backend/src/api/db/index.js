const knex=require('knex');

module.exports=knex({
    client: 'pg',
    //add to .env
    connection: {
        password: 'admin',
        user: 'root',
        database: 'flight_booking'
    },
    debug: true,
});