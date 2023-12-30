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
    const winSize = window.innerWidth;
    if (winSize >= 992) createMasonry(3, picsData);
    else if (winSize >= 500) createMasonry(2, picsData);
    else createMasonry(1, picsData);
  }

  function createMasonry(colNum, data) {
    let remainingPics = data.length % colNum;
    const picPerCol = Math.floor(data.length / colNum);

    let initJ = 0;
    let sizeSwitcher = true;

    for (let i = 0; i < colNum; i++) {
      let colDiv = document.createElement("div");
      colDiv.classList.add("projects-page__second-section-container-column");

      let colData = data.slice(
        initJ,
        remainingPics > 0 ? initJ + picPerCol + 1 : initJ + picPerCol
      );
      remainingPics--;

      colData.forEach((image, index) => {
        let img = document.createElement("img");
        sizeSwitcher
          ? img.classList.add(
              "projects-page__second-section-container--item-big"
            )
          : img.classList.add(
              "projects-page__second-section-container--item-small"
            );
        img.src = image.url;
        img.alt = image.alt;
        colDiv.appendChild(img);

        sizeSwitcher = !sizeSwitcher;
        initJ++;
      });

      masonryContainer.appendChild(colDiv);
    }
  }
}
