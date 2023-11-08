const { Rank } = require('../models');

const rankdata =[
    {
        total: 0,
        answer_id: 1
    },
    {
        total: 0,
        answer_id: 2
    },
    {
        total: 0,
        answer_id: 3
    },
    {
        total: 0,
        answer_id: 4
    },
    {
        total: 0,
        answer_id: 5
    },
]

const seedRank = () => Rank.bulkCreate(rankdata);

module.exports = seedRank;