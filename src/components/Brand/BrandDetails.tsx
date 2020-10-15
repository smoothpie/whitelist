import React from "react";
import LocationIcon from "../../assets/images/svg/location.svg";
import {
  BrandDetailsContainer,
  BrandDetailsRow,
  BrandReasonTitle,
  BrandReason,
  BrandTags,
  BrandTag,
  Suggestions
} from "./styled";

type BrandDetails = {
  brand: any;
};

const BrandDetails: React.FC<BrandDetails> = props => {
  const { brand } = props;

  if (!brand) return null;

  return (
    <BrandDetailsContainer>
      {brand.location.length && brand.location[0].address ? (
        <BrandDetailsRow>
          <LocationIcon />
          {brand.location.map((l: any, i: number) => (
            <span key={i}>{l.address}</span>
          ))}
        </BrandDetailsRow>
      ) : null}
      <BrandTags>
        {brand.tag.map((t: any, i: number) => (
          <BrandTag key={i}>#{t.name}</BrandTag>
        ))}
      </BrandTags>
      {brand.reason && (
        <>
          <BrandReasonTitle>ПОЧЕМУ В СПИСКЕ</BrandReasonTitle>
          <BrandReason>{brand.reason}</BrandReason>
        </>
      )}
      <Suggestions>
        Есть идеи по улучшению проекта? Пишите нам:
        <a href="mailto:whitelist.by@gmail.com"> whitelist.by@gmail.com</a>
      </Suggestions>
    </BrandDetailsContainer>
  );
};

export default BrandDetails;
