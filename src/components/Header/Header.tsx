import React, { useState, useEffect } from "react";
import Button from "../Button";
import { HeaderStyle, HeaderContainer } from "./styled";
import { Link } from "gatsby";

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
        <Link to="/feedback">
          <Button>Добавить компанию</Button>
        </Link>
      </HeaderContainer>
    </HeaderStyle>
  );
};

export default Header;
