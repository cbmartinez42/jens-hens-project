const router = require('express').Router();
const { Order, User } = require('../../models');
// const withAuth = require('../../utils/auth');

//GET ALL ORDERS
router.get('/x', async (req, res) => {
    try {
      const ordersData = await Order.findAll(req.body, {
        include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
      order: [
        ['date_created', 'DESC'],
      ],
      })
      // Serialize data so the template can read it
      const orders = ordersData.map((order) => order.get({ plain: true }));

      if (!ordersData) {
        res.status(400).json({message: 'No order data found!'})
      }
      res.status(200).json(ordersData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

// GET ALL ORDERS FOR CURRENT USER
router.get('/myorders', async (req, res) => {
  try {
    const myOrdersData = await Order.findAll({
      where: {
          customer: req.session.user_id,
          // customer: "5",
        },
      include: [
      {
        model: User,
        attributes: ['first_name'],
      },
    ],
    order: [
      ['createdAt', 'DESC'],
    ],
    })
    // Serialize data so the template can read it
    const myOrders = myOrdersData.map((myOrder) => myOrder.get({ plain: true }));
    console.log('MYORDERS: ',myOrders)

    if (!myOrdersData) {
      res.status(400).json({message: 'No order data found!'})
    }
    res.status(200).json(myOrders);
  } catch (err) {
    res.status(400).json(err);
  }
});

// GET ORDER BY ID
  router.get('/:id', async (req, res) => {
    try {
      const orderData = await Order.findByPk(req.params.id, {
        include: [
          {
            model: User,
            attributes: ['first_name','last_name','email'],
          },
        ],
      });
      const order = orderData.get({ plain: true});
      if (!orderData) {
        console.log('hello')
        res.status(400).json({message: 'No order found with that id!'})
      }
      res.status(200).json(orderData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  
module.exports = router;