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
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (
      <Slider {...settings}>
        <div>
          <ArtistProfile
          sells={true}
          artistname="Phoenix"
          pictureurl=""
          artname="Isopal Arts"
          insta="https://www.instagram.com/isopalsarts/"
          greeting="Hi! I'm Phoenix and I love to draw all kinds of critters, but isopods have a special place in my heart."
          ></ArtistProfile>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    );
  }