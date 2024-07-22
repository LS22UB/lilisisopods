import React from "react";

export function SocialRow(){
    return(
        <div className="center">
            <div className="row align-items-center">
                <div className="col-2 center"><a href="https://www.reddit.com/user/hurly_burly_pegasus/?rdt=59692" className="fa fa-reddit" property="url"></a></div>
                <div className="col-2 center"><a href="mailto:lilisisopods@proton.me" className="fa fa-envelope" property="url"></a></div>
                <div className="col-2 center"><a href="https://www.instagram.com/lilisisopods/" className="fa fa-instagram" property="email"></a></div>
                {/* <div className="col-2 center"><a href="#" className="fa fa-github" property="email"></a></div> */}
            </div>
        </div>
        
    )
}