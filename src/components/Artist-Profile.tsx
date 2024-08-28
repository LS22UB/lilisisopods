import React from "react";
import { stringToSlug } from "../utils/stringToSlug";
import { Hpopart } from "./Headings";

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
  pictureurl: string; 
  backgroundcolor?: string; 
}

export function ArtistProfile({artistname, artname, sells, children, insta, etsy, ownwebsite, greeting, facebook, email, pinterest, pictureurl, backgroundcolor}: ArtistProfileProps){
  var childs, selling, color:string, title;  
  let urls = []; 
  if(children){
    childs = children
  }
  else{
    childs = <></>
  }
  if(insta || etsy || ownwebsite || facebook || email || pinterest){
    if (insta) {
      urls.push(<div className="col-2 center"><a href={insta} property="insta"><i className="fa-brands fa-instagram"/></a></div>)
    }
    if (etsy) {
      urls.push(<div className="col-2 center"><a href={etsy}><i className="fa-brands fa-etsy"/></a></div>)
    }
    if (ownwebsite) {
      urls.push(<div className="col-2 center"><a href={ownwebsite}><i className="fa-solid fa-globe"/></a></div>)
    }
    if (facebook) {
      urls.push(<div className="col-2 center"><a href={facebook}><i className="fa-brands fa-facebook"/></a></div>)
    }
    if (email) {
      let to = "mailto:" + email; 
      urls.push(<div className="col-2 center"><a href={to}><i className="fa-regular fa-envelope"/></a></div>)
    }
    if (pinterest) {
      urls.push(<div className="col-2 center"><a href={pinterest}><i className="fa-brands fa-pinterest"/></a></div>)
    }
  }
  else{
    urls.push(<div className="col-2 center"><p>This artist did not lodge a website, social media account or other way of contact.</p></div>)
  }
  if (sells = false) {
    selling = "does not sell their art"
  }
  else{
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
  return(
    <div id={stringToSlug(title)} className="artist-profile" style={{backgroundColor: color}}>
      <div className="row">
        <div className="col-3">
          <img src={pictureurl} alt={"artist cover picture from " + artistname}/>
        </div>
        <div className="col">
          <Hpopart text={title}/>
        </div>
      </div>
    </div>
  )
}