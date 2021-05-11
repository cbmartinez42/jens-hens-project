const seedUsers = require('./userSeeds');
const seedChickens = require('./chickenSeeds');
const seedOrder = require('./orderSeeds');
const seedProduct = require('./productSeeds');
const seedSponsor = require('./sponsorSeeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n ****** DATABASE SYNCED ******\N');
    await seedUsers();
    console.log('\n ****** USERS SYNCED ******\N');
    await seedChickens();
    console.log('\n ****** CHICKENS SYNCED !! bok bok bokaw !! ******\N');
    await seedOrder();
    console.log('\n ****** ORDERS SYNCED ******\N');
    await seedProduct();
    console.log('\n ****** PRODUCTS SYNCED ******\N');
    await seedSponsor();
    console.log('\n ****** SPONSORS SYNCED ******\N');

    process.exit(0);
};

seedAll();