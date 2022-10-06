const { gql } = require("apollo-server-express");

const typeDefs = gql`
<<<<<<< HEAD
  type Auth {
    token: ID!
    user: User
  }
=======
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
>>>>>>> main

  type Post {
    _id: ID
    postTitle: String
    postText: String
    username: String
<<<<<<< HEAD
  }

  input PostInput {
    postTitle: String
    postText: String
    username: String
  }

  type User {
    _id: ID
    username: String
    email: String
    posts: [Post]
  }

  input UserInput {
    username: String
    email: String
  }

  input TagInput {
    category: String
    location: String
  }

  type Tag {
    _id: ID
    category: String
    location: String
=======
    tags: String
>>>>>>> main
  }

  type Comment {
    _id: ID
    commentContent: String
    commentDate: String
    commentUser: User
    commentPost: Post
  }

  type Query {
    me: User
    user(username: String!): User
    posts(username: String): [Post]
    post(_id: ID!): Post
<<<<<<< HEAD
    post_comments(post: PostInput): [Comment]
    user_comments(user: UserInput): [Comment]
    comment(_id: ID!): Comment
    tags: [Tag]
    tag(_id: ID!): Tag
    user: User
=======
    taggedPosts(tags: String): [Post]
>>>>>>> main
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
<<<<<<< HEAD
    ): Post
    addComment(
      commentContent: String!
      commentUser: UserInput!
      commentPost: PostInput!
    ): Comment
    removeComment(_id: ID!): Comment
    addTag(input: TagInput): Post
    removeTag(tagId: ID!): Post
=======
      tags: String!
    ): Post
>>>>>>> main
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
