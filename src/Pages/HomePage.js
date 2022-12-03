import React, { useState } from "react";
import Home from "../PortfolioContainer/Home/Home";
import About from "../PortfolioContainer/AboutMe/About";
import Projects from "../PortfolioContainer/FeaturedProjects/Projects";
import Footer from "../PortfolioContainer/Footer/Footer";
import { Animated } from "react-animated-css";
import WorkExperience from "../PortfolioContainer/WorkExperience/WorkExperience";

export default function Pages() {
  const [openModal, setOpenModal] = useState(false)
  return (
        <Animated 
      animationIn="fadeInLeft"
      animationOut="fadeOutLeft"
      isVisible={true}
    >
        <Home/>
        <About/>
        <Projects openModal ={openModal} setOpenModal={setOpenModal}  />
        <WorkExperience/>
        <Footer/>
    </Animated>
  );
}
