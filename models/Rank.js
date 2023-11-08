const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Rank extends Model {}

Rank.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    total: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    answer_id:{
        type: DataTypes.INTEGER,
        references:{
            model: 'answer',
            key: 'id'
        }
    }

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'rank',
  }
);

module.exports = Rank;