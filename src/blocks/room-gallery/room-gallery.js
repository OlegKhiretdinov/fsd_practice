import '../../../node_modules/lightslider/dist/css/lightslider.min.css';
import '../../../node_modules/lightslider/dist/js/lightslider.min.js'
import '../../../node_modules/lightgallery.js/dist/css/lightgallery.min.css';
import '../../../node_modules/lightgallery.js/dist/js/lightgallery.min.js'

$(document).ready(function() {
  $('#room-gallery').lightSlider({
    gallery:true,
    item:1,
    vertical:true,
    height:'100%',
    width:'100%',
    vThumbWidth:460,
    verticalHeight:485,
    thumbItem:2,
    controls:false,
    thumbMargin:0,
    slideMargin:0,
    galleryMargin:0,
  });  
});