import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import {
  PriceListSection,
  PriceListContainer,
  PriceListBlock,
  PriceItem,
  PriceItemText,
  PriceItemHeading,
  PriceItemHeadingSpan,
  PriceItemCost
} from "./styled";
import { SectionTitle, SectionDescription } from "../Typography";
import Button from "../Button";

const PriceList: React.FC = () => {
  const {
    priceList: { frontmatter: priceList },
    pricesM: { edges: pricesM },
    pricesW: { edges: pricesW }
  } = useStaticQuery(graphql`
    query {
      priceList: markdownRemark(frontmatter: { type: { eq: "priceList" } }) {
        frontmatter {
          title
          description
          button
        }
      }
      pricesM: allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "pricesM" } } }
      ) {
        edges {
          node {
            frontmatter {
              id
              item
              price
            }
          }
        }
      }
      pricesW: allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "pricesW" } } }
      ) {
        edges {
          node {
            frontmatter {
              id
              item
              price
            }
          }
        }
      }
    }
  `);

  const { title, description, button } = priceList;

  return (
    <PriceListSection>
      <SectionTitle>{title}</SectionTitle>
      <SectionDescription>{description}</SectionDescription>
      <PriceListContainer>
        <PriceListBlock>
          {pricesM.map(({ node: { frontmatter } }: any) => {
            const { id, item, price } = frontmatter;
            return (
              <PriceItem key={id}>
                <PriceItemText>
                  <PriceItemHeading>
                    <PriceItemHeadingSpan>{item}</PriceItemHeadingSpan>
                  </PriceItemHeading>
                  <PriceItemCost>{price}</PriceItemCost>
                </PriceItemText>
              </PriceItem>
            );
          })}
        </PriceListBlock>
        <PriceListBlock>
          {pricesW.map(({ node: { frontmatter } }: any) => {
            const { id, item, price } = frontmatter;
            return (
              <PriceItem key={id}>
                <PriceItemText>
                  <PriceItemHeading>
                    <PriceItemHeadingSpan>{item}</PriceItemHeadingSpan>
                  </PriceItemHeading>
                  <PriceItemCost>{price}</PriceItemCost>
                </PriceItemText>
              </PriceItem>
            );
          })}
        </PriceListBlock>
      </PriceListContainer>
      <Button
        link="https://n247635.yclients.com/company:242564/idx:0/service"
        dataBack={button}
        dataFront={button}
      />
    </PriceListSection>
  );
};

export default PriceList;
