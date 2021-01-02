const knex = require('knex');
const tableNames = require('../../src/constants/tableNames');

exports.up = async knex => {
  await knex.schema.createTable(tableNames.planets, table => {
    table.increments().notNullable();
    table.string('name').notNullable();
    table.string('code').notNullable();
  });
  await knex.schema.createTable(tableNames.space_centers, table => {
    table.increments().notNullable();
    table.string('uid').notNullable().unique();
    table.string('name').notNullable();
    table.string('description');
    table.float('latitude').notNullable();
    table.float('longitude').notNullable();
    table
      .integer('planet_id')
      .unsigned()
      .references('id')
      .inTable(tableNames.planets)
      .onDelete('CASCADE');
  });

  await knex.schema.createTable(tableNames.flights, table => {
    table.increments().notNullable();
    table.string('code');
    table.datetime('departure_at');
    table.integer('seat_count');
    table
      .integer('space_center_id')
      .unsigned()
      .references('id')
      .inTable(tableNames.space_centers)
      .onDelete('CASCADE');
  });
};

exports.down = async knex => {
  await Promise.all(
    [
      tableNames.flights,
      tableNames.space_centers,
      tableNames.planets
    ].map(tableName => knex.schema.dropTableIfExists(tableName))
  );
};
