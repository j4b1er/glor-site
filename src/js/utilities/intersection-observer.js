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
  { threshold: 0.4 }
);
