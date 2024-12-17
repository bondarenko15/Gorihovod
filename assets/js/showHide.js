export default function showHide() {
    document.querySelectorAll('.faq_item').forEach(item => {
        item.addEventListener('click', () => {
            document.querySelectorAll('.faq_item').forEach(faqItem => {
                if (faqItem !== item) {
                    faqItem.classList.remove('faq_item-open');
                }
            });
            item.classList.toggle('faq_item-open');
        });
    });
}