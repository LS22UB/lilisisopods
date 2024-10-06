import React from "react";
import { stringToSlug } from "../utils/stringToSlug";
import {TealHpopart, UrgentHpopart } from "./Headings";

interface ArtistProfileProps {
  children?: React.ReactNode; 
  sells: boolean; 
  artistname: string; 
  artname?: string; 
  insta?: string; 
  etsy?: string; 
  ownwebsite?: string; 
  greeting: string; 
  facebook?: string; 
  email?: string; 
  pinterest?: string; 
  based?: string; 
  pictureurl: string; 
  backgroundcolor?: string; 
  shipsto?: string; 
}

export function ArtistProfile({artistname, artname, based, sells, children, insta, etsy, ownwebsite, greeting, facebook, email, pinterest, pictureurl, backgroundcolor, shipsto}: ArtistProfileProps){
  var childs, selling, color:string, title;  
  let urls = []; 
  let bg = ""; 
  let basedin = ""; 
  if(children){
    childs = children
  }
  else{
    childs = <></>
  }
  if(insta || etsy || ownwebsite || facebook || email || pinterest){
    if (insta) {
      urls.push(<div className="min artist-social-div center col"><a href={insta} property="insta"><i className="fa-brands fa-artists fa-instagram"/></a></div>)
    }
    if (etsy) {
      urls.push(<div className="min artist-social-div center col"><a href={etsy}><i className="fa-brands fa-artists fa-etsy"/></a></div>)
    }
    if (ownwebsite) {
      urls.push(<div className="artist-social-div center"><a href={ownwebsite}><i className="fa-solid fa-artists fa-globe"/></a></div>)
    }
    if (facebook) {
      urls.push(<div className="artist-social-div center"><a href={facebook}><i className="fa-brands fa-artists fa-facebook"/></a></div>)
    }
    if (email) {
      let to = "mailto:" + email; 
      urls.push(<div className="artist-social-div center"><a href={to}><i className="fa-regular fa-artists fa-envelope"/></a></div>)
    }
    if (pinterest) {
      urls.push(<div className="artist-social-div center"><a href={pinterest}><i className="fa-brands fa-artists fa-pinterest"/></a></div>)
    }
  }
  else{
    urls.push(<div className="col-2 center"><p>This artist did not lodge a website, social media account or other way of contact.</p></div>)
  }
  if (sells === false) {
    bg = "bg-lr"
    selling = "does not sell their art"
  }
  else{
    bg = "bg-gr"
    selling = "sells their art"
  }
  if(backgroundcolor){
    color = backgroundcolor; 
  }
  else{
    color = "var(--background)"
  }
  if (artname) {
    title = artname + " by " + artistname; 
  }
  else{
    title = artistname; 
  }
  if(based){
    basedin = based + "-based"
  }
  console.log(urls)
  return(
    <div id={stringToSlug(title)} className="artist-profile" style={{backgroundColor: color}}>
      <div className="row align-items-center">
        <div className="col-7">
          <img className="picture-frame" src={pictureurl} alt={"artist cover picture from " + artistname}/>
        </div>
        <div className="col-2">
          <TealHpopart text={artname}/> <h2>by</h2>
          <UrgentHpopart text={artistname}/>
        </div>
      </div>
      <div className="row">
        <div className="fit col no-flex">
        <p className={"left selling-tag " + bg}>This artist {selling}.</p> 
        </div>
        <div className="fit col no-flex">
        <p className={"left selling-tag bg-al"}>{basedin}</p>
        </div>
        <div className="fit col no-flex">
          <div className="col margin-auto">
            <div className="row align-items-center" style={{paddingLeft: "0.5rem"}}>
              {urls}
            </div> 
          </div>
        </div>
        
      </div>
      <br/>
      <div className="row">
        <div className="col">
           {childs}
        </div>
        <div className="col">
          <div className="bubble bubble-left">{greeting}</div>
        </div>
      </div>
    </div>
  )
}