import styled from "styled-components";
import { Link } from "gatsby";

// ************** LINKS ********************
export const StyledLinkA = styled.a`
  color: #e3b873;
  text-decoration: none;
  &:hover {
    color: #ffffff;
    cursor: pointer;
    transition: all 0.3s ease;
  }
`;

export const StyledLink = styled(Link)`
  color: #e3b873;
  text-decoration: none;
  &:hover {
    color: #ffffff;
    cursor: pointer;
    transition: all 0.3s ease;
  }
`;
// *****************************************
