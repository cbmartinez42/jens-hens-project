const fetch = require("node-fetch");

const mailHandler = (orderData, email) => {
  
    console.log('handler fired', orderData)
    console.log('handler fired email ', email)
    const total = orderData.order_quantity * .50
    console.log('total',  total)
  
    let msg = {
      "from": {
        "email": "jenns.hens.eggs@gmail.com"
      },
      "personalizations": [
        {
          "to": [
            {
              "email": email
            }
          ],
          "dynamic_template_data": {
            "total": "$" + total + ".00",
            "items": [
              {
                "text": "Farm Fresh Eggs!"
              }
            ],
            "receipt": true
          }
        }
      ],
      "template_id": process.env.SG_TEMPLATE
    };
    console.log('MSG IS', JSON.stringify(msg));
    fetch("https://api.sendgrid.com/v3/mail/send", {
      headers: {
        Authorization: `Bearer ${process.env.SG_KEY}`,
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(msg)
    })
      .then(res => res.text())
      .then(text => console.log('>>>>>> ', text))
      .catch(function (error) {
        console.log(error)
      })
  
    }

    module.exports = mailHandler;