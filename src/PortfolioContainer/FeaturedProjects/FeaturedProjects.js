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
} from "./FeaturedProjectsElements";
import "./ProjectCarousel.css";
import CurlyLine from "../Home/CurlyLine/CurlyLine";
import ProjectCarousel from "./ProjectCarousel";
import SimpleReactLightbox from "simple-react-lightbox";
import {  color1, color2 } from "../../AppVariables";

export default function FeaturedProjects({
  lightBg,
  id,
  imgStart,
  topLine,
  headline,
  githubLink,
  description,
  lightboxid,
  picture1,
  picture2,
  picture3,
  picture4, 
  picture5, 
  picture6,
  alt1,
  alt2,
  alt3,
  alt4, 
  alt5, 
  alt6,
}) {
  return (
    <>
      <ProjectsCOntainer lightBg={lightBg} id={id}>
       <CurlyLine />
       {alt1.length>0 &&<ProjectWrapper>
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
                color: lightBg ? color1 : color2,
              }}
            >
              Featured Project
            </h3>{" "}
          </div>

          <ProjectRow imgStart={imgStart}>
            <Column1>
              <TextWrapper lightBg={lightBg}>
                <TopLine lightBg={lightBg}> {topLine}</TopLine>
                <HeadingWrapper>
                  <Heading lightBg={lightBg}>{headline} </Heading>{" "}
                  <GithubLinkStyled href={githubLink} lightBg={lightBg} without rel="noopener noreferrer"  target={`_blank`}>
                    <i class="bi bi-github"></i>
                  </GithubLinkStyled>
                </HeadingWrapper>
                <Information lightBg={lightBg}> {description} </Information>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <SimpleReactLightbox>
                  <ProjectCarousel
                    id={lightboxid}
                    picture1={picture1}
                    picture2={picture2}
                    picture3={picture3}
                    picture4 = {picture4}
                    picture5 = {picture5}
                    picture6 = {picture6}
                    alt1={alt1}
                    alt2={alt2}
                    alt3={alt3}
                    alt4={alt4}
                    alt5={alt5}
                    alt6={alt6}

                  />
                </SimpleReactLightbox>
              </ImgWrap>
              <ButtonWrap>
                <Information lightBg={lightBg}>
                  {" "}
                  Click on image to view
                </Information>
              </ButtonWrap>
            </Column2>
          </ProjectRow>
        </ProjectWrapper>}
      </ProjectsCOntainer>
    </>
  );
}
