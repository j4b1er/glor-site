import { ContentComponents } from "./content-components.js";

export const navigate = (url) => {
  history.pushState(null, null, url);
  router().then(() => {
    ContentComponents();
    window.scrollTo(0, 0);
  });
};

export async function router() {
  const routes = [
    {
      path: "/",
      page: "/src/pages/index.html",
      title: "Innovation and Hard work",
      transition: false,
    },
    {
      path: "/about",
      page: "/src/pages/about.html",
      title: "Learn more about us",
      transition: false,
    },
    {
      path: "/services",
      page: "/src/pages/services.html",
      title: "What we offer",
      transition: true,
    },
    {
      path: "/services/isp-structural-cabling",
      page: "/src/pages/services/isp-structural-cabling.html",
      title: "IPS Structural Cabling Services",
      transition: true,
    },
    {
      path: "/projects",
      page: "/src/pages/projects.html",
      title: "Look at our portfolio",
      transition: false,
    },
    {
      path: "/go-green",
      page: "/src/pages/go-green.html",
      title: "The enviroment matter to us",
      transition: false,
    },
    {
      path: "/404",
      page: "/src/pages/error.html",
      title: "Page not found",
      transition: false,
    },
  ];

  let routeFound = routes.find(
    (route) =>
      route.path === location.pathname || `${route.path}/` === location.pathname
  );
  if (!routeFound) routeFound = routes[5];
  let pageFetch = await fetch(routeFound.page);
  let data = await pageFetch.text();
  document.title = `${routeFound.title} | Glor`;
  // document.getElementById("main-page").innerHTML = data;

  if (routeFound.transition) {
    if (!document.startViewTransition) {
      document.getElementById("main-page").innerHTML = data;
    } else {
      document.startViewTransition(() => {
        document.getElementById("main-page").innerHTML = data;
        // ContentComponents();
      });
    }
  } else {
    document.getElementById("main-page").innerHTML = data;
  }
}

window.addEventListener("popstate", () => {
  router().then(() => {
    ContentComponents();
    window.scrollTo(0, 0);
  });
});
