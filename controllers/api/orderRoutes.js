const router = require('express').Router();
const { Order, User } = require('../../models');
// const withAuth = require('../../utils/auth');
const fetch = require("node-fetch");
// mail handler

const mailHandler = (orderData, email) => {
  
  console.log('handler fired', orderData)
  console.log('handler fired email ', email)
  const total = orderData.order_quantity * .50
  console.log('total',  total)
  const fetchRequest = (("https://api.sendgrid.com/v3/mail/send", {
    body: `{\n   'from':{\n      'email':'jenns.hens.eggs@gmail.com'\n   },\n   'personalizations':[\n      {\n         'to':[\n            {\n               'email': ${email}\n            }\n         ],\n         'dynamic_template_data':{\n            'total':'$' + ${total},\n            'items':[\n               {\n                  'text':'Farm Fresh Eggs',\n               },\n\n            ],\n            'receipt':true,\n          }\n      }\n   ],\n   'template_id':'${process.env.SG_TEMPLATE}'\n}`,
    headers: {
      "Authorization": `Bearer ${process.env.SG_KEY}`,
      "Content-Type": "application/json"
    },
    method: "POST"
  }))

  console.log('fetch request ... ', fetchRequest)
  
  fetch("https://api.sendgrid.com/v3/mail/send", {
    body: `{\n   'from':{\n      'email':'jenns.hens.eggs@gmail.com'\n   },\n   'personalizations':[\n      {\n         'to':[\n            {\n               'email': ${email}\n            }\n         ],\n         'dynamic_template_data':{\n            'total':'$' + ${total},\n            'items':[\n               {\n                  'text':'Farm Fresh Eggs',\n               },\n\n            ],\n            'receipt':true,\n          }\n      }\n   ],\n   'template_id':'${process.env.SG_TEMPLATE}'\n}`,
    headers: {
      "Authorization": `Bearer ${process.env.SG_KEY}`,
      "Content-Type": "application/json"
    },
    method: "POST"
  })
    .then (function (response) {
      console.log('handler end >> ', response)
    }

    )
    .catch(function (error) {
      console.log(error)
    })
  }

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
          // customer: "5",
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
    const email = userData.email
    // console.log("email >>>>", email)
    // console.log("customer  >>", customer)
    const orderData = await Order.create({order_quantity:order_quantity, customer:customer, spec_inst: special_instructions});
    
    if(orderData){
      mailHandler(orderData, email)
      res.status(200).json(orderData)

    }
   else{
     res.status(400).json(err)
   }
  })
module.exports = router;


//UPDATE ORDER FULFILLED FLAG ONLY
router.put('/:id', async (req, res) => { //withAuth, 
  // const id = req.params.id
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