export function Slider() {
  const sliderContainer = document.querySelector(
    ".partners-section__container"
  );
  const slider = document.querySelector(".partners-section__container--slider");

  let sliderDuplicate = slider.cloneNode(true);
  sliderContainer.appendChild(sliderDuplicate);
}
