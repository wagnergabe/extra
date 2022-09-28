const { AutheticationError } = require('apollo-server-express');
const { Post } = require('../models');

const resolvers = {
    Query: {
        posts: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Post.find(params);
        },
        post: async (parent, { _id }) => {
            return Post.findOneAndUpdate({ _id });
        }
    },

    Mutation: {
        addPost: async (parent, args, context) => {
            if (context.user) {
                const post = await Post.create({ ...args, username: context.user.username });

                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { thoughts: thought._id } },
                    { new: true }
                );

                return thought;
            }

            throw new AutheticationError('You need to be logged in to post.');
        },
        
    }
}