import { gql } from '@apollo/client';

export const QUERY_JOURNALENTRIES = gql`
  query getEntries {
    entries {
      _id
      entryText
      entryAuthor
      createdAt
    }
  }
`;

export const QUERY_SINGLE_JOURNALENTRY = gql`
  query getSingleEntry($entryId: ID!) {
    entry(entryId: $entryId) {
      _id
      entryText
      entryAuthor
      createdAt
      }
    }
  }
`;
