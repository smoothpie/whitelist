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
    height: 60vh;
  }
  @media (max-width: 460px) {
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
`;

export const Title = styled(H2)`
  font-weight: 700;
  font-size: 2.4rem;
  color: #e3b873;
  margin-bottom: 2rem;
`;

export const TrainingInfo = styled.p`
  font-size: 1.5rem;
  line-height: 3rem;
  color: #eeeeee;
`;
