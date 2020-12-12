const knex=require('knex')
const tableNames=require('../../src/constants/tableNames');

exports.up=async (knex) => {
    await knex.schema.createTable(tableNames.planets, (table) => {
        table.increments().notNullable();
        table.string('name').notNullable();
        table.string('code').notNullable();

    })
    await knex.schema.createTable(tableNames.space_centers, (table) => {
        table.increments().notNullable();
        table.string('uid').notNullable().unique();
        table.string('name').notNullable();
        table.string('description');
        table.float('latitude').notNullable();
        table.float('longitude').notNullable();
        table.integer('planet_id').unsigned().references('id').inTable(tableNames.planets);
    })

    await knex.schema.createTable(tableNames.flights, (table) => {
        table.increments().notNullable();
        table.string('code').notNullable();
        table.string('departure_at').notNullable();
        table.string('seat_count').notNullable();
    })
};

exports.down=async (knex) => {
    await Promise.all(
        [
            tableNames.planets,
            tableNames.flights,
            tableNames.space_centers
        ].map((tableName) => knex.schema.dropTableIfExists(tableName))
    );
};