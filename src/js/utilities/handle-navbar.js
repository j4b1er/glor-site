import { HideAfterAnimationEnds } from "./util-functions.js";
import { removeGlobalListener } from "../components/navbar.js";

const navbar = document.querySelector(".main-navigation__main-nav-menu-links");

export function NavbarActive() {
  const navLinks = navbar.querySelectorAll("li");
  const currentUrl = window.location.pathname;

  navLinks.forEach((link) => {
    let linkUrl = link.children[0].pathname;
    if (linkUrl) {
      linkUrl === currentUrl
        ? link.children[0].classList.add("nav-active")
        : link.children[0].classList.remove("nav-active");
    }
  });
}

export function closeDropdown() {
  const dropdownBtn = document.querySelector("#dropdown-btn");
  const dropdownMenu = document.querySelector(".main-navigation__dropdown");
  const visibility = dropdownMenu.getAttribute("data-visible");

  if (visibility === "true") {
    dropdownMenu.classList.replace("fade-in", "fade-out");
    dropdownBtn.setAttribute("aria-expanded", false);
    dropdownBtn.classList.toggle("nav-selected");

    HideAfterAnimationEnds(dropdownMenu);

    removeGlobalListener();
  }
}

export function closeMobileNavbar() {
  const hamburgerBtn = document.querySelector(
    ".main-navigation-mobile__top-menu-hamburger"
  );
  const mobileMenuList = document.querySelector(
    "#main-navigation-mobile__drop-menu"
  );
  const visibility = mobileMenuList.getAttribute("data-visible");

  if (visibility === "true") {
    mobileMenuList.classList.replace("fade-in", "fade-out");
    hamburgerBtn.setAttribute("aria-expanded", false);

    //when mobile menu is closed add scroll from body
    document.body.classList.remove("no-scroll");

    HideAfterAnimationEnds(mobileMenuList);
  }
}
