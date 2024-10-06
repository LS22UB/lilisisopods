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
        <figure>
            <div className="row align-items-center">
                <div className="col">
                    <img src={url1} alt={alt1}/>
                </div>
                <div className="col">
                    <img src={url2} alt={alt2}/>
                </div>
                
            </div>
            <figcaption> 
            <div className="row align-items-center">
                <div className="col">
                {caption1}
                </div>
                <div className="col">
                {caption2}
                </div>
                
            </div>
            </figcaption>

        </figure>
               
            </div>
        
    )
}