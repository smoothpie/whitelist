import React from "react";
import { navigate } from "gatsby";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import { BrandMapContainer } from "./styled";

type BrandMap = {
  brands: any[];
};

const BrandMap: React.FC<BrandMap> = props => {
  const { brands } = props;

  if (typeof window !== "undefined") {
    (window as any).openBrandPage = (brand: any) => {
      const parsedBrand = JSON.parse(brand);
      navigate(`/brand/${parsedBrand._id}`, {
        state: { brand: parsedBrand }
      });
    };
  }

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
                  balloonContentFooter: `
                    ${b.reason} <br />
                    <button onclick="openBrandPage('${JSON.stringify(b)
                      .split('"')
                      .join("&quot;")}')"
                      style="
                        margin-top: 8px;
                        padding: 8px 16px;
                        border: none;
                        border-radius: 4px;
                        outline: none;
                        color: #fff;
                        background-color: #cd0000;
                        cursor: pointer;
                      "
                    >
                      ПОДРОБНЕЕ
                    </button>
                  `
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
