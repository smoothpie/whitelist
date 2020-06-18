import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import {
  FooterContainer,
  Copyright,
  Navigation,
  NavList,
  NavItem
} from "./styled";
import { StyledLinkA } from "../Typography";

const Footer: React.FC = () => {
  const {
    navigation: { frontmatter }
  } = useStaticQuery(graphql`
    query {
      navigation: markdownRemark(frontmatter: { type: { eq: "navigation" } }) {
        frontmatter {
          navItem1
          navItem2
          navItem3
          navItem4
          navItem6
        }
      }
    }
  `);

  const { navItem1, navItem2, navItem3, navItem4, navItem6 } = frontmatter;

  return (
    <FooterContainer>
      <Copyright>© {new Date().getFullYear()}, 911barber.by</Copyright>
      <Navigation>
        <NavList>
          <NavItem>
            <StyledLinkA href="/">{navItem1}</StyledLinkA>
          </NavItem>
          <NavItem>
            <StyledLinkA href="/">{navItem2}</StyledLinkA>
          </NavItem>
          <NavItem>
            <StyledLinkA href="/">{navItem3}</StyledLinkA>
          </NavItem>
          <NavItem>
            <StyledLinkA href="/">{navItem4}</StyledLinkA>
          </NavItem>
          <NavItem>
            <StyledLinkA href="/">{navItem6}</StyledLinkA>
          </NavItem>
        </NavList>
      </Navigation>
    </FooterContainer>
  );
};

export default Footer;
