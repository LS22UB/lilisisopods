import React from "react";
const { Cite } = require('@citation-js/core')
// Load plugins
require('@citation-js/plugin-doi')
require('@citation-js/plugin-csl')
require('@citation-js/plugin-bibjson')



 
  
export function ReferenceBox(){
    let bibliographyData = [
        {
            "container-title": "Journal of morphology",
            "abstract": "The morphology of the respiratory apparatus in the pleopodal lungs of the family Eubelidae was investigated. The family is a monophyletic group including more than 240 species in 53 genera (three of which are nomina dubia), mostly distributed in the Afrotropical Region (tropical Africa and Arabian Peninsula). In all the Eubelidae, except for the monospecific genus Parelumoides and two species of the genus Elumoides, the exopods of pleopods have lungs. All the pulmonary morphologies present in the entire suborder Oniscidea are found: 1) uncovered lungs, composed of a pleated respiratory surface, directly exposed to the air (Atracheodillo-type) or partially enclosed within the appendage (Synarmadilloides-type); 2) covered lungs with several spiracles and respiratory trees, housed within the appendages, with spiracles surrounded by a specialized, nonrespiratory, structure (perispiracular area) (Eubelum- and Somaloniscus-types); 3) covered lungs with only one spiracle, with or without perispiracular area, and one respiratory tree (Aethiopopactes- and Periscyphis-types), which in taxa with Periscyphis-type lung crosses the insertion of the appendage and penetrates into the pleon with bundles of respiratory tubules. The evolution of the various types of lungs is discussed. It is concluded that the two main evolutionary lines, i.e., uncovered lungs and covered lungs, originated independently from an ancestral respiratory structure-the semilunar area. A first mechanism of development of the semilunar area by folding of its surface produced the Atracheodillo-type (all folds coplanar with the surface of the exopod) and Synarmadilloides-type (folds partly coplanar and partly intraflexed inside the exopod) uncovered lungs. A second mechanism of development by tubular invagination of the cuticle of the semilunar area produced the polyspiracular Eubelum-type lungs (numerous arborescent invaginations) and the monospiracular Aethiopopactes-type lungs (only one arborescent invagination), probably passing through a common intermediate pattern. From the common pattern, both the poly- and monospiracular types would have inherited the characteristic concave cell arrangement of the perispiracular area. The Somaloniscus-type and Periscyphis-type lungs are forms specialized for arid environments, directly derived from the Eubelum-type and Aethiopopactes-type, respectively.",
            "author": [
              {
                "given": "Pasquino",
                "family": "Paoli"
              },
              {
                "given": "Franco",
                "family": "Ferrara"
              },
              {
                "given": "Stefano",
                "family": "Taiti"
              }
            ],
            "DOI": "10.1002/jmor.10008",
            "type": "article-journal",
            "id": "PMID:12125066",
            "citation-key": "PMID:12125066",
            "ISSN": "0362-2525",
            "issue": "3",
            "issued": {
              "date-parts": [
                [
                  2002,
                  9
                ]
              ]
            },
            "page": "272-289",
            "title": "Morphology and evolution of the respiratory apparatus in the family Eubelidae (Crustacea, Isopoda, Oniscidea)",
            "URL": "https://doi.org/10.1002/jmor.10008",
            "volume": "253"
          },
        {
            "container-title": "Acta Zoologica",
            "author": [
              {
                "given": "Christian",
                "family": "Schmidt"
              },
              {
                "given": "Johann Wolfgang",
                "family": "Wägele"
              }
            ],
            "DOI": "https://doi.org/10.1046/j.1463-6395.2001.00092.x",
            "type": "article-journal",
            "id": "https://doi.org/10.1046/j.1463-6395.2001.00092.x",
            "citation-key": "https://doi.org/10.1046/j.1463-6395.2001.00092.x",
            "issue": "4",
            "issued": {
              "date-parts": [
                [
                  2001
                ]
              ]
            },
            "keyword": "Crustacea,Isopoda,Oniscidea,Crinocheta,pleopod lungs,evolution,convergency",
            "page": "315-330",
            "title": "Morphology and evolution of respiratory structures in the pleopod exopodites of terrestrial Isopoda (Crustacea, Isopoda, Oniscidea)",
            "URL": "https://onlinelibrary.wiley.com/doi/abs/10.1046/j.1463-6395.2001.00092.x",
            "volume": "82"
          }
  ]
      let rows = []
      for(let i = 0; i < bibliographyData.length; i++){
        const reference = new Cite(bibliographyData[i]);  
        const ref = reference.format("bibliography", {
              template: "apa",
              format: "html"
        });
        rows.push(
            ref

        )
      }

      return (
        <>
        {rows}
        </>
      );
    }

