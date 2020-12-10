const Koa=require("koa");
const { ApolloServer, gql }=require("apollo-server-koa");
const typeDefs=require('./presentation/schema');


const formatResponse=(response, args) => {
  console.log("queryString : ", args.queryString);
  console.log("variables : ", args.variables);
  return response;
};

const server=new ApolloServer({ typeDefs, formatResponse });

const app=new Koa();
server.applyMiddleware({ app, path: "/graphql" });

const port=3000;

app.listen(port, () => console.log(`listening at port ${port}`));
