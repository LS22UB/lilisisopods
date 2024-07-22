import React from "react";
import { WikiSelector} from "../../components/Filter";

export function Guides() {
    return (
      <>
        <div className="row">
          <div className="col">
          <WikiSelector></WikiSelector>
            <div id="nono" className="noshow">
                This combination returns no instances. 
            </div>
            <Gui liste={guidelist}/>
            <div className="filterable all show">
                Ho
            </div>
            <hr/>
          </div>
        </div>
        <div className="row">
      
        </div>
      </>
    );
  }

  interface GuideFace {
    title: string; 
    tags: Array<string>; 
    author: string; 
    year?: string; 
  }

  let guidelist = [
    {
        title: "test",
        tags: ["array"], 
        author: "string",
        year: "string",
    }
    
  ]

  function Gui({liste}: {liste: Array<GuideFace>}){
    let rows = [];
    for (let i = 0; i < liste.length; i++) {
        let y = ""; 
        let cla = "filterable all show "
        for (let j = 0; j < liste[i].tags.length; j++){
            cla += " " + liste[i].tags[j]
        }
        if(liste[i].year){
            let y = "(" + liste[i].year + ")"; 
        }
        rows.push(<div className={cla}>
         {liste[i].title} {y} by {liste[i].author}
        </div>); 
    }
    return rows; 
  }