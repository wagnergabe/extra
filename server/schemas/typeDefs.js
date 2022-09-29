const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    trips: [Trip]
}

type Trip{
    _id: ID!
    body: String!
    createdAt: String!
    username: String!
}
type Query {
    me: User
    users: [User]
    user(username: String!): User
    trips(username: String): [Trip]
    trip(_id: ID!): Trip
}
type Mutation {
    createTrip(tripText: String!): Trip
    
}
`

module.exports = typeDefs;