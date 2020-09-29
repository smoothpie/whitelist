import styled from "styled-components";
import { IView } from "../../interfaces";

export const HeaderStyle = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  background-color: ${({ view }: IView) => (view ? "transparent" : "#cd0000")};
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
  @media (max-width: 1023px) {
    padding: ${({ view }: IView) => (view ? "15px 60px" : "10px 60px")};
  }
  @media (max-width: 960px) {
    padding: ${({ view }: IView) => (view ? "15px 35px" : "10px 35px")};
  }
  @media (max-width: 460px) {
    padding: ${({ view }: IView) => (view ? "15px 20px" : "10px 20px")};
  }
`;
