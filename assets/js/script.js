import initSlider from './sliders.min.js';
import select from './select.min.js';
import filter from './filter.min.js';
import animation from './animation.min.js';
import mobileMenu from './mobileMenu.min.js';
import showHide from './showHide.min.js';
/* import validate from './validate.min.js';
 */
import modal from './modal.min.js';

initSlider();
select();
filter();
animation();
mobileMenu();
showHide();
/* validate(); */
modal();

gulp 
new WOW().init();







const fancybox = document.querySelector('[data-fancybox]') || null;
if (fancybox) {
  Fancybox.bind('[data-fancybox]', {
  });
}



