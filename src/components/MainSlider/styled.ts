import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";
import { Hover, BeforeNone } from "../Typography";

export const MainSliderSection = styled.section`
  width: 100%;
  @media (max-width: 460px) {
    display: none;
  }
`;

export const MainSliderSectionMobile = styled.section`
  display: none;
  @media (max-width: 460px) {
    display: block;
    position: relative;
  }
`;

export const SliderItem = styled.div`
  position: relative;
`;

export const InnerBlock = styled.div``;

export const SliderText = styled.div`
  position: absolute;
  top: calc(50% - 120px);
  right: 15%;
  left: 15%;
  text-align: center;
  z-index: 4;
`;

export const StyledImage = styled(BackgroundImage)`
  width: 100%;
  height: 100vh;
  filter: brightness(70%);
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  @media (max-width: 1024px) {
    height: 60vh;
  }
  @media (max-width: 460px) {
    height: 100vh;
  }
`;

export const ArrowContainer = styled.div`
  position: absolute;
  top: calc(50% - 20px);
  z-index: 3;
  opacity: 0.5;
  width: 20px;
  color: #ffffff;
  ${Hover};
  ${BeforeNone};
`;

export const ArrowContainerPrev = styled(ArrowContainer)`
  left: 50px;
`;

export const ArrowContainerNext = styled(ArrowContainer)`
  right: 50px;
`;
