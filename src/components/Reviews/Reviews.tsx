import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowPrev from "../../assets/images/svg/arrow-left.svg";
import ArrowNext from "../../assets/images/svg/arrow-right.svg";
import Button from "../Button";
import { SlideImage, Review, Description } from "./styled";
import {
  H4,
  SliderSection,
  SliderItem,
  ArrowContainerPrev,
  ArrowContainerNext,
  InnerBlock,
  SliderText
} from "../Typography";

const Reviews: React.FC = () => {
  const {
    reviews: { frontmatter },
    slideBg: {
      childImageSharp: { fluid: slideBg }
    }
  } = useStaticQuery(graphql`
    query {
      reviews: markdownRemark(frontmatter: { type: { eq: "reviews" } }) {
        frontmatter {
          person1
          desc1
          review1
          person2
          desc2
          review2
          person3
          desc3
          review3
          button
        }
      }
      slideBg: file(relativePath: { eq: "reviewsBg.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 4000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const {
    person1,
    desc1,
    review1,
    person2,
    desc2,
    review2,
    person3,
    desc3,
    review3,
    button
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
    <SliderSection>
      <Slider {...settings}>
        <SliderItem>
          <SlideImage fluid={slideBg} />
          <InnerBlock>
            <SliderText>
              <Review>{review1}</Review>
              <H4>{person1}</H4>
              <Description>{desc1}</Description>
              <Button
                link="https://n247635.yclients.com/company:242564?o=m704631"
                dataBack={button}
                dataFront={button}
              />
            </SliderText>
          </InnerBlock>
        </SliderItem>
        <SliderItem>
          <SlideImage fluid={slideBg} />
          <InnerBlock>
            <SliderText>
              <Review>{review2}</Review>
              <H4>{person2}</H4>
              <Description>{desc2}</Description>
              <Button
                link="https://n247635.yclients.com/company:242564?o=m704631"
                dataBack={button}
                dataFront={button}
              />
            </SliderText>
          </InnerBlock>
        </SliderItem>
        <SliderItem>
          <SlideImage fluid={slideBg} />
          <InnerBlock>
            <SliderText>
              <Review>{review3}</Review>
              <H4>{person3}</H4>
              <Description>{desc3}</Description>
              <Button
                link="https://n247635.yclients.com/company:242564?o=m704631"
                dataBack={button}
                dataFront={button}
              />
            </SliderText>
          </InnerBlock>
        </SliderItem>
      </Slider>
    </SliderSection>
  );
};

export default Reviews;
