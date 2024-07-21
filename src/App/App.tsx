import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { Footer } from "../components/Footer";
import { NotFound } from "../components/NotFound";
import { Navbar } from "../components/Navbar";
import { getPathMapping } from "../utils/getPathMapping";
import { useEffect } from "react";
import React from "react";
import { useLocation } from 'react-router-dom';

const App = () => {
  const pathMapping = getPathMapping();
  const location = useLocation(); // Use React Router hook
  const currentPath = location.pathname || "/";
  const title = currentPath in pathMapping ? pathMapping[currentPath].title : "Not Found";

  useEffect(() => {
    document.title = `Lilisisopods`;
  }, [title]);

  return (
    <>
      <Navbar />
      <Routes>
        {Object.entries(pathMapping).map(([path, { component: Component }]) => (
          <Route
            key={path}
            path={path}
            element={
              <div className="container-fluid">
                <div className="row bg-b">
                  <div className="col-1 d-none d-lg-block"></div>
                  <div className="col">
                    <Component />
                  </div>
                  <div className="col-1 d-none d-lg-block"></div>
                </div>
              </div>
            }
          />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
