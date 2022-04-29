import Swiper, { Navigation, Pagination } from 'swiper';


export const swiperMain = () => {
    const swiper = new Swiper('.preview__swiper', {
        modules: [Navigation, Pagination],
        // Optional parameters
        slidesPerView: 1,
        spaceBetween: 30,
        direction: 'horizontal',
        loop: true,
      
        // If we need pagination
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
    });
}