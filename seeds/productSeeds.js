const { Product } = require('../models');

const productData = [
{
    variant: 'brown',
    // inventory: 100,
    allocated_qty: 24,
    allocated_to: 2,
    order: 1
},
{
    variant: 'brown',
    // inventory: 100,
    allocated_qty: 12,
    allocated_to: 2,
    order: 2
},
{
    variant: 'brown',
    // inventory: 100,
    allocated_qty: 24,
    allocated_to: 4,
    order: 3
},
{
    variant: 'brown',
    // inventory: 100,
    allocated_qty: 12,
    allocated_to: 3,
    order: 4
}

]

const seedProduct = () => Product.bulkCreate(productData);
module.exports = seedProduct;