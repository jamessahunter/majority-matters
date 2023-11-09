const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Team extends Model {}

Team.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    room_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: 'room',
            key: 'id',
        }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'team',
  }
);

module.exports=Team;