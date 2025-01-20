export default function modal() {
    const btnModal = document.querySelector('.btnModal') || null;
    if (btnModal) {
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
    }


    const btnModalItem = document.querySelector('.btn_product') || null;
    if (btnModalItem) {
        const modalForm = document.querySelector('.modal_form');
        const closeForm = document.querySelector('.close_form');
        const blockForm = document.querySelector('.block_form');
        const body = document.querySelector('body');

        const priceElement = document.querySelector('.price');
        const titleElement = document.querySelector('.title.title_product');
        const slider = document.querySelector('.custom-thumb .swiper-slide:first-child img');
        const modalTextDescr = document.querySelector('.block_item-text .text-descr');
        const modalTextTitle = document.querySelector('.block_item-text .text-title');
        const modalImg = document.querySelector('.block_item-img img');

        btnModalItem.addEventListener('click', () => {
            if (priceElement && modalTextDescr) {
                modalTextDescr.textContent = priceElement.textContent;
            }
            if (titleElement && modalTextTitle) {
                modalTextTitle.textContent = titleElement.textContent;
            }
            if (slider && modalImg) {
                modalImg.src = slider.src;
                modalImg.alt = slider.alt || "Изображение продукта";
            }

            modalForm.classList.add('modal_formItem');
            body.classList.add('no-scroll');
        });

        closeForm.addEventListener('click', () => {
            modalForm.classList.remove('modal_formItem');
            body.classList.remove('no-scroll');
        });

        modalForm.addEventListener('click', (event) => {
            if (!blockForm.contains(event.target)) {
                modalForm.classList.remove('modal_formItem');
                body.classList.remove('no-scroll');
            }
        });
    }
}