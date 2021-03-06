const router = require('express').Router();
const { Order, User } = require('../../models');
const mailHandler = require('../../utils/mailer');

//GET ALL ORDERS
router.get('/', async (req, res) => {
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
        },
      include: [
      {
        model: User,
        attributes: ['full_name'],
      },
    ],
    order: [
      ['createdAt', 'DESC'],
    ],
    })
    // Serialize data so the template can read it
    const myOrders = myOrdersData.map((myOrder) => myOrder.get({ plain: true }));

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

  router.get('/placeorder', async (req, res) => {
    res.render('/placeorder');
  });
  
  router.post('/', async(req,res) => {
    const order_quantity = req.body.qty;
    const special_instructions = req.body.special_instructions;
    const customer = req.session.user_id;
    const userData = await User.findOne({
      where: {
          id: customer,
      }
    })
    const orderData = await Order.create({order_quantity:order_quantity, customer:customer, spec_inst: special_instructions});
    
    if(orderData){
      // fire email api call from utils
      mailHandler(orderData, userData)
      res.status(200).json(orderData)

    }
   else{
     res.status(400).json(err)
   }
  })
module.exports = router;


//UPDATE ORDER FULFILLED FLAG ONLY
router.put('/:id', async (req, res) => { //withAuth, 
  try {
      const orderData = await Order.update({
          fulfilled: req.body.fulfilled,
      }, {
          where: {
              id: req.params.id
          }
      });
      if (!orderData) {
          res.status(404).json({
              message: 'No order with this ID. Please try again.'
          });
          return;
      }
      res.status(200).json(orderData)
  } catch (err) {
      res.status(500).json(err)
  }
});