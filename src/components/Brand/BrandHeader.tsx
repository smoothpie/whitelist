import React, { useState } from "react";
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
  const [coordinates, setCoordinates] = useState<any>([]);
  const { brand, categoryName } = props;

  const geocode = async (ymaps: any) => {
    await Promise.all(
      brand.location.map(async (l: any) => {
        const result = await ymaps.geocode(l.rawAddress);
        setCoordinates([
          ...coordinates,
          result.geoObjects.get(0).geometry.getCoordinates()
        ]);
      })
    );
  };

  if (!brand) return null;

  return (
    <BrandHeaderContainer>
      <YMaps query={{ apikey: "f90cd6b4-72c2-4b51-9607-3fae309e375a" }}>
        <Map
          modules={["geocode"]}
          defaultState={{
            center: coordinates[0] || [53.7, 27.95],
            zoom: coordinates[0] ? 14 : 7
          }}
          state={{
            center: coordinates[0] || [53.7, 27.95],
            zoom: coordinates[0] ? 14 : 7
          }}
          width="100%"
          height="100%"
          style={{ height: "26rem", position: "relative" }}
          onLoad={ymaps => geocode(ymaps)}
          instanceRef={(ref: any) => {
            ref && ref.behaviors.disable("scrollZoom");
          }}
        >
          {brand.location.map((l: any, i: number) => (
            <Placemark key={i} geometry={coordinates[i] || []} />
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
