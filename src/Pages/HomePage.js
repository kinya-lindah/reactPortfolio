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
    <>
    {openModal ? 
      // <div style={{position:"absolute", top:0, background:grey,height:"100%", width:'100vw', zIndex:999, opacity:0.8}}> 
      <p style={{color:"yellow" ,position: 'fixed',top:"0",left: '50px'}}>
        daeta
        </p>
        // </div>
        :
        <Animated
      animationIn="fadeInLeft"
      animationOut="fadeOutLeft"
      isVisible={true}
    >

        <Home />
        <About />
        <Projects openModal ={openModal} setOpenModal={setOpenModal} />
        <WorkExperience/>
        <Footer />
        
 
    </Animated>
      }
      </>
  );
}
