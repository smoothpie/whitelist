import React from "react";
import LocationIcon from "../../assets/images/svg/location.svg";
import {
  BrandDetailsContainer,
  BrandDetailsRow,
  BrandReasonTitle,
  BrandReason,
} from "./styled";

type BrandDetails = {
  brand: any;
}

const BrandDetails: React.FC<BrandDetails> = (props) => {
  const { brand } = props;

  if (!brand) return null;

  return (
    <BrandDetailsContainer>
      {brand.location.length ? (
        <BrandDetailsRow>
          <LocationIcon />
          {brand.location.map((l: any) => (
            <span>{l.rawAddress}</span>
          ))}
        </BrandDetailsRow>
      ) : null}
      <BrandReasonTitle>ПОЧЕМУ В СПИСКЕ</BrandReasonTitle>
      <BrandReason>{brand.reason}</BrandReason>
    </BrandDetailsContainer>
  );
};

export default BrandDetails;
