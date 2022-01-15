import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import { FlexWrapper, Img, ImgNone } from "./ProjectCarouselElements";
import "./ProjectCarousel.css";

export default function ProjectCarousel({
  picture1,
  picture2,
  picture3,
  picture4,
  picture5,
  alt1,
  alt2,
  alt3,
  alt4,
  alt5,
}) {
  return (
    <>
      {alt1.length>0 &&<SRLWrapper>
        <FlexWrapper>
          <div>
            <a href={picture1} class="fullOpacity" data-attribute="SRL">
              <Img
           
                src={picture1}
                alt={alt1}
                className="thumbnails"
                
              />
            </a>
          </div>
          <div>
            <a href={picture2} class="fullOpacity" data-attribute="SRL">
              <ImgNone
                src={picture2}
                alt={alt2}
                className="thumbnails"
                
              />
            </a>
          </div>
          <div>
            <a href={picture3} class="fullOpacity" data-attribute="SRL">
              <ImgNone
                src={picture3}
                alt={alt3}
                className="thumbnails"
     
              />
            </a>
          </div>
         
          {alt4.length > 0 && (
            <div>
              <a href={picture4} class="fullOpacity" data-attribute="SRL">
                <ImgNone
                  src={picture4}
                  alt={alt4}
                  className="thumbnails"
                  
                />
              </a>
            </div>
          )}
        

         {alt5.length > 0 && (
            <div>
              <a href={picture5} class="fullOpacity" data-attribute="SRL">
                <ImgNone
                  src={picture5}
                  alt={alt5}
                  className="thumbnails"
                  
                />
              </a>
            </div>
          )}


        </FlexWrapper>
      </SRLWrapper>}
    </>
  );
}
