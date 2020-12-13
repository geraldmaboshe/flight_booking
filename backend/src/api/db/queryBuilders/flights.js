const db=require('../index')
//setup the flight model class
class Flight {
    static async createAndReturn({ code, departure_at, seat_count, space_center_id }) {
        await db
            .table('flights')
            .returning('id')
            .insert({ code, departure_at, seat_count, space_center_id });

    }

}
module.exports=Flight;