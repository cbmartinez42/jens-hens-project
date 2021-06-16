const { Order } = require('../models');

const orderData = [
    {
        customer: 2,
        order_quantity: 24,
        fulfilled: true,
        spec_inst: "Tomorrow around noon.",
    },
    {
        customer: 2,
        order_quantity: 12,
        fulfilled: false,
        spec_inst: "On my way over now.",
    },
    {
        customer: 3,
        order_quantity: 24,
        fulfilled: false,
        spec_inst: "10 minutes.",
    },
    {
        customer: 4,
        order_quantity: 24,
        fulfilled: true,
        spec_inst: "Monday morning",
    },
    {
        customer: 3,
        order_quantity: 36,
        fulfilled: false,
    },

]

const seedOrder = () => Order.bulkCreate(orderData);
module.exports = seedOrder;