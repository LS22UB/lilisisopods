import React from "react"
import { InstagramEmbed } from "./InstagramEmbed"
import { PinterestEmbed } from "./PinterestEmbed"
import { RedditEmbed } from "./RedditEmbed"

export function InstaEmbedRow({url1, url2, url3}:{url1: string, url2: string, url3:string}){
    return(
        <div className="embed-row align-items-center">
            <InstagramEmbed url={url1}/>
            <InstagramEmbed url={url2}/>
            <InstagramEmbed url={url3}/>
        </div>
    )
}

export function PintEmbedRow({url1, url2, url3}:{url1: string, url2: string, url3:string}){
    return(
        <div className="embed-row align-items-center">
            <PinterestEmbed url={url1}/>
            <PinterestEmbed url={url2}/>
            <PinterestEmbed url={url3}/>
        </div>
    )
}

export function RedditEmbedRow({url1, url2, url3}:{url1: string, url2: string, url3:string}){
    return(
        <div className="embed-row-reddit align-items-center">
            <RedditEmbed url={url1}/>
            <RedditEmbed url={url2}/>
            <RedditEmbed url={url3}/>
        </div>
    )
}

