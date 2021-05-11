// user, order quantity/type, price, date of order, fullfilled date 

// chicken name, typical yield, breed, sponsor_id
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Order extends Model {}

Order.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    customer: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'User',
        key: 'id',
      },
    },
    order_quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    fulfilled: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
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
    timestamps: true,
    modelName: 'Order',
  }
);

module.exports = Order;
