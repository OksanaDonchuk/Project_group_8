import Swiper from 'swiper/bundle';
import { Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiperRef = document.querySelector('.teachers-swiper');

const mediaList = {
  mobile: window.matchMedia('(max-width: 767px)'),
  tablet: window.matchMedia('(min-width: 768px) and (max-width: 1279px)'),
  desktop: window.matchMedia('(min-width: 1280px)'),
};

let teachersSwiper = null;

function checkViewport() { 
  mediaList.mobile.addEventListener('change', makeSwiperOptions);
  mediaList.tablet.addEventListener('change', makeSwiperOptions);
  mediaList.desktop.addEventListener('change', makeSwiperOptions);
}

function initSwiper(swiperOptions) { 
  teachersSwiper = new Swiper('.teachers-swiper', { ...swiperOptions });

  swiperRef.addEventListener('mouseover', function () {
    teachersSwiper.autoplay.stop();
  });

  swiperRef.addEventListener('mouseout', function () {
    teachersSwiper.autoplay.start();
  });
}

function makeSwiperOptions () {
 
  const commonSwiperOptions = {
    modules: [Pagination],
    loop: true,
    autoplay: {
      delay: 3000,
    },
    speed: 1000,
    pagination: {
      el: '.swiper-pagination',
    },
  };
  const commonSwiperEvents = {
    on: {
      slideChange: function () {
        const slides = document.querySelectorAll(
          '.teachers-swiper .swiper-slide'
        );
        slides.forEach(slide => {
          const teacherName =
            slide.firstElementChild.lastElementChild.firstElementChild
              .textContent;
          slide.setAttribute('aria-label', `info about teacher ${teacherName}`);
          slide.setAttribute('role', 'listitem');
        });
      },
    },
  };

  if (mediaList.desktop.matches) {
    
    if (teachersSwiper) {
      teachersSwiper.destroy(true, true);
      teachersSwiper = null;
    }
    
    const swiperOptionsDesktop = { ...commonSwiperOptions, slidesPerView: 4, ...commonSwiperEvents };
    initSwiper(swiperOptionsDesktop);
  }

  if (mediaList.tablet.matches) {
    
    if (teachersSwiper) {
      teachersSwiper.destroy(true, true);
      teachersSwiper = null;
    }

    const swiperOptionsTablet = { ...commonSwiperOptions, slidesPerView: 2, ...commonSwiperEvents };
    initSwiper(swiperOptionsTablet);
  }

  if (mediaList.mobile.matches) {

    if (teachersSwiper) {
      teachersSwiper.destroy(true, true);
      teachersSwiper = null;
    }

    const swiperOptionsMobile = { ...commonSwiperOptions, slidesPerView: 1, ...commonSwiperEvents };
    initSwiper(swiperOptionsMobile);
  }
}

makeSwiperOptions();
checkViewport();
