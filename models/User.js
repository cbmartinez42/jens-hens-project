const { UUIDV4, Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Users extends Model {}

Users.init(
    {
        id: {
            type: DataTypes.INTEGER, 
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            }
        },
        role_id: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'Roles',
                key: 'id',
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8]
            }
        }
    },
    {
        hooks: {
            beforeCreate: async (newUserData) => {
              newUserData.password = await bcrypt.hash(newUserData.password, 10);
              console.log(newUserData.password)
              return newUserData;
            },
            beforeUpdate: async (updatedUserData) => {
              updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
              return updatedUserData;
            },
          },
    
    sequelize,
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    modelName: "Users",
    }
);

module.exports = Users;
