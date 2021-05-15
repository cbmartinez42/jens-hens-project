

const orderQtyField = document.getElementById('orderQty');
console.log('zzz>>>', orderQtyField);
const subTotalField = document.getElementById('subTotal');
var unitPrice = .50


function init() {
  var qty = JSON.parse(localStorage.getItem("orderQty"));
  console.log('qty>>>', qty);
  var subTotal = qty * unitPrice;
  orderQtyField.innerHTML = qty;
  subTotalField.innerHTML = subTotal;
};

init();





// var checkOutBtn = false;
// console.log(checkOutBtn);

// const getOrder = async () => {
//     // event.preventDefault();
//     const url = window.location.pathname;
//     const id = url.substring(url.lastIndexOf('/') + 1)
//     const response = await fetch(`/api/order/${id}`, {
//       method: 'GET',
//     });
  
//     if (response.ok) {
//         // return response;
//         document.location.replace('/checkout');
//     } else {
//       alert(response.statusText);
//     }
//   };
  
//   document.querySelector('#checkOutBtn').addEventListener('click', getOrder);

    
// document
// .querySelector('#checkout')
// .addEventListener('click', btnHandler);
