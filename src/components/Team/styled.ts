import styled from "styled-components";
import Img from "gatsby-image";
import { StyledLinkA } from "../Typography";

export const TeamSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TeamDescription = styled.p`
  font-size: 1.1rem;
  margin: 1rem 0 4rem;
  color: gray;
  text-align: center;
  width: 90%;
  @media (max-width: 460px) {
    width: 80%;
    font-size: 0.95rem;
    margin: 1rem 0 2rem;
  }
`;

export const TeamContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const TeamItem = styled.div`
  width: 360px;
  min-height: 488px;
  padding: 25px;
  outline: 1px solid #444444;
  text-align: center;
  margin: 0 15px;
  @media (max-width: 1200px) {
    width: 300px;
  }
  @media (max-width: 1024px) {
    width: 80%;
    min-height: 360px;
    margin: 15px 0;
  }
`;

export const EmployeePhoto = styled(Img)`
  width: 110px;
  height: 110px;
  margin: 1.2rem auto;
  border-radius: 50%;
  &:hover {
    filter: grayscale(50%);
  }
`;

export const EmployeeName = styled(StyledLinkA)``;

export const EmployeePosition = styled.p`
  margin: 1rem 0;
  font-size: 0.9rem;
  color: #cccccc;
`;

export const EmployeeInfo = styled.p`
  color: gray;
  font-size: 0.95rem;
  line-height: 1.5rem;
`;
