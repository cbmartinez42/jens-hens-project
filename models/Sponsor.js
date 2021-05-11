//  chicken name, sponsor (can be many), amount raised, goal (bawk coin?)
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Sponsor extends Model {}

Sponsor.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    hen_name: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Chicken',
            key: 'id'
        }
    },
    sponsor: {
        type: DataTypes.INTEGER,
        references: {
            model: 'User',
            key: 'id',
        },
    },
    goal: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    amount_raised: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Sponsor',
  }
);

module.exports = Sponsor;
