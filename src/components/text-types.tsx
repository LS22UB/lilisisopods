import React from "react";

export function BoldPara({children}: {children: React.ReactNode}){
    return(
        <p>
            <b>
                {children}
            </b>
        </p>
    )
}