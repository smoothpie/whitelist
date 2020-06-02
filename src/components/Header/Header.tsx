import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { StyledLink } from "../Typography";
import {
  HeaderStyle,
  HeaderContainer,
  StyledLogo,
  StyledInstagram,
  StyledTelegram,
  StyledYclients,
  ContactsP
} from "./styled";

const Header: React.FC<any> = () => {
  const [isScroll, setScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY >= 87 && !isScroll) {
        setScroll(true);
      }
      if (currentScrollY < 87 && isScroll) {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScroll]);

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
    <HeaderStyle view={!isScroll}>
      <HeaderContainer view={!isScroll}>
        <div>
          <ContactsP>{title}</ContactsP>
          <ContactsP>{tel}</ContactsP>
          <ContactsP>{address}</ContactsP>
          <ContactsP>{place}</ContactsP>
        </div>
        <div>
          <StyledLink to="/">
            <StyledLogo fluid={logo} />
          </StyledLink>
        </div>
        <div>
          <StyledTelegram />
          <StyledYclients />
          <StyledInstagram wdth="20px" />
          <StyledInstagram wdth="20px" clr="#F783AC" />
        </div>
      </HeaderContainer>
    </HeaderStyle>
  );
};

export default Header;
