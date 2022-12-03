import React, { useState } from "react";

import { FlexWrapper,  } from "./ProjectCarouselElements";
import "./ProjectCarousel.css";
import { Img } from "./FeaturedProjectsElements";

export default function ProjectCarousel(props) {
  const [ activeImage, setActiveImage] = useState([])
  return (
   
        <FlexWrapper>
 {console.log("projects", props)}
          {/* <div><Img src={props.picture[0][0]} alt={props.picture[0][1]}/> </div> */}
            <div>
             { props.pictures.map((pictures,i)=>{

                <div key={i} style={{background:"white"}}>  {console.log('pictures[1]', pictures)} cats  <Img src={pictures[0]} alt={pictures[1]}/> </div>
              })}
           </div>


        </FlexWrapper>
      
  );
}
