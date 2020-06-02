import React from "react";
// import { useStaticQuery, graphql } from "gatsby";
// import { StyledLink } from "../Typography";
import { MainSliderSection, SliderItem } from "./styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MainSlider: React.FC = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true
  };
  return (
    <MainSliderSection>
      <Slider {...settings}>
        <SliderItem>
          <h3>1</h3>
        </SliderItem>
        <SliderItem>
          <h3>2</h3>
        </SliderItem>
        <SliderItem>
          <h3>3</h3>
        </SliderItem>
        <SliderItem>
          <h3>4</h3>
        </SliderItem>
        <SliderItem>
          <h3>5</h3>
        </SliderItem>
        <SliderItem>
          <h3>6</h3>
        </SliderItem>
      </Slider>
    </MainSliderSection>
  );
};

export default MainSlider;
