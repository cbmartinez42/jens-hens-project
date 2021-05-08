// user role (admin or user, requested admin)

const sequelize = require('../config/connection');

class Roles extends Model {}

Roles.init(
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
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    modelName: "roles",
    }
);

module.exports = Roles;
