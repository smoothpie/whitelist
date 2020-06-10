import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import ArrowPrev from "../../assets/images/svg/arrow-left.svg";
import ArrowNext from "../../assets/images/svg/arrow-right.svg";
import {
  MainSliderSection,
  MainSliderSectionMobile,
  SliderItem,
  StyledImage,
  ArrowContainerPrev,
  ArrowContainerNext,
  InnerBlock,
  SliderText
} from "./styled";
import { H1, H2, H3 } from "../Typography";
import Button from "../Button";
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
          mobileDesc1
          mobileDesc2
          mobileDesc3
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
      mobileBg: file(relativePath: { eq: "mobileBg.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 2000) {
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
    <>
      <MainSliderSection>
        <Slider {...settings}>
          <SliderItem>
            <StyledImage fluid={slide1} />
            <InnerBlock>
              <SliderText>
                <H1>{firstSlideTitle}</H1>
                <H3>{firstSlideDesc1}</H3>
                <H3>{firstSlideDesc2}</H3>
                <Button />
              </SliderText>
            </InnerBlock>
          </SliderItem>
          <SliderItem>
            <StyledImage fluid={slide2} />
            <InnerBlock>
              <SliderText>
                <H2>{secondSlideTitle}</H2>
                <H3>{secondSlideDesc1}</H3>
                <H3>{secondSlideDesc2}</H3>
                <Button />
              </SliderText>
            </InnerBlock>
          </SliderItem>
          <SliderItem>
            <StyledImage fluid={slide3} />
            <InnerBlock>
              <SliderText>
                <H2>{thirdSlideTitle}</H2>
                <H3>{thirdSlideDesc1}</H3>
                <Button />
              </SliderText>
            </InnerBlock>
          </SliderItem>
        </Slider>
      </MainSliderSection>
      <MainSliderSectionMobile>
        <StyledImage fluid={mobileBg} />
        <InnerBlock>
          <SliderText>
            <H1>{mobileTitle}</H1>
            <H3>{mobileDesc1}</H3>
            <H3>{mobileDesc2}</H3>
            <H3>{mobileDesc3}</H3>
            <Button />
          </SliderText>
        </InnerBlock>
      </MainSliderSectionMobile>
    </>
  );
};

export default MainSlider;
