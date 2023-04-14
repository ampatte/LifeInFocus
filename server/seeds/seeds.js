const db = require('../config/connection');
const { JournalEntry, User } = require('../models');

db.once('open', async () => {
  await JournalEntry.deleteMany();

  const journalEntries = await JournalEntry.insertMany([
    {
      title: 'Having a positive day',
      date: '04/06/2023',
      entry:
        'I am doing little things to help me be positive throughout the day',
      category: journalEntries[0].id,

    },

  ]);

  console.log('journal entry seeded');

  await User.deleteMany();

  await User.create({
    // firstName: 'Pamela',
    // lastName: 'Washington',
    username: 'GhostFace',
    email: 'Ghostface@testmail.com',
    password: 'password12345',
    journalEntries: [
      {
        journalEntries: [journalEntries[0].id, journalEntries[0].id, journalEntries[1].id]
      }
    ]
  });

  console.log('users seeded');

  process.exit();
});