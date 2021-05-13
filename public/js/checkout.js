// const { Order } = require("../../models");

var checkOutBtn = false;
console.log(checkOutBtn);

router.get('/order/:id', async (req, res) => {
    try {
        checkOutBtn = true;
        console.log('checkout clicked');
        console.log(checkOutBtn);
        const orderData = await Order.findByPk(req.params.id);
        const order = orderData.get({ plain: true });
        res.render('checkout', {
        ...order,
        checkOutBtn: checkOutBtn,
        // logged_in: req.session.logged_in,
        // userName: req.session.userName,
        });
    } catch (err) {
        res.status(500).json(err);
    }
    });
    
document
.querySelector('#checkout')
.addEventListener('click', btnHandler);
