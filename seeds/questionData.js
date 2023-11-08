const { Question } = require("../models");

const questiondata=[
    {
        question: 'Which food is the best?',
        genre_id: 1, //Food
    },
    {
        question: 'Which food is the worst?',
        genre_id: 1, //Food
    },
    {
        question: 'What is the best comfort food?',
        genre_id: 1, //Food
    },
    {
        question: 'What is the best movie franchise?',
        genre_id: 7, //Movies
    },
    {
        question: 'Who is the most popular character?',
        genre_id: 7, //Movies
    },
    {
        question: 'Which movie made the most money?',
        genre_id: 7, //Movies
    },
    {
        question: 'What is the most popular sport in the world?',
        genre_id: 2, //Sport
    },
    {
        question: 'Who is the most popular athlete?',
        genre_id: 2, //Sport
    },
    {
        question: 'Who is the most popular athlete?',
        genre_id: 2, //Sport
    },
    {
        question: 'What is the most popular sports team?',
        genre_id: 2, //Sport
    },
    {
        question: 'Whos the most popular artist?',
        genre_id: 8, //Sport
    },
    {
        question: 'What is the most popular song of all time?',
        genre_id: 8, //Sport
    },
    {
        question: 'What is the most popular band?',
        genre_id: 8, //Sport
    },
    {
        question: 'Who is the most famous historical figure?',
        genre_id: 3, //History
    },
    {
        question: 'What is the most fascinating historical period?',
        genre_id: 3, //History
    },
    {
        question: 'Who is the most interesting ancient historical figure?',
        genre_id: 3, //History
    },
]

const seedQuestion = () => Question.bulkCreate(questiondata);

module.exports = seedQuestion;