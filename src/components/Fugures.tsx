import React from "react";
// Load Citation.js

export function Figure({url, caption, alt, id, num}:{url: string, caption: string, alt: string, id?: string, num?: string}){
    let i = ""
    let n = "max70"
    if (id){
        i = id
    }
    if(num){
        n = "max" + num + "0"
    }
    let cl = n + " center-normal"
    return(
        <figure id={i} className="center-normal">
            <div className="bg-darker figure-img">
                <img className={cl} src={url} alt={alt} />
            </div>
                <figcaption className="center-normal caption">{caption}</figcaption>
        </figure> 
    )
}