const { Post, User } = require("../models");
const { Comment } = require("../models");

const resolvers = {
  Query: {
    posts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Post.find(params);
    },
    post: async (parent, { _id }) => {
      return Post.findOneAndUpdate({ _id });
    },
    post_comments: async (parent, { _id }) => {
      return Comment.find(params);
    },
    user_comments: async (parent, { _id }) => {
      return Comment.find(params);
    },
    comment: async (parent, { _id }) => {
      return Comment.findOneAndUpdate({ _id });
    },
  },

  Mutation: {
    addPost: async (parent, args, context) => {
      if (context.user) {
        const post = await Post.create({
          ...args,
          username: context.user.username,
        });

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
    },
    addComment: async (parent, { _id }, context) => {
      if (context.user) {
        const comment = Comment.create({
          ...args,
          user: context.user,
        });
        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { posts: comment._id } },
          { new: true }
        );
        return comment;
      }
    },
    removeComment: async (parent, { _id }, context) => {
      if (context.user) {
        const updatedComment = await Comment.findOneAndUpdate(
          { _id: context.post._id },
          { $pull: { comments: { commentId: _id } } },
          { new: true }
        );
        return updatedComment;
      }
    },
  },
};

module.exports = resolvers;
