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
  margin-top: 2rem;
`;

export const CosmeticsName = styled.p`
  line-height: 2.5rem;
`;

export const CosmeticsCard = styled.div`
  width: 550px;
  min-height: 700px;
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
  display: inline-block;
  margin-top: 15px;
  font-family: "Manrope-Regular", sans-serif;
  font-size: 1rem;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  border: 2px solid #e3b873;
  color: #eeeeee;
  padding: 0 30px;
`;
