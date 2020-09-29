import React from "react";
import SEO from "../components/Seo";
import Layout from "../components/Layout";
import BrandHeader from "../components/Brand/BrandHeader";
import BrandDetails from "../components/Brand/BrandDetails";

type BrandPage = {
  location: any;
}

const BrandPage: React.FC<BrandPage> = ({ location }) => {
  const { brand, categoryName } = location.state;

  return (
    <Layout>
      <SEO title="Белый список" />
      <BrandHeader brand={brand} categoryName={categoryName} />
      <BrandDetails brand={brand} />
    </Layout>
  );
};

export default BrandPage;
