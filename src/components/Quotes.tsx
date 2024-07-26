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

export function BlockQuoteB({text, cite}: {text: string; cite: string}){
    return(
        <div className="blockquote-wrapper">
            <div className="blockquotex">
                <h2>
                    {text}
                </h2>
                <h4><em>{cite}</em></h4>
            </div>
            </div>
    )
}


/* <span>Winston Churchill</span>
  <blockquote>
    <p><i>&ldquo;Success consists of going from failure to failure without loss of enthusiasm.&rdquo; </i></p>
  </blockquote> */