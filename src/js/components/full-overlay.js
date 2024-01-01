export function Overlay(element) {
  //selects the overlay element
  const overlay = document.querySelector("#full-overlay");
  //if overlay is not present in current page return
  if (!overlay) return;

  let overlayCalledFrom = window.location.pathname;
  console.log(overlayCalledFrom);
  const overlayContainer = document.querySelector(".full-overlay__container");
  const closeBtn = document.querySelector(".full-overlay__button");

  function addListener(callback) {
    document.addEventListener("click", callback);
  }

  function removeListener(callback) {
    document.removeEventListener("click", callback);
  }

  //add the overlay since this function is called when something is clicked
  overlay.classList.add("show-overlay");
  overlay.setAttribute("data-visible", true);
  document.body.classList.add("no-scroll");

  //create the img element and append it to the overlay container
  const img = document.createElement("img");
  img.src = element.src;
  overlayContainer.appendChild(img);

  //add global listener
  addListener(callback);

  //callback function to check if overlay close btn is pressed or if we navigate outside the page thru the
  function callback(e) {
    if (closeBtn.contains(e.target) || !overlay.contains(e.target)) {
      overlayContainer.removeChild(img);
      overlay.setAttribute("data-visible", false);
      document.body.classList.remove("no-scroll");
      removeListener(callback);
    }
  }

  //this should be a function we can export to check in the content-component and compare it with the current path
  function checkPath(path) {
    if (overlayCalledFrom !== path) callback();
  }
}
