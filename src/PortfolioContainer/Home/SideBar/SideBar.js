import React from 'react';
import {SideBarContainer, SideBarCloseIcon, CloseIcon,SideBarWrapper, SideBarMenu,  SideBarLink, SideBarPageLink} from './SideBarElements'

export default function SideBar({isOpen, toggle}) {
    return (
        <SideBarContainer isOpen= {isOpen} onClick={toggle} >
            <SideBarCloseIcon >
                <CloseIcon onClick={toggle}/>
            </SideBarCloseIcon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink to="about" onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-85}>
                        About
                    </SideBarLink>
                    <SideBarLink to="projects" onClick={toggle} smooth={true} duration={750} spy={true} exact='true' offset={-85}>
                        Projects
                    </SideBarLink>
                    <SideBarLink to="workEperience"  onClick={toggle} smooth={true} duration={950} spy={true} exact='true' offset={-85}>
                        Work Experience
                    </SideBarLink>
                    <SideBarPageLink to="/contact" onClick={toggle} exact='true' offset={-85}>
                        Contact
                    </SideBarPageLink>
                    
                    
                </SideBarMenu>
            </SideBarWrapper>
            
        </SideBarContainer>
            
        
    )
}
