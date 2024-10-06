import React from "react";

interface figure{
    url1: string; 
    url2?: string; 
    caption1: string; 
    caption2?: string; 
    alt1?: string; 
    alt2?: string; 
}

export function DoubleFigure({url1, url2, caption1, caption2, alt1, alt2}: figure){
    
    return(

        <div className="row">
                <div className="col">
                    <figure>
                        <img src={url1} alt={alt1}/>
                        <figcaption> {caption1}</figcaption>
                    </figure>
                </div>
                <div className="col">
                    <figure>
                        <img src={url2} alt={alt2}/>
                        <figcaption> {caption2}</figcaption>
                    </figure>
              </div>
            </div>
        
    )
}