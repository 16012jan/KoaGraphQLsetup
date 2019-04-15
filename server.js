const Koa = require('koa');
const app = new Koa();
const mount = require('koa-mount');
const graphqlHTTP = require('koa-graphql');
const schema = require('./graphql/schema');
const initDB = require('./database');
require('dotenv').config()

initDB();

app.use(mount('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
 })))

app.listen(process.env.PORT || 9000);

app.on('error', err => {
  log.error('server error', err)
});