const { Question } = require("../models");

const questiondata=[
    {
        genre: 'food',
        question: 'Which food is the best?'
    },
    {
        genre: 'food',
        question: 'Which food is the worst?'
    },
    {
        genre: 'food',
        question: 'What is the best comfort food?'
    },
    {
        genre: 'movies',
        question: 'What is the best movie franchise?'
    },
    {
        genre: 'movies',
        question: 'Who is the most popular character?'
    },
    {
        genre: 'movies',
        question: 'Which movie made the most money?'
    },
    {
        genre: 'sports',
        question: 'What is the most popular sport in the world?'
    },
    {
        genre: 'sports',
        question: 'Who is the most popular athlete?'
    },
    {
        genre: 'sports',
        question: 'Who is the most popular athlete?'
    },
    {
        genre: 'sports',
        question: 'What is the most popular sports team?'
    },
    {
        genre: 'music',
        question: 'Whos the most popular artist?'
    },
    {
        genre: 'music',
        question: 'What is the most popular song of all time?'
    },
    {
        genre: 'music',
        question: 'What is the most popular band?'
    },
    {
        genre: 'history',
        question: 'Who is the most famous historical figure?'
    },
    {
        genre: 'history',
        question: 'What is the most fascinating historical period?'
    },
    {
        genre: 'history',
        question: 'Who is the most interesting ancient historical figure?'
    },
    {
        genre: 'video-games',
        question: 'What is the most popular video game?'
    },
    {
        genre: 'video-games',
        question: 'Which video game character is the most iconic?'
    },
    {
        genre: 'video-games',
        question: 'What is the most popular video game genre?'
    },
    {
        genre: 'memes',
        question: 'Which of these is the funniest?'
    },
    {
        genre: 'memes',
        question: 'Which of these is the most iconic?'
    },
    {
        genre: 'memes',
        question: 'Which of these memes is the best?'
    },
]

const seedQuestion = () => Question.bulkCreate(questiondata);

module.exports = seedQuestion;