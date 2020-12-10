// const { makeExecutableSchema }=require('graphql-tools');
const { gql }=require('apollo-server');

const typeDefs=gql`
type SpaceCenter {
    id:Int! 
    uid: String!
    name: String  
    description: String  
    latitude: Float   
    longitude: Float   
}

type Query {
    spaceCenters: SpaceCenter
}
`

module.exports=typeDefs;