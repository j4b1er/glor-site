const grid = document.querySelector(".grid");

export function Card(e) {
  grid.style.setProperty("--x", e.x + "px");
  grid.style.setProperty("--y", e.y + "px");
}
