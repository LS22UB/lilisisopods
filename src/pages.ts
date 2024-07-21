import { About, Home, Ligia, LigiaPallasii, FAQ } from "./pages/page-list";

interface Base {
    name: string | undefined;
  }
  
  class Folder implements Base {
    name: string | undefined;
    folder: Page[] | undefined;
  }
  
  class Page implements Base {
    name: string | undefined;
    title: string | undefined;
    path: string | undefined;
    component: React.FC | undefined;
    navlist?: Array<string> | undefined; 
  }


  export const NavPages: (Page | Folder)[] = [
    {
        name: "Home",
        title: "Home",
        path: "/",
        component: Home,
    },
    {
        name: "Team",
        folder: [
            {
                name: "About",
                title: "About",
                path: "/about",
                component: About,
            },
        ]
    },
    {
      name: "Species",
      folder: [
          {
              name: "Ligia",
              title: "",
              path: "/about",
              component: About,
          },
      ]
  }
  ]


  export const Pages: (Page | Folder)[] = [
    {
      name: "About",
      title: "About",
      path: "/about",
      component: About,
    },
    {
      name: "Home",
      title: "Home",
      path: "/",
      component: Home,
  },

  ]