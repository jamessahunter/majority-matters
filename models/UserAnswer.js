const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserAnswer extends Model {}

UserAnswer.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    answer_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id:{
      type: DataTypes.INTEGER,
    },
    question_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'question',
          key: 'id',
        },
      },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'userAnswer',
  }
);

module.exports = UserAnswer;