import React, { useState } from "react";

import "./ProjectCarousel.css";
import { Img } from "./FeaturedProjectsElements";
import { white } from "../../AppVariables";

export default function ProjectCarousel(props) {
  const [activeImage, setActiveImage] = useState(props.pictures[0])
  return (

    <div style={{ display: "flex", flexDirection: "column", height: "calc(100vh - 74px)", backgroundColor: "transparent" }}>

      <div style={{ display: "flex", flexDirection: "column", alignItems: 'center' }}>
        <Img src={require("../../items/Home/" + activeImage[0])} alt={activeImage[1]} style={{ maxHeight: "70vh" }} />
        <span style={{ textAlign: "center", color: white }}> {activeImage[1]}</span>
      </div>
      
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }} >
        {props.pictures.length > 0 && props.pictures.map((pictures, i) => {
          return <div key={i} style={{ background: "white" }} >
            <img src={require("../../items/Home/" + pictures[0])} alt={pictures[1]} style={{ height: "10vh" }} onClick={() => { setActiveImage([pictures[0], pictures[1]]) }} />
          </div>
        })}
      </div>


    </div>

  );
}
