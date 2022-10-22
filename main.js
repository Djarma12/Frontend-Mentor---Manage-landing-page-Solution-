"use strict";

const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");
const emailValidation = document.querySelector("#email");
const button = document.querySelector("#btn");

navToggle.addEventListener("click", () => {
  primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-expanded", true);
  // Postavi se modal
  primaryNav.toggleAttribute("data-visible");
  // Postavi se overlay, crna pozadina
  primaryHeader.toggleAttribute("data-overlay");
});

const slider = new A11YSlider(document.querySelector(".slider"), {
  adaptiveHeight: false,
  dots: true,
  centerMode: true,
  arrows: false,
  responsive: {
    480: {
      dots: false, // dots enabled 1280px and up
    },
  },
});

button.addEventListener("click", function (e) {
  e.preventDefault();
  button
    .closest(".primary-footer__form")
    .querySelector(".primary-footer__error-message")
    ?.remove();

  if (
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValidation.value)
  ) {
    emailValidation.value = "";
    return true;
  }
  const html =
    '<p class="primary-footer__error-message">Please insert a valid email.</p>';
  button.closest(".primary-footer__form").insertAdjacentHTML("beforeend", html);
});
