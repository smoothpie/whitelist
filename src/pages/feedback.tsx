import React from "react";
import SEO from "../components/Seo";
import { H2, H3 } from "../components/Typography";
import Layout from "../components/Layout";
import { PageContent } from "../components/Layout/styled";
import FeedbackForm from "../components/FeedbackForm";

const FeedbackPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Белый список" />
      <PageContent>
        <H2>ФОРМА ОБРАТНОЙ СВЯЗИ</H2>
        <H3>
          Добавляйте организации, которые нуждаются в поддержке, а также свои
          дополнения и замечания по улучшению каталога.
        </H3>
        <FeedbackForm />
      </PageContent>
    </Layout>
  );
};

export default FeedbackPage;
