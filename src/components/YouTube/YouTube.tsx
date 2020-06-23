import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { YouTubeSection, YouTubeButton } from "./styled";
import { SectionTitle, SectionDescription, StyledLinkA } from "../Typography";

const YouTube: React.FC = () => {
  const {
    youtube: { frontmatter }
  } = useStaticQuery(graphql`
    query {
      youtube: markdownRemark(frontmatter: { type: { eq: "youtube" } }) {
        frontmatter {
          title
          description
        }
      }
    }
  `);

  const { title, description } = frontmatter;
  return (
    <YouTubeSection>
      <SectionTitle>{title}</SectionTitle>
      <SectionDescription>{description}</SectionDescription>
      <StyledLinkA href="/#" target="blank_" rel="noopener noreferrer">
        <YouTubeButton />
      </StyledLinkA>
    </YouTubeSection>
  );
};

export default YouTube;
