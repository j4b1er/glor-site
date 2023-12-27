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
    },
    {
      path: "/about",
      page: "/src/pages/about.html",
      title: "Learn more about us",
    },
    {
      path: "/services",
      page: "/src/pages/services.html",
      title: "What we offer",
    },
    {
      path: "/projects",
      page: "/src/pages/projects.html",
      title: "Look at our portfolio",
    },
    {
      path: "/gogreen",
      page: "/src/pages/gogreen.html",
      title: "The enviroment matter to us",
    },
    {
      path: "/404",
      page: "/src/pages/error.html",
      title: "Page not found",
    },
  ];

  let routeFound = routes.find((route) => route.path === location.pathname);
  if (!routeFound) routeFound = routes[5];
  let pageFetch = await fetch(routeFound.page);
  let data = await pageFetch.text();
  document.title = `${routeFound.title} | Glor`;
  document.getElementById("main-page").innerHTML = data;
}

window.addEventListener("popstate", () => {
  router().then(() => {
    ContentComponents();
    window.scrollTo(0, 0);
  });
});
