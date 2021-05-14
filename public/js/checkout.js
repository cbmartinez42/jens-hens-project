// const { Order } = require("../../models");

// var checkOutBtn = false;
// console.log(checkOutBtn);

const getOrder = async () => {
    // event.preventDefault();
    const url = window.location.pathname;
    const id = url.substring(url.lastIndexOf('/') + 1)
    const response = await fetch(`/api/order/${id}`, {
      method: 'GET',
    });
  
    if (response.ok) {
        // return response;
        document.location.replace('/checkout');
    } else {
      alert(response.statusText);
    }
  };
  
  document.querySelector('#checkOutBtn').addEventListener('click', getOrder);


// router.get('/order/:id', async (req, res) => {
//     try {
//         checkOutBtn = true;
//         console.log('checkout clicked');
//         console.log(checkOutBtn);
//         const orderData = await Order.findByPk(req.params.id);
//         const order = orderData.get({ plain: true });
//         res.render('checkout', {
//         ...order,
//         checkOutBtn: checkOutBtn,
//         // logged_in: req.session.logged_in,
//         // userName: req.session.userName,
//         });
//     } catch (err) {
//         res.status(500).json(err);
//     }
//     });
    
// document
// .querySelector('#checkout')
// .addEventListener('click', btnHandler);
