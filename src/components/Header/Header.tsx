import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import {
  HeaderStyle,
  HeaderContainer,
  Logo,
  StyledLink,
  StyledImg,
  StyledInstagram
} from "./styled";
import Instagram from "../../assets/images/svg/instagram.svg";

const Header: React.FunctionComponent<any> = ({ siteTitle = "" }: any) => {
  const {
    header: { frontmatter },
    logo: {
      childImageSharp: { fluid: logo }
    }
  } = useStaticQuery(graphql`
    query {
      header: markdownRemark(frontmatter: { type: { eq: "header" } }) {
        id
        frontmatter {
          title
          tel
          address
          place
        }
      }
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const { title, tel, address, place } = frontmatter;

  return (
    <HeaderStyle>
      <HeaderContainer>
        <p>{title}</p>
        <p>{tel}</p>
        <p>{address}</p>
        <p>{place}</p>
        <Logo>
          <StyledLink to="/">
            <StyledImg fluid={logo} />
          </StyledLink>
        </Logo>
        <StyledInstagram wdth="20px" />
        <StyledInstagram />
      </HeaderContainer>
    </HeaderStyle>
  );
};

export default Header;
