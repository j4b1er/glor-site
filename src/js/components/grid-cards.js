export const grid = document.querySelector("#grid-container");

export function Card(e) {
  grid.style.setProperty("--x-grid", e.x + "px");
  grid.style.setProperty("--y-grid", e.y + "px");
}
