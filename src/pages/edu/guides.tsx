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
    free: boolean; 
    url?: string; 
    type: string; /* Website, Book, Article, Thesis, Chapter */
    language: string; 
  }

  let guidelist = [
    {
        title: "test",
        tags: ["cssa", "australia"], 
        author: "string",
        year: "string",
        free: false, 
        type: "Book", 
        language: "en"
    }, 
    {
        title: "Guide to Barrow Island",
        tags: ["australia", "oniscidea", "armadillidae", "ligiidae"], 
        author: "Simon Judd and Giulia Perina",
        year: "2013",
        free: true, 
        url: "https://museum.wa.gov.au/sites/default/files/10.%20Judd,%20Perina.pdf", 
        type: "Article", 
        language: "en"
    }
    
  ]

  function Gui({liste}: {liste: Array<GuideFace>}){
    let rows = [];
    for (let i = 0; i < liste.length; i++) {
        let y = ""; 
        let u = ""; 
        let l = ""; 
        let f = <span property="isAccessibleForFree"  content="false">For sale</span>; 
        let cla = "filterable guide-box all show " + liste[i].language
        for (let j = 0; j < liste[i].tags.length; j++){
            cla += " " + liste[i].tags[j]
        }
        if(liste[i].year){
            y = "(" + liste[i].year + ")"; 
        }
        if(liste[i].free){
            f =  <span property="isAccessibleForFree"  content="true">Free</span>; 
            u = " at "
            l =  liste[i].url; 
        }
        rows.push(<div className={cla} typeof={liste[i].type}>
         <div><b>{liste[i].title} </b> <span property="datePublished" content={y}>{y}</span> by <span property="author"> <i>{liste[i].author}</i></span></div>
         <div>{f} {u} <a href={l} property="url">{l}</a> (<span property="inLanguage" content={liste[i].language}>{liste[i].language}</span>)</div>
         
        </div>); 
    }
    return rows; 
  }