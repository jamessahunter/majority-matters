const User = require("./User");
const Question = require("./Question");
const Answer = require("./Answer");
const UserAnswer = require("./UserAnswer");
const Genre = require("./Genre");
const Room = require("./Room");
const Team = require("./Team");
const People = require("./People");

Question.hasMany(Answer, {
  foreignKey: "question_id",
});

Answer.belongsTo(Question, {
  foreignKey: "question_id",
});

Genre.hasMany(Question, {
  foreignKey: "genre_id",
});

//Each Question has 1 Genre
Question.belongsTo(Genre, {
  foreignKey: "genre_id",
});

Room.hasMany(Team, {
  foreignKey: "room_id",
});

Team.belongsTo(Room, {
  foreignKey: "room_id",
});

Team.hasMany(User, {
  foreignKey: "team_id",
});

User.belongsTo(Team, {
  foreignKey: "team_id",
});

module.exports = {
  User,
  Question,
  Answer,
  Genre,
  UserAnswer,
  Room,
  Team,
  People,
};
