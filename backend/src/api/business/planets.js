const PlanetDB=require('../db/queryBuilders/planets');
const verifyToken=require('../utils');

class Planet {
    id
    name
    code

    constructor(data) {
        this.id=data.id;
        this.name=data.name;
        this.code=data.code;
    }

    static async load(ctx, args) {
        //await verifyToken(ctx.authToken);
        const data=await PlanetDB.getById(args.id);
        if (!data) return null;
        return new Planet(data);
    }

    static async loadAll(ctx, args) {
        //await verifyToken(ctx.authToken);
        const data=await PlanetDB.getAll();
        return data.map(row => new Planet(row));
    }
}
module.exports=Planet;