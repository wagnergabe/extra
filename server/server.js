const express = require ('express');
const tripRoutes = require('./routes/trips');
const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server-express');

const {typeDefs, resolvers} = require('./schemas');
const db = require('./config/connection');



require('dotenv').config()


// express app
const app = express();

//middleware
app.use(express.json())


app.use((req, res, next) => {
console.log(req.path, req.method)
next()
})

//routes
app.use('/api/trips', tripRoutes)

