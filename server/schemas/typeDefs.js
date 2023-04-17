const { gql } = require("apollo-server-express");

const typeDefs = gql`
type Date {
    id: ID
    date: String
    items: [JournalEntry]
}

type JournalEntry {
    id: ID
    date: String
    journalText: String
    lastUpdated: String
    createdAt: String
}

type User {
    id: ID
    username: String
    email: String
    journalEntries: [JournalEntry]
}

type Auth {
    token: ID!
    user: User
}

type Query {
    me: User
    getUsers: [User]
    user(username: String!): User
    journalEntries(username: String!): [JournalEntry]
    journalEntry(id:ID!): JournalEntry
}

type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth

    addJournalEntry(journalText: String!): JournalEntry

    updateJournalEntry(journalText: String!, lastUpdated: String!, journalID:ID!): JournalEntry

    deleteJournalEntry(journalID:ID!): JournalEntry

    login(email: String!, password: String!): Auth
}
`;

module.exports = typeDefs;
