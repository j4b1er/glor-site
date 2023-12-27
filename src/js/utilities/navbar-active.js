const navbar = document.querySelector(".main-navigation__main-nav-menu-links");

export function NavbarActive() {
  const navLinks = navbar.querySelectorAll("li");
  const currentUrl = window.location.pathname;
  //   console.log(currentUrl);
  navLinks.forEach((link) => {
    let linkUrl = link.children[0].pathname;
    if (linkUrl) {
      linkUrl === currentUrl
        ? link.children[0].classList.add("nav-active")
        : link.children[0].classList.remove("nav-active");
    }
  });
}
