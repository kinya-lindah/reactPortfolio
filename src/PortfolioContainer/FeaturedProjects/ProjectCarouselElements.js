import styled from "styled-components";
import { texturedGrey } from "../../AppVariables";

export const FlexWrapper = styled.div`
display: flex; justify-content: center;
align-content: center;
align-items: center;
flex-wrap:wrap`;
export const Img = styled.img`cursor: pointer; 
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
export const ImgNone = styled.img`
display: none`;
