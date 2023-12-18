export const navigate = (url) => {
  history.pushState(null, null, url);
  router();
};

export const router = async () => {
  const routes = [
    {
      path: "/",
      view: () => console.log("Vieweing Home"),
      title: "Innovetion and Hard work",
    },
    {
      path: "/about",
      view: () => console.log("Vieweing About"),
      title: "Learn more about us",
    },
    {
      path: "/services",
      view: () => console.log("Vieweing Services"),
      title: "What we offer",
    },
    {
      path: "/projects",
      view: () => console.log("Vieweing Projects"),
      title: "Look at our portfolio",
    },
    {
      path: "/gogreen",
      view: () => console.log("Vieweing Go Green"),
      title: "The enviroment matter to us",
    },
    {
      path: "/404",
      view: () => console.log("Vieweing Not Found"),
      title: "Page not found",
    },
  ];

  const potentialMatches = routes.map((route) => {
    return {
      route,
      isMatch: location.pathname === route.path,
    };
  });

  let match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch);

  if (!match) {
    match = {
      route: routes[3],
      isMatch: true,
    };
  }

  const routeFound = routes.find((route) => route.path === location.pathname);

  console.log(routeFound.view());

  //   console.log(match.route.view());
};

window.addEventListener("popstate", router);
