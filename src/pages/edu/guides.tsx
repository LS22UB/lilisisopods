import React from "react";
import { WikiSelector} from "../../components/Filter";
//die auswahl setzt sich noch ganz zurück, wenn man einen Filter zurück setzt...das muss geändert werden
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
        title: "Guide to Barrow Island",
        tags: ["Australia", "Oniscidea", "Armadillidae", "Ligiidae", "Maps", "Photos"], 
        author: "Simon Judd and Giulia Perina",
        year: "2013",
        free: true, 
        url: "https://museum.wa.gov.au/sites/default/files/10.%20Judd,%20Perina.pdf", 
        type: "Article", 
        language: "en"
    }, 
    {
        title: "CLAVE DE IDENTIFICACIÓN",
        tags: ["Chile", "Ligiidae", "SouthAmerica","Tylidae", "Styloniscidae", "Detonidae", "Philoscidae",
             "Oniscidea", "Armadillidae", "Bathytropidae", "Oniscidae", "Porcellionidae", 
                "Armadillidiidae"], 
        author: "Pérez-Schultheiss",
        free: true, 
        year: "2010",
        url: "http://www.bbchile.com/pdfs/2010/4/04-Perez-Schultheiss-b-2010-4.pdf", 
        type: "Article", 
        language: "es"
    },
    {
        title: "Clé des Isopodes terrestres du Nord de la France- 2021",
        tags: ["France", "Photos", "Oniscidea", "Europe","Armadillidiidae", "Ligiidae", "Detonidae", "Philoscidae",
             "Halophiloscidae", "Stenoniscidae", "Platyarthridae", "Armadillidae", "Oniscidae", 
            "Trachelipodidae", "Cylisticidae", "Agnaridae", "Porcellionidae"], 
        author: "Noël and Séchet",
        year: "2021",
        free: true, 
        url: "https://www.researchgate.net/publication/355145019_Cle_des_Isopodes_terrestres_du_Nord_de_la_France-_2021",
        type: "Book", 
        language: "fr"
    }, 
    {
        title: "Bestimmungsschlüssel Landasseln",
        tags: ["Germany", "Photos", "Armadillidiidae", "Oniscidea", "Ligiidae",  "Philoscidae",
             , "Trichoniscidae", "Platyarthridae","Europe",  "Oniscidae", 
            "Trachelipodidae", "Cylisticidae", "Porcellionidae"], 
        author: "Bodentier hoch 4",
        free: true, 
        url: "https://bodentierhochvier.de/erkennen/bestimmung-landasseln/",
        type: "Website", 
        language: "de"
    }, 
    {
      title: "Introduction to woodlice",
      tags: ["GreatBritain", "Ireland", "England", "Schottland", "Photos", "Armadillidiidae", "Oniscidea", "Ligiidae", "Philoscidae",
           , "Trichoniscidae", "Platyarthridae", "Europe", "Oniscidae", 
          "Trachelipodidae", "Cylisticidae", "Porcellionidae"], 
      author: "Paul Richards",
      free: true, 
      year: "2011",
      url: "https://bmig.org.uk/sites/default/files/docs/Woodlice.pdf",
      type: "Website", 
      language: "en"
    }, 
    {
      title: "A key to the woodlice of Britain and Ireland",
      tags: ["GreatBritain", "Ireland", "England","Europe", "Schottland","Armadillidiidae", "Oniscidea", "Ligiidae", "Philoscidae",
           , "Trichoniscidae", "Platyarthridae",  "Oniscidae", 
          "Trachelipodidae", "Cylisticidae", "Porcellionidae"], 
      author: "FSC AIDGAP",
      free: false, 
      year: "1991",
      type: "Book", 
      language: "en",
    }, 
    {
      title: "Woodlice: Linnean Society Synopsis (New Series) 49",
      tags: ["GreatBritain", "Ireland", "England", "Schottland", "Europe","Armadillidiidae", "Oniscidea", "Ligiidae", "Philoscidae",
           , "Trichoniscidae", "Platyarthridae",  "Oniscidae", 
          "Trachelipodidae", "Cylisticidae", "Porcellionidae"], 
      author: "Linnean Society",
      free: false, 
      year: "1993",
      type: "Book", 
      language: "en",
    }, 
    {
      title: "An Introduction to the Identification of the Woodlice (Isopoda: Oniscidea) occurring in Berkshire, Buckinghamshire and Oxfordshire",
      tags: ["England", "Armadillidiidae", "Oniscidea", "Ligiidae","Europe", "Philoscidae",
           , "Trichoniscidae", "Platyarthridae", "Oniscidae", 
          "Trachelipodidae", "Cylisticidae", "Porcellionidae"], 
      author: "Steve Gregory",
      free: true, 
      year: "2019",
      url: "https://anhso.org.uk/wp-content/uploads/Fritillary/frit8-woodlice.pdf",
      type: "Book", 
      language: "en",
    }, 
    {
      title: "British freshwater Crustacea Malacostraca: a key with ecological notes",
      tags: ["GreatBritain", "Ireland", "England", "Schottland","Europe", "Slater", "Ligiidae", "FreshwaterIsopods"], 
      author: "Gledhill, A.T.; Sutcliffe, D.W.; Williams, W.D.",
      free: false, 
      year: "1993",
      url: "https://www.fba.org.uk/shop/p/book-26",
      type: "Book", 
      language: "en",
    }, 
    {
      title: "British Marine Isopods: Keys and Notes for the Identification of the Species",
      tags: ["GreatBritain", "Ireland", "England", "Schottland", "Europe", "MarineIsopods", "Gnathiidae",
        "Idoteidae","Sphaeromatidae","Limnoriidae"], 
      author: "E. Naylor",
      free: true, 
      url: "https://isopods.nhm.org/pdfs/5121/5121.pdf",
      year: "1972",
      type: "Book", 
      language: "en",
    }, 
    {
      title: "Guide for Haploniscidae",
      tags: ["Asellota", "Iceland", "Janiroidea",  "MarineIsopods"], 
      author: "Kürzel et al.",
      free: true, 
      url: "https://www.frontiersin.org/articles/10.3389/fmars.2021.795196/full",
      year: "2021",
      type: "Article", 
      language: "en",
    }, 
    {
      title: "Guía de identificación de isópodos acuáticos continentales mexicanos",
      tags: ["Asellota", "Mexico", "SouthAmerica","FreshwaterIsopds",  "MarineIsopods", "Sphaeromatidae", "Asellidae"], 
      author: "Rocha-Ramírez et al.",
      free: true, 
      url: "https://www.researchgate.net/publication/310796268_Guia_de_identificacion_de_isopodos_acuaticos_continentales_mexicanos",
      year: "2012",
      type: "Article", 
      language: "es",
    }, 
    {
      title: "Terrestrial Isopods (Oniscidea) of North America north of Mexico ",
      tags: ["Photos",  "USA", "Canada", "NorthAmerica", "Slater", "Tyliidae", "Styloniscidae", "Trichoniscidae","Alloniscidae","Armadillidae","Armadillidiidae","Balloniscidae","Cylisticidae","Detonidae","Halophiloscidae","Oniscidae","Philoscidae","Platyarthridae","Porcellionidae","Trachelipodidae","Ligiidae","Armadillidiidae", "FreshwaterIsopds",  "MarineIsopods", "Sphaeromatidae", "Asellidae"], 
      author: "Inaturalist Users",
      free: true, 
      url: "https://www.inaturalist.org/guides/5808",
      type: "Website", 
      language: "en",
    }, 
    
  ]

  function Gui({liste}: {liste: Array<GuideFace>}){
    let rows = [];
    for (let i = 0; i < liste.length; i++) {
        let y = ""; 
        let u = ""; 
        let l = ""; 
        let adv = ""; 
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
            
        }
        if(liste[i].url){
          u = " at "
          l =  liste[i].url; 
          if(! liste[i].free){
            adv = "or second hand (cheaper) from other sources"
          }
        }
        rows.push(<div className={cla} typeof={liste[i].type}>
         <div><b>{liste[i].title} </b> <span property="datePublished" content={y}>{y}</span> by <span property="author"> <i>{liste[i].author}</i></span></div>
         <div>{f} {u} <small> <a  href={l} property="url">{l}</a> {adv}</small> (<span property="inLanguage" content={liste[i].language}>{liste[i].language}</span>) </div>
         
        </div>); 
    }
    return rows; 
  }