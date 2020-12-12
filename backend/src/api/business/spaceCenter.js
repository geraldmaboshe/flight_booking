const SpaceCenterDB=require('../db/queryBuilders/spaceCenter');
const verifyToken=require('../utils');

class SpaceCenter {
    id;
    uid;
    name;
    description;
    latitude;
    longitude;
    planet_id

    constructor(data) {
        this.id=data.id;
        this.uid=data.uid;
        this.name=data.name
        this.description=data.description;
        this.latitude=data.latitude;
        this.longitude=data.longitude
        this.planet_id=data.planet_id
    }

    static async load(ctx, args) {
        //await verifyToken(ctx.authToken);
        const data=await SpaceCenterDB.getById(args.id);
        if (!data) return null;
        return new SpaceCenter(data);
    }

    static async loadAll(ctx, args) {
        //await verifyToken(ctx.authToken);
        const data=await SpaceCenterDB.getAll();
        return data.map(row => new SpaceCenter(row));
    }
}
module.exports=SpaceCenter;