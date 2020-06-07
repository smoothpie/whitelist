import styled from "styled-components";
import { Link } from "gatsby";

export const Hover = `&:hover {
  color: #eeeeee;
  cursor: pointer;
  transition: all 0.5s ease;
  opacity: 1;
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
  color: #e3b873;
`;
export const H2 = styled.h2`
  color: #e3b873;
`;
export const H3 = styled.h3`
  color: #e3b873;
`;
export const H4 = styled.h4`
  color: #e3b873;
`;
