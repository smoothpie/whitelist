import styled from "styled-components";
import { Link } from "gatsby";

export const Hover = `&:hover {
  color: #eeeeee;
  cursor: pointer;
  transition: all 0.5s ease;
  opacity: 1;
  }`;

export const BeforeNone = `&:before {
  display: none;
}`;

//**************** LINKS ********************
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

//**************** HEADINGS ******************
export const H1 = styled.h1`
  font-family: "Manrope-Regular", sans-serif;
  font-size: 3.5rem;
  color: #eeeeee;
  @media (max-width: 1024px) {
    font-size: 3.1rem;
  }
  @media (max-width: 460px) {
    font-family: "Manrope-Light", sans-serif;
    font-size: 2rem;
    color: #e3b873;
  }
`;

export const H2 = styled.h2`
  font-size: 2.5rem;
  color: #eeeeee;
  @media (max-width: 1024px) {
    font-size: 2.1rem;
  }
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

//****** SECTION TITLE ******
export const SectionTitle = styled.h3`
  font-size: 2rem;
  color: #eeeeee;
  margin: 1.2rem 0;
  @media (max-width: 1024px) {
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
  @media (max-width: 1024px) {
    font-size: 1.3rem;
  }
  @media (max-width: 460px) {
    font-size: 1rem;
  }
`;

export const SectionDescription = styled.p`
  text-align: center;
  width: 60%;
  margin: 1rem 0 4rem;
  font-size: 1.1rem;
  color: gray;
  line-height: 1.5rem;
  @media (max-width: 460px) {
    width: 80%;
    font-size: 0.95rem;
    margin: 1rem 0 2rem;
  }
`;

//************** CARDS ***************/
export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const Card = styled.div`
  width: 360px;
  min-height: 488px;
  padding: 25px;
  outline: 1px solid #444444;
  text-align: center;
  margin: 0 15px;
  @media (max-width: 1200px) {
    width: 300px;
  }
  @media (max-width: 1024px) {
    width: 80%;
    min-height: 360px;
    margin: 15px 0;
  }
`;

export const CardInfo = styled.p`
  color: gray;
  font-size: 0.95rem;
  line-height: 1.5rem;
`;
