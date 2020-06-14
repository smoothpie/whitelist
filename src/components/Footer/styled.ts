import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  width: 85%;
  height: 80px;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const Copyright = styled.div`
  font-size: 0.9rem;
`;

export const Navigation = styled.nav`
  width: 45%;
  font-size: 0.9rem;
  @media (max-width: 1200px) {
    width: 70%;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  text-transform: uppercase;
  color: #e3b873;
`;

export const NavItem = styled.li`
  word-spacing: 0.3rem;
`;
