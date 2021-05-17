const {User} = require('../models');

// const withAuth = (req, res, next) => {
//     if (!req.session.logged_in) {
//         res.redirect('/login');
//     } else {
//         next();
//     }
// };


const withAuth = async (req, res, next) => {
    let userData;
    try {
        userData = await User.findByPk(req.session.user_id)
    } catch (err) {
        res.status(500).json(err)
    }
    console.log('user; ',userData);
    let isAdmin = userData.admin;
    // console.log('isAdmin>>>>', isAdmin);
    
    if (userData.admin) {
        req.session.admin = true
    } else {
        req.session.admin = false;
    } 
    next();
} 



module.exports = withAuth;