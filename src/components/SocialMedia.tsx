import React from "react";

export function SocialRow(){
    return(
        <div className="center">
            <div className="row align-items-center">
                <div className="col-2 center"><a href="#" className="fa fa-reddit" property="url"></a></div>
                <div className="col-2 center"><a href="#" className="fa fa-envelope" property="url"></a></div>
                <div className="col-2 center"><a href="#" className="fa fa-instagram" property="email"></a></div>
            </div>
        </div>
        
    )
}