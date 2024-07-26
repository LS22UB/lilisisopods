import React from "react";

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
        <figure id={i} className="center-normal bg-c3">
                <img className={cl} src={url} alt={alt} />
                <figcaption className="center-normal caption">{caption}</figcaption>
        </figure> 
    )
}