import React from "react";
import {
  PriceListBlockStyle,
  PriceItem,
  PriceItemText,
  PriceItemHeading,
  PriceItemHeadingSpan,
  PriceItemCost
} from "./styled";

type Props = {
  array: any;
};

const PriceListBlock: React.FC<Props> = ({ array }) => {
  return (
    <PriceListBlockStyle>
      {array.map(({ node: { frontmatter } }: any) => {
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
    </PriceListBlockStyle>
  );
};

export default PriceListBlock;
