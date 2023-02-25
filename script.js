"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

function OpenModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function CloseModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

btnCloseModal.addEventListener("click", CloseModal);
overlay.addEventListener("click", CloseModal);
btnsOpenModal.forEach((element) =>
  element.addEventListener("click", OpenModal)
);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    CloseModal();
  }
});
