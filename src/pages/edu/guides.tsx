import React from "react";
import { WikiSelector } from "../../components/Filter";

export function Guides() {

    return (
      <>
        <div className="row">
          <div className="col">
          <WikiSelector></WikiSelector>
            <div id="nono" className="noshow">
                This combination returns no instances. 
            </div>
            <div className="filterable all">
            
            </div>
            <hr/>
          </div>
        </div>
        <div className="row">
      
        </div>
      </>
    );
  }
  