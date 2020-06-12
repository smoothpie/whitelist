import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";
import { H2, StyledLinkA } from "../Typography";

export const TrainingBg = styled(BackgroundImage)`
  width: 100%;
  height: 90vh;
  /* filter: brightness(70%); */ // todo: fix filter
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`;

export const TrainingSection = styled(TrainingBg)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 1024px) {
    height: 70vh;
  }
  @media (max-width: 768px) {
    height: 100vh;
  }
`;

export const TrainingTel = styled(StyledLinkA)`
  font-weight: 700;
  font-size: 2.3rem;
  margin-top: 2rem;
  @media (max-width: 1024px) {
    font-size: 2rem;
  }
  @media (max-width: 768px) {
    font-size: 1.7rem;
  }
`;

export const Title = styled(H2)`
  font-weight: 700;
  font-size: 2.4rem;
  color: #e3b873;
  margin-bottom: 2rem;
  max-width: 700px;
  text-align: center;
  line-height: 3.5rem;
  @media (max-width: 1024px) {
    max-width: 500px;
  }
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  @media (max-width: 460px) {
    font-size: 1.6rem;
    line-height: 2.5rem;
  }
`;

export const TrainingInfo = styled.p`
  font-size: 1.5rem;
  line-height: 3rem;
  color: #eeeeee;
  text-align: center;
  @media (max-width: 768px) {
    max-width: 500px;
    font-size: 1.2rem;
    line-height: 2.4rem;
  }
  @media (max-width: 460px) {
    font-size: 1.1rem;
  }
`;
