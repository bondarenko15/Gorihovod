export default function animation() {
    const btnMore = document.querySelector('.btn_more') || null;
    if (btnMore) {
        btnMore.addEventListener('click', () => {
            btnMore.classList.remove('rotate');
            setTimeout(() => {
                btnMore.classList.add('rotate');
            }, 0);
        });
    }
}

