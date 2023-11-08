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
    {
        answers: 'Cheese Burger',
        question_id: 1,
        total: 0,
    },
    {
        answers: 'Fries',
        question_id: 1,
        total: 0,
    },
    {
        answers: 'Cookies',
        question_id: 1,
        total: 0,
    },
    {
        answers: 'Brussel Sprouts',
        question_id: 2,
        total: 0,
    },
    {
        answers: 'Sardines',
        question_id: 2,
        total: 0,
    },
    {
        answers: 'Blue Cheese',
        question_id: 2,
        total: 0,
    },
    {
        answers: 'Oysters',
        question_id: 2,
        total: 0,
    },
    {
        answers: 'Licorice',
        question_id: 2,
        total: 0,
    },
    {
        answers: 'Vegimite/Marmite',
        question_id: 2,
        total: 0,
    },
    {
        answers: 'Pickles',
        question_id: 2,
        total: 0,
    },
    {
        answers: 'Onions',
        question_id: 2,
        total: 0,
    },
    {
        answers: 'Chicken Noodle Soup',
        question_id: 3,
        total: 0,
    },
    {
        answers: 'Pizza',
        question_id: 3,
        total: 0,
    },
    {
        answers: 'Ice Cream',
        question_id: 3,
        total: 0,
    },
    {
        answers: 'Mashed Potatoes',
        question_id: 3,
        total: 0,
    },
    {
        answers: 'Grilled Cheese',
        question_id: 3,
        total: 0,
    },
    {
        answers: 'Apple Pie',
        question_id: 3,
        total: 0,
    },
    {
        answers: 'Ceasar Salad',
        question_id: 3,
        total: 0,
    },
    {
        answers: 'Tomato Soup',
        question_id: 3,
        total: 0,
    },
    {
        answers: 'Star Wars',
        question_id: 4,
        total: 0,
    },
    {
        answers: 'Lord of the Rings',
        question_id: 4,
        total: 0,
    },
    {
        answers: 'Harry Potter',
        question_id: 4,
        total: 0,
    },
    {
        answers: 'James Bond',
        question_id: 4,
        total: 0,
    },
    {
        answers: 'Marvel Cinematic Universe(MCU)',
        question_id: 4,
        total: 0,
    },
    {
        answers: 'Jurassic Park',
        question_id: 4,
        total: 0,
    },
    {
        answers: 'Fast & Furious',
        question_id: 4,
        total: 0,
    },
    {
        answers: 'Pirates of the Caribbean',
        question_id: 4,
        total: 0,
    },
    {
        answers: 'Forrest Gump',
        question_id: 5,
        total: 0,
    },
    {
        answers: 'Darth Vader',
        question_id: 5,
        total: 0,
    },
    {
        answers: 'Harry Potter',
        question_id: 5,
        total: 0,
    },
    {
        answers: 'James Bond',
        question_id: 5,
        total: 0,
    },
    {
        answers: 'Indiana Jones',
        question_id: 5,
        total: 0,
    },
    {
        answers: 'Jack Sparrow',
        question_id: 5,
        total: 0,
    },
    {
        answers: 'The Joker',
        question_id: 5,
        total: 0,
    },
    {
        answers: 'Gollum',
        question_id: 5,
        total: 0,
    },
    {
        answers: 'Avatar',
        question_id: 6,
        total: 0,
    },
    {
        answers: 'Avengers: Endgame',
        question_id: 6,
        total: 0,
    },
    {
        answers: 'Avatar: The Way of Water',
        question_id: 6,
        total: 0,
    },
    {
        answers: 'Titanic',
        question_id: 6,
        total: 0,
    },
    {
        answers: 'Star Wars: The Force Awakens',
        question_id: 6,
        total: 0,
    },
    {
        answers: 'Avengers: Infinity War',
        question_id: 6,
        total: 0,
    },
    {
        answers: 'Spider-Man: No Way Home',
        question_id: 6,
        total: 0,
    },
    {
        answers: 'Jurassic World',
        question_id: 6,
        total: 0,
    },
    {
        answers: 'Soccer(Football)',
        question_id: 7,
        total: 0,
    },
    {
        answers: 'Cricket',
        question_id: 7,
        total: 0,
    },
    {
        answers: 'Basketball',
        question_id: 7,
        total: 0,
    },
    {
        answers: 'Tennis',
        question_id: 7,
        total: 0,
    },
    {
        answers: 'Rugby',
        question_id: 7,
        total: 0,
    },
    {
        answers: 'American Football',
        question_id: 7,
        total: 0,
    },
    {
        answers: 'Baseball',
        question_id: 7,
        total: 0,
    },
    {
        answers: 'Golf',
        question_id: 7,
        total: 0,
    },
    {
        answers: 'Muhammad Ali',
        question_id: 8,
        total: 0,
    },
    {
        answers: 'Michael Jordan',
        question_id: 8,
        total: 0,
    },
    {
        answers: 'Christiano Ronaldo',
        question_id: 8,
        total: 0,
    },
    {
        answers: 'Lebron James',
        question_id: 8,
        total: 0,
    },
    {
        answers: 'Lionel Messi',
        question_id: 8,
        total: 0,
    },
    {
        answers: 'Serena Williams',
        question_id: 8,
        total: 0,
    },
    {
        answers: 'Usain Bolt',
        question_id: 8,
        total: 0,
    },
    {
        answers: 'Pelé',
        question_id: 8,
        total: 0,
    },
    {
        answers: 'FC Barcelona',
        question_id: 9,
        total: 0,
    },
    {
        answers: 'Real Madrid',
        question_id: 9,
        total: 0,
    },
    {
        answers: 'New York Yankees',
        question_id: 9,
        total: 0,
    },
    {
        answers: 'Manchester United',
        question_id: 9,
        total: 0,
    },
    {
        answers: 'Los Angeles Lakers',
        question_id: 9,
        total: 0,
    },
    {
        answers: 'Dallas Cowboys',
        question_id: 9,
        total: 0,
    },
    {
        answers: 'New England Patriots',
        question_id: 9,
        total: 0,
    },
    {
        answers: 'Golden State Warriors',
        question_id: 9,
        total: 0,
    },
    {
        answers: 'Beyoncé',
        question_id: 10,
        total: 0,
    },
    {
        answers: 'Taylor Swift',
        question_id: 10,
        total: 0,
    },
    {
        answers: 'Whitney Houston',
        question_id: 10,
        total: 0,
    },
    {
        answers: 'Michael Jackson',
        question_id: 10,
        total: 0,
    },
    {
        answers: 'Eminem',
        question_id: 10,
        total: 0,
    },
    {
        answers: 'Justin Bieber',
        question_id: 10,
        total: 0,
    },
    {
        answers: 'Rihanna',
        question_id: 10,
        total: 0,
    },
    {
        answers: 'Elvis Presley',
        question_id: 10,
        total: 0,
    },
    {
        answers: 'I Will Always Love You',
        question_id: 11,
        total: 0,
    },
    {
        answers: 'Bohemian Rhapsody',
        question_id: 11,
        total: 0,
    },
    {
        answers: 'Closer',
        question_id: 11,
        total: 0,
    },
    {
        answers: 'Uptown Funk',
        question_id: 11,
        total: 0,
    },
    {
        answers: 'I Gotta Feeling',
        question_id: 11,
        total: 0,
    },
    {
        answers: 'Despacito',
        question_id: 11,
        total: 0,
    },
    {
        answers: 'Shape of You',
        question_id: 11,
        total: 0,
    },
    {
        answers: 'Hey Jude',
        question_id: 11,
        total: 0,
    },
    {
        answers: 'The Beatles',
        question_id: 12,
        total: 0,
    },
    {
        answers: 'Queen',
        question_id: 12,
        total: 0,
    },
    {
        answers: 'Led Zeppelin',
        question_id: 12,
        total: 0,
    },
    {
        answers: 'The Rolling Stones',
        question_id: 12,
        total: 0,
    },
    {
        answers: 'BTS',
        question_id: 12,
        total: 0,
    },
    {
        answers: "Guns N' Roses",
        question_id: 12,
        total: 0,
    },
    {
        answers: 'AC/DC',
        question_id: 12,
        total: 0,
    },
    {
        answers: 'Nirvana',
        question_id: 12,
        total: 0,
    },
    {
        answers: 'Thomas Jefferson',
        question_id: 13,
        total: 0,
    },
    {
        answers: 'Charles Darwin',
        question_id: 13,
        total: 0,
    },
    {
        answers: 'Albert Einstein',
        question_id: 13,
        total: 0,
    },
    {
        answers: 'Leonardo da Vinci',
        question_id: 13,
        total: 0,
    },
    {
        answers: 'Abraham Lincon',
        question_id: 13,
        total: 0,
    },
    {
        answers: "Benjamin Franklin",
        question_id: 13,
        total: 0,
    },
    {
        answers: 'Napoleon Bonaparte',
        question_id: 13,
        total: 0,
    },
    {
        answers: 'Winston Churchill',
        question_id: 13,
        total: 0,
    },
    {
        answers: 'Ancient Egypt',
        question_id: 14,
        total: 0,
    },
    {
        answers: 'Renaissance',
        question_id: 14,
        total: 0,
    },
    {
        answers: 'World War II',
        question_id: 14,
        total: 0,
    },
    {
        answers: 'The Age of Exploration',
        question_id: 14,
        total: 0,
    },
    {
        answers: 'The Age of Enlightenment',
        question_id: 14,
        total: 0,
    },
    {
        answers: "The Victorian Era",
        question_id: 14,
        total: 0,
    },
    {
        answers: 'The American Civil War',
        question_id: 14,
        total: 0,
    },
    {
        answers: 'The Cold War Era',
        question_id: 14,
        total: 0,
    },
    {
        answers: 'Cleopatra',
        question_id: 15,
        total: 0,
    },
    {
        answers: 'Julius Ceasar',
        question_id: 15,
        total: 0,
    },
    {
        answers: 'Alexander the Great',
        question_id: 15,
        total: 0,
    },
    {
        answers: 'Confucius',
        question_id: 15,
        total: 0,
    },
    {
        answers: 'Socrates',
        question_id: 15,
        total: 0,
    },
    {
        answers: "Herodotus",
        question_id: 15,
        total: 0,
    },
    {
        answers: 'Homer',
        question_id: 15,
        total: 0,
    },
    {
        answers: 'Cyrus the Great',
        question_id: 15,
        total: 0,
        total: 0,
    },
]

const seedAnswer = () => Answer.bulkCreate(answerdata);

module.exports = seedAnswer;