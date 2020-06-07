import styled from "styled-components";
import { Hover, BeforeNone } from "../Typography";

export interface IPublicURL {
  publicURL: string;
}

export const MainSliderSection = styled.section`
  width: 100%;
`;

export const SliderItem = styled.div`
  position: relative;
`;

export const SliderText = styled.div``;

export const StyledImage = styled.div`
  width: 100%;
  height: 100vh;
  filter: brightness(85%);
  background-image: url(${({ publicURL }: IPublicURL) => publicURL});
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
