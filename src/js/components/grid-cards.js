export function Grid() {
  const grid = document.querySelector("#grid-container");

  grid && grid.addEventListener("mousemove", (e) => Card(e));

  function Card(e) {
    grid.style.setProperty("--x-grid", e.x + "px");
    grid.style.setProperty("--y-grid", e.y + "px");
  }
}
