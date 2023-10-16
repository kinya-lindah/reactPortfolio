import React, {useState, } from 'react';
import { WEContainer, WEWrapper,WECols, WETitle, WENavWrapper, WENav, WEItem1, WEItem1Description, WECompanyTitle, Time, WEItemList, WELi } from './WorkExperienceElements';


export default function WorkExperience() {
const projectsEven = true;
const [isActive, setIsActive]= useState("cisco");
const workPlacesOrder =["cisco","crm", "afro", "ra"]
const workPlaces ={
"cisco": {
    officialTitle: "Software Engineer",
    companyTitle:"Cisco",
    time:"Jun 2021 - Present",
    impact1:"Reduced website load times by 300%, as measured by page load speed metrics",
    impact2:"Implemented comprehensive frontend testing protocols, and wrote documentation on the same",
    
}, 
"crm": {
    officialTitle: "CRM Administrator",
    companyTitle:"2b1Inc",
    time:"Dec 2020 - Dec 2021",
    impact1:"Increased profits by 100% by identifying unprofitable products",
    impact2:"Taught colleagues, introductory HTML classes, to ensure that they could keep up the company's website ",
    
}, 
"afro":{
    officialTitle: "Technical Lead",
    companyTitle:"AfroFem Coders",
    time:"May 2021 - Dec 2022",
    impact1:"Created final project and assisted 25+ students in working throught the project",
    impact2:"Led discussions for the 25+ person bootcamp to teach Python Fundamentals and Introduction to Data Analytics ",
},

"ra":{
    officialTitle: "Research Assistant",
    companyTitle:"Center on the Politics of Development",
    time:"Aug 2019 - Aug 2020",
    impact1:"Used Excel to automate data mining processes from web scrapped databases",
    impact2:"Analyzed the role of social media in fuelling post-election violence in Sierra Leone. ",

}}
const changeActive=(key)=>{
    // setWorkDescription(workPlaces[key])
    setIsActive(key)
}
    return (
        <WEContainer id="workEperience" projectsEven={projectsEven}>
            
            <WEWrapper>
            <WETitle > Experience</WETitle>
            <WECols>
                <WENavWrapper>
                    
                    <WENav>
                        {workPlacesOrder.map((place, i)=> <WEItem1  onClick={()=>changeActive(place)}  isActive={isActive===place} key={i}>
                            {workPlaces[place]?.officialTitle}
                        </WEItem1> )}
                        
                    </WENav> 

                    <WEItem1Description >
                        <WECompanyTitle>{workPlaces[isActive].companyTitle}</WECompanyTitle>
                        <Time>{workPlaces[isActive].time}</Time>
                        <WEItemList>
                            <WELi>
                            {workPlaces[isActive].impact1}
                            </WELi>
                            <WELi>
                            {workPlaces[isActive].impact2}
                            </WELi>
                        </WEItemList>
                    
                    </WEItem1Description>
                       
                </WENavWrapper>
                </WECols>
            </WEWrapper>
        
        </WEContainer>
    )
}
