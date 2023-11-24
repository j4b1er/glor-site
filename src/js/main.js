import { Dropdown, MobileMenu, DropdownMobile } from "./components/navbar";
import { Card, grid } from "./components/grid-cards";
import { Slider } from "./components/infinite-slider";

//const variables
const dropdownBtn = document.querySelector("#dropdown-btn");
const hamburgerBtn = document.querySelector(
  ".main-navigation-mobile__top-menu-hamburger"
);
const dropdownBtnMobile = document.querySelector("#mobile-dropdown-btn");

dropdownBtn.addEventListener("click", () => Dropdown(dropdownBtn));

hamburgerBtn.addEventListener("click", () => MobileMenu(hamburgerBtn));

dropdownBtnMobile.addEventListener("click", () =>
  DropdownMobile(dropdownBtnMobile)
);

grid.addEventListener("mousemove", (e) => Card(e));

//partners slider
Slider();
