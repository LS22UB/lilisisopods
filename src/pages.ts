import { About, 
  Home, 
 /*  Acanthoniscusspiniger, */ TooMany, /* OniscusAsellus, PorcellioLaevis, PorcellioScaber, PorcellioSpinicornis, */
  HowKey, PosterolateralCorners, /* percountryusa, percountrygermany,  */  taxonomyfamilies, taxonomygenera, taxonomyspecies,
  idpercountry, artartists, /* artclothing, */ artdigital, /* artpaintings, artphotography, artpottery, artkeychains, */
 /*  Morphshighyellow, artstickers, */
  Morphsmorphs, 
  Irido, Lungs, Ligia, 
  LigiaPallasii, FAQ, Shops, 
  ArmadillidiumKlugii, Guides } from "./pages/page-list";

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
          name: "Families",
          title: "Families",
          path: "/families",
          component: taxonomyfamilies,
        },
        {
          name: "Genera",
          title: "Genera",
          path: "/genera",
          component: taxonomygenera,
        },
        {
          name: "Species",
          title: "Species",
          path: "/species",
          component: taxonomyspecies,
        },
        {
          name: "Morphs",
          title: "Morphs",
          path: "/morphs",
          component: Morphsmorphs,
        },
      ]
    },
    {
      name: "Identification",
      folder: [
          {
            name: "How to use keys",
            title: "How to use keys",
            path: "/how-to-use-keys",
            component: HowKey,
          },
          {
            name: "Identification guides list",
            title: "Identification guides list",
            path: "/identification/guide-list",
            component: Guides,
          },
          {
            name: "Guides per country", 
            title: "Guides per country",
            path: "/identification/per-country",
            component: idpercountry,
          },
      ]
    },
    {
      name: "Anatomy",
      folder: [
        {
          name: "Lungs",
          title: "Lungs",
          path: "/anatomy/lungs-of-isopods",
          component: Lungs,
        },
        {
          name: "Posterolateral Corners", /* y */
          title: "Posterolateral Corners",
          path: "/anatomy/posterolateral-corners",
          component: PosterolateralCorners,
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
      {
        name: "Too many isopods",
        title: "Too many",
        path: "/too-many",
        component: TooMany,
      },
      ]
    },
    {
      name: "Art",
      folder: [
        {
          name: "Artists",
          title: "Artists",
          path: "/artists",
          component: artartists,
        },
        {
          name: "Digital art",
          title: "Digital art",
          path: "/digital-art",
          component: artdigital,
        },
      ]
    },
    {
      name: "Health",
      folder: [
        {
          name: "Irido virus",
          title: "Irido virus",
          path: "/health/irido-virus",
          component: Irido,
        },
      ]
    }
  ]


  export const Pages: (Page | Folder)[] = [
    {
      name: "About", /* y */
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
      name: "Artists", /* y */
      title: "Artists",
      path: "/artists",
      component: artartists,
    },
    {
      name: "Digital art", /* y */
      title: "Digital art",
      path: "/digital-art",
      component: artdigital,
    },
    {
      name: "Families", /* y */
      title: "Families",
      path: "/families",
      component: taxonomyfamilies,
    },
    {
      name: "FAQ", /* y */
      title: "FAQ",
      path: "/faq",
      component: FAQ,
    },
    {
      name: "Genera", /* y */
      title: "Genera",
      path: "/genera",
      component: taxonomygenera,
    },
    {
      name: "Guides per country", /* y */
      title: "Guides per country",
      path: "/identification/per-country",
      component: idpercountry,
    },
    {
      name: "Home", /* y */
      title: "Home",
      path: "/",
      component: Home,
    },
    {
      name: "How to use keys", /* y */
      title: "How to use keys",
      path: "/how-to-use-keys",
      component: HowKey,
    },
    {
      name: "Identification guides list", /* y */
      title: "Identification guides list",
      path: "/identification/guide-list",
      component: Guides,
    },
    {
      name: "Irido virus", /* y */
      title: "Irido virus",
      path: "/health/irido-virus",
      component: Irido,
    },
    {
      name: "Ligia",
      title: "Ligia",
      path: "/species/ligia",
      component: Ligia,
    },
    {
      name: "Lungs", /* y */
      title: "Lungs",
      path: "/anatomy/lungs-of-isopods",
      component: Lungs,
    },
    {
      name: "Ligia pallasii",
      title: "Ligia pallasii",
      path: "/species/ligia/ligia-pallasii",
      component: LigiaPallasii,
    },
    {
      name: "Morphs", /* y */
      title: "Morphs",
      path: "/morphs",
      component: Morphsmorphs,
    },
    {
      name: "Posterolateral Corners", /* y */
      title: "Posterolateral Corners",
      path: "/anatomy/posterolateral-corners",
      component: PosterolateralCorners,
    },
    {
      name: "Shops",
      title: "Shops",
      path: "/shops",
      component: Shops,
    },
    {
      name: "Species", /* y */
      title: "Species",
      path: "/species",
      component: taxonomyspecies,
    },
    {
      name: "Too many", /* y */
      title: "Too many",
      path: "/too-many",
      component: TooMany,
    },
  ]