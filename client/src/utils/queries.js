import { gql} from "@apollo/client";

export const QUERY_JOURNALENTRIES = gql`
	query getjournalEntries {
		journalEntries {
			_id
			journalEntryText
			journalEntryAuthor
			createdAt
		}
	}
`;

export const QUERY_SINGLE_JOURNALENTRY = gql`
	query getSinglejournalEntry($journalID: ID!) {
		journalEntry(journalID: $journalID) {
			_id
			journalEntryText
			journalEntryAuthor
			createdAt
		}
	}
`;
export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      journalEntry {
        _id
        journalEntryText
        JournalEntryAuthor
        createdAt
      }
    }
  }
`;