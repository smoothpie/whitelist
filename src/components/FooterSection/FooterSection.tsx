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
        <StyledIframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2350.484137113019!2d27.549843215992567!3d53.90537234039118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcf7c4c837b87%3A0x6ad3cca0a5495849!2zwqs5MTHCuyDQodCw0LvQvtC9INCa0YDQsNGB0L7RgtGLINCYINCR0LDRgNCx0LXRgNGI0L7Qvw!5e0!3m2!1sru!2sby!4v1592125771228!5m2!1sru!2sby" />
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
