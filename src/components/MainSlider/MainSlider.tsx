import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import {
  MainSliderSection,
  SliderItem,
  StyledImage,
  Overlay,
  StyledArrowPrev,
  StyledArrowNext
} from "./styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MainSlider: React.FC = () => {
  const {
    slide1: {
      childImageSharp: { fluid: slide1 }
    },
    slide2: {
      childImageSharp: { fluid: slide2 }
    },
    slide3: {
      childImageSharp: { fluid: slide3 }
    }
  } = useStaticQuery(graphql`
    query {
      slide1: file(relativePath: { eq: "slide1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      slide2: file(relativePath: { eq: "slide2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      slide3: file(relativePath: { eq: "slide3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    nextArrow: <StyledArrowNext />,
    prevArrow: <StyledArrowPrev />
  };

  return (
    <MainSliderSection>
      <Slider {...settings}>
        <SliderItem>
          <Overlay />
          <StyledImage fluid={slide1} />
        </SliderItem>
        <SliderItem>
          <StyledImage fluid={slide2} />
        </SliderItem>
        <SliderItem>
          <StyledImage fluid={slide3} />
        </SliderItem>
      </Slider>
    </MainSliderSection>
  );
};

export default MainSlider;
