import React from "react";
import "normalize.css";
import Header from "../Header";
import { LayoutContainer } from "./styled";

const Layout: React.FC = ({ children }: any) => {
  return (
    <LayoutContainer>
      <Header />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1440,
          padding: `0 1.0875rem 1.45rem`
        }}
      >
        <main
          // todo: FIX HEIGHT
          style={{
            margin: `0 auto`,
            maxWidth: 1440,
            height: 1500
          }}
        >
          {children}
        </main>
        <footer>© {new Date().getFullYear()}, 911barber</footer>
      </div>
    </LayoutContainer>
  );
};

export default Layout;
