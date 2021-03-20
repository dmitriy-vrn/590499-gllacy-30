// Slider const

const sitePage = document.querySelector(".site-wrapper");
const sliderBtnOne = document.querySelector(".slider-btn-one");
const sliderBtnTwo = document.querySelector(".slider-btn-two");
const sliderBtnThree = document.querySelector(".slider-btn-three");

// Login const

const feedbackLink = document.querySelector(".feedback-btn");
const loginPopup = document.querySelector(".modal-login");
const loginModal = document.querySelector(".modal-wrapper");
const closeBtn = loginPopup.querySelector(".modal-close");
const modalForm = loginPopup.querySelector(".modal-form");
const loginName = loginPopup.querySelector(".modal-input-name");
const loginEmail = loginPopup.querySelector(".modal-input-email");

let isStorageSupport = true;
let storage = "";

// Slider script

sliderBtnOne.addEventListener("click", function () {
  sliderBtnThree.classList.remove("current");
  sliderBtnTwo.classList.remove("current");
  sliderBtnOne.classList.add("current");

  sitePage.classList.remove("site-wrapper-2");
  sitePage.classList.remove("site-wrapper-3");
  sitePage.classList.add("site-wrapper-1");
});

sliderBtnTwo.addEventListener("click", function () {
  sliderBtnOne.classList.remove("current");
  sliderBtnThree.classList.remove("current");
  sliderBtnTwo.classList.add("current");

  sitePage.classList.remove("site-wrapper-1");
  sitePage.classList.remove("site-wrapper-3");
  sitePage.classList.add("site-wrapper-2");
});

sliderBtnThree.addEventListener("click", function () {
  sliderBtnOne.classList.remove("current");
  sliderBtnTwo.classList.remove("current");
  sliderBtnThree.classList.add("current");

  sitePage.classList.remove("site-wrapper-1");
  sitePage.classList.remove("site-wrapper-2");
  sitePage.classList.add("site-wrapper-3");
});

// Login modal

try {
  storage = localStorage.getItem("email");
} catch (err) {
  isSorageSupport = false;
}

feedbackLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  loginPopup.classList.add("modal-show");

  if (storage) {
    loginEmail.value = storage;
    loginEmail.focus();
  } else {
    loginName.focus();
  }
});

closeBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  loginPopup.classList.remove("modal-show");
  loginModal.classList.remove("modal-error");
});

modalForm.addEventListener("submit", function (evt) {
  if (!loginName.value || !loginEmail.value) {
    evt.preventDefault();
    loginModal.classList.remove("modal-error");
    loginModal.offsetWidth = loginPopup.offsetWidth;
    loginModal.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("email", loginEmail.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (loginPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      loginPopup.classList.remove("modal-show");
      loginModal.classList.add("modal-error");
    }
  }
});
