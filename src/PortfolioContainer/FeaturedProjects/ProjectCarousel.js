import React, { useState } from "react";

import { FlexWrapper,  } from "./ProjectCarouselElements";
import "./ProjectCarousel.css";
import { Img } from "./FeaturedProjectsElements";
import { seeThroughGrey, white } from "../../AppVariables";

export default function ProjectCarousel(props) {
  const [ activeImage, setActiveImage] = useState(props.pictures[0])
  return (
   
    <div style={{display:"flex", flexDirection:"column", height:"calc(100vh - 74px)", backgroundColor:seeThroughGrey}}>

          <div style={{display:"flex", flexDirection:"column", alignItems: 'center'}}>
            <img src={activeImage[0]} alt={activeImage[1]} style={{maxHeight:"70vh"}}/> 
            <span style={{textAlign:"center", color:white}}> {activeImage[1]}</span>
          </div>
            <div style={{display:"flex", flexDirection:"row"}} className="thatone">

             {props.pictures.length>0 && props.pictures.map((pictures,i)=>{
 {console.log("projects props.pictures", props.pictures, pictures)}

                return <div key={i} style={{background:"white"}} className="thisone"> 
                 {/* {pictures[1]} {console.log("cats", pictures)} */}
                 Start thumbnail
                  <img src={pictures[0]} alt={pictures[1]} style={{height:"10vh"}} onClick={()=>{setActiveImage(pictures[0])}}/> 
                  Start thumbnail
                </div>
              })}
           </div>


        </div>
      
  );
}
