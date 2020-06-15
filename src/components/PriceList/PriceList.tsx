import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { PriceListSection } from "./styled";
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
    <PriceListSection>
      <SectionTitle>{title}</SectionTitle>
      <SectionDescription>{description}</SectionDescription>
      <div>
        {price.map(({ node: { frontmatter } }: any) => {
          const { id, info, item, price } = frontmatter;
          return (
            <div key={id}>
              <div>
                <span>{item}</span>
                <span>{price}</span>
              </div>
              <div>
                <p>{info}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div></div>
    </PriceListSection>
  );
};

export default PriceList;
