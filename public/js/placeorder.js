
  
  document.addEventListener('DOMContentLoaded', function() {
    // console.log('I am in placeorder.js eventlistener>>>>>>>')
    var elems = document.querySelectorAll('select');
    // console.log('elems: ',elems);
    var instances = M.FormSelect.init(elems, {});
    console.log('instances:',instances);
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
    console.log('qtyselectsave',qtySelected)
    localStorage.setItem('orderQty', qtySelected);
    document.location.replace('/checkout');
};