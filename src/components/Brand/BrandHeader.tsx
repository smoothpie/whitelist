import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import {
  BrandHeaderContainer,
  BrandCard,
  BrandTitle,
  BrandCategory
} from "./styled";

type BrandHeader = {
  brand: any;
  categoryName: string;
};

const BrandHeader: React.FC<BrandHeader> = props => {
  const { brand, categoryName } = props;

  if (!brand) return null;

  const brandMainLocation = brand.location && brand.location[0];

  const mapCenter = (brandMainLocation && brandMainLocation.lat && [
    brandMainLocation?.lat,
    brandMainLocation?.lng
  ]) || [53.7, 27.95];

  const brandAddress = brand.location.length && brand.location[0].address;

  return (
    <BrandHeaderContainer>
      <YMaps query={{ apikey: "f90cd6b4-72c2-4b51-9607-3fae309e375a" }}>
        <Map
          defaultState={{
            center: mapCenter,
            zoom: brandAddress ? 14 : 7
          }}
          state={{ center: mapCenter, zoom: brandAddress ? 14 : 7 }}
          width="100%"
          height="100%"
          style={{ height: "26rem", position: "relative" }}
          instanceRef={(ref: any) => {
            ref && ref.behaviors.disable("scrollZoom");
          }}
        >
          {brandAddress && brand.location.map((l: any, i: number) => (
            <Placemark
              key={i}
              geometry={[brand.location[i].lat, brand.location[i].lng] || []}
            />
          ))}
        </Map>
      </YMaps>
      <BrandCard>
        <BrandTitle>{brand.name}</BrandTitle>
        <BrandCategory>{categoryName}</BrandCategory>
      </BrandCard>
    </BrandHeaderContainer>
  );
};

export default BrandHeader;
