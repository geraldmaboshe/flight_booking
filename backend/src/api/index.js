const Koa=require("koa");
const { ApolloServer, gql }=require("apollo-server-koa");
const schema=require('./presentation/schema');
const parseAuthorizationHeader=require('./utils');
const SpaceCenter=require("./db/queryBuilders/spaceCenter");
const bearerToken=require('koa-bearer-token')
const bodyParser=require('koa-bodyparser');



// const formatResponse=(response, args) => {
//   console.log("queryString : ", args.queryString);
//   console.log("variables : ", args.variables);
//   return response;
// };

const server=new ApolloServer({
  schema,
  // context: ({ req }) => {
  //   return {
  //     authToken: parseAuthorizationHeader({ req }),
  //     dataLoaders: {
  //       spaceCenter: SpaceCenter.getLoaders(),
  //     }
  //   }


  // },
});

const app=new Koa();

server.applyMiddleware({ app, path: "/graphql" });

const port=3000;

app.listen(port, () => console.log(`listening at port ${port}`));
