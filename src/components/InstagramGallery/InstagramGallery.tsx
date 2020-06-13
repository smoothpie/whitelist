import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { InstagramGallerySection } from "./styled";
import { SectionTitle, SectionDescription } from "../Typography";

const InstagramGallery: React.FC = () => {
  const {
    instagram: { frontmatter }
  } = useStaticQuery(graphql`
    query {
      instagram: markdownRemark(frontmatter: { type: { eq: "instagram" } }) {
        frontmatter {
          title
          description
        }
      }
    }
  `);

  const { title, description } = frontmatter;
  return (
    <InstagramGallerySection>
      <SectionTitle>{title}</SectionTitle>
      <SectionDescription>{description}</SectionDescription>
    </InstagramGallerySection>
  );
};

export default InstagramGallery;
