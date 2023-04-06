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
`;

module.exports = typeDefs;
