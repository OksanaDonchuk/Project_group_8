// (() => {
//     const refs = {
//       openModalBtn: document.querySelector("[data-modal-license-open]"),
//       closeModalBtn: document.querySelector("[data-modal-license-close]"),
//       modal: document.querySelector("[data-modal-license]"),
//     };

//     refs.openModalBtn.addEventListener("click", toggleModal);
//     refs.closeModalBtn.addEventListener("click", toggleModal);

//     function toggleModal() {
//       refs.modal.classList.toggle("is-hidden");
//     }
// })();

const refs = {
  openModalBtn: document.querySelector('[data-modal-license-open]'),
  closeModalBtn: document.querySelector('[data-modal-license-close]'),
  modal: document.querySelector('[data-modal-license]'),
  body: document.querySelector('body'),
};

const toggleModal = () => {
  refs.modal.classList.toggle('is-hidden');
  refs.body.style.overflow = 'auto';
};

const onCloseModal = event => {
  if (event.code !== 'Escape') return;
  toggleModal();
};

refs.openModalBtn.addEventListener('click', event => {
  toggleModal();
  window.addEventListener('keydown', onCloseModal);
  refs.body.style.overflow = 'hidden';
});

refs.closeModalBtn.addEventListener('click', toggleModal);

refs.modal.addEventListener('click', event => {
  if (event.target !== event.currentTarget) return;
  toggleModal();
});
