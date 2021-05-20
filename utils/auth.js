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
    if (req.session.logged_in) {
        try {
            userData = await User.findByPk(req.session.user_id)
        } catch (err) {
            res.status(500).json(err)
        }
        
        if (userData.admin) {
            req.session.admin = true;
            req.session.first_name = userData.first_name;
            req.session.last_name = userData.last_name
        } else {
            req.session.admin = false;
            req.session.first_name = userData.first_name;
            req.session.last_name = userData.last_name
        } 
        next();
    }
    else {
        req.session.admin = false;
        next();
    }
} 



module.exports = withAuth;