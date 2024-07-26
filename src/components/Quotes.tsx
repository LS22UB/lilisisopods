import React from "react";

export function BlockQuote({text, cite}: {text: string; cite: string}){
    return(
        <div className="blockquote-wrapper">
            <div className="blockquote">
                <h2>
                    {text}
                </h2>
                <h4><em>{cite}</em></h4>
            </div>
            </div>
    )
}