const db = require('./connection');
const { JournalText } = require('../models');

db.once('open', async () => {
  await JournalText.deleteMany();

  const journaltext = await JournalText.insertMany([
    { title: 'Food' },
    { date: 'Household Supplies' },
    { entry: 'Electronics' }
  ]);

  console.log('journal text seeded');
});