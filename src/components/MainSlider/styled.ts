import styled from "styled-components";
import { StyledSlideImage } from "../Typography";

export const SliderSectionMobile = styled.section`
  display: none;
  @media (max-width: 767px) {
    display: block;
    position: relative;
  }
`;

export const SlideImage = styled(StyledSlideImage)`
  height: 100vh;
  background-position: top;
  @media (max-width: 1023px) {
    height: 60vh;
  }
  @media (max-width: 767px) {
    height: 100vh;
  }
`;

export const StyledAmpersand = styled.span`
  color: #eeeeee;
  font-size: 1.5rem;
  line-height: 2.5rem;
  font-weight: 700;
`;
