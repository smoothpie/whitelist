import styled from "styled-components";
import { H2, H3 } from "../Typography";

export const BrandHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5rem auto 0;
  height: 26rem;
  position: relative;
  background-color: #f7f7f7;
  @media (max-width: 767px) {
    margin: 2rem auto 0;
  }
`;

export const BrandCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 38rem;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  bottom: -2.5rem;
  box-shadow: 0px 10px 16px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  @media (max-width: 767px) {
    width: 91vw;
  }
`;

export const BrandTitle = styled(H2)`
  
`;

export const BrandCategory = styled.span`
  font-size: 1rem;
  line-height: 21px;
  color: #3e4554;
`;

export const BrandDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5rem auto 3rem;
  max-width: 38rem;
  @media (max-width: 767px) {
    max-width: 90%;
  }
`;

export const BrandDetailsRow = styled.div`
  display: flex;
  align-items: center;
  svg {
    margin-right: 0.5rem;
  }
  font-size: 1rem;
  line-height: 21px;
  color: #3e4554;
`;

export const BrandReasonTitle = styled(H3)`
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-weight: 600;
`;

export const BrandReason = styled.span`
  font-size: 1rem;
  line-height: 21px;
  color: #3e4554;
`;