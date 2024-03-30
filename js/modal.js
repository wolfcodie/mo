const modal = document.querySelector(".modal");
const closeModalBtn = document.querySelectorAll(".closeModalBtn");
const openModal = document.querySelector(".openModal");
openModal.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeModalBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    modal.style.display = "none";
  });
});
