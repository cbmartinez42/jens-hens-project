const router = require('express').Router();
const {
  User,
  Sponsor,
  Product,
  Order,
  Chicken
} = require('../../models');
const withAuth = require('../../utils/auth');
const loginCheck = require('../../utils/login');




router.get('/', withAuth, async (req, res) => {
  //TO-DO Redirect if Not Logged in (Chris)
  res.render('homepage', {
    logged_in: req.session.logged_in, 
    admin: req.session.admin,
    first_name: req.session.first_name,
    last_name: req.session.last_name
  })

});

// Goto Checkout screen
router.get('/checkout', loginCheck, withAuth, async (req, res) => {
  res.render('checkout', {
    logged_in: req.session.logged_in,
    admin: req.session.admin,
    first_name: req.session.first_name,
    last_name: req.session.last_name
  })
});

//Goto All Orders Screen TODO ADMIN ONLY
//****** */
//^^This has been moved to the DASHBOARD Page
//So we can remove the entire views->users.handlebars
router.get('/orders', loginCheck, withAuth, async (req, res) => {
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


    if (!ordersData) {
      res.status(400).json({
        message: 'No order data found!'
      })
    }
    // res.status(200).json(ordersData);
    res.render('orders', {
      orders,
      logged_in: req.session.logged_in,
      admin: req.session.admin,
    })
  } catch (err) {
    res.status(400).json(err);
  }
});

// Goto Users Screen TODO ADMIN ONLY
//****** */
//^^This has been moved to the DASHBOARD Page
//So we can remove the entire views->orders.handlebars
router.get('/users', loginCheck, withAuth, async (req, res) => {

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

    if (!usersData) {
      res.status(400).json({
        message: 'No user data found!'
      })
    }
    // res.status(200).json(ordersData);
    res.render('users', {
      users,
      logged_in: req.session.logged_in,
      admin: req.session.admin
    })
  } catch (err) {
    res.status(400).json(err);
  }
});

// GET THE ADMIN DASHBOARD *** NEEDS TO BE REVAMPED***
router.get('/dashboard', loginCheck, withAuth, async (req, res) => {
  try {
    const usersData = await User.findAll({
      // order: [['createdAt', 'DESC']],
      attributes: {
        exclude: ['password']
      },
      include: [{
        model: Order,
        attributes: ['id', 'customer', 'order_quantity', 'fulfilled', 'created_at', 'updated_at']
      }],
      // order: [
      //   ['createdAt', 'DESC']
      // ]
    })
    // Serialize data so the template can read it
    const users = usersData.map((user) => user.get({
      plain: true
    }));
    console.log('USERS>>>>>>>>', users);

    if (!users) {
      res.status(400).json({
        message: 'No user data found!'
      })
    }
    // res.status(200).json(ordersData);
    res.render('dashboard', {
      users,
      logged_in: req.session.logged_in,
      first_name: req.session.first_name,
      last_name: req.session.last_name,
      admin: req.session.admin,
      // orders,
      });
    }
    catch (err) {
      res.status(500).json(err);
      }
    }
);

// });

// GET ALL MY ORDERS
router.get('/myorders', loginCheck, withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: {
        exclude: ['password']
      },
      include: [{
        model: Order,
        attributes: ['id', 'customer', 'order_quantity', 'fulfilled', 'created_at', 'updated_at']
      }],
    });
    const user = userData.get({
      plain: true
    });
    console.log(user)
    console.log(user.Orders)

    res.render('myorders', {
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

router.get('/placeorder', loginCheck, withAuth, async (req, res) => {
  res.render('placeorder', {
    logged_in: req.session.logged_in,
    first_name: req.session.first_name,
    last_name: req.session.last_name,
    admin: req.session.admin,
  });
});

router.get('/thankyou', loginCheck, withAuth, async(req,res) => {
  res.render('thankyou', {
    logged_in: req.session.logged_in,
    first_name: req.session.first_name,
    last_name: req.session.last_name,
    admin: req.session.admin,
  })
})

router.get('/terms', loginCheck, withAuth, (req, res) => res.render('termsofservice', {
  logged_in: req.session.logged_in,
  first_name: req.session.first_name,
  last_name: req.session.last_name,
  admin: req.session.admin,
}))

module.exports = router;