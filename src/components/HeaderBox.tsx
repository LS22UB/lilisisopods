import React from "react";

interface Props{
    title?: string,
    children?: React.ReactNode,
}

export default function HeaderBox({children, title}: Props ){
    return(
        <>
        <div className="row">
          <div className="col header-container">
            <div className="header-title">
              {title}
            </div>
            {children}
          </div>
          <div className="base">
          </div>
        </div>
        <div className="row">
      
        </div>
      </>
    )
}