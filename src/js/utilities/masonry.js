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

  //if Masonry container exists in the page
  if (masonryContainer) {
    const winSize = window.innerWidth;
    if (winSize >= 992) createMasonry(3, picsData);
    else if (winSize >= 500) createMasonry(2, picsData);
    else createMasonry(1, picsData);

    document.addEventListener("click", (e) => {
      let imgElm = e.target;
      if (imgElm.hasAttribute("data-masonry")) console.log(e.target);
    });
  }

  function createMasonry(colNum, data) {
    //get the remaining pictures
    let remainingPics = data.length % colNum;
    //calculate the number of pictures per column
    const picPerCol = Math.floor(data.length / colNum);

    //counter to be aware of the starting point for each column in relation of the data array
    let rowIndex = 0;
    //boolean to swap between big and small classes no matter the current column
    let sizeSwitcher = false;

    for (let i = 0; i < colNum; i++) {
      let colDiv = document.createElement("div");
      colDiv.classList.add("projects-page__second-section-container-column");

      let colData = data.slice(
        rowIndex,
        remainingPics > 0 ? rowIndex + picPerCol + 1 : rowIndex + picPerCol
      );
      remainingPics--;

      colData.forEach((image, index) => {
        let imgDiv = document.createElement("div");
        let img = document.createElement("img");
        sizeSwitcher
          ? imgDiv.classList.add(
              "projects-page__second-section-container--item-big"
            )
          : imgDiv.classList.add(
              "projects-page__second-section-container--item-small"
            );
        img.src = image.url;
        img.alt = image.alt;
        img.setAttribute("data-masonry", "");
        imgDiv.appendChild(img);
        colDiv.appendChild(imgDiv);

        sizeSwitcher = !sizeSwitcher;
        rowIndex++;
      });

      masonryContainer.appendChild(colDiv);
    }
  }
}
