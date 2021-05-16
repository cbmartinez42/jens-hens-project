
let instance = M.Carousel.init({
    fullWidth: true,
    indicators: true
  });


document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {});
  });


  var userFeed = new Instafeed({
      get: 'user',
      target: "instafeed-container",
      resolution: 'low_resolution',
      accessToken: "IGQVJXNVRyWlV4VkVJS21vMG90dndIenZAPWmRzUGhNWnNXRXBEMVAxRDdwZA1R4Mm1mZAUdiNXBhdnM4NlNOeTFzS1QzMUhjNnMtbms4OUljYTd6eGRKNE5hRVNwVF9vZAGpsWU1PT1UzYzh6b3daUDVjRwZDZD"

  });
  userFeed.run();

const placeOrder = async () => {
    console.log('buy now was clicked!');
    window.location.replace('/placeorder');
};

  
  document.querySelector('#buyNowBtn').addEventListener('click', placeOrder);
