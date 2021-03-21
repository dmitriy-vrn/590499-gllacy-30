// Slider const

const sitePage = document.querySelector(".site-wrapper");
const sliderTitleOne = document.querySelector(".slider-item-1");
const sliderTitleTwo = document.querySelector(".slider-item-2");
const sliderTitleThree = document.querySelector(".slider-item-3");
const sliderBtnOne = document.querySelector(".slider-btn-one");
const sliderBtnTwo = document.querySelector(".slider-btn-two");
const sliderBtnThree = document.querySelector(".slider-btn-three");

// Login const

const feedbackLink = document.querySelector(".feedback-btn");
const loginPopup = document.querySelector(".modal-login");
const closeBtn = loginPopup.querySelector(".modal-close");
const modalForm = loginPopup.querySelector(".modal-form");
const loginName = loginPopup.querySelector(".modal-input-name");
const loginEmail = loginPopup.querySelector(".modal-input-email");
const modalOverlay = document.querySelector(".modal-overlay");

let isStorageSupport = true;
let storage = "";

// Slider script

sliderBtnOne.addEventListener("click", function () {
  sliderBtnThree.classList.remove("current");
  sliderBtnTwo.classList.remove("current");
  sliderBtnOne.classList.add("current");

  sliderTitleOne.classList.add("slide-current");
  sliderTitleTwo.classList.remove("slide-current");
  sliderTitleThree.classList.remove("slide-current");

  sitePage.classList.remove("site-wrapper-2");
  sitePage.classList.remove("site-wrapper-3");
  sitePage.classList.add("site-wrapper-1");
});

sliderBtnTwo.addEventListener("click", function () {
  sliderBtnOne.classList.remove("current");
  sliderBtnThree.classList.remove("current");
  sliderBtnTwo.classList.add("current");

  sliderTitleOne.classList.remove("slide-current");
  sliderTitleTwo.classList.add("slide-current");
  sliderTitleThree.classList.remove("slide-current");

  sitePage.classList.remove("site-wrapper-1");
  sitePage.classList.remove("site-wrapper-3");
  sitePage.classList.add("site-wrapper-2");
});

sliderBtnThree.addEventListener("click", function () {
  sliderBtnOne.classList.remove("current");
  sliderBtnTwo.classList.remove("current");
  sliderBtnThree.classList.add("current");

  sliderTitleOne.classList.remove("slide-current");
  sliderTitleTwo.classList.remove("slide-current");
  sliderTitleThree.classList.add("slide-current");

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
  modalOverlay.classList.add("modal-overlay-active");

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
  loginPopup.classList.remove("modal-error");
  modalOverlay.classList.remove("modal-overlay-active");
});

modalForm.addEventListener("submit", function (evt) {
  if (!loginName.value || !loginEmail.value) {
    evt.preventDefault();
    loginPopup.classList.remove("modal-error");
    loginPopup.offsetWidth = loginPopup.offsetWidth;
    loginPopup.classList.add("modal-error");
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
      modalOverlay.classList.remove("modal-overlay-active");
      loginPopup.classList.remove("modal-error");
    }
  }
});
