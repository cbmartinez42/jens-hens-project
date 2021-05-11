// chicken name, typical yield, breed, sponsor_id
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Chicken extends Model {}

Chicken.init(
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
    // sponsor_id: {
    //     type: DataTypes.INTEGER,
    //     allowNull: true,
    //     references: {
    //         model: 'Users',
    //         key: 'id',
    //       },
    //   },
    // inventory: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   defaultValue: 0
    // },
    // allocated: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'Users',
    //     key: 'id',
    //   },
    // },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    timestamps: false,
    modelName: 'Chicken',
  }
);

module.exports = Chicken;
