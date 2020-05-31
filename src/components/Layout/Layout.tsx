import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import "normalize.css";
import Header from "../Header";

const Layout: React.FC = ({ children }: any) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1440,
          padding: `0 1.0875rem 1.45rem`
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()},{` `}
          <a href="/" target="blank_">
            911barber
          </a>
        </footer>
      </div>
    </>
  );
};

export default Layout;
