const feedbackLink = document.querySelector(".feedback-btn");
const loginPopup = document.querySelector(".modal-login");
const closeBtn = loginPopup.querySelector(".modal-close");
const modalForm = loginPopup.querySelector(".modal-form");
const loginName = loginPopup.querySelector(".modal-input-name");
const loginEmail = loginPopup.querySelector(".modal-input-email");

let isStorageSupport = true;
let storage = "";

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
});

modalForm.addEventListener("submit", function (evt) {
  if (!loginName.value || !loginEmail.value) {
    evt.preventDefault();
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
    }
  }
});
