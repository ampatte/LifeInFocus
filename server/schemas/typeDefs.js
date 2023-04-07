const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Date {
    id: ID,
    date: String,
    items: [JournalEntry]
}

type JournalEntry {
    id: ID,
    date: String,
    text: String, 
    lastUpdated: String
    created
}

type User {
    id: ID,
    firstName: String,
    lastName: String,
    email: String
}

type Auth {
    token: ID,
    user: User
}

type Query {
   getUsers: [User] 
}

type Mutation {
    addJournalEntry(entryText: String, entryAuthor: ID)
}
`;

module.exports = typeDefs;
