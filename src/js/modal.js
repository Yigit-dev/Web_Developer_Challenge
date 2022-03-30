export default () => {
  const closeButtons = document.querySelectorAll(".modal-close");
  const proceed = document.querySelector(".show-modal");
  const modal = document.querySelector(".feedback-modal");
  

  proceed.addEventListener("click", () => {
    modal.classList.toggle("active");
  });
  closeButtons.forEach(closeBtn => {
    closeBtn.addEventListener("click", () => {
      modal.classList.toggle("active");
    });
  })

}