const header = document.querySelector(".main-navigation");
const dropdownMenu = document.querySelector(".main-navigation__dropdown");
const mobileMenuList = document.querySelector(
  "#main-navigation-mobile__drop-menu"
);
const mobileDropdownMenu = document.querySelector(
  ".main-navigation-mobile__drop-menu--submenu"
);
let dropdownBtn;

function addGlobalListener() {
  document.addEventListener("click", handleOutsideClick);
}

function removeGlobalListener() {
  document.removeEventListener("click", handleOutsideClick);
}

function HideAfterAnimationEnds(element) {
  element.addEventListener(
    "animationend",
    () => {
      element.setAttribute("data-visible", false);
      element.classList.remove("fade-out");
    },
    {
      once: true,
    }
  );
}

export function Dropdown(ddBtn) {
  const visibility = dropdownMenu.getAttribute("data-visible");
  dropdownBtn = ddBtn;
  if (visibility === "false") {
    dropdownBtn.setAttribute("aria-expanded", true);
    dropdownMenu.setAttribute("data-visible", true);
    dropdownMenu.classList.add("fade-in");
    dropdownBtn.classList.toggle("nav-active");
    addGlobalListener();
  } else {
    dropdownMenu.classList.replace("fade-in", "fade-out");
    dropdownBtn.setAttribute("aria-expanded", false);
    dropdownBtn.classList.toggle("nav-active");

    HideAfterAnimationEnds(dropdownMenu);

    removeGlobalListener();
  }
}

function handleOutsideClick(e) {
  if (!header.contains(e.target)) {
    dropdownMenu.classList.replace("fade-in", "fade-out");
    dropdownBtn.setAttribute("aria-expanded", false);
    dropdownBtn.classList.toggle("nav-active");

    HideAfterAnimationEnds(dropdownMenu);

    removeGlobalListener();
  }
}

export function MobileMenu(hamburgerBtn) {
  const visibility = mobileMenuList.getAttribute("data-visible");
  const contactContainer = mobileMenuList.querySelector(
    ".main-navigation-mobile__drop-menu--contact"
  );

  if (visibility === "false") {
    mobileMenuList.classList.add("fade-in");
    hamburgerBtn.setAttribute("aria-expanded", true);
    mobileMenuList.setAttribute("data-visible", true);

    contactContainer.classList.replace("opacity-none", "slide-in-from-left");
  } else {
    mobileMenuList.classList.replace("fade-in", "fade-out");
    hamburgerBtn.setAttribute("aria-expanded", false);

    HideAfterAnimationEnds(mobileMenuList);
  }
}

export function DropdownMobile(dropdownBtnMobile) {
  const visibility = mobileDropdownMenu.getAttribute("data-visible");

  if (visibility === "false") {
    mobileDropdownMenu.classList.add("fade-in");
    dropdownBtnMobile.setAttribute("aria-expanded", true);
    mobileDropdownMenu.setAttribute("data-visible", true);
  } else {
    mobileDropdownMenu.classList.replace("fade-in", "fade-out");
    dropdownBtnMobile.setAttribute("aria-expanded", false);
    HideAfterAnimationEnds(mobileDropdownMenu);
  }
}
