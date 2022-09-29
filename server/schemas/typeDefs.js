const { gql } = require('apollo-server-express');



const typeDefs = gql`
type Trip{
    id: ID!
    body: String!
    createdAt: String!
    username: String!
}
type Query {
    getTrips: [Trip]
}
`

module.exports = typeDefs;