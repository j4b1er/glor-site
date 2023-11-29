const goGreenSection = document.querySelector(".gogreen-section");
const goGreenTitle = document.querySelector(".gogreen-section__title");
const goGreenImg = document.querySelector(".gogreen-section__mountain");

export function Parallax() {
  document.addEventListener("scroll", () => {
    // let valueY = window.scrollY - goGreenSection.offsetTop;
    let valueY = window.scrollY * 0.12;
    goGreenTitle.style.setProperty("--y-parallax", -valueY + "px");
    // goGreenImg.style.setProperty("--y-parallax", valueY + "px");
    console.log(goGreenTitle.offsetTop);
    // console.log(window.scrollY - goGreenSection.offsetTop);
  });
}
