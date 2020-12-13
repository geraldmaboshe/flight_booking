const { makeExecutableSchema }=require('graphql-tools');
const scheduleFlightLoader=require('../logic/flight');
const { GraphQLScalarType }=require('graphql');
const { Kind }=require('graphql/language');
const tableNames=require('../../constants/tableNames');
const db=require('../db/index');

//setup types mutations and resolvers
const typeDefs=[`
scalar Date
type SpaceCenter {
    id:Int! 
    uid: String!
    name: String  
    description: String  
    latitude: Float   
    longitude: Float
    planet: Planet
    flight:Flight
}

type Planet {
    id: Int!
    name: String
    code: String
    spaceCenters: [SpaceCenter]
}

type Flight {
    id: Int,
    code: String,
    departureAt: String
    seatCount: Int
    spaceCenter: SpaceCenter
}

type Query {
    spaceCenters: [SpaceCenter]
    spaceCenter(id: Int!): SpaceCenter
    planets: [Planet]
    planet(id: Int!): Planet
    flight(id: Int!): Flight
    flights: [Flight]
}

type Mutation {
    scheduleFlight(code: String, departure_at: String, seat_count: Int, space_center_id: Int): Flight
  }

schema {
    query: Query
    mutation: Mutation

  }
`];
//resolve types, queries and mutations
const resolvers={
    Query: {
        planet: (_, { id }) => db.from(tableNames.planets).where({ id }).first(),
        planets: () => db.from(tableNames.planets).select("*"),
        spaceCenter: (_, { id }) => db.from(tableNames.space_centers).where({ id }).first(),
        spaceCenters: () => db.from(tableNames.space_centers).select("*"),
        flight: (_, { id }) => db.from(tableNames.flights).where({ id }).first(),
        flights: () => db.from(tableNames.flights).select("*"),
    },
    Planet: {
        spaceCenters: (_, { id }) => db.from(tableNames.space_centers).where({ id }),
    },
    Flight: {
        spaceCenter: ({ id }) => db.from(tableNames.space_centers).where({ id }).first()
    },
    SpaceCenter: {
        planet: ({ id }) => db.from(tableNames.planets).where({ id }).first(),
        flight: async ({ id }) => db.from(tableNames.flights).where({ id }).first()
    },
    Date: new GraphQLScalarType({
        name: 'Date',
        parseValue(value) {
            return new Date(value); // value from the client

        },
        serialize(value) {
            return value.getTime(); // value sent to the client
        },
        parseLiteral(ast) {
            if (ast.kind===Kind.INT) {
                return parseInt(ast.value, 10); // ast value is always in string format
            }
            return null;
        },
    }),
    Mutation: {
        scheduleFlight(args, ctx) {
            return scheduleFlightLoader.create(args)
        }
    }
}

const schema=makeExecutableSchema({ typeDefs, resolvers });
module.exports=schema;