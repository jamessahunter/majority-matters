const { Answer } = require('../models');

const answerdata =[
    {
        answers: 'Pizza',
        question_id: 1,
        total: 0,
    },
    {
        answers: 'Ice Cream',
        question_id: 1,
        total: 0,
    },
    {
        answers: 'Curry',
        question_id: 1,
        total: 0,
    },
    {
        answers: 'Burrito',
        question_id: 1,
        total: 0,
    },
    {
        answers: 'Sandwich',
        question_id: 1,
        total: 0,
    },
]

const seedAnswer = () => Answer.bulkCreate(answerdata);

module.exports = seedAnswer;