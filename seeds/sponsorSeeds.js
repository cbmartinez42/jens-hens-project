const { Sponsor } = require('../models');

const sponsorData = [
    {
        hen: 1,
        sponsor: 1,
        goal: 3000,
        amount_raised: 3,
    },
    {
        hen: 2,
        sponsor: 4,
        goal: 5000,
        amount_raised: 1000,
    },
    {
        hen: 1,
        sponsor: 2,
        goal: 10000,
        amount_raised: 3,
    },
    {
        hen: 3,
        sponsor: 3,
        goal: 2000,
        amount_raised: 50,
    },
    {
        hen: 4,
        sponsor: 4,
        goal: 10000,
        amount_raised: 1,
    },
]

const seedSponsor = () => Sponsor.bulkCreate(sponsorData);
module.exports = seedSponsor;