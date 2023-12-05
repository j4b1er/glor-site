const winSize = window.innerWidth;
let th = 0.5;

if (winSize <= 500) {
  th = 0.2;
}

export const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let animateChildArr = entry.target.querySelectorAll("[animation]");
        animateChildArr.forEach((child) => {
          let animationType = child.getAttribute("animation");
          child.classList.add(animationType);
        });
      }
    });
  },
  { threshold: th }
);
