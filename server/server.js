const express = require ('express');
require('dotenv').config()

const tripRoutes = require('./routes/trips');

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

//PORT 
app.listen(process.env.PORT, () => {
    console.log('listening on port 3000', process.env.PORT)
})