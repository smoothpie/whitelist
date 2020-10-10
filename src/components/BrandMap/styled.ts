import styled from "styled-components";

export const BrandMapContainer = styled.div`
  margin: 1rem 0 3rem;
  & > div {
    height: 37rem !important;
    position: relative;
  }
  @media (max-width: 767px) {
    & > div {
      height: 16rem !important;
    }
    & > div > ymaps,
    & > div > ymaps > ymaps {
      height: 16rem !important;
    }
  }
`;
