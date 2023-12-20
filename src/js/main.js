import { Dropdown, MobileMenu, DropdownMobile } from "./components/navbar.js";
import { Grid } from "./components/grid-cards.js";
import { Slider } from "./components/infinite-slider.js";
// import { observer } from "./utilities/intersection-observer.js";
import { InterObserver } from "./utilities/intersection-observer.js";
import { router, navigate } from "./utilities/router.js";

document.addEventListener("DOMContentLoaded", () => {
  const routeLinks = document.querySelectorAll("[data-route]");
  routeLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      navigate(link.href);
    });
  });
});

router().then(() => {
  // const tobeAnimated = document.querySelectorAll("[animate]");
  // tobeAnimated.forEach((elm) => observer.observe(elm));

  InterObserver();

  //Services grid area for hover effects
  Grid();

  //Initiate Partners slider
  Slider();
});

//const variables
const dropdownBtn = document.querySelector("#dropdown-btn");
const hamburgerBtn = document.querySelector(
  ".main-navigation-mobile__top-menu-hamburger"
);
const dropdownBtnMobile = document.querySelector("#mobile-dropdown-btn");
// const tobeAnimated = document.querySelectorAll("[animate]");

//Dropdown menu button on Navbar for Desktop and tablet screens
dropdownBtn.addEventListener("click", () => Dropdown(dropdownBtn));

//Hamburger menu button on Navbar for mobile devices
hamburgerBtn.addEventListener("click", () => MobileMenu(hamburgerBtn));

//Dropdown menu button on Navbar for mobile screens
dropdownBtnMobile.addEventListener("click", () =>
  DropdownMobile(dropdownBtnMobile)
);

// //Services grid area for hover effects
// grid.addEventListener("mousemove", (e) => Card(e));

// //Initiate Partners slider
// Slider();

// document.addEventListener("DOMContentLoaded", () => {
// document.body.addEventListener("click", (e) => {
//   if (e.target.matches("[data-link]")) {
//     e.preventDefault();
//     navigate(e.target.href);
//   }
// });

// });

//pass the array with all the sections with attribute "animation" to be animated
// tobeAnimated.forEach((elm) => observer.observe(elm));
