function modal() {
  const modalContainer = document.querySelector("#modalContainer");
  const bnt = document.querySelector("#showMessage");

  bnt.addEventListener("click", () => {
    modalContainer.showModal();
  });

  closeModal();
}

function modal2() {
  const modalContainer = document.querySelector("#modalContainer");
  const bnt = document.querySelector("#showMessage2");

  bnt.addEventListener("click", () => {
    modalContainer.showModal();
  });

  closeModal();
}

function closeModal() {
  const modalContainer = document.querySelector("#modalContainer");
  btnClose = document.querySelector("#closeModal");

  btnClose.addEventListener("click", () => {
    modalContainer.close();
  });
}

modal();
modal2();



