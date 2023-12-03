import { Dropdown, MobileMenu, DropdownMobile } from "./components/navbar";
import { Card, grid } from "./components/grid-cards";
import { Slider } from "./components/infinite-slider";

//const variables
const dropdownBtn = document.querySelector("#dropdown-btn");
const hamburgerBtn = document.querySelector(
  ".main-navigation-mobile__top-menu-hamburger"
);
const dropdownBtnMobile = document.querySelector("#mobile-dropdown-btn");

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
