import Swiper, { Autoplay, Navigation, Pagination } from 'swiper';

export const swiperMain = () => {
    const swiper = new Swiper('.preview__swiper', {
      modules: [Navigation, Pagination, Autoplay],
      direction: 'horizontal',
      loop: 'true',
      speed: 5000,
      autoplay: {
        delay: 100,
      },
    

      slidesPerView: 4,
      pagination: {
        el: '.swiper-pagination',
      },
      
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 5
        },

        600: {
            slidesPerView: 2,
            spaceBetween: 10
        },

        1024: {
          slidesPerView: 3,
          spaceBetween: 20
        },

        1074: {
          slidesPerView: 4,
          spaceBetween: 20
        }
    }
    });
}