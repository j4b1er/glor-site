export function Overlay(element) {
  const overlay = document.querySelector("#full-overlay");
  const overlayContainer = document.querySelector(".full-overlay__container");

  if (!overlay) return;

  overlay.classList.add("show-overlay");
  overlay.setAttribute("data-visible", true);
  document.body.classList.add("no-scroll");

  const img = document.createElement("img");
  img.src = element.src;
  overlayContainer.appendChild(img);

  const closeBtn = document.querySelector(".full-overlay__button");

  closeBtn.addEventListener("click", () => {
    overlayContainer.removeChild(img);
    overlay.setAttribute("data-visible", false);
    document.body.classList.remove("no-scroll");
  });
}
