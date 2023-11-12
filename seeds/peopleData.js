const { People } = require('../models');

const peopleData=[
    {
        name: 'Harry Potter',
    },
    {
        name: 'Frodo Baggins'
    },
    {
        name: 'Sherlock Holmes'
    },
    {
        name: 'Darth Vader'
    },
    {
        name: 'James Bond'
    },
    {
        name: 'Spider-Man'
    },
    {
        name: 'Frozone'
    },
    {
        name: 'Jack Sparrow'
    },
    {
        name: 'Iron Man'
    },
    {
        name: 'Batman'
    },
]

const seedPeople = () => People.bulkCreate(peopleData);

module.exports = seedPeople;