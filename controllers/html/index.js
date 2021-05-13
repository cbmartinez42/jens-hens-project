
const router = require('express').Router();
const { User, Sponsor, Product, Order, Chicken } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  //TO-DO Redirect if Not Logged in (Chris)
  res.render('homepage', {logged_in: req.session.logged_in})
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

  router.get('/checkout', async (req, res) => {
    res.render('checkout', {logged_in: req.session.logged_in})
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

  router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/');
    //   res.render('homepage');
      return;
    }
    res.render('login');
  });

  // router.post('/logout', (req, res) => {
  //   if (req.session.logged_in) {
  //     req.session.destroy(() => {
  //       res.status(204).end();
  //     });
  //   } else {
  //     res.status(404).end();
  //   }
  // });
 

  module.exports = router;

