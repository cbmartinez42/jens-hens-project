const { User } = require('../models');

const userData = [
    {
        first_name: 'Joe',
        last_name: 'Schmoe',
        username: 'Anakin',
        email: 'test@whatever',
        admin: true,
        request_admin: false,
        password: '123344444'
    },
    {
        first_name: 'Wiggle',
        last_name: 'Womp',
        username: 'John',
        email: 'test1@whatever',
        admin: true,
        request_admin: false,
        password: '9844447876'
    },
    {
        first_name: 'Wompus',
        last_name: 'Wiggly',
        username: 'wompusmaximus',
        email: 'test2@whatever',
        admin: false,
        request_admin: false,
        password: '984121346'
    },
    {
        first_name: 'Shanty',
        last_name: 'sea',
        username: 'seashanty',
        email: 'test3@whatever',
        admin: false,
        request_admin: false,
        password: '52454651'
    }
]

const seedUser = () => User.bulkCreate(userData);
module.exports = seedUser;