import React from "react";
import { FooterContainer, Copyright } from "./styled";

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Copyright>© {new Date().getFullYear()}, Белый список</Copyright>
    </FooterContainer>
  );
};

export default Footer;
