const { Answer } = require('../models');

const answerdata =[
    {
        answers: 'Pizza',
        question_id: 1,
    },
    {
        answers: 'Ice Cream',
        question_id: 1,
    },
    {
        answers: 'Curry',
        question_id: 1,
    },
    {
        answers: 'Burrito',
        question_id: 1,
    },
    {
        answers: 'Sandwich',
        question_id: 1,
    },
]

const seedAnswer = () => Answer.bulkCreate(answerdata);

module.exports = seedAnswer;