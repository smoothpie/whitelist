import styled from "styled-components";
import Image from "gatsby-image";

export const MainSliderSection = styled.section`
  width: 100%;
`;

export const SliderItem = styled.div`
  width: 100%;
`;

export const StyledImage = styled(Image)`
  width: 100%;
  height: 950px;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  background: #000000;
  opacity: 0.2;
`;
