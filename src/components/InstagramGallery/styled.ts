import styled from "styled-components";
import { SectionMarginBottom } from "../Typography";
import BackgroundImage from "gatsby-background-image";

export const InstagramGallerySection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${SectionMarginBottom}
`;

export const InstagramGalleryWrapper = styled.div`
  position: relative;
  display: flex;
  flex: 0 0 25%;
  width: 100%;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const InstagramItem = styled(BackgroundImage)`
  display: flex;
  align-items: center;
  position: relative;
  height: 400px;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  @media (max-width: 1023px) {
    height: 300px;
  }
  @media (max-width: 767px) {
    height: 500px;
  }
  @media (max-width: 459px) {
    height: 400px;
  }
`;
