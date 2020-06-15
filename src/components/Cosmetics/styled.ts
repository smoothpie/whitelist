import styled from "styled-components";
import Img from "gatsby-image";

export const CosmeticsSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
`;

export const CosmeticsImg = styled(Img)`
  &:hover {
    filter: grayscale(50%);
    transition: all 0.3s ease;
  }
`;

export const Stars = styled.p`
  margin-top: 1.6rem;
`;

export const CosmeticsName = styled.p`
  line-height: 2.5rem;
`;

export const CosmeticsCard = styled.div`
  width: 550px;
  min-height: 680px;
  padding: 25px;
  outline: 1px solid #444444;
  text-align: center;
  margin: 0 15px;
  @media (max-width: 1200px) {
    width: 460px;
  }
  @media (max-width: 1023px) {
    width: 60%;
    margin: 15px 0;
  }
  @media (max-width: 767px) {
    width: 80%;
    min-height: 360px;
  }
`;

export const CosmeticsButton = styled.a`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 230px;
  height: 45px;
  margin: 15px auto 0;
  text-transform: uppercase;
  letter-spacing: 0.06rem;
  font-size: 0.8rem;
  z-index: 5;
  color: #e3b873;
  border: 1px solid #e3b873;
  text-decoration: none;
  transition: 0.4s all ease;
  &:before {
    position: absolute;
    content: "";
    width: 0;
    height: 45px;
    transition: 0.4s all ease;
    background-color: #e3b873;
    left: 0;
    z-index: -1;
  }
  &:hover {
    color: white;
    &:before {
      width: 100%;
      transition: 0.4s all ease;
    }
  }
`;
