const { gql } = require("apollo-server-express");

const typeDefs = gql`
type User {
  id: ID
  username:String
  email: String
  }

  


  type Post {
    _id: ID
    postTitle: String
    postText: String
    username: String
    tags: [Tag]
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

  type Query {
    posts(username: String): [Post]
    post(_id: ID!): Post
    tags: [Tag]
    tag(_id: ID!): Tag
  }

  type Mutation {
    addPost(postTitle: String!, postText: String!, username: String!): Post
    removePost(_id: ID!): Post
    editPost(postTitle: String!, postText: String!, _id: ID!, username: String!): Post
    addTag(input: TagInput): Post
    removeTag(tagId: ID!): Post
  }
`;

module.exports = typeDefs;
