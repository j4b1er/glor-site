import { Dropdown, MobileMenu, DropdownMobile } from "./components/navbar";

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
