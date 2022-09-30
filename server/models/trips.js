const mongoose = require('mongoose');

const Schema = mongoose.Schema

const tripSchema = new Schema({
        title: {
            type: String,
            required: true
        },
        location: {
            type: String,
            required: true
        },
        date: {
            type: String
        }
        
})

module.exports = mongoose.model('Trips', tripSchema)