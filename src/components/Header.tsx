/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import TestSVG from "../assets/images/svg/test.svg";
import TestSVG2 from "../assets/images/svg/test2.svg";
import TestSVG3 from "../assets/images/svg/test3.svg";

const Header = ({ siteTitle }: any) => (
  <header
    style={{
      background: "rebeccapurple",
      marginBottom: "1.45rem",
    }}
  >
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "1.45rem 1.0875rem",
      }}
    >
      <h1 style={{ margin: 0 }}>
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
      <div>
        <TestSVG style={{ width: "100px", height: "100px" }} />
        <TestSVG2 style={{ width: "100px", height: "100px" }} />
        <TestSVG3 style={{ width: "100px", height: "100px" }} />
      </div>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: "",
};

export default Header;
