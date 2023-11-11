const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class People extends Model {}

People.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'people',
  }
);

module.exports=People;
