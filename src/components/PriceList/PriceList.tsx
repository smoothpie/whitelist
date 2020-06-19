import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import {
  PriceListSection,
  PriceListWrapper,
  PriceItem,
  PriceItemText,
  PriceItemHeading,
  PriceItemHeadingSpan,
  PriceItemCost,
  PriceItemDescription
} from "./styled";
import { SectionTitle, SectionDescription } from "../Typography";

const PriceList: React.FC = () => {
  const {
    priceList: { frontmatter: priceList },
    price: { edges: price }
  } = useStaticQuery(graphql`
    query {
      priceList: markdownRemark(frontmatter: { type: { eq: "priceList" } }) {
        frontmatter {
          title
          description
        }
      }
      price: allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "price" } } }
      ) {
        edges {
          node {
            frontmatter {
              id
              item
              info
              price
            }
          }
        }
      }
    }
  `);

  const { title, description } = priceList;

  return (
    <PriceListSection id="prices">
      <SectionTitle>{title}</SectionTitle>
      <SectionDescription>{description}</SectionDescription>
      <PriceListWrapper>
        {price.map(({ node: { frontmatter } }: any) => {
          const { id, info, item, price } = frontmatter;
          return (
            <PriceItem key={id}>
              <PriceItemText>
                <PriceItemHeading>
                  <PriceItemHeadingSpan>{item}</PriceItemHeadingSpan>
                </PriceItemHeading>
                <PriceItemCost>{price}</PriceItemCost>
              </PriceItemText>
              <div>
                <PriceItemDescription>{info}</PriceItemDescription>
              </div>
            </PriceItem>
          );
        })}
      </PriceListWrapper>
    </PriceListSection>
  );
};

export default PriceList;
