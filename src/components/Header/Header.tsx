import React, { useState, useEffect } from "react";
import Button from "../Button";
import { HeaderStyle, HeaderContainer } from "./styled";

const Header: React.FC<any> = () => {
  const [isScroll, setScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY >= 30 && !isScroll) {
        setScroll(true);
      }
      if (currentScrollY < 30 && isScroll) {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScroll]);

  return (
    <HeaderStyle view={!isScroll}>
      <HeaderContainer view={!isScroll}>
        <Button>Добавить компанию</Button>
      </HeaderContainer>
    </HeaderStyle>
  );
};

export default Header;
