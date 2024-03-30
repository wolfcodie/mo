const SidebarBtn = document.querySelector(".SidebarBtn");

const sidebar = document.querySelector(".sidebar");

SidebarBtn.addEventListener("click", () => {
  sidebar.style.display = "flex";
  console.log("isl");
});

closeModalBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    modal.style.display = "none";
  });
});
