import React from "react";
import { navigate } from "gatsby";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import distance from "@turf/distance";
import { point } from "@turf/helpers";
import { BrandMapContainer } from "./styled";

type BrandMap = {
  brands: any[];
};

const minskCenter = [53.9, 27.55];

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

  if (!brands.length) return null;
  
  const locations = brands
    .reduce((acc, brand) => acc.concat([...brand.location]), [])
    .map((b: any) => [b.lat, b.lng]);

  const mapCenterCoords = locations.sort((l1: any, l2: any) => {
    const d1 = distance(point(l1), point(minskCenter));
    const d2 = distance(point(l2), point(minskCenter));
    return d1 - d2;
  })[0];

  return (
    <BrandMapContainer>
      <YMaps query={{ apikey: "f90cd6b4-72c2-4b51-9607-3fae309e375a" }}>
        <Map
          defaultState={{ center: mapCenterCoords, zoom: 12 }}
          state={{
            center: mapCenterCoords,
            zoom: 12,
            controls: ["zoomControl"]
          }}
          width="100%"
          height="100%"
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
