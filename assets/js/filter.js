export default function filter() {
    const filter = document.querySelector('.filter') || null;
    if (filter) {
        const btnFilter = document.querySelector('.btn_filter');
        const filterWrapper = document.querySelector('.radio-group');
        const filterClose = document.querySelector('.filter_close');
        const body = document.body;

        function toggleFilterVisibility() {
            filter.classList.toggle('visible');
            body.classList.toggle('no-scroll');
        }

        function clearCheckboxes() {
            const checkboxes = filter.querySelectorAll('input[type="checkbox"]');
            checkboxes.forEach(checkbox => {
                checkbox.checked = false;
            });
        }

        btnFilter.addEventListener('click', () => {
            toggleFilterVisibility();
        });

        filterClose.addEventListener('click', () => {
            clearCheckboxes();
            filter.classList.remove('visible');
            body.classList.remove('no-scroll');
        });

        document.addEventListener('click', (event) => {
            const isClickInsideFilter = filterWrapper.contains(event.target);
            const isClickOnButton = btnFilter.contains(event.target);
            const isClickOnClose = filterClose.contains(event.target);
            if (!isClickInsideFilter && !isClickOnButton && !isClickOnClose && filter.classList.contains('visible')) {
                clearCheckboxes();
                filter.classList.remove('visible');
                body.classList.remove('no-scroll');
            }
        });

        document.addEventListener('DOMContentLoaded', () => {
            document.querySelectorAll('.checkbox-option').forEach(option => {
                const arrow = option.querySelector('.filter_arrow');
                const items = option.querySelector('.option_block-items');
        
                arrow?.addEventListener('click', (e) => {
                    e.stopPropagation();
        
                    const isActive = arrow.classList.contains('filter_arrowActive');
        
                    document.querySelectorAll('.option_block-items').forEach(el => el.classList.remove('items-active'));
                    document.querySelectorAll('.filter_arrow').forEach(el => el.classList.remove('filter_arrowActive'));
        
                    if (!isActive) {
                        items?.classList.add('items-active');
                        arrow.classList.add('filter_arrowActive');
                    }
                });
            });
        
            document.addEventListener('click', () => {
                document.querySelectorAll('.option_block-items').forEach(el => el.classList.remove('items-active'));
                document.querySelectorAll('.filter_arrow').forEach(el => el.classList.remove('filter_arrowActive'));
            });
        });
        
        
    }
}
