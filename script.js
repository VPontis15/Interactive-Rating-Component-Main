"use strict";

const submitBtn = document.getElementById("submit");
const card = document.querySelector(".card");
const resultCard = document.querySelector(".result");
const resultContainer = document.querySelector(".result-container");

submitBtn.addEventListener("click", () => {
  let value = document.querySelector('input[name="btn"]:checked').value;
  card.classList.add("submitted");
  resultCard.classList.remove("hidden");
  let btns = document.querySelectorAll(".btn");
  let result = ` <p class="result-text">You selected ${value} out of ${btns.length}</p>`;
  resultContainer.insertAdjacentHTML("afterbegin", result);
});
