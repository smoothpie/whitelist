import React from "react";
// import { useStaticQuery, graphql } from "gatsby";
// import { StyledLink } from "../Typography";
import { FooterSectionStyle } from "./styled";

const FooterSection: React.FC = () => {
  // const {
  //   header: { frontmatter },
  //   logo: {
  //     childImageSharp: { fluid: logo }
  //   }
  // } = useStaticQuery(graphql`
  //   query {
  //     header: markdownRemark(frontmatter: { type: { eq: "header" } }) {
  //       id
  //       frontmatter {
  //         title
  //         tel
  //         address
  //         place
  //       }
  //     }
  //     logo: file(relativePath: { eq: "logo.png" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 250) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `);

  // const { title, tel, address, place } = frontmatter;

  return (
    <FooterSectionStyle>
      <h2>FooterSection</h2>
    </FooterSectionStyle>
  );
};

export default FooterSection;
