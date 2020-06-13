import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { FooterSectionStyle, Map, StyledIframe } from "./styled";
import { SectionTitle, StyledLinkA } from "../Typography";

const FooterSection: React.FC = () => {
  const {
    footer: { frontmatter }
  } = useStaticQuery(graphql`
    query {
      footer: markdownRemark(frontmatter: { type: { eq: "footer" } }) {
        frontmatter {
          title
          heading1
          description
          heading2
          navItem1
          navItem2
          navItem3
          heading3
        }
      }
    }
  `);

  const {
    title,
    heading1,
    description,
    heading2,
    navItem1,
    navItem2,
    navItem3,
    heading3
  } = frontmatter;
  return (
    <FooterSectionStyle>
      <SectionTitle>{title}</SectionTitle>
      <Map>
        <StyledIframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2350.4843149381772!2d27.54984321585956!3d53.90536918010003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcfeb646109f3%3A0x7dad7fbe4e6ae008!2z0L_RgC3Rgi4g0J_QvtCx0LXQtNC40YLQtdC70LXQuSAxLCDQnNC40L3RgdC6!5e0!3m2!1sru!2sby!4v1591988602347!5m2!1sru!2sby" />
      </Map>
      <div>
        <div>
          <h5>{heading1}</h5>
          <p>{description}</p>
        </div>
        <div>
          <h5>{heading2}</h5>
          <StyledLinkA href="/">{navItem1}</StyledLinkA>
          <StyledLinkA href="/">{navItem2}</StyledLinkA>
          <StyledLinkA href="/">{navItem3}</StyledLinkA>
        </div>
        <div>
          <h5>{heading3}</h5>
        </div>
      </div>
    </FooterSectionStyle>
  );
};

export default FooterSection;
