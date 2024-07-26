import React from "react";

export function Figure({url, caption, alt, id}:{url: string, caption: string, alt: string, id?: string}){
    let i = ""
    if (id){
        i = id
    }
    return(
        <figure id={i} className="center-normal">
                <img className="max70 center-normal" src={url} alt={alt} />
                <figcaption className="center-normal caption">{caption}</figcaption>
        </figure> 
    )
}