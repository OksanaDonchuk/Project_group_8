(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-license-open]"),
      closeModalBtn: document.querySelector("[data-modal-license-close]"),
      modal: document.querySelector("[data-modal-license]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();