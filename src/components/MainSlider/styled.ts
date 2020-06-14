import styled from "styled-components";
import { StyledSlideImage } from "../Typography";

export const SliderSectionMobile = styled.section`
  display: none;
  @media (max-width: 768px) {
    display: block;
    position: relative;
  }
`;

export const SlideImage = styled(StyledSlideImage)`
  height: 100vh;
  background-position: top;
  @media (max-width: 1024px) {
    height: 60vh;
  }
  @media (max-width: 768px) {
    height: 100vh;
  }
`;
