import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import ArrowPrev from "../../assets/images/svg/arrow-left.svg";
import ArrowNext from "../../assets/images/svg/arrow-right.svg";
import {
  MainSliderSection,
  SliderItem,
  StyledImage,
  ArrowContainerPrev,
  ArrowContainerNext,
  SliderText
} from "./styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MainSlider: React.FC = () => {
  const {
    mainSlider: { frontmatter },
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
      mainSlider: markdownRemark(frontmatter: { type: { eq: "sliderText" } }) {
        frontmatter {
          firstSlideHeading
          firstSlideDesc1
          firstSlideDesc2
          secondSlideHeading
          secondSlideDesc1
          secondSlideDesc2
          thirdSlideHeading
          thirdSlideDesc1
        }
      }

      slide1: file(relativePath: { eq: "slide1.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 4000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      slide2: file(relativePath: { eq: "slide2.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 4000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      slide3: file(relativePath: { eq: "slide3.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 4000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const {
    firstSlideHeading,
    firstSlideDesc1,
    firstSlideDesc2,
    secondSlideHeading,
    secondSlideDesc1,
    secondSlideDesc2,
    thirdSlideHeading,
    thirdSlideDesc1
  } = frontmatter;

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
          <SliderText>
            <h1>{firstSlideHeading}</h1>
            <p>{firstSlideDesc1}</p>
            <p>{firstSlideDesc2}</p>
          </SliderText>
        </SliderItem>
        <SliderItem>
          <StyledImage fluid={slide2} />
          <SliderText>
            <h2>{secondSlideHeading}</h2>
            <p>{secondSlideDesc1}</p>
            <p>{secondSlideDesc2}</p>
          </SliderText>
        </SliderItem>
        <SliderItem>
          <StyledImage fluid={slide3} />
          <SliderText>
            <h2>{thirdSlideHeading}</h2>
            <p>{thirdSlideDesc1}</p>
          </SliderText>
        </SliderItem>
      </Slider>
    </MainSliderSection>
  );
};

export default MainSlider;
