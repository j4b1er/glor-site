export function HideAfterAnimationEnds(element) {
  element.addEventListener(
    "animationend",
    () => {
      element.setAttribute("data-visible", false);
      element.classList.remove("fade-out");
    },
    {
      once: true,
    }
  );
}
