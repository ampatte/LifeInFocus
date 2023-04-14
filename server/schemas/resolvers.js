const { AuthenticationError } = require("apollo-server-express");
const { User, JournalEntry } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
	Query: {
		journalEntries: async (parent, args) => {
			const params = {};

			if (args.createdAt) {
				params.createdAt = args.createdAt;
			}

			if (args.date) {
				params.date = {
					$regex: date,
				};
			}

			if (args.username) {
				params.username = args.username;
			}

			return await JournalEntry.find(params);
		},
		journalEntry: async (parent, { id }) => {
			return await JournalEntry.findById(id);
		},
		getUsers: async (parent) => {
			return await User.find().populate('journalEntries');
		},
		me: async (parent, args, context) => {
			if (context.user) {
				const user = await User.findOne({_id: context.user._id})
				.select('-__v -password')
				.populate('journalEntries')
			
			 return user;

			}

			throw new AuthenticationError("Not logged in");
		},
	},

	Mutation: {
		addUser: async (parent, args) => {
			const user = await User.create(args);
			const token = signToken(user);

			return { token, user };
		},
		addJournalEntry: async (parent, { journalText }, context) => {
			console.log("checking context\n--------------");
			console.log(context.user);
			if (context.user) {
				console.log("user exists");
				const journalEntry = await JournalEntry.create({
					journalText: journalText,
					username: context.user.username,
				});

				await User.findByIdAndUpdate(context.user._id, {
					$push: { journalEntries: journalEntry._id },
				});

				return journalEntry;
			}

			throw new AuthenticationError("Not logged in");
		},

		updateJournalEntry: async (parent, args, context) => {
			if (context.user) {
				return await JournalEntry.findByIdAndUpdate(
					args.journalID,
					{
						journalText: args.journalText,
					},
					{
						new: true,
					}
				);
			}

			throw new AuthenticationError("Not logged in");
		},

		deleteJournalEntry: async (parent, args, context) => {
			if (context.user) {
			  const deletedJournalEntry = await JournalEntry.deleteOne({
				_id: args.journalEntryId,
				userId: context.user.id
			  });
		  
			  if (deletedJournalEntry.deletedCount === 1) {
				return "Journal entry deleted successfully";
			  } else {
				throw new Error("Failed to delete journal entry");
			  }
			}
		  
			throw new AuthenticationError("Not logged in");
		  },
		  

		login: async (parent, { email, password }) => {
			const user = await User.findOne({ email });

			if (!user) {
				throw new AuthenticationError("Incorrect credentials");
			}

			const correctPw = await user.isCorrectPassword(password);

			if (!correctPw) {
				throw new AuthenticationError("Incorrect credentials");
			}

			const token = signToken(user);

			return { token, user };
		}
	}
}

module.exports = resolvers;
