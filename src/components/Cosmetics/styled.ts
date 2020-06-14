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
  @media (max-width: 1024px) {
    width: 60%;
    margin: 15px 0;
  }
  @media (max-width: 768px) {
    width: 80%;
    min-height: 360px;
  }
`;
