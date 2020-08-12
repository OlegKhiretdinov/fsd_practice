import '../../../node_modules/lightslider/dist/css/lightslider.min.css';
import '../../../node_modules/lightslider/dist/js/lightslider.min.js'

$(document).ready(function() {
  $(".light-slider").lightSlider({
    controls: false,
    item: 1,
    loop: true,
    mode: 'fade',
    speed: 500,
  });
});