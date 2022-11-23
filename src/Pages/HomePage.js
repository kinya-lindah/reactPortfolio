import React, { useState } from "react";
import Home from "../PortfolioContainer/Home/Home";
import About from "../PortfolioContainer/AboutMe/About";
import Projects from "../PortfolioContainer/FeaturedProjects/Projects";
import Footer from "../PortfolioContainer/Footer/Footer";
import { Animated } from "react-animated-css";
import WorkExperience from "../PortfolioContainer/WorkExperience/WorkExperience";
import { grey } from "../AppVariables";

export default function Pages() {
  const [openModal, setOpenModal] = useState(false)
  console.log('openModal', openModal)
  return (
    < div  style={{  filter: openModal===true ? 'brightness(20%)':'brightness(1)', opacity: openModal===true ? 0.5:1}}
    // onClick ={()=>setOpenModal(false)}
    >
        <Animated 
      animationIn="fadeInLeft"
      animationOut="fadeOutLeft"
      isVisible={true}
      
      
    >
{console.log("opnModea", openModal)}
        <Home/>
        <About/>
        <Projects openModal ={openModal} setOpenModal={setOpenModal}  />
        <WorkExperience/>
        <Footer/>
        
 
    </Animated>
      </div>
  );
}
