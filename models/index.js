const Chicken = require('./Chicken');
const Order = require('./Order');
const Product = require('./Product');
const Sponsor = require('./Sponsor');
const User = require('./User');

//  user has many posts & comments
User.hasMany(Order, {
    foreignKey: 'customer',
    onDelete: 'CASCADE'
});

Order.belongsTo(User, {
    foreignKey: 'customer'
});

User.hasMany(Sponsor, {
    foreignKey: 'sponsor',
    onDelete: 'CASCADE'
});

Chicken.hasMany(Sponsor, {
    foreignKey: 'chicken', 
    onDelete: 'CASCADE',
})


module.exports = {
    Chicken,
    User,
    Order, 
    Sponsor,
    Product
}