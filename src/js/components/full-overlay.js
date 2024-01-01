export function Overlay(element = null) {
  //selects the overlay element
  const overlay = document.querySelector("#full-overlay");

  //if overlay is not present in current page return
  if (!overlay) {
    //check so when switched to other page it removes the no-scroll class
    if (document.body.classList.contains("no-scroll")) {
      document.body.classList.remove("no-scroll");
    }
    return;
  }
  //if no element was opened to be shown in the Overlay yet
  if (!element) {
    return;
  }

  const controller = new AbortController();

  const overlayContainer = document.querySelector(".full-overlay__container");
  const closeBtn = document.querySelector(".full-overlay__button");

  //create the img element and append it to the overlay container
  const img = document.createElement("img");
  img.src = element.src;
  overlayContainer.appendChild(img);

  //add the overlay since this function is called when something is clicked
  overlay.classList.add("show-overlay");
  overlay.setAttribute("data-visible", true);
  document.body.classList.add("no-scroll");

  //listener to the close button
  closeBtn.addEventListener(
    "click",
    () => {
      overlay.setAttribute("data-visible", false);
      document.body.classList.remove("no-scroll");
      overlayContainer.removeChild(img);
      controller.abort();
    },
    { signal: controller.signal }
  );

  document.addEventListener(
    "keydown",
    (e) => {
      if (e.key === "Escape") {
        overlay.setAttribute("data-visible", false);
        document.body.classList.remove("no-scroll");
        overlayContainer.removeChild(img);
        controller.abort();
      }
    },
    { signal: controller.signal }
  );
}
