import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Footer } from "../components/Footer";
import { NotFound } from "../components/NotFound";
import { Navbar } from "../components/Navbar";
import { getPathMapping } from "../utils/getPathMapping";
import { stringToSlug } from "../utils/stringToSlug";
import { useEffect} from "react";
import React from "react";

const App = () => {
  
  const pathMapping = getPathMapping();
  const currentPath =
    window.location.pathname || "/";

  // Set Page Title
  const title =
    currentPath in pathMapping ? pathMapping[currentPath].title : "Not Found";

  useEffect(() => {
    document.title = `Lilisisopods`;
  }, [title]);

  
  return (
    <>
      {/* Navigation */}
      <Navbar/>

      {/* Header and PageContent */}
      <Routes>
        {Object.entries(pathMapping).map(
          ([path, {component: Component}]) => (
            <Route
              key={path}
              path={path}
              element={
                <>
              
                  {/* <Header title={title || ""} lead={lead || ""}/> */}
                  {/* Page content */}
                  <div className="container-fluid">
                    <div className="row bg-b">
                      <div className="col-1 d-none d-lg-block" >
                        {/* <!-- empty so far --> */}
                      </div>
                      {/* <div className="col-2 d-none d-lg-block"> 
                        <div className="sticky-top sidebar">
                           <Sidebar nums={navlist || [""]}></Sidebar>
                        </div>
                      </div> */}
                      <div className="col">
                        <Component />
                      </div>
                      <div className="col-1 d-none d-lg-block" >
                        {/* <!-- empty so far --> */}
                        
                      </div>
                    </div>
                  </div>

                  {/* End page content */}
                  

                </>
              }
            />
          ),
        )}
        <Route
          path="*"
          element={
            <>
              
              <NotFound />
            </>
          }
        />
      </Routes>

      {/* Footer */}
      {/* MUST mention license AND have a link to team wiki's repository on gitlab.igem.org */}
      <Footer />
    </>
  );
};

export default App;

