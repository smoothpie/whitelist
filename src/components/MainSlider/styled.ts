import styled from "styled-components";
import Image from "gatsby-image";

import { Hover, BeforeNone } from "../Typography";

export const MainSliderSection = styled.section``;

export const SliderItem = styled.div`
  position: relative;
`;

export const StyledImage = styled(Image)`
  width: 100%;
  height: 100vh;
  filter: brightness(85%);
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
