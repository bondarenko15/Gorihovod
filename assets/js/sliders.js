export default function initSlider() {
    const swiperGoodsElements = document.querySelectorAll('.swiper_goods');

    if (swiperGoodsElements.length) {
        const setEqualHeight = () => {
            swiperGoodsElements.forEach((newSwiper) => {
                const swiperEl = newSwiper.querySelector('.swiper-wrapper');
                if (!swiperEl) return;
    
                let maxHeight = 0;
                const slides = swiperEl.querySelectorAll('.swiper-slide');
    
                slides.forEach(slide => slide.style.height = 'auto'); 
                slides.forEach(slide => maxHeight = Math.max(maxHeight, slide.offsetHeight));
                slides.forEach(slide => slide.style.height = `${maxHeight}px`);
            });
        };
    
        const initSwiper = () => {
            swiperGoodsElements.forEach((newSwiper) => {
                const swiperInstance = new Swiper(newSwiper, {
                    slidesPerView: 1,
                    spaceBetween: 20,
                    loop: true,
                    pagination: {
                        el: newSwiper.querySelector('.swiper-pagination'),
                        dynamicBullets: true,
                    },
                    breakpoints: {
                        1366: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        }
                    },
                    observer: true,
                    observeParents: true,
                    on: {
                        init: () => setTimeout(setEqualHeight, 50), 
                        slideChange: setEqualHeight, 
                    }
                });
    
                setTimeout(setEqualHeight, 100);
            });
        };
    
        initSwiper();
        window.addEventListener('resize', setEqualHeight);
    }
    





    const swiperClients = document.querySelector('.clients_slider') || null;

    if (swiperClients) {
        const sliderClients = new Swiper(swiperClients, {
            slidesPerView: 2,
            spaceBetween: 40,
            loop: true,
            speed: 4000,
            autoplay: {
                delay: 0,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".clients_slider .swiper-pagination",
                dynamicBullets: true,
            },
            breakpoints: {
                648: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                960: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                },
                1366: {
                    slidesPerView: 8,
                    spaceBetween: 50,
                }

            }
        });
    }



    const productCardSlider = document.querySelector('.gallery-container') || null;
    if (productCardSlider) {
        const thumbsSwiper = new Swiper('.swiper-thumbs', {
            slidesPerView: 3,
            spaceBetween: 10,
            freeMode: true,
            watchSlidesProgress: true,
            scrollbar: {
                el: '.swiper-scrollbar',
                draggable: true,
            },
            breakpoints: {
                648: {
                    direction: 'vertical',
                    slidesPerView: 'auto',
                },
            }
        });


        const mainSwiper = new Swiper('.swiper-main', {
            slidesPerView: 1,
            spaceBetween: 10,
            loop: true,
            speed: 4000,
            autoplay: {
                delay: 0,
                disableOnInteraction: false,
            },
            thumbs: {
                swiper: thumbsSwiper,
            },

        });
    }



    const moreSlider = document.querySelector('.moreSlider') || null;

    if (moreSlider) {
        const slider = new Swiper(moreSlider, {
            slidesPerView: 1,
            spaceBetween: 40,
            loop: true,
            pagination: {
                el: ".moreSlider .swiper-pagination",
                dynamicBullets: true,
            },
            breakpoints: {
                648: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1366: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
            }
        });

    }


    const teamSlider = document.querySelector('.teamSlider') || null;

    if (teamSlider) {
        const slider = new Swiper(teamSlider, {
            slidesPerView: 'auto',
            spaceBetween: 15,
            loop: true,
            pagination: {
                el: ".teamSlider .swiper-pagination",
                dynamicBullets: true,
            },
            breakpoints: {
                648: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                960: {
                    slidesPerView: 3,
                },
                1366: {
                    slidesPerView: 4,
                },
            }
        });

    }
}

