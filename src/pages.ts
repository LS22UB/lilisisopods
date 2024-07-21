import { Home } from "./pages/Home";
import { About } from "./pages/About";

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
        path: "/home",
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
    }
  ]