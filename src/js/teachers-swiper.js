import Swiper from 'swiper/bundle';
import { Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiperRef = document.querySelector('.teachers-swiper');

const teachersSwiper = new Swiper('.teachers-swiper', {
  modules: [Pagination],  
  loop: true,
  autoplay: {
    delay: 3000,
  },
  speed: 1000,
  pagination: {
    el: '.swiper-pagination',
  },
  slidesPerView: 1,  
  breakpoints: {
    768: {
      slidesPerView: 2,    
    },
    1280: {
        enabled: false,        
    },
  },
});


swiperRef.addEventListener('mouseover', function () {
  teachersSwiper.autoplay.stop();
});

swiperRef.addEventListener('mouseout', function () {
  teachersSwiper.autoplay.start();
});
