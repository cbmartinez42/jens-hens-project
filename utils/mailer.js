const fetch = require("node-fetch");

const mailHandler = (orderData, userData) => {
  
    const total = orderData.order_quantity * .50
    const name = userData.first_name + " " + userData.last_name;

  
    let msg = {
      "from": {
        "email": "jenns.hens.eggs@gmail.com"
      },
      "personalizations": [
        {
          "to": [
            {
              "email": userData.email
            }
          ],
          "dynamic_template_data": {
            "total": "$" + total + ".00",
            "quantity": orderData.order_quantity,
            "items": [
              {
                "text": "Farm Fresh Eggs!"
              }
            ],
            "receipt": true,
            "name": name
          }
        }
      ],
      "template_id": process.env.SG_TEMPLATE
    };
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