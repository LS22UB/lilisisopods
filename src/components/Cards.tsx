import React from "react";

export function WebsiteCard({children, heading, url, slogan}: {children?: React.ReactNode, heading: String, url: string, slogan?: String}){
    if(slogan){
        slogan = '"' + slogan + '"'; 
    }
    return(
        <>
        <div className="webcard">   
        <div className="container">
          <h4><b>{heading}</b></h4>
          <p><small><a href={url}>{url}</a></small></p>
          <p><i>{slogan}</i></p>
          <p>{children}</p>
        </div>
      </div> 
        </>
    )
}   