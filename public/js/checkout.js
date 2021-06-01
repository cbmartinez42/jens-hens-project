const purchaseButtons = document.getElementById('checkout');
const orderQtyField = document.getElementById('orderQty');
const subTotalField = document.getElementById('subTotal');
var unitPrice = .50
const checkboxTerms = document.getElementById('checkboxTerms');
let subTotal = 0;

function init() {
  var qty = JSON.parse(localStorage.getItem("orderQty"));
  subTotal = qty * unitPrice;
  orderQtyField.innerHTML = qty;
  subTotalField.innerHTML = "$"+subTotal.toFixed(2);
};

init();


const getOrder = async (event) => {
  event.preventDefault();
  let qty = parseInt(JSON.parse(localStorage.getItem("orderQty")));
  
  console.log(checkboxTerms)
  console.log(qty)
  if(checkboxTerms.value){

  const id = localStorage.getItem("orderQuantity")
  const response = await fetch(`/api/order/`, {
    method: 'POST',
    body: JSON.stringify({qty}),
    headers: { 'Content-Type': 'application/json' },
  });

  console.log(response);
  if (response.ok) {
    // return response;
    localStorage.clear();
    document.location.replace(`/thankyou`);
  } else {
    alert(response.statusText);
  }
}
};

paypal.Buttons({
  createOrder: function (data, actions) {
    return actions.order.create({
      purchase_units: [{
        amount: {
          value: '0.01' //has to be changed
        }
      }]
    });
  },
  onApprove: function (data, actions) {
    return actions.order.capture().then(function (details) {
      alert('Transaction completed by ' + details.payer.name.given_name);
    });
  }
}).render('#paypal-button-container'); // Display payment options on your web page
//   document.querySelector('#checkOutBtn').addEventListener('click', getOrder);



const enableButtons = (event) => {
  if(purchaseButtons.classList.contains('disabled')){
    purchaseButtons.classList.remove('disabled');  
  } else {
    purchaseButtons.classList.add('disabled');
  }
}

document.querySelector('#checkboxTerms').addEventListener('change', enableButtons)

document
  .querySelector('#checkout')
  .addEventListener('click', getOrder);