const goGreenSection = document.querySelector(".gogreen-section");
const goGreenTitle = document.querySelector(".gogreen-section__title");
const goGreenImg = document.querySelector(".gogreen-section__mountain");
const goGreenClouds = document.querySelector(".gogreen-section__clouds");

export function Parallax() {
  document.addEventListener("scroll", () => {
    // let valueY = window.scrollY - goGreenSection.offsetTop;
    let valueY = window.scrollY * 0.05;
    goGreenClouds.style.setProperty("--y-parallax", valueY + "px");
    // goGreenImg.style.setProperty("--y-parallax", valueY + "px");
    // console.log(window.scrollY - goGreenSection.offsetTop);
  });
}
