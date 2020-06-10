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

//**************** HEADINGS ********************
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
`;
export const H3 = styled.h3`
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
export const H4 = styled.h4`
  color: #eeeeee;
`;
