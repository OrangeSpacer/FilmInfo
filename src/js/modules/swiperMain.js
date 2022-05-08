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
    });
}