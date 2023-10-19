import styled from "styled-components";
import {
  boxShadow,
  lightcolor1,
  color2,
  color3,
  color1,
  grey,
  colorBackground,
  black,
} from "../../AppVariables";

export const WEContainer = styled.div`
  background: ${({projectsEven})=>(projectsEven? black: colorBackground)};
  padding: 25px;
  @media screen and (max-width: 700px) {
    margin-bottom:40px;
  }
`;
export const WEWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 30px;
  box-shadow: ${boxShadow};
  border-radius: 10px;
  margin: auto;
  max-width: 760px;
  background: ${colorBackground};
  height: 305px;
  overflow:scroll;
  @media screen and (max-width: 700px) {
    height:fit-content;
  }
`;
export const WECols = styled.div``;
export const WETitle = styled.h5`
  text-align: center;
  margin-bottom:10px;
  &:after {
    content: "";
    display: block;
    width: 7ch;
    height: 2px;
    margin: auto;
    background-color: ${color3};
    opacity: 0.9;
  }
`;
export const WENavWrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 700px) {
    flex-direction:column;
    padding:0
  }
`;
export const WENav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 10px;
  width: 160px;
  @media screen and (max-width: 700px) {
    flex-direction:row;
    width: calc(100vw - 50px);
    flex-wrap:nowrap;
    overflow: scroll;
    gap:2px;
    justify-content:flex-start
  }
`;
export const WEItem1 = styled.button`
  width: 18ch;
  border-style: none;
  background: none;
  background: ${({ isActive }) => (isActive ? lightcolor1 : `none`)};
  border-left:  ${({ isActive }) => (isActive ? `2px solid ${color2}` : `1px solid ${color2}`)};
  color:#111;
  border-radius: 0px;
  border-top-right-radius: 10px !important;
  border-bottom-right-radius: 10px !important;
  padding-bottom: 14px;

  &:hover {
    transform: scale(1);
    background: ${lightcolor1} !important ;
    border: ${color1};
    border-left: 2px solid ${color2};
  } ;
  @media screen and (max-width: 700px) {
    border:0px;
    border-radius: 10px !important;
    font-size:11px;
    margin-bottom:5px;
    background: lightgrey;
  }
`;

export const WEItem1Description = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  transition: all 1s;
`;
export const WECompanyTitle = styled.p`
  font-weight: 800;
  margin: 10px;
  text-align: center;
`;
export const Time = styled.sup`
  color: ${grey};
`;
export const WEItemList = styled.ul`
  list-style-type: square;
  list-style-position: inside;
  margin: 10px;
  @media screen and (max-width: 1024px) {
    padding-left: 10px;
  }
`;
export const WELi = styled.li`
  padding-bottom: 10px;
  font-size: small;
`;
