import React from "react";
import Head from "next/head";
import "@mantine/carousel/styles.css";
import { metaDescription } from "src/constants/landing";
import { FAQ } from "src/containers/Landing/FAQ";
import { Features } from "src/containers/Landing/Features";
import { HeroPreview } from "src/containers/Landing/HeroPreview";
import { HeroSection } from "src/containers/Landing/HeroSection";
import { Outro } from "src/containers/Landing/Outro";
import { PremiumVsFree } from "src/containers/Landing/PremiumVsFree";
import { Pricing } from "src/containers/Landing/Pricing";
import Layout from "src/layout/Layout";

export const HomePage = () => {
  return (
    <Layout>
      <Head>
        <title>JSON Crack | Best JSON Viewer, Formatter and Visualizer for everyone</title>
        <meta name="description" content={metaDescription} key="description" />
        <meta property="og:description" content={metaDescription} key="ogdescription" />
        <meta name="twitter:description" content={metaDescription} key="twdescription" />
      </Head>
      <HeroSection />
      <HeroPreview />
      <Features />
      <Pricing />
      <PremiumVsFree />
      <FAQ />
      <Outro />
    </Layout>
  );
};

export default HomePage;
