import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { CosmeticsSection } from "./styled";

const Cosmetics: React.FC = () => {
  const {
    cosmetics: { frontmatter }
  } = useStaticQuery(graphql`
    query {
      cosmetics: markdownRemark(frontmatter: { type: { eq: "cosmetics" } }) {
        frontmatter {
          title
          description
          item1
          info1
          item2
          info2
        }
      }
    }
  `);

  const { title, description, item1, info1, item2, info2 } = frontmatter;
  return (
    <CosmeticsSection>
      <h2>{title}</h2>
      <p>{description}</p>
      <div>
        <div>
          <img src="/" alt="/" />
          <p>{item1}</p>
          <p>{info1}</p>
        </div>
        <div>
          <img src="/" alt="/" />
          <p>{item2}</p>
          <p>{info2}</p>
        </div>
      </div>
    </CosmeticsSection>
  );
};

export default Cosmetics;
