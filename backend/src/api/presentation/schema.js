const { makeExecutableSchema }=require('graphql-tools');
const SpaceCenter=require('../business/spaceCenter');
const Planet=require('../business/planets');


const typeDefs=[`
type SpaceCenter {
    id:Int! 
    uid: String!
    name: String  
    description: String  
    latitude: Float   
    longitude: Float
    planet: Planet   
}

type Planet {
    id: Int
    name: String
    code: String
}

type Query {
    spaceCenters: [SpaceCenter]
    spaceCenter(id: Int!): SpaceCenter
    planets: [Planet]
    planet(id: Int): Planet
}
schema {
    query: Query

  }
`];
const resolvers={
    Query: {
        spaceCenters: async (_, args, ctx) => SpaceCenter.loadAll(ctx, args),
        spaceCenter: async (_, args, ctx) => SpaceCenter.load(ctx, args),
        planets: async (_, args, ctx) => Planet.loadAll(ctx, args),
        planet: async (_, args, ctx) => Planet.load(ctx, args),
    },
}

const schema=makeExecutableSchema({ typeDefs, resolvers });

module.exports=schema;