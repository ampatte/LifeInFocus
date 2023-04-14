import { gql} from "@apollo/client";

export const QUERY_JOURNALENTRIES = gql`
query JournalEntries($username: String!) {
	journalEntries(username: $username) {
	  id
	  date
	  journalText
	  lastUpdated
	  createdAt
	}
  }
`;

export const QUERY_SINGLE_JOURNALENTRY = gql`
query JournalEntry($journalEntryId: ID!) {
	journalEntry(id: $journalEntryId) {
	  id
	  date
	  journalText
	  lastUpdated
	  createdAt
	}
  }
`;
export const QUERY_ME = gql`
query Me {
	me {
	  id
	  username
	  email
	  journalEntries {
		id
		date
		journalText
		lastUpdated
		createdAt
	  }
	}
  }
`;

export const QUERY_USERS = gql`
query GetUsers {
	getUsers {
	  id
	  username
	  email
	  journalEntries {
		id
		date
		journalText
		lastUpdated
		createdAt
	  }
	}
  }
  `;