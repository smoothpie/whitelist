import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import { BrandMapContainer } from "./styled";

type BrandMap = {
  brands: any[];
};

const BrandMap: React.FC<BrandMap> = props => {
  const { brands } = props;

  return (
    <BrandMapContainer>
      <YMaps query={{ apikey: "f90cd6b4-72c2-4b51-9607-3fae309e375a" }}>
        <Map
          defaultState={{
            center: [53.9, 27.55],
            zoom: 12
          }}
          state={{
            center: [53.9, 27.55],
            zoom: 12,
            controls: ["zoomControl"]
          }}
          width="100%"
          height="100%"
          style={{ height: "37rem", position: "relative" }}
          instanceRef={(ref: any) => {
            if (ref) {
              ref.behaviors.disable("scrollZoom");
              ref.events.add("click", () => {
                ref.balloon.close();
              });
            }
          }}
          modules={["control.ZoomControl", "control.FullscreenControl"]}
        >
          {brands.map((b: any) => {
            return b.location.map((l: any, i: number) => (
              <Placemark
                key={i}
                geometry={[l.lat, l.lng] || []}
                properties={{
                  balloonContentHeader: `${b.name} (${b.categoryName})`,
                  balloonContentBody: l.address,
                  balloonContentFooter: b.reason
                }}
                modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
              />
            ));
          })}
        </Map>
      </YMaps>
    </BrandMapContainer>
  );
};

export default BrandMap;
