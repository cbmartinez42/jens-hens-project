
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

  // Goto Checkout screen
  router.get('/checkout', async (req, res) => {
    res.render('checkout', {logged_in: req.session.logged_in})
    });

  //Goto All Orders Screen TODO ADMIN ONLY
router.get('/orders', async (req, res) => {
  try {
    const ordersData = await Order.findAll({
      include: [
      {
        model: User,
        attributes: ['first_name','last_name','full_name'],
      },
    ],
    //TO-DO MAKE IT SORT Figure out why if you uncomment out the below you get errors.
    // order: [
    //   ['date_created', 'DESC'],
    // ],
    })
    // Serialize data so the template can read it
    const orders = ordersData.map((order) => order.get({ plain: true }));
    console.log('ORDERS>>>>>>>>',orders);
    
    if (!ordersData) {
      res.status(400).json({message: 'No order data found!'})
    }
    // res.status(200).json(ordersData);
    res.render('orders', {
      orders,
      logged_in: req.session.logged_in,
    })
  } catch (err) {
    res.status(400).json(err);
  }
});

// Goto Users Screen TODO ADMIN ONLY
router.get('/users', async (req, res) => {
  try {
    const usersData = await User.findAll({
    //   include: [
    //   {
    //     model: User,
    //     attributes: ['first_name','last_name','full_name'],
    //   },
    // ],
    //TO-DO MAKE IT SORT Figure out why if you uncomment out the below you get errors.
    // order: [
    //   ['date_created', 'DESC'],
    // ],
    })
    // Serialize data so the template can read it
    const users = usersData.map((user) => user.get({ plain: true }));
    console.log('USERS>>>>>>>>',users);
    
    if (!usersData) {
      res.status(400).json({message: 'No user data found!'})
    }
    // res.status(200).json(ordersData);
    res.render('users', {
      users,
      logged_in: req.session.logged_in,
    })
  } catch (err) {
    res.status(400).json(err);
  }
});


  router.get('/dashboard', async (req, res) => {
    try {
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password']},
          include: [{
          model: Order, 
          attributes: ['id', 'customer', 'order_quantity', 'fulfilled']
        }],
      });
      const user = userData.get({plain: true});
      console.log(user)
      console.log(user.Orders)
      
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

  router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
        res.render('login');
      });
    } else {
      res.status(404).end();
    }
  });

  router.get('/placeorder', async (req, res) => {
    res.render('placeorder');
  });
 
  // render logout page
// router.get('/logout', (req, res) => res.render('logout', {logged_in: req.session.logged_in}));

  module.exports = router;

