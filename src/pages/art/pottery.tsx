import React from "react";
import { MovingWebsite } from "../../components/UnderConstruction";
import { InstaEmbedRow } from "../../components/Embeds/components/embeds/EmbedRow";

export function artpottery() {
return ( 
 <>
<div className="row">
<div className="col"><MovingWebsite/>
</div>
</div>
<div className="row"></div>
<InstaEmbedRow
    url1="https://www.instagram.com/p/C4QFm17MbiA"
    url2="https://www.instagram.com/p/Chm-SSJLHFP"
    url3="https://www.instagram.com/p/ChC-qUUNt1V"
/>
<InstaEmbedRow
    url1="https://www.instagram.com/p/B3vAeDOhHcX"
    url2="https://www.instagram.com/p/"
    url3="https://www.instagram.com/p/"
/>
</>
);
}
