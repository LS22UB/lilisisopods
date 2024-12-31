import React from "react";
import Slider from "react-slick";
import { MovingWebsite } from "../../components/UnderConstruction";
import { ArtistProfile } from "../../components/Artist-Profile";
/* import { RedditEmbedRow } from "../../components/Embeds/components/embeds/EmbedRow";
 */
export function artartists() {
return ( 
 <>
<div className="row">
<div className="col"><MovingWebsite/>
<ArtistSlider/>
</div>
</div>
{/* <RedditEmbedRow
    url1="https://www.reddit.com/r/isopods/comments/wpz1ro/i_painted_a_little_rubber_ducky/"
    url2="https://www.reddit.com/r/isopods/comments/p3x0aa/cubaris_sp_jupiter_on_a_calathea_orbifolia_a/?embed_host_url=https://lilisisopods.wordpress.com/2023/02/26/paintings/"
    url3=""
/> */}

</>
);
}




export default function ArtistSlider() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
     /*  autoplay: true, */
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      pauseOnHover: true
    };
    return (
      <div className="center slider" style={{width: "70%"}}>
              <Slider {...settings}>
        <div>
          <ArtistProfile
          sells={true}
          based="US"
          etsy="https://www.etsy.com/de/shop/IsopalsArts"
          backgroundcolor="#9cc34e"
          artistname="Phoenix"
          pictureurl="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.Uge8n3cdvDQTUusYkX_BwAHaFl%26pid%3DApi&f=1&ipt=1ca4113ab5989ddc982bb3a0ca794ad09fadb49a4c664bc8dc6346691b9e5ed4&ipo=images"
          artname="Isopals Arts"
          insta="https://www.instagram.com/isopalsarts/"
          greeting="Hi! I'm Phoenix and I love to draw all kinds of critters, but isopods have a special place in my heart."
          ></ArtistProfile>
        </div>
        <div>
          <h3>2</h3>
        </div>
      </Slider>
      </div>
    );
  }