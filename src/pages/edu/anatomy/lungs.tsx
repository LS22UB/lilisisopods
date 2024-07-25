import React from "react";

import { Graphviz } from 'graphviz-react';



export function Lungs() {
    

    return (
      <>
       
        <div className="col">
            <h1>The lungs of isopods</h1>
            <p>The majority of isopods bear lungs on their pleopods. On their pleopodal exopods, to be precise. </p>
        </div>
        <br/>
        <div className="row align-items-center">
            <div className="col">
            Female A. vulgare (living)
            </div>
            <div className="col">
            Female H. reaumuri (conserved specimen)
            </div>
        </div>
        <h2>Types of lungs</h2>
            <div className="col">
            <Graphviz dot={`digraph {
                lungs -> "covered lungs" -> Polyspiracular -> "Eubelum-type";
                Polyspiracular -> "Somaloniscus-type"; 
                "covered lungs" -> Monospiracular -> "Aethiopopactes-type"; 
                Monospiracular -> "Periscyphis-type"; 
                lungs -> "uncovered lungs" -> "Atracheodillo-type"; 
                "uncovered lungs" -> "half-covered lungs" -> "Synarmadilloides-type";
                "covered lungs" [shape=box, style=filled];
                "uncovered lungs" [shape=box, style=filled];
                lungs [shape="pentagon"];  
                "Aethiopopactes-type"[style=filled, color="turquoise"]
                "Somaloniscus-type"[style=filled, color="turquoise"]
                "Eubelum-type"[style=filled, color="turquoise"]
                "Periscyphis-type"[style=filled, color="turquoise"]
                "Atracheodillo-type"[style=filled, color="turquoise"]
                "Synarmadilloides-type"[style=filled, color="turquoise"]
                }`} 
                options={{height: "200px", width: "100%"}}
                />
            
            </div>
            <br/>
            <p>Most lungs can be put in either the category "covered" or "uncovered". Both categories have lungs types that are specialised for arid environments. </p>
            <p>Not every species that has the same lung type has the same number of lungs! </p>
            <h2>Uncovered lungs </h2>
            <p>These lungs have a pleated (wrinkled) respiratory surface that is directly or partially exposed to the air. [cm_simple_footnote id="1"]</p>
            <h3>Oniscus-type</h3>
            <p>shallowly wrinkled </p>
            <h3>Trachelipus-type</h3>
            <p>partly covered </p>
            <h3>Atracheodillo-type</h3>
            <p>The atracheodillo-type lungs are directly exposed to the air and not partially covered. All folds are coplanar (on the same level) with the surface of the pleopodal exopod.  [cm_simple_footnote id="1"]</p>
        <div className="row align-items-center">
            <div className="col">
            Pleopod8
            </div>
            <div className="col">
            Pleopod11
            <img src=''></img>
            </div>
        </div>
        <div className="row align-items-center">
            <div className="col">

            </div>
            <div className="col">
                
            </div>
        </div>
        
      </>
    );
  }
  