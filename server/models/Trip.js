const { Schema, model } = require('mongoose');

const tripSchema = new Schema({
        body: String,
        username: String,
        createdAt: String,
        comments: [
            { 
                body: String,
                username: String,
                createdAt: String

            }
        ],
        user: {
            type: Schema.Types.ObjectId,
            ref: 'users'
        }
});

const Trip = model('Trip', tripSchema);

module.exports = Trip;


//comments element may have to be in here