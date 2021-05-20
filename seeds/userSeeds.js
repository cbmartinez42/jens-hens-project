const { User } = require('../models');

const userData = [
    {
        first_name: 'Joe',
        last_name: 'Schmoe',
        phone: "555-555-5555",
        email: 'test@whatever',
        admin: true,
        request_admin: false,
        password: 'password'
    },
    {
        first_name: 'Richard',
        last_name: 'Hendricks',
        phone: "555-555-5555",
        email: 'admin@jenshens.com',
        admin: true,
        request_admin: false,
        password: 'password'
    },
    {
        first_name: 'Kathy',
        last_name: 'Williams',
        phone: "555-555-5555",
        email: 'test2@whatever',
        admin: false,
        request_admin: false,
        password: 'password'
    },
    {
        first_name: 'Jackie',
        last_name: 'Nguyen',
        phone: "555-555-5555",
        email: 'test3@whatever',
        admin: false,
        request_admin: true,
        password: 'password'
    }
]

const seedUser = () => User.bulkCreate(userData,  {
    individualHooks: true,
    returning: true,
  });
module.exports = seedUser;