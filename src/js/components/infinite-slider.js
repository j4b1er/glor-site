export function Slider() {
  const sliderContainer = document.querySelector(
    ".partners-section__container"
  );
  const slider = document.querySelector(".partners-section__container--slider");

  let sliderDuplicate = slider ? slider.cloneNode(true) : "";
  sliderContainer && sliderContainer.appendChild(sliderDuplicate);
}
