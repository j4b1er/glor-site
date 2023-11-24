const sliderContainer = document.querySelector(".partners-section__container");
const slider = document.querySelector(".partners-section__container--slider");

export function Slider() {
  let sliderDuplicate = slider.cloneNode(true);
  sliderContainer.appendChild(sliderDuplicate);
}
