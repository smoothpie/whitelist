import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import Button from "../Button";
import AddIcon from "../../assets/images/svg/add.svg";
import CloseIcon from "../../assets/images/svg/close.svg";
import Logo from "../../assets/images/svg/logo.svg";
import { HeaderStyle, HeaderContainer } from "./styled";

const Header: React.FC<any> = ({ location }) => {
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

  const isMobile = window.innerWidth < 768;

  const isFeedbackForm = window.location.pathname === '/feedback';
  const isBrandPage = window.location.pathname.includes('/brand');

  return (
    <HeaderStyle view={!isScroll} style={isBrandPage && !isScroll ? { backgroundColor: 'white' } : {}}>
      <HeaderContainer view={!isScroll}>
        <Link to="/"><Logo /></Link>
        {!isFeedbackForm ? (
         <Link to="/feedback">
            {isMobile ? (
              <AddIcon />
            ) : (
              <Button>Добавить компанию</Button>
            )}
          </Link>
        ) : (
          <Link to="/">
            <CloseIcon />
          </Link>
        )}
      </HeaderContainer>
    </HeaderStyle>
  );
};

export default Header;
