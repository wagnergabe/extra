const { gql } = require('apollo-server-express');

const typeDefs = gql `
    type Post {
        _id: ID
        postTitle: String
        postText: String
        username: String
    }

    type Query {
        post(username: String): [Post]
        post(_id: ID!): Post
    }

    type Mutation {
        addPost(postTitle: String!, postText: String!): Post
    }
`;

module.exports = typeDefs;