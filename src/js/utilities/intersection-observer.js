const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let animationType = entry.target.getAttribute("animation");
        let animationThreshold = entry.target.getAttribute("threshold");
        entry.target.classList.add(animationType);
      }
    });
  },
  { threshold: 0.4 }
);

export default observer;
