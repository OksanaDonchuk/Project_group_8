import Swiper from 'swiper/bundle';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const setSlidesHeight = function (swiper) {
  let maxHeight = 0;

  // знайти висоту найвищого слайда
  swiper.slides.forEach(function (slide) {
    if (slide.offsetHeight > maxHeight) {
      maxHeight = slide.offsetHeight;
    }
  });

  // встановити цю висоту для всіх слайдів
  console.log('maxHeight:', maxHeight);
  swiper.slides.forEach(function (slide) {
    slide.style.height = `${maxHeight}px`;
  });

  swiper.update();
};

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  speed: 1000,
  on: {
    init: function () {
      setSlidesHeight(this);
    },
    resize: function () {
      swiper.update();
      setSlidesHeight(this);
    },
    slideChange: function () {
      setSlidesHeight(this);
    },
  },
  pagination: {
    el: '.swiper-pagination',
  },
  slidesPerView: 1,
  // Налаштування для різних розмірів екрану
  breakpoints: {
    // коли ширина екрану >= 640px
    768: {
      slidesPerView: 2,
    },
    // коли ширина екрану >= 768px
    1280: {
      slidesPerView: 3,
    },
  },
});
window.addEventListener('resize', function () {
  setTimeout(() => {
    setSlidesHeight(swiper);
  }, 100); // Затримка 100 мс
});
