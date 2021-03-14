const sitePage = document.querySelector(".site-wrapper");
const sliderBtnOne = document.querySelector(".slider-btn-one");
const sliderBtnTwo = document.querySelector(".slider-btn-two");
const sliderBtnThree = document.querySelector(".slider-btn-three");

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
