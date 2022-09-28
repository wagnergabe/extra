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
                    { $push: { posts: post._id } },
                    { new: true }
                );

                return post;
            }
        },
        removePost: async (parent, { _id }, context) => {
            if (context.user) {
                const updatedPost = await Post.findOneAndUpdate(
                    { _id: context.post._id },
                    { $pull: { posts: { postId: _id } } },
                    { new: true }
                );

                return updatedPost;
            }
        }
    }
}

module.exports = resolvers;