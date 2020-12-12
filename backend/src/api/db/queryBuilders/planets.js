const db=require('../index')
class Planet {
    static async getById(id) {
        return db
            .first()
            .table('planets')
            .where('id', id);
    }

    static async getByIds(ids) {
        return db
            .select()
            .table('planets')
            .whereIn('id', ids);
    }

    static async getAll() {
        return db
            .select()
            .table('planets');
    }
}
module.exports=Planet;