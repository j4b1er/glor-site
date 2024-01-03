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

    parallaxBack.style.setProperty("--back-top-pos", yValue * 0.25 + "px");
    parallaxTitle.style.setProperty("--title-top-pos", yValue * 0.65 + "px");
  });
}
