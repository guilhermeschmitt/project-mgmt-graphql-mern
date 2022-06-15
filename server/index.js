require('dotenv').config();

const cors = require('cors');
const express = require('express');
const port = process.env.PORT || 5000;

const schema = require('./schema/schema');
const { graphqlHTTP } = require('express-graphql');

const connectDB = require('./config/db');

const app = express();
app.use(cors());

//DB
connectDB();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'DEV'
}))

app.listen(port, console.log(`Server running on port ${port}`))
