const knex=require('knex')
const tableNames=require('../../src/constants/tableNames');

exports.up=async (knex) => {
    await knex.schema.createTable(tableNames.space_centers, (table) => {
        table.increments().notNullable();
        table.string('uid').notNullable().unique();
        table.string('name').notNullable();
        table.string('description');
        table.float('latitude').notNullable();
        table.float('longitude').notNullable();
    })
    await knex.schema.createTable(tableNames.planets, (table) => {
        table.increments().notNullable();
        table.string('name').notNullable();
        table.string('code').notNullable();
        table.integer('space_center_id').unsigned().references('id').inTable('space_centers');
    })
    await knex.schema.createTable(tableNames.flights, (table) => {
        table.increments().notNullable();
        table.string('code').notNullable();
        table.string('departure_at').notNullable();
        table.string('seat_count').notNullable();
        table.integer('space_center_id').unsigned().references('id').inTable('space_centers');
    })
};

exports.down=async (knex) => {
    await Promise.all(
        [
            tableNames.planet,
            tableNames.flight,
            tableNames.space_center
        ].map((tableName) => knex.schema.dropTableIfExists(tableName))
    );
};
