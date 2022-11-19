import styled from "styled-components";
import {Link as LinkScroll} from 'react-scroll'
import {
  colorBackground,
  black,
  color1,
  color2,texturedGrey
  
} from "../../AppVariables";

export const ProjectsCOntainer = styled.div`
  color: ${colorBackground};
  margin: auto 0;
  padding-bottom:30px;
  top: 85px;
  background: ${({ lightBg }) => (lightBg ? black : colorBackground)};
  @media screen and (max-widh: 760px) {
    padding: 100px 0;
  }
`;


export const ProjectWrapper = styled.div`
  display: grid;
  justify-content: center;
  z-index: 1;
  min-height: 560px;
  width: 100%;
  padding-top: 40px;
  padding-bottom: 40px;
  margin-left: auto;
  margin-right: auto;

`;

export const ProjectRow = styled.div`
  display: grid;
  align-items: center;
  grid-auto-columns: minmax(auto, 1fr);
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};
  @media screen and (max-width: 760px) {
    grid-template-areas:  'col1 ' 'col2 '};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;
export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
`;
export const TextWrapper = styled.div`
  max-width: 600px;
  padding-top: 0;
  padding-bottom: 60px;
`;
export const TopLine = styled.p`
  color: ${({ lightBg }) => (lightBg ? color1:color2)};
  line-height: 1rem;
  font-weight: 700;
  letter-spacing: 1.3px;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;
export const HeadingWrapper = styled.div`display:flex;
flex-wrap:wrap; gap: 10px`;
export const Heading = styled.h1`
  margin-bottom: 24px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightBg }) => (lightBg ? colorBackground:black)};
  text-transform: capitalize;
`;
export const GithubLinkStyled = styled.a`
align-self:center; 
opacity:0.9 !important;
color: ${({ lightBg }) => (lightBg ? colorBackground:black)} !important;
&:hover {
  color:${({ lightBg }) => (lightBg ? color1:color2)}  !important
}
`;
export const Information = styled.p`
  max-width: 450px;
  line-height: 1.5rem;
  color: ${({ lightBg }) => (lightBg ? colorBackground:black)};
`;
export const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const Button = styled.button`
border-color: ${color2}};
background: ${({ lightBg }) => (lightBg ?  colorBackground:color2)};
font-weight:900;


`
export const ButtonLink = styled(LinkScroll)`
color: ${({ lightBg }) => (lightBg ? color2 :colorBackground)} !important;
opacity: 1 !important;

`;

export const ImgWrap = styled.div`
min-width: 280px;
min-height: 300px;
max-height: 500px;
display:flex;
justify-content: center;
align-items: center;
  

`;
export const Img = styled.img`
  padding-right: 0;
  min-width: 180px;
  max-width: 500px;
  color: ${({ lightBg }) => (lightBg ? colorBackground:black)};

  @media screen and (min-width:1280px){margin-left: 10px;}
`;
export const ProjectImg = styled.img`
min-width: 280px;
width:25%;
max-width:350px;
min-height: 300px;
max-height: 500px;
cursor: pointer; 
border: 2px solid ${texturedGrey};
border-radius: 10px;
&:hover {transform: scale(1.05);
opacity: 1 !important;}

&:hover{animation: shake 0.5s;
    animation-iteration-count: 1;}
    @keyframes shake {
        0% { transform: translate(1px, 1px) rotate(0deg); }
        // 10% { transform: translate(-1px, -2px) rotate(-1deg); }
        20% { transform: translate(-3px, 0px) rotate(1deg); }
        // 30% { transform: translate(3px, 2px) rotate(0deg); }
        40% { transform: translate(1px, -1px) rotate(1deg); }
        // 50% { transform: translate(-1px, 2px) rotate(-1deg); }
        60% { transform: translate(-3px, 1px) rotate(0deg); }
        // 70% { transform: translate(3px, 1px) rotate(-1deg); }
        80% { transform: translate(-1px, -1px) rotate(1deg); }
        // 90% { transform: translate(1px, 2px) rotate(0deg); }
        100% { transform: translate(1px, -2px) rotate(-1deg); };

`;
