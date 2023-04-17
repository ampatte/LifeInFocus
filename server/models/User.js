const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const JournalEntry = require("./JournalEntry.js");

const userSchema = new Schema({
	username: {
		type: String,
		required: true,
		trim: true,
	},

	// lastName: {
	// 	type: String,
	// 	required: true,
	// 	trim: true,
	// },

	email: {
		type: String,
		required: true,
		unique: true,
	},

	password: {
		type: String,
		required: true,
		minlength: 8,
	},
	journalEntries: [{
		type: Schema.Types.ObjectId,
		ref: "JournalEntry"
	}],
});

userSchema.pre("save", async function (next) {
	if (this.isNew || this.isModified("password")) {
		const saltRounds = 10;
		this.password = await bcrypt.hash(this.password, saltRounds);
	}

	next();
});

userSchema.methods.isCorrectPassword = async function (password) {
	return bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

module.exports = User;