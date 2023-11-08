const { Question } = require("../models");

const questiondata=[
    {
        genre: 'food',
        question: 'Which food do you prefer?'
    }
]

const seedQuestion = () => Question.bulkCreate(questiondata);

module.exports = seedQuestion;