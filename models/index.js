const User = require('./User');
const Question = require('./Question');
const Answer = require('./Answer');
const Rank = require('./Rank');
const UserAnswer = require('./UserAnswer');
// const AnswerRank = require('./AnswerRank');
const Genre = require('./Genre');
const Room = require('./Room');
const Team = require('./Team');
const People = require('./People');


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


Genre.hasMany(Question, {
    foreignKey: 'genre_id',
});


//Each Question has 1 Genre
Question.belongsTo(Genre, {
    foreignKey: 'genre_id',
});

Room.hasMany(Team,{
    foreignKey: 'room_id',
})

Team.belongsTo(Room, {
    foreignKey: 'room_id',
})

Team.hasMany(User,{
    foreignKey: 'team_id',
})

User.belongsTo(Team,{
    foreignKey: 'team_id',
})

//module.exports={User, Question, Answer, Rank, AnswerRank};
module.exports={User, Question, Answer, Rank, Genre, UserAnswer, Room, Team, People};
