import styled from "styled-components";
import Image from "gatsby-image";
import ArrowLeft from "../../assets/images/svg/arrow-left.svg";
import ArrowRight from "../../assets/images/svg/arrow-right.svg";
import { Hover } from "../Typography";

export const MainSliderSection = styled.section``;

export const SliderItem = styled.div``;

export const StyledImage = styled(Image)`
  width: 100%;
  height: 100vh;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  background-color: #000000;
  opacity: 0.2;
`;

export const StyledArrowPrev = styled(ArrowLeft)`
  position: absolute;
  top: 50%;
  left: 50px;
  width: 20px;
  color: white;
  z-index: 3;
  height: 100%;
  padding: 30px;
  opacity: 0.5;
  ${Hover};
`;

export const StyledArrowNext = styled(ArrowRight)`
  position: absolute;
  top: 50%;
  right: 50px;
  width: 20px;
  color: white;
  z-index: 3;
  height: 100%;
  padding: 30px;
  opacity: 0.5;
  ${Hover}
`;
