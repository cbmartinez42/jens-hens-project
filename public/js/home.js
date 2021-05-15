let instance = M.Carousel.init({
    fullWidth: true,
    indicators: true
  });


document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {});
  });


//   $(window).on('load', function(){
//     $.instagramFeed({
//       'username': 'wcastl',
//       'container': "#instagram-feed-demo",
//       'items': 8,
//       'margin': 0.5
//     });
//   });


//   new InstagramFeed({
//     'username': 'instagram',
//     'container': "#instagram-feed-demo",
//     'items_per_row': 6,
//     'margin': 0.5,
//     'lazy_load': true
// });