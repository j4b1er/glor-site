export function Parallax() {
  const parallax = document.querySelector(".parallax-effect");

  if (!parallax) return;

  const parallaxBack = document.querySelector(
    ".parallax-effect__container--back"
  );
  const parallaxTitle = document.querySelector(
    ".parallax-effect__container--title"
  );

  window.addEventListener("scroll", () => {
    let yValue = window.scrollY;

    parallaxBack.style.top = yValue * 0.25 + "px";
    parallaxTitle.style.top = yValue * 0.75 + "px";
  });
}
