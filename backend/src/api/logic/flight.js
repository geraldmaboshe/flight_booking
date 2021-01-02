const flightDB = require('../data/flights');
class Flight {
  id;
  code;
  departure_at;
  seat_count;
  space_center_id;
  //initialise variables
  constructor(data) {
    this.id = data.id;
    this.code = data.code;
    this.departure_at = data.departure_at;
    this.seat_count = data.seat_count;
    this.space_center_id = data.space_center_id;
  }

  static async create({ code, departure_at, seat_count, space_center_id }) {
    let data;
    try {
      data = await flightDB.createAndReturn({
        code,
        departure_at,
        seat_count,
        space_center_id
      });
    } catch (e) {
      throw new Error(e.message);
    }
    if (!data) return null;

    return new Flight(data);
  }
}
module.exports = Flight;
