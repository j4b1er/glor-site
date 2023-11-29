const goGreenSection = document.querySelector(".gogreen-section");
const goGreenTitle = document.querySelector(".gogreen-section__title");
const goGreenImg = document.querySelector(".gogreen-section__mountain");

export function Parallax() {
  document.addEventListener("scroll", () => {
    // let valueY = window.scrollY - goGreenSection.offsetTop;
    let valueY = window.scrollY * 0.03;
    goGreenImg.style.setProperty("--y-parallax", valueY + "px");
    console.log(valueY);
    console.log(window.scrollY - goGreenSection.offsetTop);
  });
}
