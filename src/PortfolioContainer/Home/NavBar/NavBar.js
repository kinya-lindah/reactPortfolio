import React, {useState, useEffect} from "react";
import styled from "styled-components";
import {FaBars} from 'react-icons/fa'
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import {color1, color2, colorBackground, black} from '../../../AppVariables';
import { useMatch } from "react-router-dom";


const Nav = styled.nav`
  background: ${({scrollNav})=> (scrollNav ? black:'transparent')};
  height: 85px;
  margin-top: -85px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 99;

  @media screen and (max-width: 1300px) {
    transition: 0.8s all ease;
  }
`;
const NavBarContainer = styled.div`
display: flex;
justify-content:space-between ;
height: 85px;
z-index; 
width: 100%;
padding:0 25px;
gap:20px;
`;
const NavLogoWrapper = styled.div`position: relative;display:flex;justify-content: center; align-items: center`;
const NavLogo = styled(LinkRouter)`
  color: ${colorBackground};
  justify-self: flex-start;
  font-size: 2.5em;
  display: flex;
  align-items: center;
  font-weight: 900;
  text-decoration: none;
  letter-spacing: 2px;
  font-size: 3.5em;
  font-family: 'Moon Dance', cursive;
  opacity: 1 !important;
  &:hover{transform: scale(1.05);
    text-shadow: 2px 5px  ${color2};}
`;
const NavLogoScroll = styled(LinkScroll)`
color: ${colorBackground};
  justify-self: flex-start;
  font-size: 2.5em;
  display: flex;
  align-items: center;
  font-weight: 900;
  text-decoration: none;
  // font-family: 'MedievalSharp', cursive;
  // font-family: 'Sacramento', cursive;
  // font-family: 'Kolker Brush', cursive;
  letter-spacing: 2px;
  font-size: 3.5em;
  font-family: 'Moon Dance', cursive;
  opacity: 1 !important;
  &:hover{transform: scale(1.05);
    text-shadow: 2px 5px  ${color2};}
    `;
const CollapsedIcon = styled.div`
display: none;

@media screen and (max-width:1024px){
    display:${({homeOpen})=> (homeOpen ? `block`:`none`)};
    position:absolute;
    top:5px;
    right: 0;
    transform: translate(-100%, 60%);
    cursor: pointer;
    color:${colorBackground};
    
&:hover {transition: all 0.2s ease-in;
color:${color1};}
}
`;
const NavMenu = styled.ul`
display: ${({homeOpen})=> (homeOpen ? `flex`:`none`)};
align-items:center;
list-style:none;
text-align: center;

@media screen and (max-width:1024px){display: none}
`;
const NavItem = styled.li`
height: 85px;
`;
const NavLinks = styled(LinkScroll)`
color: ${colorBackground}; 
display: flex;
align-items: center; 
text-decoration: none;
height: 100%;
cursor:pointer;
padding:0 20px;


`;
const NavPageLinks = styled(LinkRouter)`
color: ${colorBackground}; 
display: flex;
align-items: center; 
text-decoration: none;
height: 100%;
cursor:pointer;
padding:0 20px;
opacity:1 !important;

&.active {border-bottom: 2px solid ${color2}}
`;


export default function NavBar({toggle }) {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav =()=> {if (window.scrollY >=85) 
  {setScrollNav(true)}
  else{setScrollNav(false)}
  };
  useEffect(() => {window.addEventListener('scroll', changeNav)}, [])

  const homeOpen = useMatch("/");

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavBarContainer>
          <NavLogoWrapper>
          {homeOpen?  <NavLogoScroll to="top" smooth={true} duration={750} spy={true} exact='true' offset={-85}>Lindah</NavLogoScroll>:<NavLogo to="/">Lindah</NavLogo>}
          </NavLogoWrapper>
          <CollapsedIcon homeOpen={homeOpen}>
            <FaBars onClick={toggle}></FaBars>
          </CollapsedIcon>
          <NavMenu homeOpen={homeOpen}>
              <NavItem>
                  <NavLinks to='about' smooth={true} duration={500} spy={true} exact='true' offset={-85}>About</NavLinks>
              </NavItem>
              <NavItem>
                  <NavLinks to='projects' smooth={true} duration={750} spy={true} exact='true' offset={-85}>Projects</NavLinks>
              </NavItem>
              <NavItem>
                  <NavLinks to='workEperience' smooth={true} duration={950} spy={true} exact='true' offset={-85}> Experience</NavLinks>
              </NavItem>
              <NavItem>
                  <NavPageLinks to='/contact'  exact='true' offset={-85} >Contact</NavPageLinks>
              </NavItem>
              
              
          </NavMenu>
        </NavBarContainer>
      </Nav>
    </>
  );
}
