import React from "react";
import {
  ProjectsCOntainer,
  ProjectWrapper,
  ProjectRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  GithubLinkStyled,
  HeadingWrapper,
  Information,
  ButtonWrap,
  Column2,
  ImgWrap,
  ProjectImg,
} from "./FeaturedProjectsElements";
import "./ProjectCarousel.css";
import CurlyLine from "../Home/CurlyLine/CurlyLine";
import {  color1, color2 } from "../../AppVariables";

export default function FeaturedProjects(props){
  return (
    <>
      <ProjectsCOntainer lightBg={props.project.lightBg} id={props.project.id}>
       <CurlyLine />
       <ProjectWrapper>
          <div
            style={{
              display: `flex`,
              justifyContent: "center",
              padding: `20px 0 0px 0`,
            }}
          >
            <h3 className="longline"
              style={{
                margin: `10px`,
                paddingBottom: `10px`,
                color: props.project.lightBg ? color1 : color2,
              }}
            >
              Featured Project
            </h3>{" "}
          </div>

          <ProjectRow imgStart={props.project.imgStart}>
            <Column1>  
              <TextWrapper lightBg={props.project.lightBg}>
                <TopLine lightBg={props.project.lightBg}> {props.project.topLine}</TopLine>
                <HeadingWrapper>
                  <Heading lightBg={props.project.lightBg}>{props.project.headline} </Heading>{" "}
                  <GithubLinkStyled href={props.project.githubLink} lightBg={props.project.lightBg} rel="noopener noreferrer"  target={`_blank`}>
                    <i className="bi bi-github"></i>
                  </GithubLinkStyled>
                </HeadingWrapper>
                <Information lightBg={props.project.lightBg}> {props.project.description} </Information>
              </TextWrapper>
            </Column1>
            <Column2>
              <ProjectImg src={props.project.picture1} alt={props.project.alt1} onClick={()=>{props.setOpenModal(true); props.setClickedProject(props.project)} } />
              <ButtonWrap>
                <Information lightBg={props.project.lightBg}>
                  {" "}
                  Click on image to view
                </Information>
              </ButtonWrap>
            </Column2>
          </ProjectRow>
        </ProjectWrapper>
      </ProjectsCOntainer>
    </>
  );
}
