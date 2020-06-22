import styled from "styled-components";
import { Link } from "gatsby";
import BackgroundImage from "gatsby-background-image";

export const Hover = `&:hover {
  color: #eeeeee;
  cursor: pointer;
  transition: all 0.5s ease;
  opacity: 1;
  }`;

export const BeforeNone = `&:before {
  display: none;
}`;

export const SectionMarginBottom = `
  margin-bottom: 100px;
  @media (max-width: 767px) {
    margin-bottom: 70px;
}`;

//************* LINKS ****************/
export const StyledLinkA = styled.a`
  color: #e3b873;
  text-decoration: none;
  ${Hover}
`;

export const StyledLink = styled(Link)`
  color: #e3b873;
  text-decoration: none;
  ${Hover}
`;
//************************************/

//**************** HEADINGS ******************
export const H1 = styled.h1`
  font-size: 3.5rem;
  color: #eeeeee;
  font-weight: 400;
  @media (max-width: 1023px) {
    font-size: 3.1rem;
  }
  @media (max-width: 767px) {
    font-size: 2.5rem;
  }
  @media (max-width: 460px) {
    font-weight: 300;
    font-size: 2rem;
    color: #e3b873;
  }
`;

export const H2 = styled.h2`
  font-size: 2.5rem;
  color: #eeeeee;
  @media (max-width: 1023px) {
    font-size: 2.1rem;
  }
  @media (max-width: 767px) {
    font-size: 1.8rem;
  }
`;
//************************************/

//********* SECTION TITLE **********/
export const SectionTitle = styled.h3`
  margin: 1rem 0;
  font-size: 2rem;
  font-weight: 400;
  color: #eeeeee;
  @media (max-width: 1023px) {
    font-size: 1.7rem;
  }
  @media (max-width: 460px) {
    font-size: 1.4rem;
  }
`;

export const H4 = styled.h4`
  font-weight: 400;
  font-size: 1.7rem;
  color: #eeeeee;
  margin: 1.2rem 0;
  @media (max-width: 1023px) {
    font-size: 1.3rem;
  }
  @media (max-width: 460px) {
    font-size: 1rem;
  }
`;

export const SectionDescription = styled.div`
  text-align: center;
  width: 60%;
  margin: 0.5rem 0 3rem;
  font-size: 1.1rem;
  color: gray;
  line-height: 1.5rem;
  @media (max-width: 460px) {
    width: 80%;
    font-size: 0.95rem;
    margin: 1rem 0 2rem;
  }
`;
//************************************/

//************** CARDS ***************/
export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1023px) {
    flex-direction: column;
  }
`;

export const Card = styled.a`
  width: 360px;
  min-height: 488px;
  padding: 25px;
  outline: 1px solid #444444;
  text-align: center;
  margin: 0 15px;
  text-decoration: none;
  @media (max-width: 1200px) {
    width: 300px;
  }
  @media (max-width: 1023px) {
    width: 80%;
    min-height: 360px;
    margin: 15px 0;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const CardInfo = styled.p`
  color: gray;
  font-size: 0.95rem;
  line-height: 1.5rem;
`;
//************************************/

//************** SLIDER ***************/
export const SliderSection = styled.section`
  width: 100%;
  ${SectionMarginBottom}
  @media (max-width: 767px) {
    display: none;
  }
`;

export const SliderItem = styled.div`
  position: relative;
`;

export const InnerBlock = styled.div``;

export const SliderText = styled.div`
  position: absolute;
  top: calc(50% - 150px);
  right: 15%;
  left: 15%;
  text-align: center;
  z-index: 4;
`;

export const StyledSlideImage = styled(BackgroundImage)`
  width: 100%;
  filter: brightness(70%);
  background-repeat: no-repeat;
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
