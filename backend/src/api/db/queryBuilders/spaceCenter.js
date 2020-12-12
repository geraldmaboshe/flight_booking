const db=require('../index')
class SpaceCenter {
    static async getById(id) {
        return db
            .first()
            .table('space_centers')
            .where('id', id);
    }

    static async getByIds(ids) {
        return db
            .select()
            .table('space_centers')
            .whereIn('id', ids);
    }

    static async getAll() {
        return db
            .select()
            .table('space_centers');
    }
}
module.exports=SpaceCenter;