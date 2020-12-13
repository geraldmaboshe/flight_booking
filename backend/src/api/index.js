const Koa=require("koa");
const { ApolloServer }=require("apollo-server-koa");
const schema=require('./presentation/schema');
const { protect }=require('./middleware/authenticate')
const app=new Koa();
require('dotenv').config();

//register auth middleware
app.use(protect)
//setup apollo server
const server=new ApolloServer({
  schema,
});

server.applyMiddleware({ app, path: "/graphql" });

const port=3000;

app.listen(port, () => console.log(`listening at port ${port}`));
