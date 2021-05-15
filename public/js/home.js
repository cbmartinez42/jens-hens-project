const placeOrder = async () => {
    console.log('buy now was clicked!');
    window.location.replace('/placeorder');
};

  
  document.querySelector('#buyNowBtn').addEventListener('click', placeOrder);