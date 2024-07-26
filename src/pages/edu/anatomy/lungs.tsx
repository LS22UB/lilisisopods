import React from "react";

import { Graphviz } from 'graphviz-react';
import { Figure } from "../../../components/Fugures";
import HeaderBox from "../../../components/HeaderBox";
import {BlockQuoteB } from "../../../components/Quotes";



export function Lungs() {
    

    return (
      <>
        <HeaderBox title="The lungs of isopods">
        <div>
        <Graphviz dot={`digraph {
                lungs -> "covered lungs" -> Polyspiracular -> "Eubelum-type";
                Polyspiracular -> "Somaloniscus-type"; 
                "covered lungs" -> Monospiracular -> "Aethiopopactes-type"; 
                Monospiracular -> "Periscyphis-type"; 
                lungs -> "uncovered lungs" -> "Atracheodillo-type"; 
                "uncovered lungs" -> "half-covered lungs" -> "Synarmadilloides-type";
                "covered lungs" [shape=box, style=filled];
                "uncovered lungs" [shape=box, style=filled];
                lungs [shape="pentagon"];  
                "Aethiopopactes-type"[style=filled, color="#3AB09E"]
                "Somaloniscus-type"[style=filled, color="#3AB09E"]
                "Eubelum-type"[style=filled, color="#3AB09E"]
                "Periscyphis-type"[style=filled, color="#3AB09E"]
                "Atracheodillo-type"[style=filled, color="#3AB09E"]
                "Synarmadilloides-type"[style=filled, color="#3AB09E"]
                }`} 
                options={{height: "300px", width: "100%"}}
                />
        </div>
        </HeaderBox>
        <div className="col border-left" >
            <h1>The majority of isopods bear lungs on their pleopods.</h1>
            <h2>On their pleopodal exopods, to be precise.</h2>
        </div>
        <br/>
        <div className="row align-items-center"> 
            <div className="col">
            <Figure 
                url="http://placehold.jp/77767b/ffffff/150x150.png?text=Placeholder%20image"
                caption="Female A. vulgare (living)"
                alt="pleopods of living female A. vulgare"
                id="female-vulgare-pleopods"
                />
            </div>
            <div className="col">
            <Figure 
                url="http://placehold.jp/77767b/ffffff/150x150.png?text=Placeholder%20image"
                caption="Female H. reaumuri (conserved specimen)"
                alt="pleopods of conserved female H. reaumuri specimen"
                id="female-reaumuri-pleopods"
                />
            </div>
            </div>
            <div className="col">
                <p>Most lungs can be put in either the category "covered" or "uncovered". Both categories have lungs types that are specialised for arid environments. </p>
                <p>Not every species that has the same lung type has the same number of lungs! </p>
                </div>
            <div className="row align-items-center">
                <div className="col">
                <Figure 
                url="http://placehold.jp/77767b/ffffff/150x150.png?text=Placeholder%20image"
                caption="Isopod with x lungs"
                alt=""
                id=""
                />
                </div>
                <div className="col">
                <Figure 
                url="http://placehold.jp/77767b/ffffff/150x150.png?text=Placeholder%20image"
                caption="Isopod with y lungs"
                alt=""
                id=""
                />
                </div>
                </div>
            <h2>Uncovered lungs </h2>
            <p>These lungs have a pleated (wrinkled) respiratory surface that is directly or partially exposed to the air. [cm_simple_footnote id="1"]</p>
            <h3>Oniscus-type</h3>
            <div className="row items-align-center">
                <div className="col">
                <Figure 
                url="http://placehold.jp/77767b/ffffff/150x150.png?text=Placeholder%20image"
                caption="Isopod with y lungs"
                alt=""
                id=""
                />
                </div>
                <div className="col text-box">
                <p>shallowly wrinkled </p>  
                </div>
            </div>
            <h3>Trachelipus-type</h3>
            <div className="row items-align-center">
                <div className="col text-box">
                <p>partly covered </p>
                </div>
                <div className="col">
                <Figure 
                url="http://placehold.jp/77767b/ffffff/150x150.png?text=Placeholder%20image"
                caption="Isopod with y lungs"
                alt=""
                id=""
                />
                </div>
            </div>
            
            
            
            <h3>Atracheodillo-type</h3>
        <div className="row align-items-center">
            <div className="col">
            <Figure 
                url="https://lilisisopods.com/assets/atracheodillo-type-B-color.png"
                caption="Schema of atracheodillo-type lung"
                alt="Schema of atracheodillo-type lung"
                id="atracheodillo-lung-B"
                />
             </div>
             <div className="col text-box">
             <p>The atracheodillo-type lungs are directly exposed to the air and not partially covered. All folds are coplanar (on the same level) with the surface of the pleopodal exopod.  [cm_simple_footnote id="1"]</p>
             </div>

            <div className="col">
            <Figure 
                url="https://lilisisopods.com/assets/atracheodillo-type-A-color.png"
                caption="Fig. 2 - Schema of atracheodillo-type lung"
                alt="Schema of atracheodillo-type lung"
                id="atracheodillo-lung-A"
                />
            </div>
        </div>
        <h3>Synarmadilloides-type</h3>
        <p>The synarmadilloides-type lungs are partially enclosed within the appendages. The fold are only 
            partly coplanar with the surface of the exopod, meaning not all over them are on the same level 
            as the surface of the pleopodal exopod. Some of them are "intraflexed inside the exopod" instead. 
            This means they are folds that go a bit into the surface like a crack. [cm_simple_footnote id="1"] 
        </p>
        <div className="row align-items-center">
            <div className="col text-box">
                In the picture the exposed part of the lung is coloured pink and the hidden part blue. Both colours signify the folded surface. The green parts stand for the troughs. 
            </div>
            <div className="col">
                <Figure 
                url="https://lilisisopods.com/assets/synarmadilloides-type-color.png"
                caption="Schema of synarmadilloides-type lung"
                alt="Schema of synarmadilloides-type lung"
                id="synarmadilloides-lung"
                />
            </div>
        </div>

        <BlockQuoteB
            text=" With increasing complexity of the lungs, habitats of lower humidity could be colonised."
            cite="Schmidt and Wägele, 2001 fn4"
        />
        <br/> <br/>
        <h2>Covered lungs</h2>
        <p>These lungs are not directly exposed to the air. Their respiratory surface lies within 
            tissue that has no respiratory function. Air is only able to reach the respiratory surfaces 
            though one or multiple spiracles (breathing-holes) and respiratory trees (tree like structures 
            that allow air to pass though). [cm_simple_footnote id="1"] </p>
            <p>The tissue that has no respiratory function and contains the respiratory surface is called 
                perispiracular area. Respiratory trees are connected to the air though the spiracles. 
                Due to this, one spiracular and one respiratory tree (or multiple of each) go hand in hand. 
                [cm_simple_footnote id="1"] </p>
        <h3>Polyspiracular lungs</h3>
        <p>These types possess several respiratory trees and several spiracles. Therefore, they are called 
            polyspiracular. [cm_simple_footnote id="1"]  Usually, there are most spiracles on the first 
            pleopod and the number lessens from the first to the last pleopod. [cm_simple_footnote id="4"]</p>
            
        <div className="row align-items-center">
            <div className="col">
            <h4>Somalonicus-types</h4>
            <p>The somaloniscus-type lungs are a modified version of the eubelum-type lungs that are specialised 
            for arid environments. [cm_simple_footnote id="1"] </p>
            </div>
            <div className="col" >
            <Figure 
                url="https://lilisisopods.com/assets/somaloniscus-type-color.png"
                caption="Schema of somaloniscus-type lung"
                alt="Schema of somaloniscus-type lung"
                id="somaloniscus-lung"
                num="5"
                />
            </div>
        </div>
        <div className="row align-items-center">
            <div className="col">
            <Figure 
                url="https://lilisisopods.com/assets/eubelum-type-color.png"
                caption="Schema of eubelum-type lung"
                alt="Schema of eubelum-type lung"
                id="eubelum-lung"
                num="6"
                />
        </div>
            <div className="col">
            <h4>Eubelum-types</h4>
            <p>These lungs have "multiple arborescent invaginations". This term describes that they possess 
                multiple respiratory trees. [cm_simple_footnote id="1"] </p>
            </div>
        </div>
        
       
        <h4>Aethiopopactes- and Periscyphis-types</h4>
        <p>These types possess only one respiratory tree and one spiracle. Therefore, they are monospiracular. 
             [cm_simple_footnote id="1"]  </p>
        
        <div className="row align-items-center">
            <div className="col">
            <h5>Aethiopopactes-types    </h5>
            <p>This type has only "one arborescent invagination" meaning only one respiratory tree. 
                [cm_simple_footnote id="1"] </p>
            </div>
            <div className="col">
            <Figure 
                url="https://lilisisopods.com/assets/aethiopopactes-type-lung-color.png"
                caption="Schema of aethiopopactes-type lung"
                alt="Schema of aethiopopactes-type lung"
                id="aethiopopactes-lung"
                />
            </div>
        </div>
        <p className="has-text-align-center has-small-font-size">In the picture you can see the spiracle 
            coloured green and the perispiracular area coloured blue. </p>
            <p className="has-text-align-center has-small-font-size">Under that, the respiratory tree containing 
            the respiratory surface is pictured. The lined are dotted, because the tree is not really visible as it lies under the cuticle. </p>
            
        <div className="row align-items-center">
            <div className="col">
            <Figure 
                url="https://lilisisopods.com/assets/periscyphis-type-color.png"
                caption="Schema of periscyphis-type lung"
                alt="Schema of periscyphis-type lung"
                id="periscyphis-lung"
                />
            </div>
            <div className="col">
            <h5>Periscyphis-types</h5>
            <p>The periscyphis-type lungs are a modified version of the aethiopopactes-types lungs that are 
            specialised for arid environments. [cm_simple_footnote id="1"] </p>
            <p>The perispiracular area is very reduced or even absent. Unlike in other types, the respiratory 
                tree is not only in the exopods of the pleopods but also grows into the pleon (abdomen). 
                [cm_simple_footnote id="1"]</p>
            <p>Another adaptation to living in deserts is the mechanism in Periscyphis to 
                close the spiracles when necessary. [cm_simple_footnote id="4"]</p>
            </div>
        </div>
        
        <h2>Other types</h2>
        <p>genus Parelumoides and two species of the genus Elumoides (E. monocellatus, E. atlanticus),</p>
        <h3>Pleopods without respiratory structures</h3>
        <h3>Dorsal respiratory fields (Trachelipodidae-types)</h3>
        <h2>Surface morphology</h2>
        <h3>Respiratory tissue</h3>
        <p>In P. scaber, three types of respiratory tissue are differentiated at the time.  
            The intugement, the exopodal lungs and the endopodal lungs. [cm_simple_footnote id="3"]</p>
        <h3>Perispiracular region  </h3>
        <h2>Which species have which lungs?</h2>
        <p>The following table contains species for which I found explicit mentions of the lung type. </p>
        
        <div className="row align-items-center">
            <div className="col">

            </div>
            <div className="col">
                
            </div>
            {/* {i:0;s:217:"Paoli, P., Ferrara, F. and Taiti, S. (2002), Morphology and evolution of the respiratory apparatus in the family Eubelidae (Crustacea, Isopoda, Oniscidea). J. Morphol., 253: 272-289. https://doi.org/10.1002/jmor.10008";i:1;s:223:"Inui, Naoto & Miura, Toru. (2024). Comparisons of developmental processes of air- breathing organs among terrestrial isopods (Crustacea, Oniscidea): implications for their evolutionary origins. 10.21203/rs.3.rs-4023002/v1. ";i:2;s:216:"Naoto Inui, Ryosuke Kimbara, Haruka Yamaguchi, Toru Miura, Pleopodal lung development in a terrestrial isopod, Porcellio scaber (Oniscidea), Arthropod Structure & Development, Volume 71, 2022, 101210, ISSN 1467-8039,";i:3;s:248:"Schmidt, C. and Wägele, J.W. (2001), Morphology and evolution of respiratory structures in the pleopod exopodites of terrestrial Isopoda (Crustacea, Isopoda, Oniscidea). Acta Zoologica, 82: 315-330. https://doi.org/10.1046/j.1463-6395.2001.00092.x";i:4;s:199:"Elisabeth, Hornung. (2011). Evolutionary adaptation of oniscidean isopods to terrestrial life: Structure, physiology and behavior. Terrestrial Arthropod Reviews. 4. 95-130. 10.1163/187498311X576262. " */}
        </div>
        
      </>
    );
  }
  