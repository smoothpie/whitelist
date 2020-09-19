import styled from "styled-components";
import { FlexRowCenterCenter } from "../Typography";

export const FooterContainer = styled.footer`
  ${FlexRowCenterCenter}
  margin: 0 auto;
  width: 60%;
  height: 80px;
  @media (max-width: 1600px) {
    width: 80%;
  }
  @media (max-width: 767px) {
    justify-content: center;
  }
`;

export const Copyright = styled.div`
  font-size: 0.9rem;
  color: #cd0000;
`;
