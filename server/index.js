require('dotenv').config();

const express = require('express');
const port = process.env.PORT || 5000;

const schema = require('./schema/schema');
const { graphqlHTTP } = require('express-graphql');

const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'DEV'
}))

app.listen(port, console.log(`Server running on port ${port}`))