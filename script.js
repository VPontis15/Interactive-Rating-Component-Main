"use strict";

const submitBtn = document.getElementById("submit");
const card = document.querySelector(".card");

submitBtn.addEventListener("click", () => {
  let value = document.querySelector('input[name="btn"]:checked').value;
  card.classList.add("submitted");
});
