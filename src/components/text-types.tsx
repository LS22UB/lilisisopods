import React from "react";

export function BoldPara(children: React.ReactNode){
    return(
        <p>
            <b>
                {children}
            </b>
        </p>
    )
}