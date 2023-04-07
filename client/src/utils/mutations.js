import { gql } from '@apollo/client';

export const ADD_JOURNALENTRY = gql`
  mutation addJournalEntry($entryText: String!, $entryAuthor: String!) {
    addJournalEntry(entryText: $entryText, entryAuthor: $entryAuthor) {
      _id
      entryText
      entryAuthor
      createdAt
    }
  }
`;