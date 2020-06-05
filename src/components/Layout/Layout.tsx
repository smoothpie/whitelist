import React from "react";
import "normalize.css";
import "./fonts.scss";
import Header from "../Header";
import { LayoutContainer, Main, Footer } from "./styled";
import FooterSection from "../FooterSection";

const Layout: React.FC = ({ children }: any) => {
  return (
    <LayoutContainer>
      <Header />
      <Main>{children}</Main>
      <FooterSection />
      <Footer>© {new Date().getFullYear()}, 911barber.by</Footer>
    </LayoutContainer>
  );
};

export default Layout;
