// const { createPromptModule } = require("inquirer");
const { AuthenticationError } = require("apollo-server-express");
const { Post, User } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({
          _id: context.user._id,
        }).select("-__v -password");

        return userData;
      }
    },
    posts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Post.find(params);
    },
    post: async (parent, { _id }) => {
      return Post.findOne({ _id });
    },
    taggedPosts: async (parent, { tags }) => {
      const params = tags ? { tags } : {};
      return Post.find(params);
    },
    // get a user by username
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
  },
};

module.exports = resolvers;
