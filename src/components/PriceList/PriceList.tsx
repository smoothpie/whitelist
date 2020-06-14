import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { PriceListSection } from "./styled";
import { SectionTitle, SectionDescription } from "../Typography";

const PriceList: React.FC = () => {
  const {
    priceList: { frontmatter }
  } = useStaticQuery(graphql`
    query {
      priceList: markdownRemark(frontmatter: { type: { eq: "priceList" } }) {
        frontmatter {
          title
          description
          item1
          price1
          info1
          item2
          price2
          info2
          item3
          price3
          info3
          item4
          price4
          info4
          item5
          price5
          item6
          price6
          info6
          item7
          price7
          info7
          item8
          price8
          info8
          item9
          price9
          info9
        }
      }
    }
  `);

  const {
    title,
    description,
    item1,
    price1,
    info1
    // item2,
    // price2,
    // info2,
    // item3,
    // price3,
    // info3,
    // item4,
    // price4,
    // info4,
    // item5,
    // price5,
    // item6,
    // price6,
    // info6,
    // item7,
    // price7,
    // info7,
    // item8,
    // price8,
    // info8,
    // item9,
    // price9,
    // info9
  } = frontmatter;
  return (
    <PriceListSection>
      <SectionTitle>{title}</SectionTitle>
      <SectionDescription>{description}</SectionDescription>
      <div>
        <div>
          <span>{item1}</span>
          <span>{price1}</span>
        </div>
        <div>
          <p>{info1}</p>
        </div>
      </div>
      <div></div>
    </PriceListSection>
  );
};

export default PriceList;
