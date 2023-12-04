import { Dropdown, MobileMenu, DropdownMobile } from "./components/navbar";
import { Card, grid } from "./components/grid-cards";
import { Slider } from "./components/infinite-slider";
import { observer } from "./utilities/intersection-observer";

//const variables
const dropdownBtn = document.querySelector("#dropdown-btn");
const hamburgerBtn = document.querySelector(
  ".main-navigation-mobile__top-menu-hamburger"
);
const dropdownBtnMobile = document.querySelector("#mobile-dropdown-btn");
const tobeAnimated = document.querySelectorAll("[animate]");

//Dropdown menu button on Navbar for Desktop and tablet screens
dropdownBtn.addEventListener("click", () => Dropdown(dropdownBtn));

//Hamburger menu button on Navbar for mobile devices
hamburgerBtn.addEventListener("click", () => MobileMenu(hamburgerBtn));

//Dropdown menu button on Navbar for mobile screens
dropdownBtnMobile.addEventListener("click", () =>
  DropdownMobile(dropdownBtnMobile)
);

//Services grid area for hover effects
grid.addEventListener("mousemove", (e) => Card(e));

//Initiate Partners slider
Slider();

//pass the array with all the sections with attribute "animation" to be animated
tobeAnimated.forEach((elm) => observer.observe(elm));
