const tableNames = require('../../src/constants/tableNames');
exports.seed = function (knex) {
  // Deletes all existing entries flight records
  return knex(tableNames.flights)
    .del()
    .then(function () {
      // Inserts seed entries
      return knex(tableNames.flights).insert([
        {
          code: 'cf35',
          departure_at: '2021-01-01T02:04:10Z',
          seat_count: 100,
          space_center_id: 7
        },
        {
          code: '75ae',
          departure_at: '2021-01-01T02:04:09Z',
          seat_count: 150,
          space_center_id: 6
        },
        {
          code: '0c70',
          departure_at: '2021-01-07T02:04:09Z',
          seat_count: 204,
          space_center_id: 5
        },
        {
          code: 'e043',
          departure_at: '2021-01-01T02:04:09Z',
          seat_count: 154,
          space_center_id: 3
        },
        {
          code: 'e814',
          departure_at: '2021-01-01T02:04:09Z',
          seat_count: 253,
          space_center_id: 2
        },
        {
          code: '2896',
          departure_at: '2021-01-01T02:04:09Z',
          seat_count: 153,
          space_center_id: 1
        },
        {
          code: '9883',
          departure_at: '2021-01-01T02:04:09Z',
          seat_count: 103,
          space_center_id: 8
        },
        {
          code: '1ca6',
          departure_at: '2021-01-01T02:04:09Z',
          seat_count: 123,
          space_center_id: 9
        },
        {
          code: '2303',
          departure_at: '2021-01-01T02:04:09Z',
          seat_count: 10
        },
        {
          code: '41eb',
          departure_at: '2021-01-01T02:04:10Z',
          seat_count: 11
        }
      ]);
    });
};
