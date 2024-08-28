import React from "react";

export function Hhopp({text}:{text: string}){
    const arr = []; 
    for (let i = 0; i < text.length; i++) {
        const x = text.charAt(i); 
        arr.push(<span aria-hidden="true">{x}</span>)
    }
    return(
        <h1 className="playful" aria-label="Wash your hands">
            {arr}        
        </h1>
    )
}

export function Hsmoke({text}:{text: string}){
    const arr = []; 
    for (let i = 0; i < text.length; i++) {
        const x = text.charAt(i); 
        arr.push(<span aria-hidden="true">{x}</span>)
    }
    return(
        <h1 className="smoke" aria-label="Wash your hands">
            {arr}        
        </h1>
    )
}

export function H1({text}:{text: string}){
    return(
    <div className="row hone">
        <svg width="100%" height="100%">
        <text x="0%" y="60%">
        {text}
        </text>
    </svg>
    </div>
    )
}

/* export function Hprompt({text}:{text: string}){
    return(
        <div>
            <h2>{text}</h2>
            <hr/>
        </div>
    )
} */
export function H2({text}:{text: string}){
    return(
        <div>
            <h2>{text}</h2>
            <hr/>
        </div>
        
    )
}

export function Hhighlight({children}:{children: React.ReactNode}){
    return(
    <div className="content v2">
        {children}
    </div>
    )
}
export function Hspoiler({children}:{children: React.ReactNode}){
    return(
    <div className="content v3">
        {children}
    </div>
    )
}

export function Hwave({text}:{text: string}){
    return(
        <svg viewBox="0 0 100 20">
        <defs>
            <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="5%" stop-color="#850F78"/>
            <stop offset="95%" stop-color="#A0A7F3"/>
            </linearGradient>
            <pattern id="wave" x="0" y="0" width="120" height="20" patternUnits="userSpaceOnUse">
            <path id="wavePath" d="M-40 9 Q-30 7 -20 9 T0 9 T20 9 T40 9 T60 9 T80 9 T100 9 T120 9 V20 H-40z" mask="url(#mask)" fill="url(#gradient)"> 
                <animateTransform
                    attributeName="transform"
                    begin="0s"
                    dur="1.5s"
                    type="translate"
                    from="0,0"
                    to="40,0"
                    repeatCount="indefinite" />
            </path>
            </pattern>
        </defs>
        <text text-anchor="middle" x="50" y="15" font-size="17" fill="url(#wave)"  fill-opacity="0.6">{text}</text>
        <text text-anchor="middle" x="50" y="15" font-size="17" fill="url(#gradient)" fill-opacity="0.1">{text}</text>
        </svg>
    )
}

export function Hpopart({text}:{text: string}){
return(
    <div className="row">
        <div className="col">
    <div className="relative popart-wrapper">
        <div className="absolute popart">
            {text}
        </div> 
        </div>
    </div>
    </div>
)
}

export function Hshadone({text}:{text: string}){
    return(
    <div>
        <p className="stroke shadow-stroke">{text}</p>
    </div>
    )
}
export default H1;