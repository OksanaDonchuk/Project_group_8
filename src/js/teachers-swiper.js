import Swiper from 'swiper/bundle';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

let teachersSwiper;

function initSwiper() {
  teachersSwiper = new Swiper('.teachers-swiper', {
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
    },
  });

  const swiperRef = document.querySelector('.teachers-swiper');

  swiperRef.addEventListener('mouseover', function () {
    teachersSwiper.autoplay.stop();
  });

  swiperRef.addEventListener('mouseout', function () {
    teachersSwiper.autoplay.start();
  });
}

function checkViewport() {
  const viewportWidth = window.innerWidth;
  const paginationEl = document.querySelector('.swiper-pagination');

  if (viewportWidth >= 1280) {
    if (teachersSwiper) {
      teachersSwiper.destroy(true, true);
      teachersSwiper = null;
    }
    if (paginationEl) {
      paginationEl.style.display = 'none';
    }
  } else {
    if (!teachersSwiper) {
      initSwiper();
    }
    if (paginationEl) {
      paginationEl.style.display = 'block';
    }
  }
}

checkViewport();

window.addEventListener('resize', checkViewport);
