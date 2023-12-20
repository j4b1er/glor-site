const winSize = window.innerWidth;
let th = 0.5;

if (winSize <= 500) {
  th = 0.2;
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let animateChildArr = entry.target.querySelectorAll("[animation]");
        animateChildArr.forEach((child) => {
          let childClasses = child.classList;
          let childClassReset = childClasses[childClasses.length - 1];

          let animationType = child.getAttribute("animation");
          // child.classList.add(animationType);
          child.classList.replace(childClassReset, animationType);
        });
      }
    });
  },
  { threshold: th }
);

export function InterObserver() {
  const tobeAnimated = document.querySelectorAll("[animate]");
  tobeAnimated.forEach((elm) => observer.observe(elm));
}
