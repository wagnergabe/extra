const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type Post {
        _id: ID
        postTitle: String
        postText: String
        username: String
    }

    type User {
        _id: ID
        username: String
        email: String
        posts: Array<Post>
    }

    type Comment {
        _id: Id
        commentContent: String
        commentDate: String
        commentUser: User
        commentPost: Post
    }

    type Query {
        posts(username: String): [Post]
        post(_id: ID!): Post
    }

    type Mutation {
        addPost(postTitle: String!, postText: String!, username: String!): Post
        removePost(_id: ID!): Post
    }
`;

module.exports = typeDefs;
