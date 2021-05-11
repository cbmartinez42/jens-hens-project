const { Chicken } = require('../models');

const chickenData = [
    {
        name: 'Betsy',
    },
    {
        name: 'Glenda the Wise',
    },
    {
        name: 'Wanda',
    },
    {
        name: 'Horace',
    },
]

const seedChicken = () => Chicken.bulkCreate(chickenData);
module.exports = seedChicken;