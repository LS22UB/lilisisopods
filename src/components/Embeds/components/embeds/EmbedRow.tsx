import React from "react"
import { InstagramEmbed } from "./InstagramEmbed"

export function InstaEmbedRow({url1, url2, url3}:{url1: string, url2: string, url3:string}){
    return(
        <div className="embed-row align-items-center">
            <InstagramEmbed url={url1}/>
            <InstagramEmbed url={url2}/>
            <InstagramEmbed url={url3}/>
        </div>
    )
}