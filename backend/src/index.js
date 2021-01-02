const Koa = require('koa');
const { ApolloServer } = require('apollo-server-koa');
const schema = require('./api/presentation/schema');
const { protect } = require('./middleware/authenticate');
const app = new Koa();

//register auth middleware
//app.use(protect)
//setup apollo server
//console.log(process.env.POSTGRES_PASSWORD);
const server = new ApolloServer({
  schema
});
server.applyMiddleware({ app, path: '/graphql' });

const port = 3000;

app.listen(port, () => console.log(`listening at port ${port}`));
