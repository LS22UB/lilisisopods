import { About, Home, Irido, Lungs, Ligia, LigiaPallasii, FAQ, Shops, ArmadillidiumKlugii, Guides } from "./pages/page-list";

interface Base {
    name: string | undefined;
  }
  
  class Folder implements Base {
    name: string | undefined;
    folder:  Page[] | undefined;
  }

/*   class Subfolder implements Base {
    name: string | undefined;
    folder:  Folder[] | undefined;
  } */

   
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
      name: "Taxonomy",
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
      name: "Identification",
      folder: [
          {
            name: "Identification guides list",
            title: "Identification guides list",
            path: "/education/identification/guide-list",
            component: Guides,
          },
      ]
    },
    {
      name: "Anatomy",
      folder: [
        {
          name: "Lungs",
          title: "Lungs",
          path: "education/anatomy/lungs-of-isopods",
          component: Lungs,
        },
      ]
    },
    {
      name: "Care and Advice",
      folder: [
        {
          name: "FAQ",
          title: "FAQ",
          path: "/faq",
          component: FAQ,
      },
      ]
    },
    {
      name: "Art",
      folder: [
        {
          name: "Home",
          title: "Home",
          path: "/",
          component: Home,
        },
      ]
    },
    {
      name: "Health",
      folder: [
        {
          name: "Home",
          title: "Home",
          path: "/",
          component: Home,
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
      name: "Identification guides list",
      title: "Identification guides list",
      path: "/education/identification/guide-list",
      component: Guides,
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
      name: "Lungs",
      title: "Lungs",
      path: "education/anatomy/lungs-of-isopods",
      component: Lungs,
    },
    {
      name: "Ligia pallasii",
      title: "Ligia pallasii",
      path: "species/ligia/ligia-pallasii",
      component: LigiaPallasii,
    },

  ]