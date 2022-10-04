const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    posts: [Post]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Post {
    _id: ID
    postTitle: String
    postText: String
    username: String
    tags: String
  }

  type Query {
    me: User
    user(username: String!): User
    posts(username: String): [Post]
    post(_id: ID!): Post
    taggedPosts(tags: String): [Post]
  }

  type Mutation {
    addPost(
      postTitle: String!
      postText: String!
      username: String!
      tags: String!
    ): Post
    removePost(_id: ID!): Post
    editPost(
      postTitle: String!
      postText: String!
      _id: ID!
      username: String!
      tags: String!
    ): Post
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
