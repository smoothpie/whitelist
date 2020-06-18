import styled from "styled-components";
import Img from "gatsby-image";
import { StyledLinkA, SectionMarginBottom } from "../Typography";

export const TeamSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${SectionMarginBottom}
`;

export const EmployeePhoto = styled(Img)`
  width: 110px;
  height: 110px;
  margin: 1.2rem auto;
  border-radius: 50%;
  &:hover {
    filter: grayscale(50%);
    transition: all 0.3s ease;
  }
`;

export const EmployeeName = styled(StyledLinkA)``;

export const EmployeePosition = styled.p`
  margin: 1rem 0;
  font-size: 0.9rem;
  color: #cccccc;
`;
