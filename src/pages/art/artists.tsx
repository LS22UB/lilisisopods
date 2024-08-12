import React from "react";
import { MovingWebsite } from "../../components/UnderConstruction";
import { RedditEmbed } from "../../components/Embeds/components/embeds/RedditEmbed";
import { RedditEmbedRow } from "../../components/Embeds/components/embeds/EmbedRow";

export function artartists() {
return ( 
 <>
<div className="row">
<div className="col"><MovingWebsite/>
</div>
</div>
<RedditEmbedRow
    url1="https://www.reddit.com/r/isopods/comments/wpz1ro/i_painted_a_little_rubber_ducky/"
    url2="https://www.reddit.com/r/isopods/comments/p3x0aa/cubaris_sp_jupiter_on_a_calathea_orbifolia_a/?embed_host_url=https://lilisisopods.wordpress.com/2023/02/26/paintings/"
    url3=""
/>
</>
);
}
