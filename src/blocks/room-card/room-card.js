import '../../../node_modules/lightslider/dist/css/lightslider.min.css';
import '../../../node_modules/lightslider/dist/js/lightslider.min.js'

$(document).ready(function() {
  $(".light-slider").lightSlider({
    item: 1,
    loop: true,
    pause: 4000,
    controls: false,
  });
});