import styled from "styled-components";
import {FaTimes} from 'react-icons/fa'
import {white, cancel,  color1, black} from '../../../AppVariables';
import { Link as LinkScroll } from "react-scroll";
import {Link as LinkRouter} from "react-router-dom";
import ImgSrc from '../../../items/Home/texturedGrey.png'

export const SideBarContainer= styled.aside`
position:fixed;
z-index: 100;
width:100%;
height:100%;

background-color: ${black};
// background-image: url(${ImgSrc});
background-repeat: no-repeat;
background-size: cover;
display:grid ; 
align-items: center; 
right: 0;
transition: 0.2s ease-in-out;
opacity: ${({isOpen}) => (isOpen ? '97%': '0')};
top: ${({isOpen})=> (isOpen ? "0": '-100%')};

`;
export const CloseIcon= styled(FaTimes)`
color:${white}; 
font-size: x-large;
&:hover {transform: scale(1.4);
color: ${cancel}}
`;
export const SideBarCloseIcon= styled.div`
position: absolute; 
top: 1em;
right: 1.5em;
background: transparent; 
outline: none; 
cursor: pointer;
`;
export const SideBarWrapper= styled.div`color:${white}`;

export const SideBarMenu = styled.ul`
display: grid;
grid-template-columns: 1fr; 
grid-template-rows: repeat(6, 85px);
text-align:center;
@media screen and (max-width:480px){
    grid-template-rows: repeat(6, 60px);
}
`;

export const SideBarLink = styled(LinkScroll)`
display:flex;
align-items: center;
justify-content: center;
text-decoration: none;
list-style: none;
transition : 0.2s ease-in-out;
text-decoration: none;
font-weight: 700;
color:${white};
cursor: pointer;

&:hover {color: ${color1};
transition:0.2s ease-in-out;}

`;
export const SideBarPageLink= styled(LinkRouter)`
display:flex;
align-items: center;
justify-content: center;
text-decoration: none;
list-style: none;
transition : 0.2s ease-in-out;
text-decoration: none;
font-weight: 700;
opacity:1 !important;
color:${white};
cursor: pointer;
&:hover {color: ${color1};
transition:0.2s ease-in-out;}`;