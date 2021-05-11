const { Order } = require('../models');

const orderData = [
    {
        customer: 2,
        order_quantity: 24,
        fulfilled: true,
    },
    {
        customer: 2,
        order_quantity: 12,
        fulfilled: false,
    },
    {
        customer: 3,
        order_quantity: 24,
        fulfilled: false,
    },
    {
        customer: 4,
        order_quantity: 24,
        fulfilled: true,
    },
    {
        customer: 3,
        order_quantity: 36,
        fulfilled: false,
    },

]

const seedOrder = () => Order.bulkCreate(orderData);
module.exports = seedOrder;