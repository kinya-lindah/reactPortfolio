import React, { useState } from "react";
import Typical from "react-typical";
import "./Profile.css";
import CodeVideo from "../../../items/Home/matrix2.mp4";
import styled from "styled-components";
import { RiMailAddLine, RiMailAddFill } from "react-icons/ri";
import { Link as LinkRouter } from "react-router-dom";
import { FaEye, FaRegEye } from "react-icons/fa";
// import "../../../../public/"
const Eye = styled(FaRegEye)`
  margin-left: 8px;
  font-size: x-large;
`;
const BoldEye = styled(FaEye)`
  margin-left: 8px;
  font-size: x-large;
`;
const ButtonPageLink = styled(LinkRouter)`
  opacity: 1 !important;
`;

export default function Profile() {
  const [hoverDownload, sethoverDownload] = useState(false);
  const onHoverD = () => {
    sethoverDownload(!hoverDownload);
  };
  const [hoverContact, sethoverContact] = useState(false);
  const onHoverC = () => {
    sethoverContact(!hoverContact);
  };

  return (
    <>
      <div className="video-wrapper centered">

         <video autoPlay muted loop id="video">
         {window.innerWidth>=768 &&<source src={CodeVideo} type="video/mp4" />}
        </video>

        <div className="profile-container centered">
          <div className="profile-parent">
            <div className="profile-details">
              <div className="cols centered">
                <div className="cols-icon sisters">
                  <a href="https://www.linkedin.com/in/lindah-muturi/" rel="noopener noreferrer" target={`_blank`}>
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a href="https://github.com/kinya-lindah"   rel="noopener noreferrer" target={`_blank`}>
                    <i className="bi bi-github"></i>
                  </a>
                  
                </div>
              </div>
              <div className="profile-details-name">
                <span className="primary-text">
                  Hi! I'm
                  <span className="hightlighted-text">
                    {" "}
                    Lindah Kinya<span role="img" aria-label="Smiley Emoji"></span>😄
                  </span>
                </span>
              </div>
              <div className="profile-details-role">
                <h3 className="primary-text">
                  I'm a{" "}
                  <Typical
                    steps={[
                      "Full stack Developer",
                      2000,
                      "Cross Platform Developer",
                      2000,
                    ]}
                    loop={Infinity}
                    wrapper="span"
                  />
                </h3>
              </div>
              <div className="profile-options sisters centered">
                <ButtonPageLink to="/contact">
                  {" "}
                  <button
                    className="button primary-button "
                    onMouseEnter={onHoverC}
                    onMouseLeave={onHoverC}
                  >
                    <span className="biggerfont middle" to="/contact">
                      {hoverContact ? <RiMailAddFill /> : <RiMailAddLine />}
                      {"  "}
                    </span>
                    <span className="" to="/contact">
                      Contact
                    </span>
                  </button>
                </ButtonPageLink>
                <a
                  href="/09-20_21 Resume .pdf"
                  download="Lindah_Muturi_Resume.pdf"
                  // onMouseEnter={onHoverD}
                  // onMouseLeave={onHoverD}
                  className="downloadButton"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" "}
                  <button className="button highlighted-button ">
                    <span className="middle">
                      {hoverDownload ? <BoldEye /> : <Eye />}{" "}
                    </span>
                    <span className="">Resume</span>
                  </button>
                </a>
              </div>
            </div>
            <div className="profile-pic centered">
              <div className="profile-pic-background"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
