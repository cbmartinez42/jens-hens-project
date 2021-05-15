const { UUIDV4, Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {    
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
  }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER, 
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        full_name: {
            type: DataTypes.VIRTUAL,
            get() {
              return `${this.first_name} ${this.last_name}`;
            },
            set(value) {
              throw new Error('Do not try to set the `fullName` value!');
            }
          },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            }
        },
        admin: {
            type: DataTypes.BOOLEAN,
            default: 0,
        },
        request_admin: {
            type: DataTypes.BOOLEAN,
            defaultValue: 0,
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
    modelName: "User",
    }
);

module.exports = User;
