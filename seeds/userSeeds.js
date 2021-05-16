const { User } = require('../models');

const userData = [
    {
        first_name: 'Joe',
        last_name: 'Schmoe',
        email: 'test@whatever',
        admin: true,
        request_admin: false,
        password: 'password'
    },
    {
        first_name: 'Richard',
        last_name: 'Hendricks',
        email: 'admin@jenshens.com',
        admin: true,
        request_admin: false,
        password: 'password'
    },
    {
        first_name: 'Kathy',
        last_name: 'Williams',
        email: 'test2@whatever',
        admin: false,
        request_admin: false,
        password: 'password'
    },
    {
        first_name: 'Jackie',
        last_name: 'Nguyen',
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