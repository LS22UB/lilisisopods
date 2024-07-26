import React from "react";
const { Cite } = require('@citation-js/core')
// Load plugins
require('@citation-js/plugin-doi')
require('@citation-js/plugin-csl')
Cite.async('10.7717/peerj-cs.214').then(data => {
    // Format output
    const bibliography = data.format('bibliography', {
      format: 'html',
      template: 'apa',
      lang: 'en-US'
    })
    console.log(bibliography)
  })

export function ReferenceBox(){
    let x = undefined
    Cite.async('10.7717/peerj-cs.214').then(data => {
        // Format output
        const bibliography = data.format('bibliography', {
          format: 'html',
          template: 'apa',
          lang: 'en-US'
        })
        x = bibliography
      })
    return(
        <>
        <h2>References</h2>
        {x}
        </>
    )
}

