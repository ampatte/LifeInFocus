const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Date = {
    id: String,
    date: String,
    items: [JournalEntry]
}

type JournalEntry = {
    id: ID,
    date: String,
    text: String, 
    lastUpdated: String
}

type User {
    id: ID
    firstName: String
    lastName: String
    email: String
}

type Auth {
    token: ID
    user: User
}

`;

module.exports = typeDefs;
