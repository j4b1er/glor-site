import { Dropdown, MobileMenu, DropdownMobile } from "./components/navbar.js";
import { router, navigate } from "./utilities/router.js";
import { ContentComponents } from "./utilities/content-components.js";

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

document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("click", (e) => {
    const targetElm =
      e.target.tagName === "svg" || e.target.tagName === "SPAN"
        ? e.target.parentNode
        : e.target.tagName === "path"
        ? e.target.parentNode.parentNode
        : e.target;
    if (targetElm.hasAttribute("data-route")) {
      e.preventDefault();
      navigate(targetElm.href);
    }
  });

  async function runRouter() {
    await router();
    ContentComponents();
  }

  runRouter();
});
