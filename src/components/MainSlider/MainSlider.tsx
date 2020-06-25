import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowPrev from "../../assets/images/svg/arrow-left.svg";
import ArrowNext from "../../assets/images/svg/arrow-right.svg";
import Button from "../Button";
import { SliderSectionMobile, SlideImage, StyledAmpersand } from "./styled";
import {
  H1,
  H4,
  SliderSection,
  ArrowContainerPrev,
  ArrowContainerNext,
  InnerBlock,
  SliderText
} from "../Typography";
import { MobileView } from "react-device-detect";
import MainSliderItem from "./MainSliderItem";

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
    },
    mobileBg: {
      childImageSharp: { fluid: mobileBg }
    }
  } = useStaticQuery(graphql`
    query {
      mainSlider: markdownRemark(frontmatter: { type: { eq: "sliderText" } }) {
        frontmatter {
          firstSlideTitle
          firstSlideDesc1
          firstSlideDesc2
          secondSlideTitle
          secondSlideDesc1
          secondSlideDesc2
          thirdSlideTitle
          thirdSlideDesc1
          mobileTitle
          mobileTitle2
          mobileDesc1
          mobileDesc2
          mobileDesc3
        }
      }
      slide1: file(relativePath: { eq: "slide1.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      slide2: file(relativePath: { eq: "slide2.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      slide3: file(relativePath: { eq: "slide3.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      mobileBg: file(relativePath: { eq: "mobileBg.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const {
    firstSlideTitle,
    firstSlideDesc1,
    firstSlideDesc2,
    secondSlideTitle,
    secondSlideDesc1,
    secondSlideDesc2,
    thirdSlideTitle,
    thirdSlideDesc1,
    mobileTitle,
    mobileTitle2,
    mobileDesc1,
    mobileDesc2,
    mobileDesc3
  } = frontmatter;

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 9000,
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
    <>
      <SliderSection id="main">
        <Slider {...settings}>
          <MainSliderItem
            fluid={slide1}
            title={firstSlideTitle}
            desc1={firstSlideDesc1}
            desc2={firstSlideDesc2}
          />

          <MainSliderItem
            fluid={slide2}
            title={secondSlideTitle}
            desc1={secondSlideDesc1}
            desc2={secondSlideDesc2}
          />

          <MainSliderItem
            fluid={slide3}
            title={thirdSlideTitle}
            desc1={thirdSlideDesc1}
          />
        </Slider>
      </SliderSection>
      <MobileView>
        <SliderSectionMobile id="main">
          <SlideImage fluid={mobileBg} />
          <InnerBlock>
            <SliderText>
              <H1>{mobileTitle}</H1>
              <StyledAmpersand>&amp;</StyledAmpersand>
              <H1 as="h2">{mobileTitle2}</H1>
              <H4>{mobileDesc1}</H4>
              <H4>{mobileDesc2}</H4>
              <H4>{mobileDesc3}</H4>
              <Button
                link="https://n247635.yclients.com/company:242564?o=m704631"
                dataBack="Online запись"
                dataFront="Online запись"
              />
            </SliderText>
          </InnerBlock>
        </SliderSectionMobile>
      </MobileView>
    </>
  );
};

export default MainSlider;
