import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";
import { Hover, BeforeNone } from "../Typography";

export const MainSliderSection = styled.section`
  width: 100%;
`;

export const SliderItem = styled.div`
  position: relative;
`;

export const SliderText = styled.div``;

export const StyledImage = styled(BackgroundImage)`
  width: 100%;
  height: 100vh;
  filter: brightness(85%);
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
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
