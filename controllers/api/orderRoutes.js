const router = require('express').Router();
const { Order } = require('../../models');
// const withAuth = require('../../utils/auth');

router.get('order/:id', async (req, res) => {
    try {
      const orderData = await Order.findByPk(req.body, {
        where: {
          id: req.params.id,
        }
      })
      if (!orderData) {
        res.status(400).json({message: 'No order found with that id!'})
      }
      res.status(200).json(orderData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

module.exports = router;