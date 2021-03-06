import React from "react";
import "./fonts.scss";
import "../Typography/normalize.scss";
import Header from "../Header";
import { LayoutContainer, Main } from "./styled";
import Footer from "../Footer";

const Layout: React.FC = ({ children }: any) => {
  return (
    <LayoutContainer>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;
