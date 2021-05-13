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
        first_name: 'Wiggle',
        last_name: 'Womp',
        email: 'test1@whatever',
        admin: true,
        request_admin: false,
        password: 'password'
    },
    {
        first_name: 'Wompus',
        last_name: 'Wiggly',
        email: 'test2@whatever',
        admin: false,
        request_admin: false,
        password: 'password'
    },
    {
        first_name: 'Shanty',
        last_name: 'sea',
        email: 'test3@whatever',
        admin: false,
        request_admin: false,
        password: 'password'
    }
]

const seedUser = () => User.bulkCreate(userData);
module.exports = seedUser;