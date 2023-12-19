export const navigate = (url) => {
  history.pushState(null, null, url);
  router();
};

export const router = async () => {
  const routes = [
    {
      path: "/",
      page: "/src/pages/index.html",
      title: "Innovetion and Hard work",
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
      page: "/src/pages/project.html",
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

  //   const potentialMatches = routes.map((route) => {
  //     return {
  //       route,
  //       isMatch: location.pathname === route.path,
  //     };
  //   });

  //   let match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch);

  //   if (!match) {
  //     match = {
  //       route: routes[3],
  //       isMatch: true,
  //     };
  //   }

  //   console.log(routeFound);

  const handlePage = async () => {
    let routeFound = routes.find((route) => route.path === location.pathname);
    if (!routeFound) routeFound = routes[5];
    const pageFetch = await fetch(routeFound.page).then((data) => data.text());
    document.getElementById("main-page").innerHTML = pageFetch;
  };

  handlePage();

  //   console.log(match.route.view());
};

window.addEventListener("popstate", router);
