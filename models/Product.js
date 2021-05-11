//  type of egg (brown/white) default brown, inventory
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Product extends Model {}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    variant: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'brown'
      },
    // inventory: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   defaultValue: 0
    // },
    allocated_qty : {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    allocated_to: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id',
      },
    },
    order: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Product',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    timestamps: false,
    modelName: 'Product',
  }
);

module.exports = Product;