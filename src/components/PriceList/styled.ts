import styled from "styled-components";
import { SectionMarginBottom } from "../Typography";

export const PriceListSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 160px;
  ${SectionMarginBottom}
`;

export const PriceListWrapper = styled.div`
  flex: 0 0 50%;
  max-width: 60%;
  @media (max-width: 767px) {
    max-width: 80%;
  }
`;

export const PriceItem = styled.div`
  display: block;
  width: 100%;
  margin-bottom: 1.5rem;
`;

export const PriceItemText = styled.div`
  position: relative;
  z-index: 0;
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 0.8rem;
`;

export const PriceItemHeading = styled.h5`
  width: calc(100% - 80px);
  font-size: 1.2rem;
  @media (max-width: 767px) {
    font-size: 1rem;
  }
`;

export const PriceItemHeadingSpan = styled.span`
  padding-right: 20px;
  color: #eeeeee;
  background-color: #1b1b1b;
`;

export const PriceItemCost = styled.span`
  width: 80px;
  text-align: right;
  color: #e3b873;
  background-color: #1b1b1b;
  word-spacing: 0.03rem;
  font-size: 1.2rem;
  @media (max-width: 767px) {
    font-size: 1rem;
  }
  &:after {
    content: "";
    position: absolute;
    right: 0;
    bottom: 20%;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 1px;
    border-bottom: 1px dashed #785028;
    @media (max-width: 460px) {
      border-bottom: 1px dashed transparent;
    }
  }
`;

export const PriceItemDescription = styled.p`
  padding-right: 40px;
  font-size: 1rem;
  @media (max-width: 767px) {
    font-size: 0.95rem;
  }
`;
