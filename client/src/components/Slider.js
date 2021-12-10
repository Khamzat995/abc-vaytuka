import React from "react";
import { Carousel } from "react-responsive-carousel";
// carousel css file
import "react-responsive-carousel/lib/styles/carousel.min.css";
// images
import nykaa from "../assets/sliderImages/nykaa.jpg";
import colorpop from "../assets/sliderImages/colorpop.gif";
import turtsiya from "../assets/sliderImages/turtsiya.jpg";
import all from "../assets/sliderImages/all.jpg";
import all1 from "../assets/sliderImages/all2.gif";
import oborudovanie from "../assets/sliderImages/oborudovanie.jpg";
import styled from "styled-components";
import { small } from "../reducers/responsive";

const SliderDiv = styled.div`
  ${small({ display: "none" })}
  img {
    height: 300px;
    object-fit: cover;
  }
`;

const Slider = () => {
  return (
    <SliderDiv>
      <Carousel showThumbs={false} showStatus={false} autoPlay infiniteLoop>
        <div>
          <img src={all} alt="image" />
        </div>
        <div>
          <img src={nykaa} alt="image" />
        </div>
        <div>
          <img src={colorpop} alt="image" />
        </div>
        <div>
          <img src={turtsiya} alt="image" />
        </div>
        <div>
          <img src={all1} alt="image" />
        </div>
        <div>
          <img src={oborudovanie} alt="image"/>
        </div>
      </Carousel>
    </SliderDiv>
  );
};

export default Slider;
