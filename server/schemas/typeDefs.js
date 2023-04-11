const { gql } = require("apollo-server-express");

const typeDefs = gql`
type Date {
    id: ID,
    date: String,
    items: [JournalEntry]
}

type JournalEntry {
    id: ID,
    date: String,
    journalText: String, 
    lastUpdated: String,
    createdAt: String
}

type User {
    id: ID,
    firstName: String,
    lastName: String,
    email: String,
    journalEntries: [JournalEntry]
}

type Auth {
    token: ID,
    user: User
}

type Query {
    getUsers: [User]
    journalEntries: [JournalEntry],
    journalEntry(id:ID!): JournalEntry,

}

type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth, 

    addJournalEntry(entryText: String!): JournalEntry,

    updateJournalEntry(entryText: String!, lastUpdated: String!, journalID:ID!): JournalEntry,

}
  

`;

module.exports = typeDefs;
