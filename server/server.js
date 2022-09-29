const express = require ('express');
const tripRoutes = require('./routes/trips');
const mongoose = require('mongoose');

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

//connect to database
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //PORT 
    app.listen(process.env.PORT, () => {
    console.log('connect to db/listening on port', process.env.PORT)
})
    })
    .catch((error) => {
        console.log(error)
    })

