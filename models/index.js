const User = require('./User');
const Question = require('./Question');
const Answer = require('./Answer');
const Rank = require('./Rank');
// const AnswerRank = require('./AnswerRank');

Question.hasMany(Answer,{
    foreignKey: 'question_id',
})

Answer.belongsTo(Question,{
    foreignKey: 'question_id',
})

Answer.hasOne(Rank,{
    foreignKey: 'answer_id',
})

Rank.belongsTo(Answer,{
    foreignKey: 'answer_id',
})

// Answer.belongsToMany(Rank,{
//     through: {
//         model: AnswerRank
//     }
// })

// Rank.belongsToMany(Answer,{
//     through: {
//         model: AnswerRank
//     }
// })

//module.exports={User, Question, Answer, Rank, AnswerRank};
module.exports={User, Question, Answer, Rank};