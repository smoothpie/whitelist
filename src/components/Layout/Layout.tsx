import React from "react";
import "normalize.css";
import Header from "../Header";
import { LayoutContainer, Main, Footer } from "./styled";
import FooterSection from "../FooterSection";

const Layout: React.FC = ({ children }: any) => {
  return (
    <LayoutContainer>
      <Header />
      <Main
      // style={{
      //   margin: `0 auto`
      //   maxWidth: 1440
      // }}
      >
        {children}
      </Main>
      <FooterSection />
      <Footer>© {new Date().getFullYear()}, 911barber.by</Footer>
    </LayoutContainer>
  );
};

export default Layout;
