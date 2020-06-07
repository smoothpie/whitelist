import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import ArrowPrev from "../../assets/images/svg/arrow-left.svg";
import ArrowNext from "../../assets/images/svg/arrow-right.svg";
import {
  MainSliderSection,
  SliderItem,
  StyledImage,
  ArrowContainerPrev,
  ArrowContainerNext
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
    nextArrow: (
      <ArrowContainerNext>
        <ArrowNext />
      </ArrowContainerNext>
    ),
    prevArrow: (
      <ArrowContainerPrev>
        <ArrowPrev />
      </ArrowContainerPrev>
    )
  };

  return (
    <MainSliderSection>
      <Slider {...settings}>
        <SliderItem>
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
