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
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    variant: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'brown'
      },
    inventory: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    allocated: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
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