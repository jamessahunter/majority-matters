const sequelize = require('../config/connection');
const seedAnswer = require('./answerData');
const seedRank = require('./rankData');
const seedQuestion =require('./questionData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedQuestion();

  await seedAnswer();

  await seedRank();

  process.exit(0);
};

seedAll();
