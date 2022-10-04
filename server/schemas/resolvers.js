//will handle errors like user trying to log in with wrong username/password
const { AuthenticationError } = require("apollo-server-express");
const { createPromptModule } = require("inquirer");
const { Post, User } = require("../models");
const { signToken } = require("../utils/auth");
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
    tag: async (parent, { tagId }) => {
      const params = tagId ? { tagId } : {};
      return Post.find({ params });
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
    //get a user by username
    user: async (parent, { username }) => {
      return User.findOne({ username }).select("__v -password");
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

      throw new AuthenticationError("You need to be loggeed in");
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
    editPost: async (parent, args, context) => {
      if (context.user) {
        const updatedPost = await Post.findOneAndUpdate(
          {
            ...args,
            username: context.user.username,
          },
          { _id: context.post._id },
          { $push: { posts: { postId: _id } } }
        );
        return editPost;
      }
    },
    addTag: async (parent, { postId, category, location }) => {
      if (context.post) {
        const updatedPost = await Post.findOneAndUpdate(
          { _id: postId },
          {
            $push: {
              tags: { category, location },
            },
          },
          { new: true }
        );

        return updatedPost;
      }
    },
    removeTag: async (parent, { tagId }, context) => {
      if (context.post) {
        const updatedPost = await Post.findOneAndUpdate(
          { _id: tagId },
          { $pull: { tags: { tagId: tagId } } }
        );
      }
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

      // login info
      addUser: async (parent, args) => {
        const user = await User.create(args);
        const token = signToken(user);
        return { token, user };
      },
      login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
        if (!user) {
          throw new AuthenticationError("incorrect credentials");
        }
        const correctPw = await user.isCorrectPassword(password);

        if (!correctPw) {
          throw new AuthenticationError("incorrect credentials");
        }

        const token = signToken(user);
        return { token, user };
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
  },
};
module.exports = resolvers;
