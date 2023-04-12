const { time } = require('console');
const { Schema, model } = require('mongoose');
const { timestamp } = require('rxjs');

const journalSchema = new Schema({
    journalText: {
        type: String, 
        required: true,
        minlength: 1,
        maxLength: 280,
        trim: true,
    },
    
    date: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },

    lastUpdated: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
    
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
})

const JournalEntry = model('JournalEntry', journalSchema);

module.exports = JournalEntry;