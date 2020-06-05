import styled from "styled-components";
import Logo from "gatsby-image";
import Instagram from "../../assets/images/svg/instagram.svg";
import Telegram from "../../assets/images/svg/telegram.svg";
import Yclients from "../../assets/images/svg/yclients.svg";
import Phone from "../../assets/images/svg/phone.svg";
import { IView } from "../../interfaces";
import { Hover, StyledLinkA } from "../Typography";

export const HeaderStyle = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  width: 100%;
  color: #e3b873;
  background-color: ${({ view }: IView) => (view ? "transparent" : "#1b1b1b")};
  box-shadow: ${({ view }: IView) =>
    view ? "none" : "0px 10px 50px rgba(0, 0, 0, 0.7)"};
  transition: all 0.3s ease-out;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
  padding: ${({ view }: IView) => (view ? "15px 20px" : "10px 20px")};
  transition: all 0.3s ease-out;
  @media (max-width: 1600px) {
    padding: ${({ view }: IView) => (view ? "15px 120px" : "10px 120px")};
  }
  @media (max-width: 768px) {
    padding: ${({ view }: IView) => (view ? "15px 60px" : "10px 60px")};
  }
  @media (max-width: 460px) {
    padding: ${({ view }: IView) => (view ? "15px 25px" : "10px 25px")};
  }
`;

export const Block = styled.div``;

export const Tel = styled(StyledLinkA)`
  font-size: 1.3rem;
  padding-bottom: 0.3rem;
`;

export const ContactsP = styled.p`
  margin: 0;
  padding-bottom: 0.3rem;
  font-size: 0.9rem;
`;

export const LogoWrapper = styled.div`
  color: #e3b873;
  text-decoration: none;
`;

export const StyledLogo = styled(Logo)`
  width: 195px;
  margin-right: 3px;
`;

export const StyledTelegram = styled(Telegram)`
  width: 20px;
  padding: 0.5rem 0.9rem;
`;

export const StyledYclients = styled(Yclients)`
  width: 20px;
  padding: 0.5rem 0.9rem;
`;

export const StyledInstagram = styled(Instagram)`
  width: ${props => props.wdth || "15px"};
  padding: 0.5rem 0.9rem;
  color: ${props => props.clr || "#e3b873"};
  ${Hover}
`;

export const StyledPhone = styled(Phone)`
  width: 15px;
  padding-right: 0.5rem;
`;
