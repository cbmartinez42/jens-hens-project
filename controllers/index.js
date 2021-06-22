
const router = require('express').Router();
const apiRoutes = require('./api');
const htmlRoutes = require('./html');
// const sgMail = require('@sendgrid/mail')

router.use('/', htmlRoutes);
router.use('/api', apiRoutes);


// sgMail.setApiKey(process.env.SENDGRID_API_KEY)

// const msg = {
//   to: 'cbmartinez42@gmail.com', // Change to your recipient
//   from: 'jenns.hens.eggs@gmail.com', // Change to your verified sender
//   subject: 'Thank you for your order!',
// //   text: 'We will be in contact with you within 72 hours',
//   html: 'We will be in contact with you within 72 hours at the phone number associated with your account!',
// }

// sgMail
//   .send(msg)
//   .then((response) => {
//     console.log(response[0].statusCode)
//     console.log(response[0].headers)
//   })
//   .catch((error) => {
//     console.error(error)
//   })


module.exports = router;
