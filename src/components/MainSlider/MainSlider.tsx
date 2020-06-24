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
  H2,
  H4,
  SliderSection,
  SliderItem,
  ArrowContainerPrev,
  ArrowContainerNext,
  InnerBlock,
  SliderText
} from "../Typography";
import { IsMobile } from "../../constants";

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
      {!IsMobile ? (
        <SliderSection id="main">
          <Slider {...settings}>
            <SliderItem>
              <SlideImage fluid={slide1} />
              <InnerBlock>
                <SliderText>
                  <H1>{firstSlideTitle}</H1>
                  <H4>{firstSlideDesc1}</H4>
                  <H4>{firstSlideDesc2}</H4>
                  <Button
                    link="https://n247635.yclients.com/company:242564?o=m704631"
                    dataBack="Online запись"
                    dataFront="Online запись"
                  />
                </SliderText>
              </InnerBlock>
            </SliderItem>
            <SliderItem>
              <SlideImage fluid={slide2} />
              <InnerBlock>
                <SliderText>
                  <H1 as="h2">{secondSlideTitle}</H1>
                  <H4>{secondSlideDesc1}</H4>
                  <H4>{secondSlideDesc2}</H4>
                  <Button
                    link="https://n247635.yclients.com/company:242564?o=m704631"
                    dataBack="Online запись"
                    dataFront="Online запись"
                  />
                </SliderText>
              </InnerBlock>
            </SliderItem>
            <SliderItem>
              <SlideImage fluid={slide3} />
              <InnerBlock>
                <SliderText>
                  <H2>{thirdSlideTitle}</H2>
                  <H4>{thirdSlideDesc1}</H4>
                  <Button
                    link="https://n247635.yclients.com/company:242564?o=m704631"
                    dataBack="Online запись"
                    dataFront="Online запись"
                  />
                </SliderText>
              </InnerBlock>
            </SliderItem>
          </Slider>
        </SliderSection>
      ) : (
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
      )}
    </>
  );
};

export default MainSlider;
