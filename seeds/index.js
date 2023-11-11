const sequelize = require('../config/connection');
const seedAnswer = require('./answerData');
const seedRank = require('./rankData');
const seedQuestion =require('./questionData');
const seedGenres = require('./genreData');
const seedPeople = require('./peopleData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedGenres();
  console.log('\n----- Genre SEEDED -----\n');

  await seedQuestion();
  console.log('\n----- Question SEEDED -----\n');

  await seedAnswer();
  console.log('\n----- Answer SEEDED -----\n');

  await seedPeople();
  console.log('\n----- People SEEDED -----\n');

  // await seedRank();
  // console.log('\n----- Rank SEEDED -----\n');

  process.exit(0);
};

seedAll();
