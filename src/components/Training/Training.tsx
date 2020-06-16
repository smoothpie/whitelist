import React from "react";
import {
  TrainingSection,
  TrainingBg,
  InnerBlock,
  TrainingTel,
  Title,
  TrainingInfo
} from "./styled";
import { useStaticQuery, graphql } from "gatsby";

const Training: React.FC = () => {
  const {
    training: { frontmatter },
    trainingBg: {
      childImageSharp: { fluid: trainingBg }
    }
  } = useStaticQuery(graphql`
    query {
      training: markdownRemark(frontmatter: { type: { eq: "training" } }) {
        frontmatter {
          title
          string1
          string2
          string3
          string4
          string5
          tel
        }
      }
      trainingBg: file(relativePath: { eq: "trainingBg.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 4000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const {
    title,
    string1,
    string2,
    string3,
    string4,
    string5,
    tel
  } = frontmatter;
  return (
    <TrainingSection>
      <TrainingBg fluid={trainingBg} />
      <InnerBlock>
        <Title>{title}</Title>
        <TrainingInfo>{string1}</TrainingInfo>
        <TrainingInfo>{string2}</TrainingInfo>
        <TrainingInfo>{string3}</TrainingInfo>
        <TrainingInfo>{string4}</TrainingInfo>
        <TrainingInfo>{string5}</TrainingInfo>
        <TrainingTel href="tel:+375 447 666 911">{tel}</TrainingTel>
      </InnerBlock>
    </TrainingSection>
  );
};

export default Training;
