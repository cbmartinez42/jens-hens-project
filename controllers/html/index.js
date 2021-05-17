const router = require('express').Router();
const {
  User,
  Sponsor,
  Product,
  Order,
  Chicken
} = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  res.render('homepage', {
    logged_in: req.session.logged_in, 
    is_admin: req.session.is_admin
  })

});

// Goto Checkout screen
router.get('/checkout', async (req, res) => {
  res.render('checkout', {
    logged_in: req.session.logged_in, 
    is_admin: req.session.is_admin
  })
});

//Goto All Orders Screen TODO ADMIN ONLY
//****** */
//^^This has been moved to the DASHBOARD Page
//So we can remove the entire views->users.handlebars
router.get('/orders', async (req, res) => {
  try {
    const ordersData = await Order.findAll({
      include: [{
        model: User,
        attributes: ['first_name', 'last_name', 'full_name'],
      }, ],
      order: [
        ['createdAt', 'DESC'],
      ],
    })
    // Serialize data so the template can read it
    const orders = ordersData.map((order) => order.get({
      plain: true
    }));
    console.log('ORDERS>>>>>>>>', orders);

    if (!ordersData) {
      res.status(400).json({
        message: 'No order data found!'
      })
    }
    // res.status(200).json(ordersData);
    res.render('orders', {
      orders,
      logged_in: req.session.logged_in, 
      is_admin: req.session.is_admin
    })
  } catch (err) {
    res.status(400).json(err);
  }
});

// Goto Users Screen TODO ADMIN ONLY
//****** */
//^^This has been moved to the DASHBOARD Page
//So we can remove the entire views->orders.handlebars
router.get('/users', async (req, res) => {
  try {
    const usersData = await User.findAll({
      attributes: {
        exclude: ['password']
      },
      order: [
        ['createdAt', 'DESC']
      ]
    })
    // Serialize data so the template can read it
    const users = usersData.map((user) => user.get({
      plain: true
    }));
    console.log('USERS>>>>>>>>', users);

    if (!usersData) {
      res.status(400).json({
        message: 'No user data found!'
      })
    }
    // res.status(200).json(ordersData);
    res.render('users', {
      users,
      logged_in: req.session.logged_in, 
      is_admin: req.session.is_admin
    })
  } catch (err) {
    res.status(400).json(err);
  }
});


router.get('/dashboard', async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: {
        exclude: ['password']
      },
      include: [{
        model: Order,
        attributes: ['id', 'customer', 'order_quantity', 'fulfilled', 'created_at']
      }],
    });
    const user = userData.get({
      plain: true
    });

    res.render('dashboard', {
      ...user,
      logged_in: true,
      is_admin: req.session.is_admin
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
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: {
        exclude: ['password']
      },
      
    });
    const user = userData.get({
      plain: true
    });

    res.render('placeorder', {
      ...user,
      logged_in: true,
      is_admin: req.session.is_admin
    });

  } catch (err) {
    res.status(500).json(err);
  }
});



router.get('/thankyou', async(req,res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: {
        exclude: ['password']
      },
      // include: [{
      //   model: Order,
      //   attributes: ['id', 'customer', 'order_quantity', 'fulfilled', 'created_at']
      // }],
    });
    const user = userData.get({
      plain: true
    });

    res.render('thankyou', {
      ...user,
      logged_in: true,
      is_admin: req.session.is_admin
    });

  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;