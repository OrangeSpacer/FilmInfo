import Swiper, { Autoplay, Keyboard, Navigation, Pagination } from 'swiper';


export const swiperMain = () => {
    const swiper = new Swiper('.preview__swiper', {
      modules: [Navigation, Pagination, Autoplay],
      direction: 'horizontal',
      speed: 5000,
      autoplay: {
        delay: 5000,
      },
    

      slidesPerView: 1,
      pagination: {
        el: '.swiper-pagination',
      },
    });
}