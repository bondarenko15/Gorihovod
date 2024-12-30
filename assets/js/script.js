import initSlider from './sliders.min.js';
import select from './select.min.js';
import filter from './filter.min.js';
import animation from './animation.min.js';
import mobileMenu from './mobileMenu.min.js';
import showHide from './showHide.min.js';


initSlider();
select();
filter();
animation();
mobileMenu();
showHide();

new WOW().init();







const fancybox = document.querySelector('[data-fancybox]') || null;
if (fancybox) {
    Fancybox.bind('[data-fancybox]', {
        /* groupAll: true, */
    });
}



const btnModal = document.querySelector('.btnModal');
const modalForm = document.querySelector('.modal_form');
const closeForm = document.querySelector('.close_form');
const blockForm = document.querySelector('.block_form');
const body = document.querySelector('body');


btnModal.addEventListener('click', () => {
  modalForm.classList.add('modal_formActive');
  body.classList.add('no-scroll');
});

closeForm.addEventListener('click', () => {
  modalForm.classList.remove('modal_formActive');
  body.classList.remove('no-scroll');
});

modalForm.addEventListener('click', (event) => {
  if (!blockForm.contains(event.target)) {
    modalForm.classList.remove('modal_formActive');
    body.classList.remove('no-scroll');
  }
});













