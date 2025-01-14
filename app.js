const express = require('express');
const {buildSchema} = require('graphql');
const {graphqlHTTP} = require('express-graphql');

const graphqlSchema = require('./graphql/schema');
const graphqlResolvers = require('./graphql/resolvers');


const app = express();
const port = 8080;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});
app.use('/graphql', graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolvers,
    graphiql: true
}));


  app.listen(port, () => {
    console.log(`Mongo db connected and Server is running on port ${port}`);
  });

