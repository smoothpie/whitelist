import React from "react";
// import { Link } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import MainSlider from "../components/MainSlider";
import Team from "../components/Team";
import Training from "../components/Training";
import PriceList from "../components/PriceList";
import InstagramGallery from "../components/InstagramGallery";
import Cosmetics from "../components/Cosmetics";
import Reviews from "../components/Reviews";
import Contacts from "../components/Contacts";

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" />
    <MainSlider />
    <Team />
    <Training />
    <PriceList />
    <InstagramGallery />
    <Cosmetics />
    <Reviews />
    <Contacts />
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
);

export default IndexPage;
