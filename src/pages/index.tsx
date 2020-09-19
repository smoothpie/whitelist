import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import WhiteList from "../components/WhiteList";

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Белый список" />
    <WhiteList />
  </Layout>
);

export default IndexPage;
