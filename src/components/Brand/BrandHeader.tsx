import React, { useState } from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import {
  BrandHeaderContainer,
  BrandCard,
  BrandTitle,
  BrandCategory,
} from "./styled";

type BrandHeader = {
  brand: any;
  categoryName: string;
}

const BrandHeader: React.FC<BrandHeader> = (props) => {
  const [ coordinates, setCoordinates ] = useState<any>([]);
  const { brand, categoryName } = props;

  const geocode = async (ymaps: any) => {
    await Promise.all(
      brand.location.map(async (l: any) => {
        const result = await ymaps.geocode(l.rawAddress);
        console.log(result);
        setCoordinates([...coordinates, result.geoObjects.get(0).geometry.getCoordinates() ]);
      })
    )
  }

  return (
    <BrandHeaderContainer>
      <YMaps query={{ apikey: process.env.YANDEX_MAPS_API_KEY }}>
        <Map
          modules={["geocode"]}
          defaultState={{ center: coordinates[0] || [53.70, 27.95], zoom: coordinates[0] ? 14 : 7 }}
          state={{ center: coordinates[0] || [53.70, 27.95], zoom: coordinates[0] ? 14 : 7 }}
          width="100%"
          height="100%"
          style={{ height: "26rem", position: "relative" }}
          onLoad={(ymaps) => geocode(ymaps)}
          instanceRef={(ref: any) => { ref && ref.behaviors.disable('scrollZoom') }}
        >
          {brand.location.map((l: any, i: number) => (
            <Placemark geometry={coordinates[i] || [53.70, 27.95]} />
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
