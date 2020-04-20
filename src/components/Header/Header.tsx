/** @jsx jsx */
import { jsx, Button, useColorMode } from "theme-ui";
import * as React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import TestSVG from "../../assets/images/svg/test.svg";
import TestSVG2 from "../../assets/images/svg/test2.svg";
import TestSVG3 from "../../assets/images/svg/test3.svg";

const Header: React.FunctionComponent<any> = ({ siteTitle }: any) => {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <header
      sx={{
        backgroundColor: ["primary", "secondary", "thirdly"],
        color: "text",
        marginBottom: [5, 6, 7],
      }}
    >
      <div
        style={{
          margin: "0 auto",
          maxWidth: 960,
          padding: "1.45rem 1.0875rem",
        }}
      >
        <h1 sx={{ m: "100px" }}>
          <Link
            to="/"
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <p>WHAT IS LOVE BABY DON`T HURT ME</p>
        <Button
          variant="primary"
          onClick={() => {
            setColorMode(colorMode === "default" ? "dark" : "default");
          }}
        >
          Toggle {colorMode === "default" ? "Dark" : "Light"}
        </Button>
        <div>
          <TestSVG style={{ width: "100px", height: "100px" }} />
          <TestSVG2 style={{ width: "100px", height: "100px" }} />
          <TestSVG3 style={{ width: "100px", height: "100px" }} />
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: "",
};

export default Header;
