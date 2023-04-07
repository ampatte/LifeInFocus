const { time } = require('console');
const { Schema, model } = require('mongoose');
const { timestamp } = require('rxjs');

const journalSchema = new Schema({
    journalText: {
        type: String, 
        required: 'Entry..',
        minlength: 1,
        maxlength: 280,
        trim: true,
    },

    journalAuthor: {
        type: String,
        required: true,
        trim: true,
    },

    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
})

const JournalEntry = model('JournalEntry', journalSchema);

module.exports = JournalEntry;