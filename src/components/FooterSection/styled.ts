import styled from "styled-components";
import Instagram from "../../assets/images/svg/instagram.svg";
import Telegram from "../../assets/images/svg/telegram.svg";
import Yclients from "../../assets/images/svg/yclients.svg";
import { Hover } from "../Typography";

const IconSize = `
  width: 28px;
  height: 28px;
`;

export const FooterSectionStyle = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Map = styled.div`
  width: 90vw;
  filter: grayscale(100%);
  @media (max-width: 767px) {
    display: none;
  }
  &:hover {
    filter: none;
    transition: all 0.3s ease;
  }
`;

export const StyledIframe = styled.iframe`
  width: 100%;
  height: 360px;
  border: none;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterIcon = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  margin: 50px 10px;
  color: #e3b873;
  background-color: #272727;
  border-radius: 50%;
  text-decoration: none;
  ${Hover}
`;

export const StyledTelegram = styled(Telegram)`
  ${IconSize}
`;

export const StyledYclients = styled(Yclients)`
  ${IconSize}
`;

export const StyledInstagram = styled(Instagram)`
  ${IconSize}
  color: ${props => props.clr || "#e3b873"};
  ${Hover}
`;
