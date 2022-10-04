const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Auth {
    token: ID!
    user: User
  }

  type Post {
    _id: ID
    postTitle: String
    postText: String
    username: String
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
  }

  type Comment {
    _id: ID
    commentContent: String
    commentDate: String
    commentUser: User
    commentPost: Post
  }

  type Query {
    posts(username: String): [Post]
    post(_id: ID!): Post
    post_comments(post: PostInput): [Comment]
    user_comments(user: UserInput): [Comment]
    comment(_id: ID!): Comment
    tags: [Tag]
    tag(_id: ID!): Tag
    user: User
  }

  type Mutation {
    addPost(postTitle: String!, postText: String!, username: String!): Post
    removePost(_id: ID!): Post
    editPost(
      postTitle: String!
      postText: String!
      _id: ID!
      username: String!
    ): Post
    addComment(
      commentContent: String!
      commentUser: UserInput!
      commentPost: PostInput!
    ): Comment
    removeComment(_id: ID!): Comment
    addTag(input: TagInput): Post
    removeTag(tagId: ID!): Post
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
