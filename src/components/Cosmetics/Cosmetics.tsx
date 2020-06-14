import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import {
  CosmeticsSection,
  CosmeticsImg,
  CosmeticsName,
  CosmeticsCard,
  Stars
} from "./styled";
import {
  SectionTitle,
  SectionDescription,
  CardContainer,
  CardInfo
} from "../Typography";

const Cosmetics: React.FC = () => {
  const {
    cosmetics: { frontmatter },
    stuff1: {
      childImageSharp: { fluid: stuff1 }
    },
    stuff2: {
      childImageSharp: { fluid: stuff2 }
    }
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
      stuff1: file(relativePath: { eq: "stuff1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      stuff2: file(relativePath: { eq: "stuff2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const { title, description, item1, info1, item2, info2 } = frontmatter;
  return (
    <CosmeticsSection>
      <SectionTitle>{title}</SectionTitle>
      <SectionDescription>{description}</SectionDescription>
      <CardContainer>
        <CosmeticsCard>
          <CosmeticsImg fluid={stuff1} />
          <Stars>&#9733;&#9733;&#9733;&#9733;&#9733;</Stars>
          <CosmeticsName>{item1}</CosmeticsName>
          <CardInfo>{info1}</CardInfo>
          <button>Уточнить наличие и цену</button>
        </CosmeticsCard>
        <CosmeticsCard>
          <CosmeticsImg fluid={stuff2} />
          <Stars>&#9733;&#9733;&#9733;&#9733;&#9733;</Stars>
          <CosmeticsName>{item2}</CosmeticsName>
          <CardInfo>{info2}</CardInfo>
          <button>Уточнить наличие и цену</button>
        </CosmeticsCard>
      </CardContainer>
    </CosmeticsSection>
  );
};

export default Cosmetics;
