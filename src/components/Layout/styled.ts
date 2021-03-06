import styled from "styled-components";

export const LayoutContainer = styled.div`
  background-color: #fff;
  font-family: "Manrope", sans-serif;
  font-weight: 300;
`;

export const Main = styled.main``;

export const PageContent = styled.div`
  margin: 7rem auto;
  max-width: 38rem;
  @media (max-width: 767px) {
    max-width: 90%;
  }
`;

export const MaxWidth = styled.div`
  margin: 0 auto;
  width: 38rem;
  @media (max-width: 767px) {
    max-width: 90%;
  }
`;
