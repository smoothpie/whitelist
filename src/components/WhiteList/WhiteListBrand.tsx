import React from "react";
import { WhiteListBrandStyle, BrandTitle, BrandAddress } from "./styled";

type Props = {
  brand: any;
  categoryName: string;
};

const WhiteListBrand: React.FC<Props> = props => {
  const { brand, categoryName } = props;

  return (
    <WhiteListBrandStyle
      to={`/brand/${brand._id}`}
      state={{ brand, categoryName }}
    >
      <BrandTitle>{brand.name}</BrandTitle>
      {brand.location.map((l: any, i: number) => (
        <BrandAddress key={i}>{l.address}</BrandAddress>
      ))}
    </WhiteListBrandStyle>
  );
};

export default WhiteListBrand;
