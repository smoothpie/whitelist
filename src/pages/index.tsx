import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import WhiteList from "../components/WhiteList";

const IndexPage: React.FC = () => {
  const {
    whiteListApi: { categories }
  } = useStaticQuery(graphql`
    query {
      whiteListApi {
        categories {
          brand {
            _id
            description
            location {
              lat
              lng
              address
            }
            tag {
              name
            }
            name
            reason
          }
          name
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Белый список" />
      <WhiteList categories={categories} />
    </Layout>
  );
};

export default IndexPage;
