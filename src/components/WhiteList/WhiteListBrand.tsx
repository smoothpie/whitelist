import React from "react";
import {
  WhiteListBrandStyle,
  BrandTitle,
  BrandAddress,
  BrandFeatures,
  BrandFeature
} from "./styled";

type Props = {
  brand: any;
};

const WhiteListBrand: React.FC<Props> = props => {
  const { brand } = props;

  return (
    <WhiteListBrandStyle>
      <BrandTitle>{brand.title}</BrandTitle>
      <BrandAddress>пр-т. Победителей 3, Минск</BrandAddress>
      <BrandFeatures>
        <BrandFeature>✔ Еда в заведении</BrandFeature>
        <BrandFeature>✔ Еда на вынос</BrandFeature>
      </BrandFeatures>
    </WhiteListBrandStyle>
  );
};

export default WhiteListBrand;
