import React from "react"
import { stringToSlug } from "../utils/stringToSlug"

export function Section({id, title, children}: {id?: string, title: string, children: React.ReactNode}){
    let sec_id = ""; 
    let header_id = ""; 
    if(id){
        sec_id = stringToSlug(`${id}H`); 
        header_id = stringToSlug(id); 
    } else {
        sec_id = stringToSlug(`${title}H`); 
        header_id = stringToSlug(title); 
    }
    
    return(
        <div className="col">
            <section id={sec_id} className="section">
                <div id={header_id}><h2>{title}</h2></div>
                {children}
            </section>
        </div>
    )

}

export function Subesction({id, title, children}: {id?: string, title: string, children: React.ReactNode}){
    let sec_id = ""; 
    let header_id = ""; 
    if(id){
        sec_id = stringToSlug(`${id}H`); 
        header_id = stringToSlug(id); 
    } else {
        sec_id = stringToSlug(`${title}H`); 
        header_id = stringToSlug(title); 
    }
    return(
        <section id={sec_id}>
                <h3 id={header_id}>{title}</h3>
                  {children}
        </section>
    )
}