import React from "react";
import { FooterContainer } from "./FooterElements";
import styled from "styled-components";
import { ButtonPageLink } from "../ContactMe/ContactElements";

const PulseText = styled.p`
  display: inline-block;
  transform: scale(1);
  animation: pulse 2s infinite;

  @keyframes pulse {
    0% {
      transform: scale(0.90);
      font-weight:  400;
    }
    10% {
        transform: scale(0.92);
        font-weight:  500;
      }
    20% {
        transform: scale(0.94);
        font-weight: 600;
      }
    30% {
        transform: scale(0.96);
        font-weight: 700;
    }
    40% {
        transform: scale(0.98);
        font-weight: 800;
    } 
    50% {
        transform: scale(1);
        font-weight: 900;
      }
      60% {
        transform: scale(0.98);
        font-weight: 800;
      } 

    70% {
        transform: scale(0.96);
        font-weight: 700;
      }  
    80% {
      transform: scale(0.94);
      font-weight: 600;
    }
    90% {
        transform: scale(0.92);
        font-weight:  500;
      }
    100% {
      transform: scale(0.9);
      font-weight: 400;
    }
  }
`;

export default function FooterElements() {
  return (
    <>
      <FooterContainer>
        <div  style={{display:'flex' ,justifyConent:"flex-end"}}> 
          <PulseText>Lindah Kinya</PulseText>
        </div>

        <div className="cols centered">
          <div className="cols-icon sisters">
            <ButtonPageLink to="/contact">
              <i className="bi bi-envelope-plus-fill"></i>
            </ButtonPageLink>
            <a href="https://www.linkedin.com/in/lindah-muturi/" rel="noopener noreferrer" target="_blank">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="https://github.com/kinya-lindah" 
                  rel="noopener noreferrer"
                  target="_blank">
              <i className="bi bi-github"></i>
            </a>
            
          </div>
        </div>
      </FooterContainer>
    </>
  );
}
