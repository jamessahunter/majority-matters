const Genre = require('../models/Genre');

const genreData = [
    {
        name: 'Food'
    },
    {
        name: 'Sports'
    },
    {
        name: 'History'
    },
    {
        name: 'Video Games'
    },
    {
        name: 'Entertainment'
    },
    {
        name: 'Fantasy'
    },
    {
        name: 'Movies'
    },
    {
        name: 'Music'
    },
    {
        name: 'Memes'
    },
    {
        name: 'Super Heroes'
    }
];

const seedGenres = () => Genre.bulkCreate(genreData);

module.exports = seedGenres;