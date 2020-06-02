import styled from "styled-components";
import { Link } from "gatsby";

//**************** LINKS ********************
export const StyledLinkA = styled.a`
  color: #e3b873;
  text-decoration: none;
  &:hover {
    color: #eeeeee;
    cursor: pointer;
    transition: all 0.3s ease;
  }
`;

export const StyledLink = styled(Link)`
  color: #e3b873;
  text-decoration: none;
  &:hover {
    color: #eeeeee;
    cursor: pointer;
    transition: all 0.3s ease;
  }
`;

//**************** HEADINGS ********************
export const H1 = styled.h1`
  color: #e3b873;
`;
export const H2 = styled.h2`
  color: #e3b873;
`;
export const H3 = styled.h2`
  color: #e3b873;
`;
export const H4 = styled.h2`
  color: #e3b873;
`;
