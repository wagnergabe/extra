const { AuthenticationError } = require('apollo-server-express');
const {User, Trip } = require('../models');

const resolvers = {
    Query: {
        async getTrips() {
            try{
                const trips = await Trip.find();
                return trips;
            } catch (err) {
                throw new Error(err);
            }
        }
    }
};

module.exports = resolvers;