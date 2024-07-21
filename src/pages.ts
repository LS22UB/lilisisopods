import { About, Home, Ligia, LigiaPallasii, FAQ, Shops, ArmadillidiumKlugii } from "./pages/page-list";

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
              title: "Ligia",
              path: "species/ligia",
              component: Ligia,
          },
      ]
    },
    {
      name: "Questions",
      folder: [
          {
              name: "FAQ",
              title: "FAQ",
              path: "/faq",
              component: FAQ,
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
      name: "Armadillidium klugii",
      title: "Armadillidium klugii",
      path: "/species/armadillidium/armadillidium-klugii",
      component: ArmadillidiumKlugii,
    },
    {
      name: "FAQ",
      title: "FAQ",
      path: "/faq",
      component: FAQ,
    },
    {
      name: "Home",
      title: "Home",
      path: "/",
      component: Home,
    },
    {
      name: "Shops",
      title: "Shops",
      path: "/shops",
      component: Shops,
    },
    {
      name: "Ligia",
      title: "Ligia",
      path: "species/ligia",
      component: Ligia,
    },
    {
      name: "Ligia pallasii",
      title: "Ligia pallasii",
      path: "species/ligia/ligia-pallasii",
      component: LigiaPallasii,
    },

  ]