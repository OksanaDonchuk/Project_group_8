const body = document.querySelector('body');
const mobileMenu = document.querySelector('.js-menu-container');
const openMenuBtn = document.querySelector('.js-open-menu');
const closeMenuBtns = document.querySelectorAll('.js-close-menu');
const closeMenuLink = document.querySelectorAll(
  '.page-header-mobile-menu-nav-list-link'
);

const onEscapeClose = event => {
  if (event.code !== 'Escape') return;
  toggleMenu();
};
console.log(body);
const onClickBackdropClose = event => {
  if (event.target !== event.currentTarget) return;
  toggleMenu();
};

const toggleMenu = () => {
  const isMenuOpen =
    openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
  openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
  mobileMenu.classList.toggle('is-open');
  isMenuOpen
    ? (window.removeEventListener('keydown', onEscapeClose),
      mobileMenu.removeEventListener('click', onClickBackdropClose),
      (body.style.overflow = 'auto'))
    : (window.addEventListener('keydown', onEscapeClose),
      mobileMenu.addEventListener('click', onClickBackdropClose),
      (body.style.overflow = 'hidden'));
};

closeMenuLink.forEach(item => item.addEventListener('click', toggleMenu));
openMenuBtn.addEventListener('click', toggleMenu);
closeMenuBtns.forEach(item => item.addEventListener('click', toggleMenu));

// Close the mobile menu on wider screens if the device orientation changes
window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
  if (!e.matches) return;
  mobileMenu.classList.remove('is-open');
  openMenuBtn.setAttribute('aria-expanded', false);
});
