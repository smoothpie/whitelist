import styled from "styled-components";
import { Link } from "gatsby";
import Img from "gatsby-image";
import Instagram from "../../assets/images/svg/instagram.svg";

export const HeaderStyle = styled.header`
  background: #1b1b1b;
  color: #fcb81be5;
`;

export const HeaderContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
`;

export const StyledLink = styled(Link)`
  color: #fcb81be5;
  text-decoration: none;
  &:hover {
    text-decoration: none;
    color: white;
  }
`;

export const Logo = styled.div`
  color: #fcb81be5;
  text-decoration: none;
`;

export const StyledImg = styled(Img)`
  max-width: 195px;
`;

export const StyledInstagram = styled(Instagram)`
  width: ${props => props.wdth || "15px"};
`;

// export const StyledInstagram = styled(Instagram)`
//   width: ${props => (props.wdth ? "15px" : "30px")};
// `;
