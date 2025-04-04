export default function modal() {
    const btnModal = document.querySelectorAll('.btnModal');
    if (btnModal.length) {
        const modalForm = document.querySelector('.modal_form');
        const closeForm = document.querySelector('.close_form');
        const blockForm = document.querySelector('.block_form');
        const body = document.body;
    
        let scrollPosition = 0;
    
        btnModal.forEach(btn => {
            btn.addEventListener('click', () => {
                scrollPosition = window.scrollY;
                body.classList.add('no-scroll');
                body.style.top = `-${scrollPosition}px`;
    
                modalForm.classList.add('modal_formActive');
                blockForm.style.display = 'block';
            });
        });
    
        const closeModal = () => {
            modalForm.classList.remove('modal_formActive');
            body.classList.remove('no-scroll');
            body.style.top = '';
            window.scrollTo(0, scrollPosition);
        };
    
        closeForm.addEventListener('click', closeModal);
    
        modalForm.addEventListener('click', (event) => {
            if (!blockForm.contains(event.target)) {
                closeModal();
            }
        });
    }
    
    const btnModalItem = document.querySelector('.btn_product') || null;
    if (btnModalItem) {
        const form = document.querySelector('.form');
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
    
        let scrollPosition = 0;
    
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
    
            scrollPosition = window.scrollY;
            body.classList.add('no-scroll');
            body.style.top = `-${scrollPosition}px`;
    
            blockForm.style.display = 'block';
            modalForm.classList.add('modal_formItem');
            form.classList.add('formBuy');
        });
    
        const closeModal = () => {
            modalForm.classList.remove('modal_formItem');
            form.classList.remove('formBuy');
            body.classList.remove('no-scroll');
            body.style.top = '';
            window.scrollTo(0, scrollPosition);
        };
    
        closeForm.addEventListener('click', closeModal);
    
        modalForm.addEventListener('click', (event) => {
            if (!blockForm.contains(event.target)) {
                closeModal();
            }
        });
    }
}

