import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { InstagramGallerySection } from "./styled";

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
      <h2>{title}</h2>
      <p>{description}</p>
    </InstagramGallerySection>
  );
};

export default InstagramGallery;
