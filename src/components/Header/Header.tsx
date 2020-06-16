import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { StyledLink, StyledLinkA } from "../Typography";
import {
  HeaderStyle,
  HeaderContainer,
  StyledLogo,
  StyledInstagram,
  StyledTelegram,
  StyledYclients,
  Tel,
  StyledPhone,
  Block,
  MobileBlock
} from "./styled";

const Header: React.FC<any> = () => {
  const [isScroll, setScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY >= 100 && !isScroll) {
        setScroll(true);
      }
      if (currentScrollY < 100 && isScroll) {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScroll]);

  const {
    contacts: { frontmatter },
    logo: {
      childImageSharp: { fluid: logo }
    }
  } = useStaticQuery(graphql`
    query {
      contacts: markdownRemark(frontmatter: { type: { eq: "contacts" } }) {
        frontmatter {
          tel
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

  const { tel } = frontmatter;

  return (
    <HeaderStyle view={!isScroll}>
      <HeaderContainer view={!isScroll}>
        <Block>
          <StyledPhone />
          <Tel href="tel:+375 447 666 911">{tel}</Tel>
        </Block>
        <Block>
          <StyledLink to="/">
            <StyledLogo fluid={logo} />
          </StyledLink>
        </Block>
        <Block>
          <StyledLinkA href="https://www.t.me/minsk911/" target="blank_">
            <StyledTelegram />
          </StyledLinkA>
          <StyledLinkA
            href="https://n247635.yclients.com/company:242564?o=m704631"
            target="blank_"
          >
            <StyledYclients />
          </StyledLinkA>
          <StyledLinkA
            href="https://www.instagram.com/911barber.by/"
            target="blank_"
          >
            <StyledInstagram />
          </StyledLinkA>
          <StyledLinkA
            href="https://www.instagram.com/911barbieshop/"
            target="blank_"
          >
            <StyledInstagram clr="#F783AC" />
          </StyledLinkA>
        </Block>
        <MobileBlock>
          <StyledLink to="/">
            <StyledLogo fluid={logo} />
          </StyledLink>
        </MobileBlock>
        <MobileBlock>
          <StyledLinkA href="https://www.t.me/minsk911/" target="blank_">
            <StyledTelegram />
          </StyledLinkA>
          <StyledLinkA
            href="https://n247635.yclients.com/company:242564?o=m704631"
            target="blank_"
          >
            <StyledYclients />
          </StyledLinkA>
          <StyledLinkA
            href="https://www.instagram.com/911barber.by/"
            target="blank_"
          >
            <StyledInstagram wdth="20px" />
          </StyledLinkA>
          <StyledLinkA
            href="https://www.instagram.com/911barbieshop/"
            target="blank_"
          >
            <StyledInstagram wdth="20px" clr="#F783AC" />
          </StyledLinkA>
        </MobileBlock>
      </HeaderContainer>
    </HeaderStyle>
  );
};

export default Header;
