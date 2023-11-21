"use strict";

const ratingContainer = document.querySelector(".rating_container");
const thankyouContainer = document.querySelector(".thankyou_container");
const submitButton = document.getElementById("submit");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn");

submitButton.addEventListener("click", () => {
  thankyouContainer.classList.remove("hidden");
  ratingContainer.classList.add("hidden");
});

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML;
  });
});
