const { AuthenticationError } = require('apollo-server-express');
const {User, Trip } = require('../models');

const resolvers = {
    Query: {
        trips: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Trip.find(params).sort({ createdAt: -1 });
          },
          trip: async (parent, { _id }) => {
            return Trip.findOne({ _id });
          }
    },

    Mutation: {
        createTrip: async (parent, args, context) => {
            if (context.user) {
              const trip = await Trip.create({ ...args, username: context.user.username });
      
              await User.findByIdAndUpdate(
                { _id: context.user._id },
                { $push: { trips: trip._id } },
                { new: true }
              );
      
              return trip;
            }

    }
  }
};

module.exports = resolvers;