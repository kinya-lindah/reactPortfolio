import React, {useState, } from 'react';
import { WEContainer, WEWrapper,WECols, WETitle, WENavWrapper, WENav, WEItem1, WEItem1Description, WECompanyTitle, Time, WEItemList, WELi } from './WorkExperienceElements';


export default function WorkExperience() {
const projectsEven = true;
const [isActive, setIsActive]= useState({
    crm:true,
    tech:false,
    ra:false,
});
const [workDescription, setWorkDescription] = useState ({
    companyTitle:"2b1Inc",
    time:"Dec 2020 - Dec 2021",
    impact1:"Increased profits by 100% by identifying unprofitable products",
    impact2:"Taught colleagues, introductory HTML classes, to ensure that they could keep up the company's website ",
    
});

const crmAdmin =()=>{
    setWorkDescription(previousState => {return {...previousState, 
    companyTitle:"2b1Inc",
    time:"Dec 2020 - Dec 2021",
    impact1:"Increased profits by 100% by identifying unprofitable products",
    impact2:"Taught colleagues, introductory HTML classes, to ensure that they could keep up the company's website ",
    }} );
    setIsActive(previousState => {return {...previousState,
        crm:true,
        tech:false,
        ra:false,
    }});

};

const techLead =()=>{
    setWorkDescription(previousState => {return {...previousState, 
    companyTitle:"AfroFem Coders",
    time:"May 2021 - Sept 2021",
    impact1:"Created final project and assisted 25+ students in working throught the project",
    impact2:"Led discussions for the 25+ person bootcamp to teach Python Fundamentals and Introduction to Data Analytics ",
    }} ) ;
    setIsActive(previousState => {return {...previousState,
        crm:false,
        tech:true,
        ra:false,
     }} );

};

const researchAssistant =()=>{
    setWorkDescription(previousState => {return {...previousState, 
    companyTitle:"Center on the Politics of Development",
    time:"Aug 2019 - Aug 2020",
    impact1:"Used Excel to automate data mining processes from web scrapped databases",
    impact2:"Analyzed the role of social media in fuelling post-election violence in Sierra Leone. ",
    }} );
    setIsActive(previousState => {return {...previousState,
        crm:false,
        tech:false,
        ra:true,
     }})
};

    return (
        <WEContainer id="workEperience" projectsEven={projectsEven}>
            
            <WEWrapper>
            <WETitle > Experience</WETitle>
            <WECols>
                <WENavWrapper>
                    
                    <WENav>
                        <WEItem1  onClick={crmAdmin}  isActive={isActive.crm}>
                            CRM Administrator 
                        </WEItem1>
                        <WEItem1  onClick={techLead} isActive={isActive.tech}>
                          Technical Lead 
                        </WEItem1>
                        <WEItem1   onClick={researchAssistant}  isActive={isActive.ra}>
                           Research Assistant 
                        </WEItem1>
                    </WENav> 

                    <WEItem1Description >
                        <WECompanyTitle>{workDescription.companyTitle}</WECompanyTitle>
                        <Time>{workDescription.time}</Time>
                        <WEItemList>
                            <WELi>
                            {workDescription.impact1}
                            </WELi>
                            <WELi>
                            {workDescription.impact2}
                            </WELi>
                        </WEItemList>
                    
                    </WEItem1Description>
                       
                </WENavWrapper>
                </WECols>
            </WEWrapper>
        
        </WEContainer>
    )
}
