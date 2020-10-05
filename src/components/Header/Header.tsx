import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import AddIcon from "../../assets/images/svg/add.svg";
import CloseIcon from "../../assets/images/svg/close.svg";
import Logo from "../../assets/images/svg/logo.svg";
import { HeaderStyle, HeaderContainer, ScrollingAddIcon } from "./styled";

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

  const isFeedbackForm =
    typeof window !== "undefined" && window.location.pathname === "/feedback";
  const isBrandPage =
    typeof window !== "undefined" &&
    window.location.pathname.includes("/brand");

  return (
    <HeaderStyle
      view={!isScroll}
      style={isBrandPage && !isScroll ? { backgroundColor: "white" } : {}}
    >
      <HeaderContainer view={!isScroll}>
        <Link to="/">
          <Logo />
        </Link>
        {!isFeedbackForm ? (
          <Link to="/feedback">
            {isScroll ? <ScrollingAddIcon /> : <AddIcon />}
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
