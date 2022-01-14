import styled from "styled-components";
import { black, colorBackground, color1 } from "../../AppVariables";

export const AboutContainer = styled.section`
  background: ${colorBackground};
  color: ${black};
  padding: 40px;
  padding-top: 20px;
  margin: 0;
 
  min-height: 500px;

  @media screen and (max-sceen: 1024px) {
    padding: 100px 0;
  }
`;
export const AboutWrapper = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: "col1 col2";
  z-index: 1;
  height: fit-content;
  width: 100%;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  background: ${colorBackground};

  @media screen and (max-width: 760px) {
    grid-template-areas: "col1" "col2";
  }
`;
export const AboutImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  padding: 20px;
  gap: 20px;
  margin: auto;
`;
export const AboutImage = styled.img`
  min-width: 280px;
  min-height: 300px;
  max-height: 500px;
  max-width: 480px;
  box-shadow: 0.25em 0.25em 0.75em ${color1};
`;

export const AboutInfoWrapper1 = styled.div`
  padding: 20px;
  min-width: 280px;
  max-width: 450px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  @media screen and (max-width: 760px) {
    margin: auto;
  }
`;
export const AboutInfo = styled.p`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 30px;
  flex-wrap: wrap;
  line-height: 2em;
  font-weight: 600;
`;
export const AboutSkills = styled.div``;
;
export const AboutList = styled.ul`display: grid;grid-template-columns: auto auto;list-style-type: square;
list-style-position: inside;`;