
  
  document.addEventListener('DOMContentLoaded', function() {
    // console.log('I am in placeorder.js eventlistener>>>>>>>')
    var elems = document.querySelectorAll('select');
    // console.log('elems: ',elems);
    var instances = M.FormSelect.init(elems, {});
  });


function getOrder(event) {
    event.preventDefault();
    var qtySelected = document.querySelector('#qtySelected').value
    // var xxx = { qtySelected: qtySelected}
    saveLocalStorage(qtySelected);
    console.log(document.querySelector('#qtySelected').value);
}

document.querySelector('#checkOutBtn').addEventListener('click', getOrder);


function saveLocalStorage (qtySelected) {
    localStorage.setItem('orderQty', qtySelected);
    document.location.replace('/checkout');
};