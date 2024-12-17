export default function mobileMenu() {
    const linksWithSubnav = document.querySelectorAll('.mobile_menu-nav a');
    linksWithSubnav.forEach(link => {
        const siblingMenu = link.nextElementSibling;
        if (siblingMenu && siblingMenu.tagName === 'UL') {
            link.classList.add('has-subnav');
            link.addEventListener('click', (e) => {
                const clickPosition = e.offsetX;
                const linkWidth = link.offsetWidth;
                if (clickPosition < linkWidth - 30) {
                    return;
                }
                e.preventDefault();
                const parentList = link.closest('ul');
                parentList.querySelectorAll('ul.open').forEach(openMenu => {
                    openMenu.classList.remove('open');
                });
                parentList.querySelectorAll('a.open').forEach(openLink => {
                    openLink.classList.remove('open');
                });
                if (!siblingMenu.classList.contains('open')) {
                    siblingMenu.classList.add('open');
                    link.classList.add('open');
                }
            });
        }
    });






    const headerLanguage = document.querySelector('.header_language');
    const subLanguage = document.querySelector('.sub_language');

    headerLanguage.addEventListener('click', () => {
        subLanguage.classList.toggle('sub_languageActive');
    });


    const burger = document.querySelector('.header_burger');
    const menu = document.querySelector('.mobile_menu');
    const closeButton = document.querySelector('.close_menu');
    const body = document.body;

    // Добавляем overlay для кликов вне меню
    const overlay = document.createElement('div');
    overlay.classList.add('menu_overlay');
    document.body.appendChild(overlay);

    // Открытие меню
    burger.addEventListener('click', () => {
        menu.classList.add('mobile_menuActive');
        overlay.classList.add('active');
        body.classList.add('no-scroll');
    });

    // Закрытие меню
    const closeMenu = () => {
        menu.classList.remove('mobile_menuActive');
        overlay.classList.remove('active');
        body.classList.remove('no-scroll');
    };

    closeButton.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);
}

