const picsData = [
  {
    url: "./src/media/projects/sec-camera-2.jpg",
    alt: "Security camera mounted on white wall",
  },
  {
    url: "./src/media/projects/audio-visual-2.jpg",
    alt: "Man recording with camera",
  },
  {
    url: "./src/media/projects/sec-camera.jpg",
    alt: "Outside Security camera mounted on wall",
  },
  {
    url: "./src/media/projects/cables.jpg",
    alt: "Cables installed on top of Building",
  },
  {
    url: "./src/media/projects/cables-2.jpg",
    alt: "Cables with switches",
  },
  {
    url: "./src/media/projects/data-center-3.jpg",
    alt: "Cables connected to a big switch",
  },
  {
    url: "./src/media/projects/computer.jpg",
    alt: "Man studying with 2 computers",
  },
  {
    url: "./src/media/projects/data-center-2.jpg",
    alt: "Data Server with cables inside a big rack",
  },
  {
    url: "./src/media/projects/data-center.jpg",
    alt: "Man inside Data center with camera",
  },
];

export function Masonry() {
  const masonryContainer = document.querySelector(
    ".projects-page__second-section-container"
  );

  if (masonryContainer) {
    createMasonry(2, picsData);
  }

  function createMasonry(colNum, data) {
    const remainingPics = data.length % colNum;
    const picPerCol =
      remainingPics !== 0
        ? (data.length - remainingPics) / colNum
        : data.length / colNum;

    for (let i = 0; i < colNum; i++) {
      let colDiv = document.createElement("div");
      colDiv.classList.add("projects-page__second-section-container-column");

      let maxColNum = data.length - (colNum - i);

      for (let j = i; j <= maxColNum; j += colNum) {
        let img = document.createElement("img");
        img.src = data[j].url;
        colDiv.appendChild(img);
      }

      masonryContainer.appendChild(colDiv);
    }
  }
}