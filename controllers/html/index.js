
const router = require('express').Router();
const { User, Sponsor, Product, Order, Chicken } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
//     try {
//     const postsData = await Posts.findAll({
//       // limit: 20, not needed since this is such a small site
//       order: [['updated_at', 'DESC']],
//       include: [
//         {
//           model: Users, 
//           attributes: ['username']
//         },
  
//       ]
//     });
  
//     const posts = postsData.map((posts) =>
//     posts.get({plain:true})
   
//     );
//     res.render('home', {posts, 
//         // logged_in: req.session.logged_in 
//     });
//   } catch (err) {
//     res.status(500).json(err)
//   }
  });

  router.get('/dashboard', async (req, res) => {
    try {
      const userData = await Users.findByPk(req.session.user_id, {
        attributes: { exclude: ['password']},
          include: [{
          model: Posts, 
          attributes: ['id', 'post_name', 'post_text', 'created_at'],
        }],
      });
      const user = userData.get({plain: true});
      // console.log(user)
      res.render('dashboard', {
        ...user, 
        logged_in: true
      });
      
    } catch (err) {
      res.status(500).json(err);
    }
  });
 

  module.exports = router;

