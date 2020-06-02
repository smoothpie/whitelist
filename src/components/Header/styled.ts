import styled from "styled-components";
import Logo from "gatsby-image";
import Instagram from "../../assets/images/svg/instagram.svg";
import Telegram from "../../assets/images/svg/telegram.svg";
import Yclients from "../../assets/images/svg/yclients.svg";

export const HeaderStyle = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  color: #e3b873;
  background: #1b1b1b;
  box-shadow: ${({ view }: any) =>
    view ? "none" : "0px 10px 50px rgba(0, 0, 0, 0.7)"};
  transition: all 0.3s ease-out;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
  padding: ${({ view }: any) => (view ? "15px 20px" : "10px 20px")};
  transition: all 0.3s ease-out;
  @media (max-width: 1600px) {
    padding: ${({ view }: any) => (view ? "15px 120px" : "10px 120px")};
  }
  @media (max-width: 768px) {
    padding: ${({ view }: any) => (view ? "15px 60px" : "10px 60px")};
  }
  @media (max-width: 460px) {
    padding: ${({ view }: any) => (view ? "15px 25px" : "10px 25px")};
  }
`;

export const ContactsP = styled.p`
  margin: 0;
  padding-bottom: 0.3rem;
`;

export const LogoWrapper = styled.div`
  color: #e3b873;
  text-decoration: none;
`;

export const StyledLogo = styled(Logo)`
  width: 195px;
  margin-right: 48px; // todo: maybe refactoring contacts
`;

// TODO: refactoring icons
export const StyledTelegram = styled(Telegram)`
  width: 20px;
  padding: 0.5rem 1rem;
  &:hover {
    color: #eeeeee;
    cursor: pointer;
    transition: all 0.5s ease;
  }
`;

export const StyledYclients = styled(Yclients)`
  width: 20px;
  padding: 0.5rem 1rem;
  &:hover {
    color: #eeeeee;
    cursor: pointer;
    transition: all 0.5s ease;
  }
`;

export const StyledInstagram = styled(Instagram)`
  width: ${props => props.wdth || "15px"};
  padding: 0.5rem 1rem;
  color: ${props => props.clr || "#e3b873"};
  &:hover {
    color: #eeeeee;
    cursor: pointer;
    transition: all 0.5s ease;
  }
`;

// export const StyledInstagram = styled(Instagram)`
//   width: ${props => (props.wdth ? "15px" : "30px")};
// `;
