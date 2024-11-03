export default function initSlider() {
    const swiperGoodsElements = document.querySelectorAll('.swiper_goods') || null;
    if (swiperGoodsElements) {
        swiperGoodsElements.forEach((newSwiper) => {
            const sliderGoods = new Swiper(newSwiper, {
                slidesPerView: 1,
                spaceBetween: 20,
                loop: true,
                pagination: {
                    el: ".swiper_goods .swiper-pagination",
                    dynamicBullets: true,
                },
                breakpoints: {
                    1366: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    }
                }
            });
        });
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
                    spaceBetween: 20,
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
}

