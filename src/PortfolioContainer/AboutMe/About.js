import React from "react";
import {AboutContainer,AboutWrapper,AboutImageWrapper,AboutImage,AboutInfoWrapper1, AboutInfo, AboutSkills, AboutList} from './AboutElements';
import seriousImage from "../../items/Home/serious2.jpeg";
import { color2 } from "../../AppVariables";


export default function About() {
  const skills = ["HTML", "React", "Python", "Flask", "Git", "Jenkins", "NoSql","SQL"]
  return (
    <>

      <AboutContainer id='about'>
      
      <div className="centered"><h5 >About</h5></div>
        <AboutWrapper>
          <AboutImageWrapper>
              <AboutImage src={seriousImage}>

              </AboutImage>
          </AboutImageWrapper>
          <AboutInfoWrapper1>
            <AboutInfo>
                
                Lindah is full Stack Developer with knowlegde in React, Flask and other frameworks.  
              She is a quick learner who is full of curiosity and great at collaborating.
             </AboutInfo>
            <AboutSkills> <h4 className="centered" style={{color: color2}}> Skills and Languages</h4>
              <AboutList>
               {skills.map((skill, i)=> <li key={i}> {skill}</li>)} 
                
              </AboutList></AboutSkills>
          </AboutInfoWrapper1>
        </AboutWrapper>
      </AboutContainer>
    </>
  );
}
