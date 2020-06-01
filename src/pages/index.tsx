import React from "react";
import { Link } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/Seo";

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: "300px", marginBottom: "1.45rem" }}></div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
