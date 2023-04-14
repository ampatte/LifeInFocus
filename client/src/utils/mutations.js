import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation AddUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      user {
        id
        username
        email
      }
    }
  }
`;

export const ADD_JOURNALENTRY = gql`
mutation AddJournalEntry($journalText: String!, $journalId: ID!) {
    addJournalEntry(journalText: $journalText) {
      id
      date
      journalText
      createdAt
      lastUpdated
    }
  
  }
`;

export const UPDATE_JOURNALENTRY = gql` 
mutation updateJournalEntry($journalText: String!, $lastUpdated: String!, $journalID: ID!)  {
    updateJournalEntry(journalText: $journalText, lastUpdated: $lastUpdated, journalID: $journalID) {
    _id
    journalText
    date
    lastUpdated 
    }
}
`;

export const DELETE_JOURNALENTRY = gql`
mutation deleteJournalEntry($journalID:ID!){
    deleteJournalEntry(journalID: $journalID) {
        _id
    }
}
`;

export const LOGIN = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        token
        user{
            _id
            username
            email
        }
    }
}
`;




