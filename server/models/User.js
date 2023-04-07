const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const JournalEntry = require('./JournalEntry.js');

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true 
    },
    
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    
    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
        minlength: 8
    },
});
