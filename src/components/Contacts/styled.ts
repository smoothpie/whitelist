import styled from "styled-components";
import { StyledLinkA } from "../Typography";
import Сlock from "../../assets/images/svg/clock.svg";
import MapMarker from "../../assets/images/svg/map-marker.svg";
import MobilePhone from "../../assets/images/svg/mobile-phone.svg";

const iconSize = `
  width: 35px;
  height: 35px;

  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
  }
`;

export const ContactsSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #e3b873;
  margin: 60px auto;
  @media (max-width: 1024px) {
    margin: 50px 60px;
  }
  @media (max-width: 960px) {
    margin: 40px 35px;
  }
  @media (max-width: 460px) {
    flex-direction: column;
  }
`;

export const ContactsBlock = styled(StyledLinkA)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  @media (max-width: 768px) {
    margin-bottom: 25px;
  }
`;

export const ContactsIcon = styled.div`
  margin-bottom: 0.6rem;
`;

export const StyledСlock = styled(Сlock)`
  ${iconSize}
`;

export const StyledMapMarker = styled(MapMarker)`
  ${iconSize}
`;

export const StyledMobilePhone = styled(MobilePhone)`
  ${iconSize}
`;

export const ContactsPlace = styled.p`
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 5px;
  @media (max-width: 1024px) {
    font-size: 1rem;
  }
`;

export const ContactsP = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  @media (max-width: 1024px) {
    font-size: 1.2rem;
  }
`;
