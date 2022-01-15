import styled from "styled-components";
import { color1 , colorBackground, cancel} from "../../AppVariables";
import { Link as LinkRouter } from "react-router-dom";
import {FaTimes } from "react-icons/fa";

export const ContactContainer= styled.div`
width: 100%;
height:100%;
display: flex;
justify-content: center;
align-items: center;
align-content: center;
position: absolute;
left:0;
flex-direction:column;
position: relative;
top: 90px;

@media screen and (max-width: 2000px){background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), ${require("../../items/Home/matrix2.png")};
background-position: center top;
};
`
export const ContactCanceledWrapper=styled.div`margin:0; 
display: flex;
align-self: flex-end; padding-right: 10px; `;

export const ContactCancel=styled(FaTimes)`
margin:0 ;
color:black; 
&:hover{
    color:${cancel};
    transform: scale(1.2);
}
    `;
export const ContactWrapper=styled.div`
width:80%;
height: auto;
box-shadow: 0 5px 16px ${color1 };
border-radius: 16px; 
padding: 20px 10px;
background:${colorBackground};

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

@media screen and (min-width: 760px){width:480px};



`;
export const ContactHeading=styled.h1``;
export const ContactForm= styled.form`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding:30px;
width: 80%
`;
export const ContactItemWrapper= styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
padding:20px;
width: 100%;
gap: 10px

`;
export const ContactItemWrapperMessage= styled.div`
display: flex;
justify-content: center;
align-items: right;
flex-direction: column;
width: 100%;
gap: 10px;
padding: 0;
padding-botom:20px;
`;

export const ContactLabel= styled.label` width: 5ch;text-align:left;
`;

export const ContactInput= styled.input`width: 100% ; min-width: 150px ;@media screen and (max-width: 500px){min-width: 80px}`;
export const ContactInputText= styled.textarea`width:100%; min-height: 100px;padding: 10px`;
export const ButtonsWrapper= styled.div`
display:flex;
gap: 10px;
padding: 20px 0`;
export const Buttons= styled.button``;
export const ContactLabelMessage= styled.label`width: 5ch;text-align:left; padding-top: 10px`;
export const ButtonPageLink =styled(LinkRouter)``;
export const Error = styled.span`font-size: x-small`;