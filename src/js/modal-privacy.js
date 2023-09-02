(() => {
  const refs = {
    openModalBtn: document.querySelectorAll('[data-modal-privacy-open]'),
    closeModalBtn: document.querySelector('[data-modal-privacy-close]'),
    modal: document.querySelector('[data-modal-privacy]'),
  };

  const toggleModal = () => {
    refs.modal.classList.toggle('is-hidden');
  };

  const onCloseModal = event => {
    if (event.code !== 'Escape') return;
    toggleModal();
  };

  refs.openModalBtn.forEach(button =>
    button.addEventListener('click', event => {
      toggleModal();
      window.addEventListener('keydown', onCloseModal);
    })
  );

  refs.closeModalBtn.addEventListener('click', toggleModal);

  refs.modal.addEventListener('click', event => {
    if (event.target !== event.currentTarget) return;
    toggleModal();
  });
})();
